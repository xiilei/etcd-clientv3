var expect = require('chai').expect;
var Balancer = require('../lib/balancer');

describe('balancer',function () {
    it('#get',function(){
        var balancer = new Balancer([1,2,3]);
        expect(balancer.get()).to.equal(1);
        expect(balancer.get()).to.equal(1);
        balancer.next();
        expect(balancer.get()).to.equal(2);
        balancer.next();
        expect(balancer.get()).to.equal(3);
    });
    it('only one endpoint',function(){
        var balancer = new Balancer([1]);
        expect(balancer.get()).to.equal(1);
        expect(balancer.get()).to.equal(1);
    });
});