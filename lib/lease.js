/**
 * etcd lease apis
 * @license Apache License 2
 */
var _ = require('lodash');
var util = require('util');
var debug = require('debug')('etcdv3:lease');
var pb = require('./pb/rpc_pb');
var service = require('./_service');
var Service = service.Service;

module.exports = Lease;

function Lease(conn){
    Service.call(this,conn);
    this.name = 'lease';
    debug('new lease instance');
}

util.inherits(Lease,Service);

/**
 * @param {pb.LeaseGrantRequest} request
 * @param {function} (err,pb.LeaseGrantResponse) callback
 */
Lease.prototype.leaseGrant = function(request,callback){
    service.doRequest(this,'leaseGrant',request,callback);
};

/**
 * create leases
 * @param {number} ttl
 * @param {numner| function} id lease id
 * @param {funciton} callback(err,leaseId) it be ignored if id is a function
 */
Lease.prototype.grant = function(ttl,id,callback){
    var request = new pb.LeaseGrantRequest();
    request.setTtl(ttl);
    if(_.isFunction(id)){
        callback = id;
    }else{
        callback = callback || _.noop;
        request.setId(id);
    }
    this.leaseGrant(request,function(err,response){
        if(err){
            callback(err,null);
            return;
        }
        callback(null,response.getId());
    });
};

/**
 * @param {pb.LeasRevokeReequest} request
 * @param {function} (err,pb.LeaseRevokeResponse) callback
 */
Lease.prototype.leaseRevoke = function(request,callback){
    service.doRequest(this,'leaseRevoke',request,callback);
};

/**
 * revoke leases
 * @param {numner} id lease id
 * @param {funciton} callback(err)
 */
Lease.prototype.revoke = function(id,callback){
    var request = new pb.LeaseRevokeRequest();
    request.setId(id);
    callback = callback || _.noop;
    this.leaseRevoke(request,function(err,response){
        callback(err);
    });
};

/**
 * @param {pb.LeaseKeepAliveRequest} request
 * @param {function} (err,pb.LeaseKeepAliveResponse) callback
 */
Lease.prototype.leaseKeepAlive = function(request,callback){
    service.doStreamRequest(this,'leaseKeepAlive',request,callback);
};

Lease.prototype.keepalive = function(){

};

Lease.prototype.onclose = function(){
    debug('close');
};