var expect = require('chai').expect;
var etcdv3 = require('..');
var mock = require('./mock');

describe('watcher',function () {
    this.timeout(5000);
    it('create request',function(done){
        var client = new etcdv3.Client(mock.eps);
        var watcher = client.watcher().create('watch','watch2');
        var _value = ''+Date.now();
        watcher.once('create',function(id){
            expect(id).be.equal(0);
        });
        watcher.once('cancel',function(){
            this.close();
            client.close();
            done();
        })
        watcher.once('error',function(err){
            done(err);
        });
        watcher.once('events',function (events) {
            expect(events).to.be.deep.equal([{ type: etcdv3.EventPut, key: 'watch1', value: _value }]);
            watcher.cancel();
        });
        watcher.start();
        client.kv().set('watch1',_value,function(err) {
            if(err){
                done(err);
            }
            console.log('set:',_value);
        });
    });
});