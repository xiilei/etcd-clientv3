var grpc = require('grpc');
var etcdv3 =  require('..');
var messages = etcdv3.messages;
var services = etcdv3.services;
var _ = require('lodash');

var balancer = new etcdv3.Balancer(['localhost:2379','localhost:12379','localhost:22379']);
// var request = new messages.PutRequest();
// request.setKey("foo");
// request.setValue("bar12");

// var kv = new services.KVClient('localhost:2379',grpc.credentials.createInsecure());
// kv.put(request,function(err,response){
//     console.dir(err);
//     console.log('Greeting:', JSON.stringify(response));
// });

var request = new messages.RangeRequest();
request.setKey('foo');

var kv = new services.KVClient(balancer.get(),grpc.credentials.createInsecure());
var start1 = Date.now();
kv.range(request,function(err,response){
    console.log(err);
    console.log(Date.now()-start1);
    _.forEach(response.getKvsList(),function(mkv){
        console.log('key:',mkv.getKey(),',value:',mkv.getValue());
    });
    grpc.getClientChannel(kv).close();
});


