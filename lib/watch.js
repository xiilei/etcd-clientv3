/**
 * etcd watch apis
 * @license Apache License 2
 */
var EventEmitter = require('events');
var util = require('util');
var _ = require('lodash');
var debug = require('debug')('etcdv3:watcher');
var pb = require('./pb/rpc_pb');
var service = require('./_service');
var Service = service.Service;

module.exports = Watch;

/**
 * @param services.WatchClient conn
 */
function Watch(conn){
    Service.call(this,conn);
    this.name = 'watch';
    debug('new watch instance');
}

util.inherits(Watch,Service);

/**
 * watch request
 * @param {function} callback with stream
 * this not stable,use this.create instead
 */
Watch.prototype.watch = function(callback){
    service.doStreamRequest(this,'watch',callback);
};

//create a Watcher instance
function createRequest(key,end,opts){
    opts = opts || {};
    var create_request = new pb.WatchCreateRequest();
    var request = new pb.WatchRequest();
    var stream = null;
    create_request.setKey(key);
    if(Array.isArray(opts.filters)){
        debug('set filters %s',opts.filters);
        create_request.setFiltersList(opts.filters);
    }
    if(opts.rev){
        create_request.setStartRevision(opts.rev);
    }
    // create_request.setProgressNotify(true);
    service.setRequestEnd(create_request,key,end);
    request.setCreateRequest(create_request);
    return request;
}

/**
 * create a watcher
 * @param {string|pb.WatchRequest} key
 * @param {string} end range end It be ignored if key is a object
 * @param {array}    [options.filters] which not be watched
 * @param {number}   [options.rev] start revision
 * @param {boolean}  [options.enableCompactRetry:true] - By default,re-create when the revision has been compacted
 * @return Watcher instance
 */
Watch.prototype.create = function (key,end,opts) {
    opts = _.defaults(opts||{},{enableCompactRetry:true,highWaterMark:10});
    var request = _.isObject(key) ? key : createRequest(key,end,opts);
    var watcher = new Watcher(request);
    var self = this;
    watcher.highWaterMark = opts.highWaterMark;

    watcher.enableCompactRetry = opts.enableCompactRetry;
    var fn = function(){
        service.doStreamRequest(self,'watch',function(err,stream,re){
            if(err){
                watcher.emit('error',err);
                return;
            }
            re ? watcher.reconnect(stream) : watcher.init(stream);
        });
    };
    process.nextTick(fn);
    return watcher;
};

/**
 * @param {number} id watch_id
 * @return new pb.CancelWatchRequest
 */
function createCancelRequest(id){
    var cancel_request = new pb.WatchCancelRequest();
    var request = new pb.WatchRequest();
    cancel_request.setWatchId(id);
    request.setCancelRequest(cancel_request);
    return request;
}

/**
 * close
 * call by etcdv3.Client
 */
Watch.prototype.onclose = function(){
    debug('close');
};

/**
 * A reusable stream watcher
 * all events
 * create   - after create response
 * cancele  - after cancel response
 * events   - watch response
 * close    - stream close
 * error    - stream errors
 * @param {Watch} w
 * @param {DuplexStream} stream
 */
function Watcher(request){
    EventEmitter.call(this);
    this.id = null;
    this.stream = null;
    this.cleanFns = [];
    this.request = request;
    //pre write request
    this.waitQueue = [];
    this.highWaterMark  = 10;
    this.retry = false;
    this.started = false;
    this.enableCompactRetry=true;
}

util.inherits(Watcher,EventEmitter);

/**
 * init watcher
 */
Watcher.prototype.init = function(stream){
    var self = this;
    debug('watcher-%s init',this.id);
    this.stream = stream;
    function onData(response){
        self.id = response.getWatchId();
        if(response.getCreated()){
            var event = self.retry ? 're-create' : 'create';
            debug('watcher-%s %s',self.id,event);
            self.emit(event,self.id);
            return;
        }
        if(response.getCanceled()){
            var event = self.retry ? 're-cancel' : 'cancel';
            debug('watcher-%s %s',self.id,event);
            self.emit(event,self.id);
            return;
        }
        if(self.enableCompactRetry && !self.checkResponse(response)){
            return;
        }
        var events = response.getEventsList();
        if(events.length==0){
            //todo
        }
        if(debug.enabled){
            debug('watcher-%s got events,length:%d,compact_revision:%s',
                self.id,events.length,response.getCompactRevision());
        }
        //events
        self.emit('events', _.reduce(events,function(arr,event){
            var kv = event.getKv();
            arr.push({type:event.getType(),key:kv.getKey(),value:kv.getValue()});
            return arr;
        },[]));
    }
    function onEnd(){
        debug('watcher-%s end',self.id);
        self.emit('end');
    }
    function onError(err){
        self.emit('error',err);
    }
    this.stream.on('data',onData);
    this.stream.once('end',onEnd);
    this.stream.on('error',onError);
    this.cleanFns.push(function(){
        debug('watcher-%s cleanup',self.id);
        self.stream.removeListener('data',onData);
        self.stream.removeListener('end',onEnd);
        //Uncaught error
        self.stream.removeListener('error',onError);
    });

    _inited(this);
};

/**
 * make sure the WatchResponse is right
 * @param {pb.WatchResponse} response
 */
Watcher.prototype.checkResponse = function(response){
    var compact = response.getCompactRevision();
    if(compact>0){
        //required revision has been compacted,
        //have to cancel watching and start with start_revision again
        this.retry = true;
        this.cancel();
        this.request.getCreateRequest().setStartRevision(compact);
        this.once('re-cancel',function(){
            this.start();
        });
        this.once('re-create',function(){
            this.retry = false;
        });
        debug('watcher-%s required revision %s has been compacted,try-again',this.id,compact);
        return false;
    }
    return true;
};

/**
 * set stream
 */
Watcher.prototype.reconnect = function(stream){
    debug('watcher-%s reconnect',this.id);
    cleanup(this);
    this.init(stream);
    if(this.started){
        this.start();
    }
};

/**
 * start watching
 */
Watcher.prototype.start = function(){
    this.started = true;
    _write(this,this.request);
};


//write cached request
function _inited(agent) {
    while (agent.waitQueue.length>0) {
        _write(agent,agent.waitQueue.shift());
    }
}

function _write(agent,request){
    //not ready
    if(!agent.stream){
        if(agent.highWaterMark<agent.waitQueue.length){
            agent.emit('error',new Error('wathcer-%s waitQueue overload,hwm:%s',agent.id,agent.highWaterMark));
            return;
        }
        agent.waitQueue.push(request);
        debug('watcher-%s cached request,current length:%d',agent.id,agent.waitQueue.length);
    }else{
        debug('write request');
        agent.stream.write(request);
    }
}


/**
 * cancel watching
 */
Watcher.prototype.cancel = function(){
    if(!this.stream || !this.stream.writable){
        this.emit('error',new Error('this stream not writeable'));
        return;
    }
    var self = this;
    if(this.id === null){
        this.emit('error',new Error('this watcher not started'));
        return;
    }
    _write(this,createCancelRequest(this.id));
};

/**
 * cancel stream,Cancelled Error will be emitted
 */
Watcher.prototype.cancelStream = function(){
    if(this.stream){
        this.stream.cancel();
    }
};

function cleanup(agent){
    var fn = null;
    while (agent.cleanFns.length>0) {
        fn = agent.cleanFns.shift();
        fn();
    }
    agent.id = '';
    agent.stream = null;
}

/**
 * close
 */
Watcher.prototype.close = function(){
    if(!this.stream){
        return;
    }
    // this.stream.cancel();
    var self = this;
    this.stream.once('end',function(){
        cleanup(self);
        self.request = null;
        self.waitQueue = [];
    })
    this.stream.end();
};

