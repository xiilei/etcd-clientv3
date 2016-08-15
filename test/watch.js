var expect = require('chai').expect;
var mock = require('./mock');
var Etcd = require('..');


describe('watcher',function () {
   this.timeout(5000);
   it('create request',function(done){
        var etcd = new Etcd(mock.eps);
        var watcher = etcd.watcher({
            ready:function(err){
                if(err){
                    done(err);
                }
            }
        }).create('watch','watch2');
        var _value = ''+Date.now();
        watcher.on('create',function(id){
            expect(id).be.equal(0);
        });
        watcher.on('cancel',function(){
            this.close();
            etcd.close();
            done();
        })
        watcher.on('error',function(err){
            // console.log('error',err);
            done(err);
        });
        watcher.once('events',function (events) {
            expect(events).to.be.deep.equal([{ type: Etcd.EventPut, key: 'watch1', value: _value }]);
            this.cancel();
        });
        watcher.start();
        etcd.kv().set('watch1',_value,function(err) {
            if(err){
                done(err);
            }
        });
   });
});