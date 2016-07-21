/**
 * etcd watch apis
 * @license Apache License 2
 */
var EventEmitter = require('events');
var util = require('util');
var _ = require('lodash');
var debug = require('debug')('etcdv3:watcher');
var pb = require('./pb/rpc_pb');
var Service = require('./_service');

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
 * @return DuplexStream
 * this not stable,use this.create instead
 */
Watch.prototype.watch = function(){
    return _watch(this,'watch');
};

//create a Watcher instance
function createRequest(key,end){
    var create_request = new pb.WatchCreateRequest();
    var request = new pb.WatchRequest();
    var stream = null;
    create_request.setKey(key);
    if(end){
        create_request.setRangeEnd(end);
    }
    request.setCreateRequest(create_request);
    return request;
}

/**
 * create a simple watch request
 * @param string key | pb.WatchRequest
 * @param string end range end It be ignored if key is a object
 * @return Watcher instance
 */
Watch.prototype.create = function (key,end) {
    var request = _.isObject(key) ? key : createRequest(key,end);
    var watcher = new Watcher(request);
    var self = this;
    if(this.ready){
        watcher.init(this.watch());
        return watcher;
    }
    // not ready
    var fn = function(){
        var self = this;
        if(!this.enableOfflineQueue){
            watcher.emit('error',new Error('watch service not ready'));
            return;
        }
        //push to queue
        this.offlineQueue.push(function(){
            watcher.init(self.watch());
        });
    };
    process.nextTick(function(){
        self.offlineQueue.push(fn.bind(self));
    });
    return watcher;
};

/**
 * @param number id watch_id
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
Watch.prototype.close = function(){
    debug('close');
};

/**
 * watch stream
 * all events
 * created  - after create request
 * canceled - after cancel request
 * events   - watch response
 * close    - stream close
 * error    - stream errors
 * @param pb.WatchRequest request
 * @param DuplexStream stream
 */
function Watcher(request,stream){
    EventEmitter.call(this);
    var self = this;
    this.id = null;
    this.stream = null;
    this.cleanFns = [];
    this.request = request;
    if(stream){
        this.init(stream);
    }
}

util.inherits(Watcher,EventEmitter);

/**
 * init watcher
 */
Watcher.prototype.init = function(stream){
    var self = this;
    this.stream = stream;
    function onData(response){
        self.id = response.getWatchId();
        debug('watcher %s ondata',self.id);
        if(response.getCreated()){
            debug('watcher %s created',self.id);
            self.emit('create',self.id);
            return;
        }
        if(response.getCanceled()){
            debug('watcher %s canceled',self.id);
            self.emit('cancel',self.id);
            return;
        }
        //events
        self.emit('events', _.reduce(response.getEventsList(),function(arr,event){
            var kv = event.getKv();
            arr.push({type:event.getType(),key:kv.getKey(),value:kv.getValue()});
            return arr;
        },[]));
    }
    function onEnd(){
        debug('watcher %s end',self.id);
        self.emit('end');
    }
    function onError(err){
        self.emit('error',err);
    }
    this.stream.on('data',onData);
    this.stream.once('end',onEnd);
    this.stream.on('error',onError);
    this.cleanFns.push(function(){
        debug('watcher %s cleanup',self.id);
        self.stream.removeListener('data',onData);
        self.stream.removeListener('end',onEnd);
        //uncatch error
        self.stream.removeListener('error',onError);
    });
    this.emit('init');
};

/**
 * start watching
 */
Watcher.prototype.start = function(){
    _write(this,this.request);
}

function _write(w,request){
    //not ready
    if(!w.stream){
        w.once('init',function(){
            this.stream.write(request);
        });
    }else{
        w.stream.write(request);
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
    this.stream.end();
    // this.stream.cancel();
    var self = this;
    this.stream.once('end',function(){
        self.cleanFns.forEach(function(fn) {
            fn();
        });
        self.id = '';
        self.request = null;
        self.stream = null;
    })
};

