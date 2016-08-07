var expect = require('chai').expect;
var etcdv3 = require('..');
var mock = require('./mock');

var client = new etcdv3.Client(mock.eps);
describe('lease',function () {
    it('grant lease with id',function(done){
        client.lease().grant(1,123123123123,function(err,leaseId){
            if(err){
                done(err);
                return;
            }
            expect(leaseId).be.equal(123123123123);
            done();
        });
    });
    it('grant and revoke',function(done){
        var lease = client.lease();
        lease.grant(10,function(err,leaseId){
            if(err){
                done(err);
                return;
            }
            expect(leaseId.toString(16)).be.have.length(16);
            lease.revoke(leaseId,function(){
                done(err);
            });
        });
    });
});