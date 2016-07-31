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
var Watch = require('./watch');


module.exports = Client;

var defaultOptions = {
    timeout:1000*3600,//timeout ms
    enableOfflineQueue:true,//
    //override
    ready:function (err) {
        if(err) throw err;
    },
    //override
    handleErrors:function(err){
        if(err) throw err;
    }
}

/**
 * @param {array} eps endpoints
 * @param {object} opts
 */
function Client(eps,opts){
    this.opts = opts || {};
    if(!this.opts.credentials){
        this.opts.credentials = grpc.credentials.createInsecure();
    }
    this.balancer = new Balancer(eps);
    this.services = {};
}

/**
 * make service ready to go !
 * @param {Service} agent
 */
function makeServiceReady(agent,opts){
    var deadline = Date.now()+opts.timeout;
    var readyFn = opts.ready;

    grpc.waitForClientReady(agent.conn,deadline,function(err){
        if(err){
            readyFn.call(agent,err);
            return;
        }
        var fn = null;
        debug('service %s is ready',agent.name)
        agent.ready = true;
        readyFn.call(agent,null);
        if(!agent.enableOfflineQueue){
            return;
        }
        while(agent.offlineQueue.length>0){
            fn = agent.offlineQueue.shift();
            fn();
        }
        agent.reconnecting = false;
    });
    return agent;
}


function createServiceClient(c,opts,grpcClient,serviceClient){
    opts = _.defaults(opts,c.opts,defaultOptions);
    function _create(s){
        var conn = new grpcClient(c.balancer.get(),c.opts.credentials);
        s.setConn(conn);
        makeServiceReady(s,opts);
    }
    var s = new serviceClient();
    s.enableOfflineQueue = opts.enableOfflineQueue;
    s.handleErrors = opts.handleErrors;
    s.reconnect = function () {
        if(this.reconnecting){
            return;
        }
        this.reconnecting = true;
        debug('service %s reconnecting',s.name);
        c.balancer.next();
        _create(this);
    };
    _create(s);
    return s;
}


/**
 * get a KV instance
 * @param {object} opts
 */
Client.prototype.kv = function(opts){
   if(this.services['kv']){
        return this.services['kv'];
   }
   var kv = createServiceClient(this,opts,services.KVClient,KV);
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
    var w = createServiceClient(this,opts,services.WatchClient,Watch);
    this.services['watcher'] = w;
    return w;
};

/**
 * close all channels
 */
Client.prototype.close = function(){
  //close all service first
    _.forOwn(this.services,function(s){
        s.onclose();
        //grpc.getClientChannel(s.conn).close();
    });
    this.services = {};
};
