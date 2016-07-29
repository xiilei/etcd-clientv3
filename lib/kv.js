/**
 * etcd kv apis
 * @license Apache License 2
 *
 * Usage
 * var client = new Client(['localhost:2379']);
 * var kv = client.kv();
 *
 * range
 * kv.get(key,end,callback)
 * kv.one(key,callback)
 * kv.count(key,end,callback)
 * kv.keys(key,end,callback)
 *
 * put
 * kv.set(key,value,lease,callback);
 *
 * delete
 * kv.del(key,end,callback);
 *
 * methods with raw response
 *
 * kv.range(request,callback);
 * kv.put(request,callback);
 * kv.delete(request,callback);
 * kv.compact(request,callback);
 * kv.txn(request,callback);
 *
 */
var _ = require('lodash');
var util = require('util');
var debug = require('debug')('etcdv3:kv');
var pb = require('./pb/rpc_pb');
var service = require('./_service');
var Service = service.Service;
var grpc = require('grpc');

module.exports = KV;

/**
 * @param services.KVClient conn
 */
function KV(conn){
    Service.call(this,conn);
    this.name = 'kv';
    debug('new kv instance');
}

util.inherits(KV,Service);

/**
 * get request
 * @param {pb.RangeRequest} request
 * @param {function} (err,pb.RangeResponse) callback
 */
KV.prototype.range = function(request,callback){
    service.doRequest(this,'range',request,callback);
};

/**
 * get a simple value
 * @param {string} key
 * @param {function} (err,string) callback
 */
KV.prototype.one = function(key,callback){
    var request = new pb.RangeRequest();
    callback = callback || _.noop;
    request.setKey(key);
    this.range(request,function(err,response){
        if(err){
            callback(err,null);
            return;
        }
        var kvslist = response.getKvsList();
        callback(err,kvslist.length==0 ? null : kvslist[0].getValue());
    });
};

/**
 * get range key value pair
 * @param {string} key
 * @param {string|bool} range end ,if set true then the key is a prefix
 * @param {function}(err,object{key:value}) callback
 */
KV.prototype.get = function(key,end,callback){
    var request = new pb.RangeRequest();
    callback = callback || _.noop;
    request.setKey(key);
    service.setRequestEnd(request,key,end);
    this.range(request,function(err,response){
        if(err){
            callback(err,null);
            return;
        }
        callback(null,_.reduce(response.getKvsList(),function(pair,kv){
            pair[kv.getKey()] = kv.getValue();
            return pair;
        },{}));
    });
};

/**
 * get count of keys only
 * @param {string} key
 * @param {string|bool} range end ,if set true then the key is a prefix
 * @param {function} (err,numner) callback
 */
KV.prototype.count = function(key,end,callback){
    var request = new pb.RangeRequest();
    callback = callback || _.noop;
    request.setKey(key);
    service.setRequestEnd(request,key,end);
    request.setCountOnly(true);
    this.range(request,function(err,response){
        if(err){
            callback(err,null);
            return;
        }
        callback(null,response.getCount());
    });
};

/**
 * get keys only
 * @param {string} key
 * @param {string|bool} range end ,if set true then the key is a prefix
 * @param {function} (err,array) callback
 */
KV.prototype.keys = function(key,end,callback){
    var request = new pb.RangeRequest();
    callback = callback || _.noop;
    request.setKey(key);
    service.setRequestEnd(request,key,end);
    request.setKeysOnly(true);
    this.range(request,function(err,response){
        if(err){
            callback(err,null);
            return;
        }
        callback(null,_.reduce(response.getKvsList(),function(keys,kv){
            keys.push(kv.getKey());
            return keys;
        },[]));
    });
};

/**
 * put request
 * @param {pb.PutRequest} request
 * @param {function} (err,pb.PutResponse) callback
 */
KV.prototype.put = function(request,callback){
    service.doRequest(this,'put',request,callback);
};

/**
 * set a pair key value
 * @param {string} key
 * @param {string} value
 * @param {numner| function} lease|callback lease is the lease ID to associate with the key in the key-value store
 * @param {function} (err,pb.ResponseHeader) callback it be ignored if lease is a function
 */
KV.prototype.set = function(key,value,lease,callback){
    var request = new pb.PutRequest();
    request.setKey(key);
    request.setValue(value);
    if(_.isFunction(lease)){
        callback = lease;
    }else{
        callback = callback || _.noop;
        request.setLease(lease);
    }
    this.put(request,function(err,response){
        if(err){
            callback(err,null);
            return;
        }
        callback(null,response.getHeader());
    });
};

/**
 * delete request
 * @param {pb.DeleteRangeRequest} request
 * @param {function} (err,pb.DeleteRangeResponse) callback
 */
KV.prototype.delete = function(request,callback){
    service.doRequest(this,'deleteRange',request,callback);
};

/**
 * delete a range keys
 * @param {string} key
 * @param {string|function} range end
 * @param {function} (err,number,pb.ResponseHeader) callback it be ignored if the end is a function
 */
KV.prototype.del = function(key,end,callback){
    var request = new pb.DeleteRangeRequest();
    request.setKey(key);
    if(_.isFunction(end)){
        callback = end;
    }else{
        callback = callback || _.noop;
        service.setRequestEnd(request,key,end);
    }
    this.delete(request,function(err,response){
        if(err){
            callback(err,null);
            return;
        }
        //deleted number
        callback(null,response.getDeleted());
    });
};

/**
 * @param {pb.CompactionRequest} request
 * @param {function} (err,pb.CompactionResponse) callback
 */
KV.prototype.compact = function(request,callback){
    service.doRequest(this,'compact',request,callback);
};

/**
 * @param {pb.TxnRequest} request
 * @param {function} (err,pb.TxnResponse) callback
 */
KV.prototype.txn = function(request,callback){
    service.doRequest(this,'txn',request,callback);
};

/**
 * close
 * call by etcdv3.Client
 */
KV.prototype.onclose = function(){
    debug('close');
};
