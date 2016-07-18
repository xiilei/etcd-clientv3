/**
 * A abstract client with balancer
 * @license Apache License 2
 */

var EventEmitter = require('events');
var grpc = require('grpc');
var util = require('util');
var _ = require('lodash');
var services = require('./pb/rpc_grpc_pb');
var Balancer = require('./balancer');
var KV = require('./kv');
var Watch = require('./watch');

module.exports = Client;

/**
 * @param array eps endpoints
 */
function Client(eps,opts){
    EventEmitter.call(this);
    this.opts = _.defaults({},opts);
    if(!this.opts.credentials){
        this.opts.credentials = grpc.credentials.createInsecure();
    }
    this.balancer = new Balancer(eps);
    this.services = {};
}

util.inherits(Client,EventEmitter);

/**
 * get a KV instance
 * @param object opts
 */
Client.prototype.kv = function(){
    if(this.services['kv']){
        return this.services['kv'];
    }
    var conn = new services.KVClient(this.balancer.get(),this.opts.credentials);
    var kv = new KV(conn);
    this.services['kv'] = kv;
    return kv;
};

/**
 * get a Watch instance
 */
Client.prototype.watcher = function(){
    if(this.services['watcher']){
        return this.services['watcher'];
    }
    var conn = new services.WatchClient(this.balancer.get(),this.opts.credentials);
    var watch = new Watch(conn);
    this.services[watch] = watch;
    return watch;
};

/**
 * close all channels
 */
Client.prototype.close = function(){
  //close all service first
    _.forEach(this.services,function(s){
        s.close();
    });
  //close all channel
    _.forEach(this.channels,function(c){
        grpc.getClientChannel(c).close();
    })
};
