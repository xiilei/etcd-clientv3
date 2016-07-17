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
Client.prototype.kv = function(opts){
    if(this.services['kv']){
        return this.services['kv'];
    }
    opts = _.defaults(opts,this.opts);
    var conn = new services.KVClient(this.balancer.get(),opts.credentials);
    var kv = new KV(conn,opts);
    this.services['kv'] = kv;
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
