/**
 * A abstract client with balancer
 * @license Apache License 2
 */

var grpc = require('grpc');
var _ = require('lodash');
var debug = require('debug')('etcdv3:client');
var services = require('./pb/rpc_grpc_pb');
var Balancer = require('./balancer');
var KV = require('./kv');
var watcher = require('./watch');


module.exports = Client;

/**
 * @param array eps endpoints
 */
function Client(eps,opts){
    this.opts = _.defaults({},opts);
    if(!this.opts.credentials){
        this.opts.credentials = grpc.credentials.createInsecure();
    }
    this.balancer = new Balancer(eps);
    this.services = {};
}

/**
 * make service ready to go !
 * @param {object} agent
 * @param {pb.*Client} conn
 */
function makeServiceReady(agent,conn,opts){
    opts = _.defaults({
        timeout:10000,//timeout ms
        enableOfflineQueue:true,//
        //override
        ready:function (err) {
           if(err) throw err;
        }
    },opts);
    var deadline = Date.now()+opts.timeout;
    var readyFn = opts.ready;
    agent.enableOfflineQueue = opts.enableOfflineQueue;
    grpc.waitForClientReady(conn,deadline,function(err){
        if(err){
            readyFn.call(agent,err);
            return;
        }
        var fn = null;
        debug("service %s is ready",agent.name)
        agent.ready = true;
        readyFn.call(agent,null);
        if(!agent.enableOfflineQueue){
            return;
        }
        while(agent.offlineQueue.length>0){
            fn = agent.offlineQueue.shift();
            fn();
        }
    });
    return agent;
}

function reconnect(){

}

/**
 * get a KV instance
 * @param {object} opts
 */
Client.prototype.kv = function(opts){
    if(this.services['kv']){
        return this.services['kv'];
    }
    opts = _.defaults(this.opts,opts);
    var conn = new services.KVClient(this.balancer.get(),this.opts.credentials);
    var kv = makeServiceReady(new KV(conn),conn,opts);
    this.services['kv'] = kv;
    return kv;
};

/**
 * get a Watch instance
 */
Client.prototype.watcher = function(opts){
    if(this.services['watcher']){
        return this.services['watcher'];
    }
    opts = _.defaults(this.opts,opts);
    var conn = new services.WatchClient(this.balancer.get(),this.opts.credentials);
    var watch = makeServiceReady(new watcher.Watch(conn),conn,opts);
    this.services['watcher'] = watch;
    return watch;
};

/**
 * close all channels
 */
Client.prototype.close = function(){
  //close all service first
    _.forEach(this.services,function(s){
        s.onclose();
    });
  //close all channel
    _.forEach(this.channels,function(c){
        grpc.getClientChannel(c).close();
    })
};
