var grpc = require('grpc');
var etcdv3 =  require('..');
var messages = etcdv3.messages;
var services = etcdv3.services;

var cr = new messages.WatchCreateRequest();
cr.setKey('foo');
cr.setStartRevision(0);
var request = new messages.WatchRequest();
request.setCreateRequest(cr);

var watch = new services.WatchClient('localhost:2379',grpc.credentials.createInsecure());
var call = watch.watch();
call.on('data',function (response) {
    console.log('watchid:',response.getWatchId(),',created:',response.getCreated(),',canceled:',response.getCanceled());
    response.getEventsList().forEach(function(event){
        var kv = event.getKv();
        console.log('key:',kv.getKey(),',value:',kv.getValue());
    });
});

call.on('end',function(b){
    console.log('end:',b);
    grpc.getClientChannel(watch).close();
});

call.on('close',function(){
    console.log('close');
});

call.on('error',function(err){
    console.log(err);
});

call.write(request);