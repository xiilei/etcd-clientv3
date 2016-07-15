/**
 * simple balancer
 * @todo switch to another when connect failed
 */
module.exports = Balancer;

function Balancer(eps){
    this.eps = eps;
    this.numGets = -1;
}

Balancer.prototype.get = function(){
    this.numGets++;
    return this.eps[this.numGets%this.eps.length];
};

Balancer.prototype.add = function(ep){
    this.eps.push(ep);
};