var expect = require('chai').expect;
var etcdv3 = require('..');
var mock = require('./mock');

describe('kv',function () {
	this.timeout(5000);
	it('#one',function(done){
		var client = new etcdv3.Client(mock.eps);
		client.kv().one('foo',function(err,value){
			if(err){
				done(err);
				return;
			}
			expect(value).to.be.equal('bar');
			client.close();
			done();
		});
	});
	it('#get',function(done){
		var client = new etcdv3.Client(mock.eps);
		client.kv().get('foo','foo3',function(err,pair){
			if(err){
				done(err);
				return;
			}
			expect(pair).to.be.deep.equal({'foo':'bar','foo2':'1231'});
			client.close();
			done();
		});
	});
	it('#count',function(done){
		var client = new etcdv3.Client(mock.eps);
		client.kv().count('foo','foo3',function(err,c){
			if(err){
				done(err);
				return;
			}
			expect(c).to.be.equal(2);
			client.close();
			done();
		});
	});
	it('#keys',function(done){
		var client = new etcdv3.Client(mock.eps);
		client.kv().keys('foo',true,function(err,keys){
			if(err){
				done(err);
				return;
			}
			expect(keys).to.be.deep.equal(['foo','foo2']);
			client.close();
			done();
		});
	});
	it('#set',function(done){
		var client = new etcdv3.Client(mock.eps);
		client.kv().set('set1','123',function(err,header){
			if(err){
				done(err);
				return;
			}
			client.close();
			done();
		});
	});
	it('#del',function(done){
		var client = new etcdv3.Client(mock.eps);
		client.kv().del('set1','set2',function(err,c){
			if(err){
				done(err);
				return;
			}
			expect(c).to.equal(1);
			client.close();
			done();
		});
	});
});