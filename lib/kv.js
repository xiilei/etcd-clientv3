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
var debug = require('debug')('etcdv3:kv');
var pb = require('./pb/rpc_pb');

module.exports = KV;

/**
 * @param services.KVClient conn
 */
function KV(conn){
    this.conn = conn;
    debug('new kv instance');
}

/**
 * do request
 */
function _do(agent,method,request,callback){
    callback = callback || _.noop;
    debug('do %s',method);
    agent.conn[method](request,callback);
}

/**
 * get request
 * @param pb.RangeRequest request
 * @param Function(err,pb.RangeResponse) callback
 */
KV.prototype.range = function(request,callback){
    _do(this,'range',request,callback);
};

/**
 * get a simple value
 * @param string key
 * @param Function(err,string) callback
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
 * @param string key
 * @param string range end
 * @param Function(err,object{key:value}) callback
 */
KV.prototype.get = function(key,end,callback){
    var request = new pb.RangeRequest();
    callback = callback || _.noop;
    request.setKey(key);
    request.setRangeEnd(end);
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
 * @param string key
 * @param string range end
 * @param Function(err,numner) callback
 */
KV.prototype.count = function(key,end,callback){
    var request = new pb.RangeRequest();
    callback = callback || _.noop;
    request.setKey(key);
    request.setRangeEnd(end);
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
 * @param string key
 * @param string range end
 * @param Function(err,array) callback
 */
KV.prototype.keys = function(key,end,callback){
    var request = new pb.RangeRequest();
    callback = callback || _.noop;
    request.setKey(key);
    request.setRangeEnd(end);
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
 * @param pb.PutRequest request
 * @param Function(err,pb.PutResponse) callback
 */
KV.prototype.put = function(request,callback){
    _do(this,'put',request,callback);
};

/**
 * set a pair key value
 * @param string key
 * @param string value
 * @param numner| Function lease|callback lease is the lease ID to associate with the key in the key-value store
 * @param Function(err,pb.ResponseHeader) callback it be ignored if lease is a function
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
 * @param pb.DeleteRangeRequest request
 * @param Function(err,pb.DeleteRangeResponse) callback
 */
KV.prototype.delete = function(request,callback){
    _do(this,'deleteRange',request,callback);
};

/**
 * delete a range keys
 * @param string key
 * @param string|Function range end 
 * @param Function(err,number,pb.ResponseHeader) callback it be ignored if the end is a function
 */
KV.prototype.del = function(key,end,callback){
    var request = new pb.DeleteRangeRequest();
    request.setKey(key);
    if(_.isFunction(end)){
        callback = end;
    }else{
        callback = callback || _.noop;
        request.setRangeEnd(end);
    }
    this.delete(request,function(err,response){
        if(err){
            callback(err,null);
            return;
        }
        //deleted number
        callback(null,response.getDeleted(),response.getHeader());
    });
};

/**
 * @param pb.CompactionRequest request
 * @param Function(err,pb.CompactionResponse) callback
 */
KV.prototype.compact = function(request,callback){
    _do(this,'compact',request,callback);
};

/**
 * @param pb.TxnRequest request
 * @param Function(err,pb.TxnResponse) callback
 */
KV.prototype.txn = function(request,callback){
    _do(this,'txn',request,callback);
};

/**
 * close
 * call by etcdv3.Client
 */
KV.prototype.close = function(){
};