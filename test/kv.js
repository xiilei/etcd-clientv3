var expect = require('chai').expect;
var Client = require('../lib/client');

describe('kv',function () {
	it('range keys',function(done){
		var client = new Client(['localhost:2379','localhost:22379','localhost:32379']);
		var opts = {
			rangeEnd:'foo3'
		}
		client.kv().get('foo',function(err,response){
			if(err){
				done(err);
				return;
			}
			response.getKvsList().forEach(function(kv){
				console.log('key:',kv.getKey(),'value:',kv.getValue());
			});
			done();
			client.close();
		},opts);
	});
});