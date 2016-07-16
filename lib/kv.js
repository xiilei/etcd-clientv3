/**
 * etcd kv apis
 */
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
    opts = opts || {};
    this.conn = conn;
    this.prefix = opts.prefix || '';
    debug('new kv instance with prefix %s',this.prefix);
}

/**
 * prefix key
 */
KV.prototype._k = function(key){
    return this.prefix ? this.prefix+key : key;
};

/**
 * get 
 */
KV.prototype.get = function(key,callback,opts){
    var request = new pb.RangeRequest();
    opts = opts || {};
    request.setKey(this._k(key));
    if(opts.rangeEnd){
        request.setRangeEnd(opts.rangeEnd);
    }
    if(opts.limit){
        request.setLimit(opts.limit);
    }
    if(opts.revision){
        request.setRevision(opts.revision);
    }
    this.conn.range(request,function(err,response){
        if(err){
            callback(err,null);
            return;
        }
        callback(null,response);
    });
};

/**
 * put
 * @param string key
 * @param string value
 * @param Function callback
 * @param object {
 *    lease:number
 *    prev:boolean If prev is set, etcd gets the previous key-value pair before changing it
 * }
 */
KV.prototype.put = function(key,value,callback,opts){
    var request = new pb.PutRequest();
    opts = opts || {};
    request.setKey(this._k(key));
    request.setValue(value);
    if(opts.lease){
        request.setLease(opts.lease);
    }
    if(opts.prev){
        request.setPrevKv(true);
    }
    //request
    this.conn.put(request,function(err,response){
        if(err){
            callback(err,null)
            return;
        }
        callback(null,response);
    });
};

KV.prototype.del = function(key){

};

KV.prototype.compact = function(rev){

};


KV.prototype.txn = function () {

};

KV.prototype.close = function(){

};
