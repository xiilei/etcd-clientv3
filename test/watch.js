var expect = require('chai').expect;
var mock = require('./mock');
var etcdv3 = require('..');


describe('watcher',function () {
    this.timeout(5000000);
    it('create request',function(done){
        var client = new etcdv3.Client(mock.eps);
        var watcher = client.watcher({
            ready:function(err){
                if(err){
                    done(err);
                }
            }
        }).create('watch','watch2',{filters:[etcdv3.NoPut]});
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
            this.cancel();
        });
        watcher.start();
        client.kv().set('watch1',_value,function(err) {
            if(err){
                done(err);
            }
        });
    });
});