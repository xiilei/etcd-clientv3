/**
 * etcd kv apis
 */
var _ = require('lodash');
var debug = require('debug')('etcdv3:kv');
var pb = require('./pb/rpc_pb');

module.exports = KV;

/**
 * @param pb.KVClient conn
 * @param object opts
 * {
 *     prefix:string
 * }
 */
function KV(conn,opts){
    this.opts = opts || {};
    this.conn = conn;
    debug('new kv instance');
}

/**
 * do request
 */
function _do(agent,method,request,callback){
    callback = callback || _.noop;
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
        var kvslist = {};
        response.getKvsList().forEach(function(kv){
            kvslist[kv.getKey()] = kv.getValue();
        });
        callback(err,kvslist);
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
        var keys = [];
        response.getKvsList().forEach(function(kv){
            keys.push(kv.getKey());
        });
        callback(null,keys);
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
    }else if(lease){
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
    }else if(end){
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


KV.prototype.compact = function(rev){

};


KV.prototype.txn = function () {

};

KV.prototype.close = function(){

};
