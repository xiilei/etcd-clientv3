/**
 * simple balancer
 * @todo switch to another when connect failed
 */
var debug = require('debug')('etcdv3:balancer');
module.exports = Balancer;

function Balancer(eps){
    this.eps = eps;
    this.numGets = 0;
    this.current = null;
    this.next();
}

Balancer.prototype.get = function(){
    debug('get endpoint:%s',this.current);
    return this.current;
};

Balancer.prototype.next = function(){
    this.current = this.eps[this.numGets%this.eps.length];
    this.numGets++;
};

Balancer.prototype.add = function(ep){
    this.eps.push(ep);
};