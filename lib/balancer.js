/**
 * simple balancer
 * @todo switch to another when connect failed
 */
var debug = require('debug')('etcdv3:balancer');
module.exports = Balancer;

function Balancer(eps){
    this.eps = eps;
    this.numGets = -1;
}

Balancer.prototype.get = function(){
    this.numGets++;
    var ep = this.eps[this.numGets%this.eps.length];
    debug('get endpoint:%s',ep);
    return ep;
};

Balancer.prototype.add = function(ep){
    this.eps.push(ep);
};