var grpc = require('grpc');
var messages = require('../lib/pb/rpc_pb');
var services = require('../lib/pb/rpc_grpc_pb');
var _ = require('lodash');

// var request = new messages.PutRequest();
// request.setKey("foo");
// request.setValue("bar11");

// var kv = new services.KVClient('localhost:2379',grpc.credentials.createInsecure());
// kv.put(request,function(err,response){
//     console.dir(err);
//     console.log('Greeting:', JSON.stringify(response));
// });

var request = new messages.RangeRequest();
request.setKey('foo');

var kv = new services.KVClient('localhost:2379',grpc.credentials.createInsecure());

var start1 = Date.now();
kv.range(request,function(err,response){
    console.log(err);
    console.log(Date.now()-start1);
    _.forEach(response.getKvsList(),function(mkv){
        console.log('key:',mkv.getKey_asB64(),',value:',mkv.getValue_asB64());
    });
});


