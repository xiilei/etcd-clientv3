/**
 * A abstract client with balancer
 */

var EventEmitter = require('events');
var grpc = require('grpc');
var util = require('util');
var _ = require('lodash');
var services = require('./pb/rpc_grpc_pb');
var Balancer = require('./balancer');
var KV = require('./kv');

module.exports = Client;

/**
 * endpoints
 */
function Client(eps,opts){
    EventEmitter.call(this);
    this.opts = opts || {};
    this.balancer = new Balancer(eps);
    this.services = {};
    this.channels = {};
}

util.inherits(Client,EventEmitter);

function getId(s,opts){
	return s+(opts.prefix ? opts.prefix : '');
}

/**
 * get a KV instance
 * @param object opts
 */
Client.prototype.kv = function(opts){
    opts = _.defaults(opts,this.opts);
    var id = getId('kv',opts);
    if(this.services[id]){
        return this.services[id];
    }
    var conn = this.channels['kv'];
    if(!conn){
      //@todo reconnect and errors
      conn = new services.KVClient(this.balancer.get(),grpc.credentials.createInsecure());
      this.channels['kv'] = conn;
    }
    var kv = new KV(conn,opts);
    this.services[id] = kv;
    return kv;
};

Client.prototype.watcher = function(opts){

};

/**
 * close all channel
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
