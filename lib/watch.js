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

module.exports = {
    Watch:Watch,
    Watcher:Watcher
};

/**
 * @param services.WatchClient conn
 */
function Watch(conn){
    Service.call(this);
    this.name = 'watch';
    this.setConn(conn);
    debug('new watch instance');
}

Watch.prototype.setConn = function(conn){
    this.conn = conn;
};
/**
 * do request
 */
function _watch(agent){
    debug('do watch');
    return agent.conn.watch();
}

/**
 * watch request
 * @return {DuplexStream}
 * this not stable,use this.create instead
 */
Watch.prototype.watch = function(){
    return _watch(this,'watch');
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
 * create a simple watch request
 * @param {string|pb.WatchRequest} key
 * @param {string} end range end It be ignored if key is a object
 * @param {object} {
 *      filters:[]
 *      rev:0
 * }
 * @return Watcher instance
 */
Watch.prototype.create = function (key,end,opts) {
    var request = _.isObject(key) ? key : createRequest(key,end,opts);
    var watcher = new Watcher(this,request);
    var self = this;
    if(this.ready){
        watcher.init();
        return watcher;
    }
    // not ready
    var fn = function(){
        if(!this.enableOfflineQueue){
            watcher.emit('error',new Error('watch service not ready'));
            return;
        }
        //push to queue
        this.offlineQueue.push(function(){
            watcher.init();
        });
    };
    process.nextTick(fn.bind(this));
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
function Watcher(w,request){
    EventEmitter.call(this);
    this.w = w;
    this.id = null;
    this.stream = null;
    this.cleanFns = [];
    this.request = request;
    //pre write request
    this.waitQueue = [];
}

util.inherits(Watcher,EventEmitter);

/**
 * init watcher
 */
Watcher.prototype.init = function(){
    var self = this;
    this.stream = this.w.watch();
    function onData(response){
        self.id = response.getWatchId();
        if(response.getCreated()){
            debug('watcher-%s created',self.id);
            self.emit('create',self.id);
            return;
        }
        if(response.getCanceled()){
            debug('watcher-%s canceled',self.id);
            self.emit('cancel',self.id);
            return;
        }
        var events = response.getEventsList();
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
        //uncatch error
        self.stream.removeListener('error',onError);
    });

    _inited(this);
};

/**
 * start watching
 */
Watcher.prototype.start = function(){
    _write(this,this.request);
};

Watcher.prototype.reconnect = function(){

};

//write cached request
function _inited(agent) {
    var request = null;
    while (agent.waitQueue.length>0) {
        _write(agent,agent.waitQueue.shift());
    }
}

function _write(agent,request){
    //not ready
    if(!agent.stream){
        if(agent.w.highWaterMark<agent.waitQueue.length){
            debug('wathcer-%s waitQueue overload,hwm:%s',agent.id,agent.w.highWaterMark);
            return;
        }
        agent.waitQueue.push(request);
        debug('watcher-%s cached request,current length:%d',agent.id,agent.waitQueue.length);
    }else{
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
        var fn = null;
        while (self.cleanFns.length>0) {
            fn = self.cleanFns.shift();
            fn();
        }
        self.id = '';
        self.request = null;
        self.stream = null;
        self.waitQueue = [];
    })
    this.stream.end();
};

