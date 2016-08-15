var expect = require('chai').expect;
var Etcd = require('..');
var mock = require('./mock');

describe('kv',function () {
	this.timeout(5000);
	it('#one',function(done){
		var etcd = new Etcd(mock.eps);
		etcd.kv().one('foo',function(err,value){
			if(err){
				done(err);
				return;
			}
			expect(value).to.be.equal('bar');
			etcd.close();
			done();
		});
	});
	it('#get',function(done){
		var etcd = new Etcd(mock.eps);
		etcd.kv().get('foo','foo3',function(err,pair){
			if(err){
				done(err);
				return;
			}
			expect(pair).to.be.deep.equal({'foo':'bar','foo2':'1231'});
			etcd.close();
			done();
		});
	});
	it('#count',function(done){
		var etcd = new Etcd(mock.eps);
		etcd.kv().count('foo','foo3',function(err,c){
			if(err){
				done(err);
				return;
			}
			expect(c).to.be.equal(2);
			etcd.close();
			done();
		});
	});
	it('#keys',function(done){
		var etcd = new Etcd(mock.eps);
		etcd.kv().keys('foo',true,function(err,keys){
			if(err){
				done(err);
				return;
			}
			expect(keys).to.be.deep.equal(['foo','foo2']);
			etcd.close();
			done();
		});
	});
	it('#set',function(done){
		var etcd = new Etcd(mock.eps);
		etcd.kv().set('set1','123',function(err,header){
			if(err){
				done(err);
				return;
			}
			etcd.close();
			done();
		});
	});
	it('#del',function(done){
		var etcd = new Etcd(mock.eps);
		etcd.kv().del('set1','set2',function(err,c){
			if(err){
				done(err);
				return;
			}
			expect(c).to.equal(1);
			etcd.close();
			done();
		});
	});
});