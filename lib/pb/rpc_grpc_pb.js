// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var rpc_pb = require('./rpc_pb.js');
var authpb_pb = require('./authpb_pb.js');
var googleapi_pb = require('./googleapi_pb.js');
var mvccpb_pb = require('./mvccpb_pb.js');

function serialize_AlarmRequest(arg) {
  if (!(arg instanceof rpc_pb.AlarmRequest)) {
    throw new Error('Expected argument of type AlarmRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_AlarmRequest(buffer_arg) {
  return rpc_pb.AlarmRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_AlarmResponse(arg) {
  if (!(arg instanceof rpc_pb.AlarmResponse)) {
    throw new Error('Expected argument of type AlarmResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_AlarmResponse(buffer_arg) {
  return rpc_pb.AlarmResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_AuthDisableRequest(arg) {
  if (!(arg instanceof rpc_pb.AuthDisableRequest)) {
    throw new Error('Expected argument of type AuthDisableRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_AuthDisableRequest(buffer_arg) {
  return rpc_pb.AuthDisableRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_AuthDisableResponse(arg) {
  if (!(arg instanceof rpc_pb.AuthDisableResponse)) {
    throw new Error('Expected argument of type AuthDisableResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_AuthDisableResponse(buffer_arg) {
  return rpc_pb.AuthDisableResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_AuthEnableRequest(arg) {
  if (!(arg instanceof rpc_pb.AuthEnableRequest)) {
    throw new Error('Expected argument of type AuthEnableRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_AuthEnableRequest(buffer_arg) {
  return rpc_pb.AuthEnableRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_AuthEnableResponse(arg) {
  if (!(arg instanceof rpc_pb.AuthEnableResponse)) {
    throw new Error('Expected argument of type AuthEnableResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_AuthEnableResponse(buffer_arg) {
  return rpc_pb.AuthEnableResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_AuthRoleAddRequest(arg) {
  if (!(arg instanceof rpc_pb.AuthRoleAddRequest)) {
    throw new Error('Expected argument of type AuthRoleAddRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_AuthRoleAddRequest(buffer_arg) {
  return rpc_pb.AuthRoleAddRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_AuthRoleAddResponse(arg) {
  if (!(arg instanceof rpc_pb.AuthRoleAddResponse)) {
    throw new Error('Expected argument of type AuthRoleAddResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_AuthRoleAddResponse(buffer_arg) {
  return rpc_pb.AuthRoleAddResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_AuthRoleDeleteRequest(arg) {
  if (!(arg instanceof rpc_pb.AuthRoleDeleteRequest)) {
    throw new Error('Expected argument of type AuthRoleDeleteRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_AuthRoleDeleteRequest(buffer_arg) {
  return rpc_pb.AuthRoleDeleteRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_AuthRoleDeleteResponse(arg) {
  if (!(arg instanceof rpc_pb.AuthRoleDeleteResponse)) {
    throw new Error('Expected argument of type AuthRoleDeleteResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_AuthRoleDeleteResponse(buffer_arg) {
  return rpc_pb.AuthRoleDeleteResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_AuthRoleGetRequest(arg) {
  if (!(arg instanceof rpc_pb.AuthRoleGetRequest)) {
    throw new Error('Expected argument of type AuthRoleGetRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_AuthRoleGetRequest(buffer_arg) {
  return rpc_pb.AuthRoleGetRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_AuthRoleGetResponse(arg) {
  if (!(arg instanceof rpc_pb.AuthRoleGetResponse)) {
    throw new Error('Expected argument of type AuthRoleGetResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_AuthRoleGetResponse(buffer_arg) {
  return rpc_pb.AuthRoleGetResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_AuthRoleGrantPermissionRequest(arg) {
  if (!(arg instanceof rpc_pb.AuthRoleGrantPermissionRequest)) {
    throw new Error('Expected argument of type AuthRoleGrantPermissionRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_AuthRoleGrantPermissionRequest(buffer_arg) {
  return rpc_pb.AuthRoleGrantPermissionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_AuthRoleGrantPermissionResponse(arg) {
  if (!(arg instanceof rpc_pb.AuthRoleGrantPermissionResponse)) {
    throw new Error('Expected argument of type AuthRoleGrantPermissionResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_AuthRoleGrantPermissionResponse(buffer_arg) {
  return rpc_pb.AuthRoleGrantPermissionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_AuthRoleListRequest(arg) {
  if (!(arg instanceof rpc_pb.AuthRoleListRequest)) {
    throw new Error('Expected argument of type AuthRoleListRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_AuthRoleListRequest(buffer_arg) {
  return rpc_pb.AuthRoleListRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_AuthRoleListResponse(arg) {
  if (!(arg instanceof rpc_pb.AuthRoleListResponse)) {
    throw new Error('Expected argument of type AuthRoleListResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_AuthRoleListResponse(buffer_arg) {
  return rpc_pb.AuthRoleListResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_AuthRoleRevokePermissionRequest(arg) {
  if (!(arg instanceof rpc_pb.AuthRoleRevokePermissionRequest)) {
    throw new Error('Expected argument of type AuthRoleRevokePermissionRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_AuthRoleRevokePermissionRequest(buffer_arg) {
  return rpc_pb.AuthRoleRevokePermissionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_AuthRoleRevokePermissionResponse(arg) {
  if (!(arg instanceof rpc_pb.AuthRoleRevokePermissionResponse)) {
    throw new Error('Expected argument of type AuthRoleRevokePermissionResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_AuthRoleRevokePermissionResponse(buffer_arg) {
  return rpc_pb.AuthRoleRevokePermissionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_AuthUserAddRequest(arg) {
  if (!(arg instanceof rpc_pb.AuthUserAddRequest)) {
    throw new Error('Expected argument of type AuthUserAddRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_AuthUserAddRequest(buffer_arg) {
  return rpc_pb.AuthUserAddRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_AuthUserAddResponse(arg) {
  if (!(arg instanceof rpc_pb.AuthUserAddResponse)) {
    throw new Error('Expected argument of type AuthUserAddResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_AuthUserAddResponse(buffer_arg) {
  return rpc_pb.AuthUserAddResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_AuthUserChangePasswordRequest(arg) {
  if (!(arg instanceof rpc_pb.AuthUserChangePasswordRequest)) {
    throw new Error('Expected argument of type AuthUserChangePasswordRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_AuthUserChangePasswordRequest(buffer_arg) {
  return rpc_pb.AuthUserChangePasswordRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_AuthUserChangePasswordResponse(arg) {
  if (!(arg instanceof rpc_pb.AuthUserChangePasswordResponse)) {
    throw new Error('Expected argument of type AuthUserChangePasswordResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_AuthUserChangePasswordResponse(buffer_arg) {
  return rpc_pb.AuthUserChangePasswordResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_AuthUserDeleteRequest(arg) {
  if (!(arg instanceof rpc_pb.AuthUserDeleteRequest)) {
    throw new Error('Expected argument of type AuthUserDeleteRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_AuthUserDeleteRequest(buffer_arg) {
  return rpc_pb.AuthUserDeleteRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_AuthUserDeleteResponse(arg) {
  if (!(arg instanceof rpc_pb.AuthUserDeleteResponse)) {
    throw new Error('Expected argument of type AuthUserDeleteResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_AuthUserDeleteResponse(buffer_arg) {
  return rpc_pb.AuthUserDeleteResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_AuthUserGetRequest(arg) {
  if (!(arg instanceof rpc_pb.AuthUserGetRequest)) {
    throw new Error('Expected argument of type AuthUserGetRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_AuthUserGetRequest(buffer_arg) {
  return rpc_pb.AuthUserGetRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_AuthUserGetResponse(arg) {
  if (!(arg instanceof rpc_pb.AuthUserGetResponse)) {
    throw new Error('Expected argument of type AuthUserGetResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_AuthUserGetResponse(buffer_arg) {
  return rpc_pb.AuthUserGetResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_AuthUserGrantRoleRequest(arg) {
  if (!(arg instanceof rpc_pb.AuthUserGrantRoleRequest)) {
    throw new Error('Expected argument of type AuthUserGrantRoleRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_AuthUserGrantRoleRequest(buffer_arg) {
  return rpc_pb.AuthUserGrantRoleRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_AuthUserGrantRoleResponse(arg) {
  if (!(arg instanceof rpc_pb.AuthUserGrantRoleResponse)) {
    throw new Error('Expected argument of type AuthUserGrantRoleResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_AuthUserGrantRoleResponse(buffer_arg) {
  return rpc_pb.AuthUserGrantRoleResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_AuthUserListRequest(arg) {
  if (!(arg instanceof rpc_pb.AuthUserListRequest)) {
    throw new Error('Expected argument of type AuthUserListRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_AuthUserListRequest(buffer_arg) {
  return rpc_pb.AuthUserListRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_AuthUserListResponse(arg) {
  if (!(arg instanceof rpc_pb.AuthUserListResponse)) {
    throw new Error('Expected argument of type AuthUserListResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_AuthUserListResponse(buffer_arg) {
  return rpc_pb.AuthUserListResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_AuthUserRevokeRoleRequest(arg) {
  if (!(arg instanceof rpc_pb.AuthUserRevokeRoleRequest)) {
    throw new Error('Expected argument of type AuthUserRevokeRoleRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_AuthUserRevokeRoleRequest(buffer_arg) {
  return rpc_pb.AuthUserRevokeRoleRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_AuthUserRevokeRoleResponse(arg) {
  if (!(arg instanceof rpc_pb.AuthUserRevokeRoleResponse)) {
    throw new Error('Expected argument of type AuthUserRevokeRoleResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_AuthUserRevokeRoleResponse(buffer_arg) {
  return rpc_pb.AuthUserRevokeRoleResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_AuthenticateRequest(arg) {
  if (!(arg instanceof rpc_pb.AuthenticateRequest)) {
    throw new Error('Expected argument of type AuthenticateRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_AuthenticateRequest(buffer_arg) {
  return rpc_pb.AuthenticateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_AuthenticateResponse(arg) {
  if (!(arg instanceof rpc_pb.AuthenticateResponse)) {
    throw new Error('Expected argument of type AuthenticateResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_AuthenticateResponse(buffer_arg) {
  return rpc_pb.AuthenticateResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_CompactionRequest(arg) {
  if (!(arg instanceof rpc_pb.CompactionRequest)) {
    throw new Error('Expected argument of type CompactionRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_CompactionRequest(buffer_arg) {
  return rpc_pb.CompactionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_CompactionResponse(arg) {
  if (!(arg instanceof rpc_pb.CompactionResponse)) {
    throw new Error('Expected argument of type CompactionResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_CompactionResponse(buffer_arg) {
  return rpc_pb.CompactionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_DefragmentRequest(arg) {
  if (!(arg instanceof rpc_pb.DefragmentRequest)) {
    throw new Error('Expected argument of type DefragmentRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_DefragmentRequest(buffer_arg) {
  return rpc_pb.DefragmentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_DefragmentResponse(arg) {
  if (!(arg instanceof rpc_pb.DefragmentResponse)) {
    throw new Error('Expected argument of type DefragmentResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_DefragmentResponse(buffer_arg) {
  return rpc_pb.DefragmentResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_DeleteRangeRequest(arg) {
  if (!(arg instanceof rpc_pb.DeleteRangeRequest)) {
    throw new Error('Expected argument of type DeleteRangeRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_DeleteRangeRequest(buffer_arg) {
  return rpc_pb.DeleteRangeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_DeleteRangeResponse(arg) {
  if (!(arg instanceof rpc_pb.DeleteRangeResponse)) {
    throw new Error('Expected argument of type DeleteRangeResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_DeleteRangeResponse(buffer_arg) {
  return rpc_pb.DeleteRangeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_HashRequest(arg) {
  if (!(arg instanceof rpc_pb.HashRequest)) {
    throw new Error('Expected argument of type HashRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_HashRequest(buffer_arg) {
  return rpc_pb.HashRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_HashResponse(arg) {
  if (!(arg instanceof rpc_pb.HashResponse)) {
    throw new Error('Expected argument of type HashResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_HashResponse(buffer_arg) {
  return rpc_pb.HashResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_LeaseGrantRequest(arg) {
  if (!(arg instanceof rpc_pb.LeaseGrantRequest)) {
    throw new Error('Expected argument of type LeaseGrantRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_LeaseGrantRequest(buffer_arg) {
  return rpc_pb.LeaseGrantRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_LeaseGrantResponse(arg) {
  if (!(arg instanceof rpc_pb.LeaseGrantResponse)) {
    throw new Error('Expected argument of type LeaseGrantResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_LeaseGrantResponse(buffer_arg) {
  return rpc_pb.LeaseGrantResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_LeaseKeepAliveRequest(arg) {
  if (!(arg instanceof rpc_pb.LeaseKeepAliveRequest)) {
    throw new Error('Expected argument of type LeaseKeepAliveRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_LeaseKeepAliveRequest(buffer_arg) {
  return rpc_pb.LeaseKeepAliveRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_LeaseKeepAliveResponse(arg) {
  if (!(arg instanceof rpc_pb.LeaseKeepAliveResponse)) {
    throw new Error('Expected argument of type LeaseKeepAliveResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_LeaseKeepAliveResponse(buffer_arg) {
  return rpc_pb.LeaseKeepAliveResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_LeaseRevokeRequest(arg) {
  if (!(arg instanceof rpc_pb.LeaseRevokeRequest)) {
    throw new Error('Expected argument of type LeaseRevokeRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_LeaseRevokeRequest(buffer_arg) {
  return rpc_pb.LeaseRevokeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_LeaseRevokeResponse(arg) {
  if (!(arg instanceof rpc_pb.LeaseRevokeResponse)) {
    throw new Error('Expected argument of type LeaseRevokeResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_LeaseRevokeResponse(buffer_arg) {
  return rpc_pb.LeaseRevokeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_MemberAddRequest(arg) {
  if (!(arg instanceof rpc_pb.MemberAddRequest)) {
    throw new Error('Expected argument of type MemberAddRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_MemberAddRequest(buffer_arg) {
  return rpc_pb.MemberAddRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_MemberAddResponse(arg) {
  if (!(arg instanceof rpc_pb.MemberAddResponse)) {
    throw new Error('Expected argument of type MemberAddResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_MemberAddResponse(buffer_arg) {
  return rpc_pb.MemberAddResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_MemberListRequest(arg) {
  if (!(arg instanceof rpc_pb.MemberListRequest)) {
    throw new Error('Expected argument of type MemberListRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_MemberListRequest(buffer_arg) {
  return rpc_pb.MemberListRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_MemberListResponse(arg) {
  if (!(arg instanceof rpc_pb.MemberListResponse)) {
    throw new Error('Expected argument of type MemberListResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_MemberListResponse(buffer_arg) {
  return rpc_pb.MemberListResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_MemberRemoveRequest(arg) {
  if (!(arg instanceof rpc_pb.MemberRemoveRequest)) {
    throw new Error('Expected argument of type MemberRemoveRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_MemberRemoveRequest(buffer_arg) {
  return rpc_pb.MemberRemoveRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_MemberRemoveResponse(arg) {
  if (!(arg instanceof rpc_pb.MemberRemoveResponse)) {
    throw new Error('Expected argument of type MemberRemoveResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_MemberRemoveResponse(buffer_arg) {
  return rpc_pb.MemberRemoveResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_MemberUpdateRequest(arg) {
  if (!(arg instanceof rpc_pb.MemberUpdateRequest)) {
    throw new Error('Expected argument of type MemberUpdateRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_MemberUpdateRequest(buffer_arg) {
  return rpc_pb.MemberUpdateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_MemberUpdateResponse(arg) {
  if (!(arg instanceof rpc_pb.MemberUpdateResponse)) {
    throw new Error('Expected argument of type MemberUpdateResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_MemberUpdateResponse(buffer_arg) {
  return rpc_pb.MemberUpdateResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_PutRequest(arg) {
  if (!(arg instanceof rpc_pb.PutRequest)) {
    throw new Error('Expected argument of type PutRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_PutRequest(buffer_arg) {
  return rpc_pb.PutRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_PutResponse(arg) {
  if (!(arg instanceof rpc_pb.PutResponse)) {
    throw new Error('Expected argument of type PutResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_PutResponse(buffer_arg) {
  return rpc_pb.PutResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_RangeRequest(arg) {
  if (!(arg instanceof rpc_pb.RangeRequest)) {
    throw new Error('Expected argument of type RangeRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_RangeRequest(buffer_arg) {
  return rpc_pb.RangeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_RangeResponse(arg) {
  if (!(arg instanceof rpc_pb.RangeResponse)) {
    throw new Error('Expected argument of type RangeResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_RangeResponse(buffer_arg) {
  return rpc_pb.RangeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_SnapshotRequest(arg) {
  if (!(arg instanceof rpc_pb.SnapshotRequest)) {
    throw new Error('Expected argument of type SnapshotRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_SnapshotRequest(buffer_arg) {
  return rpc_pb.SnapshotRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_SnapshotResponse(arg) {
  if (!(arg instanceof rpc_pb.SnapshotResponse)) {
    throw new Error('Expected argument of type SnapshotResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_SnapshotResponse(buffer_arg) {
  return rpc_pb.SnapshotResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_StatusRequest(arg) {
  if (!(arg instanceof rpc_pb.StatusRequest)) {
    throw new Error('Expected argument of type StatusRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_StatusRequest(buffer_arg) {
  return rpc_pb.StatusRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_StatusResponse(arg) {
  if (!(arg instanceof rpc_pb.StatusResponse)) {
    throw new Error('Expected argument of type StatusResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_StatusResponse(buffer_arg) {
  return rpc_pb.StatusResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_TxnRequest(arg) {
  if (!(arg instanceof rpc_pb.TxnRequest)) {
    throw new Error('Expected argument of type TxnRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_TxnRequest(buffer_arg) {
  return rpc_pb.TxnRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_TxnResponse(arg) {
  if (!(arg instanceof rpc_pb.TxnResponse)) {
    throw new Error('Expected argument of type TxnResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_TxnResponse(buffer_arg) {
  return rpc_pb.TxnResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_WatchRequest(arg) {
  if (!(arg instanceof rpc_pb.WatchRequest)) {
    throw new Error('Expected argument of type WatchRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_WatchRequest(buffer_arg) {
  return rpc_pb.WatchRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_WatchResponse(arg) {
  if (!(arg instanceof rpc_pb.WatchResponse)) {
    throw new Error('Expected argument of type WatchResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_WatchResponse(buffer_arg) {
  return rpc_pb.WatchResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var KVService = exports.KVService = {
  range: {
    path: '/etcdserverpb.KV/Range',
    requestStream: false,
    responseStream: false,
    requestType: rpc_pb.RangeRequest,
    responseType: rpc_pb.RangeResponse,
    requestSerialize: serialize_RangeRequest,
    requestDeserialize: deserialize_RangeRequest,
    responseSerialize: serialize_RangeResponse,
    responseDeserialize: deserialize_RangeResponse,
  },
  put: {
    path: '/etcdserverpb.KV/Put',
    requestStream: false,
    responseStream: false,
    requestType: rpc_pb.PutRequest,
    responseType: rpc_pb.PutResponse,
    requestSerialize: serialize_PutRequest,
    requestDeserialize: deserialize_PutRequest,
    responseSerialize: serialize_PutResponse,
    responseDeserialize: deserialize_PutResponse,
  },
  deleteRange: {
    path: '/etcdserverpb.KV/DeleteRange',
    requestStream: false,
    responseStream: false,
    requestType: rpc_pb.DeleteRangeRequest,
    responseType: rpc_pb.DeleteRangeResponse,
    requestSerialize: serialize_DeleteRangeRequest,
    requestDeserialize: deserialize_DeleteRangeRequest,
    responseSerialize: serialize_DeleteRangeResponse,
    responseDeserialize: deserialize_DeleteRangeResponse,
  },
  txn: {
    path: '/etcdserverpb.KV/Txn',
    requestStream: false,
    responseStream: false,
    requestType: rpc_pb.TxnRequest,
    responseType: rpc_pb.TxnResponse,
    requestSerialize: serialize_TxnRequest,
    requestDeserialize: deserialize_TxnRequest,
    responseSerialize: serialize_TxnResponse,
    responseDeserialize: deserialize_TxnResponse,
  },
  compact: {
    path: '/etcdserverpb.KV/Compact',
    requestStream: false,
    responseStream: false,
    requestType: rpc_pb.CompactionRequest,
    responseType: rpc_pb.CompactionResponse,
    requestSerialize: serialize_CompactionRequest,
    requestDeserialize: deserialize_CompactionRequest,
    responseSerialize: serialize_CompactionResponse,
    responseDeserialize: deserialize_CompactionResponse,
  },
};

exports.KVClient = grpc.makeGenericClientConstructor(KVService);
var WatchService = exports.WatchService = {
  watch: {
    path: '/etcdserverpb.Watch/Watch',
    requestStream: false,
    responseStream: false,
    requestType: rpc_pb.WatchRequest,
    responseType: rpc_pb.WatchResponse,
    requestSerialize: serialize_WatchRequest,
    requestDeserialize: deserialize_WatchRequest,
    responseSerialize: serialize_WatchResponse,
    responseDeserialize: deserialize_WatchResponse,
  },
};

exports.WatchClient = grpc.makeGenericClientConstructor(WatchService);
var LeaseService = exports.LeaseService = {
  leaseGrant: {
    path: '/etcdserverpb.Lease/LeaseGrant',
    requestStream: false,
    responseStream: false,
    requestType: rpc_pb.LeaseGrantRequest,
    responseType: rpc_pb.LeaseGrantResponse,
    requestSerialize: serialize_LeaseGrantRequest,
    requestDeserialize: deserialize_LeaseGrantRequest,
    responseSerialize: serialize_LeaseGrantResponse,
    responseDeserialize: deserialize_LeaseGrantResponse,
  },
  leaseRevoke: {
    path: '/etcdserverpb.Lease/LeaseRevoke',
    requestStream: false,
    responseStream: false,
    requestType: rpc_pb.LeaseRevokeRequest,
    responseType: rpc_pb.LeaseRevokeResponse,
    requestSerialize: serialize_LeaseRevokeRequest,
    requestDeserialize: deserialize_LeaseRevokeRequest,
    responseSerialize: serialize_LeaseRevokeResponse,
    responseDeserialize: deserialize_LeaseRevokeResponse,
  },
  leaseKeepAlive: {
    path: '/etcdserverpb.Lease/LeaseKeepAlive',
    requestStream: false,
    responseStream: false,
    requestType: rpc_pb.LeaseKeepAliveRequest,
    responseType: rpc_pb.LeaseKeepAliveResponse,
    requestSerialize: serialize_LeaseKeepAliveRequest,
    requestDeserialize: deserialize_LeaseKeepAliveRequest,
    responseSerialize: serialize_LeaseKeepAliveResponse,
    responseDeserialize: deserialize_LeaseKeepAliveResponse,
  },
};

exports.LeaseClient = grpc.makeGenericClientConstructor(LeaseService);
var ClusterService = exports.ClusterService = {
  memberAdd: {
    path: '/etcdserverpb.Cluster/MemberAdd',
    requestStream: false,
    responseStream: false,
    requestType: rpc_pb.MemberAddRequest,
    responseType: rpc_pb.MemberAddResponse,
    requestSerialize: serialize_MemberAddRequest,
    requestDeserialize: deserialize_MemberAddRequest,
    responseSerialize: serialize_MemberAddResponse,
    responseDeserialize: deserialize_MemberAddResponse,
  },
  memberRemove: {
    path: '/etcdserverpb.Cluster/MemberRemove',
    requestStream: false,
    responseStream: false,
    requestType: rpc_pb.MemberRemoveRequest,
    responseType: rpc_pb.MemberRemoveResponse,
    requestSerialize: serialize_MemberRemoveRequest,
    requestDeserialize: deserialize_MemberRemoveRequest,
    responseSerialize: serialize_MemberRemoveResponse,
    responseDeserialize: deserialize_MemberRemoveResponse,
  },
  memberUpdate: {
    path: '/etcdserverpb.Cluster/MemberUpdate',
    requestStream: false,
    responseStream: false,
    requestType: rpc_pb.MemberUpdateRequest,
    responseType: rpc_pb.MemberUpdateResponse,
    requestSerialize: serialize_MemberUpdateRequest,
    requestDeserialize: deserialize_MemberUpdateRequest,
    responseSerialize: serialize_MemberUpdateResponse,
    responseDeserialize: deserialize_MemberUpdateResponse,
  },
  memberList: {
    path: '/etcdserverpb.Cluster/MemberList',
    requestStream: false,
    responseStream: false,
    requestType: rpc_pb.MemberListRequest,
    responseType: rpc_pb.MemberListResponse,
    requestSerialize: serialize_MemberListRequest,
    requestDeserialize: deserialize_MemberListRequest,
    responseSerialize: serialize_MemberListResponse,
    responseDeserialize: deserialize_MemberListResponse,
  },
};

exports.ClusterClient = grpc.makeGenericClientConstructor(ClusterService);
var MaintenanceService = exports.MaintenanceService = {
  alarm: {
    path: '/etcdserverpb.Maintenance/Alarm',
    requestStream: false,
    responseStream: false,
    requestType: rpc_pb.AlarmRequest,
    responseType: rpc_pb.AlarmResponse,
    requestSerialize: serialize_AlarmRequest,
    requestDeserialize: deserialize_AlarmRequest,
    responseSerialize: serialize_AlarmResponse,
    responseDeserialize: deserialize_AlarmResponse,
  },
  status: {
    path: '/etcdserverpb.Maintenance/Status',
    requestStream: false,
    responseStream: false,
    requestType: rpc_pb.StatusRequest,
    responseType: rpc_pb.StatusResponse,
    requestSerialize: serialize_StatusRequest,
    requestDeserialize: deserialize_StatusRequest,
    responseSerialize: serialize_StatusResponse,
    responseDeserialize: deserialize_StatusResponse,
  },
  defragment: {
    path: '/etcdserverpb.Maintenance/Defragment',
    requestStream: false,
    responseStream: false,
    requestType: rpc_pb.DefragmentRequest,
    responseType: rpc_pb.DefragmentResponse,
    requestSerialize: serialize_DefragmentRequest,
    requestDeserialize: deserialize_DefragmentRequest,
    responseSerialize: serialize_DefragmentResponse,
    responseDeserialize: deserialize_DefragmentResponse,
  },
  hash: {
    path: '/etcdserverpb.Maintenance/Hash',
    requestStream: false,
    responseStream: false,
    requestType: rpc_pb.HashRequest,
    responseType: rpc_pb.HashResponse,
    requestSerialize: serialize_HashRequest,
    requestDeserialize: deserialize_HashRequest,
    responseSerialize: serialize_HashResponse,
    responseDeserialize: deserialize_HashResponse,
  },
  snapshot: {
    path: '/etcdserverpb.Maintenance/Snapshot',
    requestStream: false,
    responseStream: false,
    requestType: rpc_pb.SnapshotRequest,
    responseType: rpc_pb.SnapshotResponse,
    requestSerialize: serialize_SnapshotRequest,
    requestDeserialize: deserialize_SnapshotRequest,
    responseSerialize: serialize_SnapshotResponse,
    responseDeserialize: deserialize_SnapshotResponse,
  },
};

exports.MaintenanceClient = grpc.makeGenericClientConstructor(MaintenanceService);
var AuthService = exports.AuthService = {
  authEnable: {
    path: '/etcdserverpb.Auth/AuthEnable',
    requestStream: false,
    responseStream: false,
    requestType: rpc_pb.AuthEnableRequest,
    responseType: rpc_pb.AuthEnableResponse,
    requestSerialize: serialize_AuthEnableRequest,
    requestDeserialize: deserialize_AuthEnableRequest,
    responseSerialize: serialize_AuthEnableResponse,
    responseDeserialize: deserialize_AuthEnableResponse,
  },
  authDisable: {
    path: '/etcdserverpb.Auth/AuthDisable',
    requestStream: false,
    responseStream: false,
    requestType: rpc_pb.AuthDisableRequest,
    responseType: rpc_pb.AuthDisableResponse,
    requestSerialize: serialize_AuthDisableRequest,
    requestDeserialize: deserialize_AuthDisableRequest,
    responseSerialize: serialize_AuthDisableResponse,
    responseDeserialize: deserialize_AuthDisableResponse,
  },
  authenticate: {
    path: '/etcdserverpb.Auth/Authenticate',
    requestStream: false,
    responseStream: false,
    requestType: rpc_pb.AuthenticateRequest,
    responseType: rpc_pb.AuthenticateResponse,
    requestSerialize: serialize_AuthenticateRequest,
    requestDeserialize: deserialize_AuthenticateRequest,
    responseSerialize: serialize_AuthenticateResponse,
    responseDeserialize: deserialize_AuthenticateResponse,
  },
  userAdd: {
    path: '/etcdserverpb.Auth/UserAdd',
    requestStream: false,
    responseStream: false,
    requestType: rpc_pb.AuthUserAddRequest,
    responseType: rpc_pb.AuthUserAddResponse,
    requestSerialize: serialize_AuthUserAddRequest,
    requestDeserialize: deserialize_AuthUserAddRequest,
    responseSerialize: serialize_AuthUserAddResponse,
    responseDeserialize: deserialize_AuthUserAddResponse,
  },
  userGet: {
    path: '/etcdserverpb.Auth/UserGet',
    requestStream: false,
    responseStream: false,
    requestType: rpc_pb.AuthUserGetRequest,
    responseType: rpc_pb.AuthUserGetResponse,
    requestSerialize: serialize_AuthUserGetRequest,
    requestDeserialize: deserialize_AuthUserGetRequest,
    responseSerialize: serialize_AuthUserGetResponse,
    responseDeserialize: deserialize_AuthUserGetResponse,
  },
  userList: {
    path: '/etcdserverpb.Auth/UserList',
    requestStream: false,
    responseStream: false,
    requestType: rpc_pb.AuthUserListRequest,
    responseType: rpc_pb.AuthUserListResponse,
    requestSerialize: serialize_AuthUserListRequest,
    requestDeserialize: deserialize_AuthUserListRequest,
    responseSerialize: serialize_AuthUserListResponse,
    responseDeserialize: deserialize_AuthUserListResponse,
  },
  userDelete: {
    path: '/etcdserverpb.Auth/UserDelete',
    requestStream: false,
    responseStream: false,
    requestType: rpc_pb.AuthUserDeleteRequest,
    responseType: rpc_pb.AuthUserDeleteResponse,
    requestSerialize: serialize_AuthUserDeleteRequest,
    requestDeserialize: deserialize_AuthUserDeleteRequest,
    responseSerialize: serialize_AuthUserDeleteResponse,
    responseDeserialize: deserialize_AuthUserDeleteResponse,
  },
  userChangePassword: {
    path: '/etcdserverpb.Auth/UserChangePassword',
    requestStream: false,
    responseStream: false,
    requestType: rpc_pb.AuthUserChangePasswordRequest,
    responseType: rpc_pb.AuthUserChangePasswordResponse,
    requestSerialize: serialize_AuthUserChangePasswordRequest,
    requestDeserialize: deserialize_AuthUserChangePasswordRequest,
    responseSerialize: serialize_AuthUserChangePasswordResponse,
    responseDeserialize: deserialize_AuthUserChangePasswordResponse,
  },
  userGrantRole: {
    path: '/etcdserverpb.Auth/UserGrantRole',
    requestStream: false,
    responseStream: false,
    requestType: rpc_pb.AuthUserGrantRoleRequest,
    responseType: rpc_pb.AuthUserGrantRoleResponse,
    requestSerialize: serialize_AuthUserGrantRoleRequest,
    requestDeserialize: deserialize_AuthUserGrantRoleRequest,
    responseSerialize: serialize_AuthUserGrantRoleResponse,
    responseDeserialize: deserialize_AuthUserGrantRoleResponse,
  },
  userRevokeRole: {
    path: '/etcdserverpb.Auth/UserRevokeRole',
    requestStream: false,
    responseStream: false,
    requestType: rpc_pb.AuthUserRevokeRoleRequest,
    responseType: rpc_pb.AuthUserRevokeRoleResponse,
    requestSerialize: serialize_AuthUserRevokeRoleRequest,
    requestDeserialize: deserialize_AuthUserRevokeRoleRequest,
    responseSerialize: serialize_AuthUserRevokeRoleResponse,
    responseDeserialize: deserialize_AuthUserRevokeRoleResponse,
  },
  roleAdd: {
    path: '/etcdserverpb.Auth/RoleAdd',
    requestStream: false,
    responseStream: false,
    requestType: rpc_pb.AuthRoleAddRequest,
    responseType: rpc_pb.AuthRoleAddResponse,
    requestSerialize: serialize_AuthRoleAddRequest,
    requestDeserialize: deserialize_AuthRoleAddRequest,
    responseSerialize: serialize_AuthRoleAddResponse,
    responseDeserialize: deserialize_AuthRoleAddResponse,
  },
  roleGet: {
    path: '/etcdserverpb.Auth/RoleGet',
    requestStream: false,
    responseStream: false,
    requestType: rpc_pb.AuthRoleGetRequest,
    responseType: rpc_pb.AuthRoleGetResponse,
    requestSerialize: serialize_AuthRoleGetRequest,
    requestDeserialize: deserialize_AuthRoleGetRequest,
    responseSerialize: serialize_AuthRoleGetResponse,
    responseDeserialize: deserialize_AuthRoleGetResponse,
  },
  roleList: {
    path: '/etcdserverpb.Auth/RoleList',
    requestStream: false,
    responseStream: false,
    requestType: rpc_pb.AuthRoleListRequest,
    responseType: rpc_pb.AuthRoleListResponse,
    requestSerialize: serialize_AuthRoleListRequest,
    requestDeserialize: deserialize_AuthRoleListRequest,
    responseSerialize: serialize_AuthRoleListResponse,
    responseDeserialize: deserialize_AuthRoleListResponse,
  },
  roleDelete: {
    path: '/etcdserverpb.Auth/RoleDelete',
    requestStream: false,
    responseStream: false,
    requestType: rpc_pb.AuthRoleDeleteRequest,
    responseType: rpc_pb.AuthRoleDeleteResponse,
    requestSerialize: serialize_AuthRoleDeleteRequest,
    requestDeserialize: deserialize_AuthRoleDeleteRequest,
    responseSerialize: serialize_AuthRoleDeleteResponse,
    responseDeserialize: deserialize_AuthRoleDeleteResponse,
  },
  roleGrantPermission: {
    path: '/etcdserverpb.Auth/RoleGrantPermission',
    requestStream: false,
    responseStream: false,
    requestType: rpc_pb.AuthRoleGrantPermissionRequest,
    responseType: rpc_pb.AuthRoleGrantPermissionResponse,
    requestSerialize: serialize_AuthRoleGrantPermissionRequest,
    requestDeserialize: deserialize_AuthRoleGrantPermissionRequest,
    responseSerialize: serialize_AuthRoleGrantPermissionResponse,
    responseDeserialize: deserialize_AuthRoleGrantPermissionResponse,
  },
  roleRevokePermission: {
    path: '/etcdserverpb.Auth/RoleRevokePermission',
    requestStream: false,
    responseStream: false,
    requestType: rpc_pb.AuthRoleRevokePermissionRequest,
    responseType: rpc_pb.AuthRoleRevokePermissionResponse,
    requestSerialize: serialize_AuthRoleRevokePermissionRequest,
    requestDeserialize: deserialize_AuthRoleRevokePermissionRequest,
    responseSerialize: serialize_AuthRoleRevokePermissionResponse,
    responseDeserialize: deserialize_AuthRoleRevokePermissionResponse,
  },
};

exports.AuthClient = grpc.makeGenericClientConstructor(AuthService);
