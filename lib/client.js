/**
 * A abstract client with balancer
 */

var EventEmitter = require('events');
var util = require('util');
var Balancer = require('./balancer');

module.exports = Client;

/**
 * endpoints
 */
function Client(eps,options){
    EventEmitter.call(this);
    this.balancer = new Balancer(eps);
}

uitl.inherits(Client,EventEmitter);

Client.prototype.kvClient = function(){

};
