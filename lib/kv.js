/**
 * etcd kv apis
 */

var services = require('./pb/rpc_grpc_pb');
var messages = require('./pb/rpc_pb');

function KV(ep){
    this.conn = new services.KVClient(ep,grpc.credentials.createInsecure());
}

KV.prototype.get = function(key,value,options){

};

KV.prototype.put = function(key,value){

};

KV.prototype.del = function(key){

};

KV.prototype.compact = function(rev){

};


KV.prototype.txn = function () {

};