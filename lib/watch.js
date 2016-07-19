/**
 * etcd watch apis
 * @license Apache License 2
 */

var EventEmitter = require('events');
var util = require('util');
var _ = require('lodash');
var debug = require('debug')('etcdv3:watcher');
var pb = require('./pb/rpc_pb');

module.exports = Watch;

/**
 * @param services.WatchClient conn
 */
function Watch(conn){
    this.conn = conn;
    debug('new watch instance');
}

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
 */
Watch.prototype.watch = function(){
    return _watch(this,'watch');
};

//create a Watcher instance
function createWatcher(agent,key,end){
    var create_request = new pb.WatchCreateRequest();
    var request = new pb.WatchRequest();
    var stream = null;
    create_request.setKey(key);
    if(end){
        create_request.setRangeEnd(end);
    }
    request.setCreateRequest(create_request);
    stream = agent.watch();
    return new Watcher(stream,request);
}

/**
 * create a simple watch request
 * @param string key
 * @param string end range end
 * @return Watcher instance
 */
Watch.prototype.create = function (key,end) {
    return createWatcher(this,key,end);
};

/**
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

};

/**
 * watch stream
 * all events
 * created  - after create request
 * canceled - after cancel request
 * events   - watch response
 * close    - stream close
 * error    - stream errors
 * @param DuplexStream stream
 * @param pb.WatchRequest request
 */
function Watcher(stream,request){
    EventEmitter.call(this);
    var self = this;
    this.id = null;
    this.request = request;
    this.cleanFns = [];
    this.stream = stream;
    function onData(response){
        self.id = response.getWatchId();
        debug('watcher %s ondata',self.id);
        if(response.getCreated()){
            self.emit('create',self.id);
            return;
        }
        if(response.getCanceled()){
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
        self.stream.removeListener('error',onError);
    });
}

util.inherits(Watcher,EventEmitter);

/**
 * start watching
 */
Watcher.prototype.start = function(){
    _write(this,this.request);
}

function _write(w,data){
    function write(){
        return w.stream.write(data);
    }
    if(!write()){
        debug('watcher %s drain',w.id);
        w.stream.once('drain',write);
    }
}

/**
 * cancel watching
 */
Watcher.prototype.cancel = function(){
    if(!this.stream.writable){
        this.emit('error',new Error('this stream not writeable'));
        return;
    }
    var self = this;
    if(this.id ===null){
        this.emit('error',new Error('this watcher not started'));
        return;
    }
    _write(this,createCancelRequest(this.id));
};

/**
 * close
 */
Watcher.prototype.close = function(){
    this.stream.cancel();
    this.cleanFns.forEach(function(fn) {
        fn();
    });
    this.request = null;
    this.stream = null;
};

