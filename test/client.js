var grpc = require('grpc');
var pb = grpc.load(__dirname+'/../lib/pb/rpc.proto','proto');
etcdpb = pb.etcdserverpb;

var request = new etcdpb.PutRequest();
request.setKey("foo");
request.setValue("bar");

var kv = new etcdpb.KV('localhost:2379',grpc.credentials.createInsecure());
kv.put(request,function(err,response){
    console.dir(err);
    console.log('Greeting:', response);
});

