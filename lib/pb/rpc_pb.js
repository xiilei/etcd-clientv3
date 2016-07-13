/**
 * @fileoverview
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var authpb_pb = require('./authpb_pb.js');
var googleapi_pb = require('./googleapi_pb.js');
var mvccpb_pb = require('./mvccpb_pb.js');
goog.exportSymbol('proto.etcdserverpb.AlarmMember', null, global);
goog.exportSymbol('proto.etcdserverpb.AlarmRequest', null, global);
goog.exportSymbol('proto.etcdserverpb.AlarmRequest.AlarmAction', null, global);
goog.exportSymbol('proto.etcdserverpb.AlarmResponse', null, global);
goog.exportSymbol('proto.etcdserverpb.AlarmType', null, global);
goog.exportSymbol('proto.etcdserverpb.AuthDisableRequest', null, global);
goog.exportSymbol('proto.etcdserverpb.AuthDisableResponse', null, global);
goog.exportSymbol('proto.etcdserverpb.AuthEnableRequest', null, global);
goog.exportSymbol('proto.etcdserverpb.AuthEnableResponse', null, global);
goog.exportSymbol('proto.etcdserverpb.AuthRoleAddRequest', null, global);
goog.exportSymbol('proto.etcdserverpb.AuthRoleAddResponse', null, global);
goog.exportSymbol('proto.etcdserverpb.AuthRoleDeleteRequest', null, global);
goog.exportSymbol('proto.etcdserverpb.AuthRoleDeleteResponse', null, global);
goog.exportSymbol('proto.etcdserverpb.AuthRoleGetRequest', null, global);
goog.exportSymbol('proto.etcdserverpb.AuthRoleGetResponse', null, global);
goog.exportSymbol('proto.etcdserverpb.AuthRoleGrantPermissionRequest', null, global);
goog.exportSymbol('proto.etcdserverpb.AuthRoleGrantPermissionResponse', null, global);
goog.exportSymbol('proto.etcdserverpb.AuthRoleListRequest', null, global);
goog.exportSymbol('proto.etcdserverpb.AuthRoleListResponse', null, global);
goog.exportSymbol('proto.etcdserverpb.AuthRoleRevokePermissionRequest', null, global);
goog.exportSymbol('proto.etcdserverpb.AuthRoleRevokePermissionResponse', null, global);
goog.exportSymbol('proto.etcdserverpb.AuthUserAddRequest', null, global);
goog.exportSymbol('proto.etcdserverpb.AuthUserAddResponse', null, global);
goog.exportSymbol('proto.etcdserverpb.AuthUserChangePasswordRequest', null, global);
goog.exportSymbol('proto.etcdserverpb.AuthUserChangePasswordResponse', null, global);
goog.exportSymbol('proto.etcdserverpb.AuthUserDeleteRequest', null, global);
goog.exportSymbol('proto.etcdserverpb.AuthUserDeleteResponse', null, global);
goog.exportSymbol('proto.etcdserverpb.AuthUserGetRequest', null, global);
goog.exportSymbol('proto.etcdserverpb.AuthUserGetResponse', null, global);
goog.exportSymbol('proto.etcdserverpb.AuthUserGrantRoleRequest', null, global);
goog.exportSymbol('proto.etcdserverpb.AuthUserGrantRoleResponse', null, global);
goog.exportSymbol('proto.etcdserverpb.AuthUserListRequest', null, global);
goog.exportSymbol('proto.etcdserverpb.AuthUserListResponse', null, global);
goog.exportSymbol('proto.etcdserverpb.AuthUserRevokeRoleRequest', null, global);
goog.exportSymbol('proto.etcdserverpb.AuthUserRevokeRoleResponse', null, global);
goog.exportSymbol('proto.etcdserverpb.AuthenticateRequest', null, global);
goog.exportSymbol('proto.etcdserverpb.AuthenticateResponse', null, global);
goog.exportSymbol('proto.etcdserverpb.CompactionRequest', null, global);
goog.exportSymbol('proto.etcdserverpb.CompactionResponse', null, global);
goog.exportSymbol('proto.etcdserverpb.Compare', null, global);
goog.exportSymbol('proto.etcdserverpb.Compare.CompareResult', null, global);
goog.exportSymbol('proto.etcdserverpb.Compare.CompareTarget', null, global);
goog.exportSymbol('proto.etcdserverpb.DefragmentRequest', null, global);
goog.exportSymbol('proto.etcdserverpb.DefragmentResponse', null, global);
goog.exportSymbol('proto.etcdserverpb.DeleteRangeRequest', null, global);
goog.exportSymbol('proto.etcdserverpb.DeleteRangeResponse', null, global);
goog.exportSymbol('proto.etcdserverpb.HashRequest', null, global);
goog.exportSymbol('proto.etcdserverpb.HashResponse', null, global);
goog.exportSymbol('proto.etcdserverpb.LeaseGrantRequest', null, global);
goog.exportSymbol('proto.etcdserverpb.LeaseGrantResponse', null, global);
goog.exportSymbol('proto.etcdserverpb.LeaseKeepAliveRequest', null, global);
goog.exportSymbol('proto.etcdserverpb.LeaseKeepAliveResponse', null, global);
goog.exportSymbol('proto.etcdserverpb.LeaseRevokeRequest', null, global);
goog.exportSymbol('proto.etcdserverpb.LeaseRevokeResponse', null, global);
goog.exportSymbol('proto.etcdserverpb.Member', null, global);
goog.exportSymbol('proto.etcdserverpb.MemberAddRequest', null, global);
goog.exportSymbol('proto.etcdserverpb.MemberAddResponse', null, global);
goog.exportSymbol('proto.etcdserverpb.MemberListRequest', null, global);
goog.exportSymbol('proto.etcdserverpb.MemberListResponse', null, global);
goog.exportSymbol('proto.etcdserverpb.MemberRemoveRequest', null, global);
goog.exportSymbol('proto.etcdserverpb.MemberRemoveResponse', null, global);
goog.exportSymbol('proto.etcdserverpb.MemberUpdateRequest', null, global);
goog.exportSymbol('proto.etcdserverpb.MemberUpdateResponse', null, global);
goog.exportSymbol('proto.etcdserverpb.PutRequest', null, global);
goog.exportSymbol('proto.etcdserverpb.PutResponse', null, global);
goog.exportSymbol('proto.etcdserverpb.RangeRequest', null, global);
goog.exportSymbol('proto.etcdserverpb.RangeRequest.SortOrder', null, global);
goog.exportSymbol('proto.etcdserverpb.RangeRequest.SortTarget', null, global);
goog.exportSymbol('proto.etcdserverpb.RangeResponse', null, global);
goog.exportSymbol('proto.etcdserverpb.RequestOp', null, global);
goog.exportSymbol('proto.etcdserverpb.ResponseHeader', null, global);
goog.exportSymbol('proto.etcdserverpb.ResponseOp', null, global);
goog.exportSymbol('proto.etcdserverpb.SnapshotRequest', null, global);
goog.exportSymbol('proto.etcdserverpb.SnapshotResponse', null, global);
goog.exportSymbol('proto.etcdserverpb.StatusRequest', null, global);
goog.exportSymbol('proto.etcdserverpb.StatusResponse', null, global);
goog.exportSymbol('proto.etcdserverpb.TxnRequest', null, global);
goog.exportSymbol('proto.etcdserverpb.TxnResponse', null, global);
goog.exportSymbol('proto.etcdserverpb.WatchCancelRequest', null, global);
goog.exportSymbol('proto.etcdserverpb.WatchCreateRequest', null, global);
goog.exportSymbol('proto.etcdserverpb.WatchCreateRequest.FilterType', null, global);
goog.exportSymbol('proto.etcdserverpb.WatchRequest', null, global);
goog.exportSymbol('proto.etcdserverpb.WatchResponse', null, global);

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.etcdserverpb.ResponseHeader = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.etcdserverpb.ResponseHeader, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.etcdserverpb.ResponseHeader.displayName = 'proto.etcdserverpb.ResponseHeader';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.etcdserverpb.ResponseHeader.prototype.toObject = function(opt_includeInstance) {
  return proto.etcdserverpb.ResponseHeader.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.etcdserverpb.ResponseHeader} msg The msg instance to transform.
 * @return {!Object}
 */
proto.etcdserverpb.ResponseHeader.toObject = function(includeInstance, msg) {
  var f, obj = {
    clusterId: jspb.Message.getField(msg, 1),
    memberId: jspb.Message.getField(msg, 2),
    revision: jspb.Message.getField(msg, 3),
    raftTerm: jspb.Message.getField(msg, 4)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.etcdserverpb.ResponseHeader}
 */
proto.etcdserverpb.ResponseHeader.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.etcdserverpb.ResponseHeader;
  return proto.etcdserverpb.ResponseHeader.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.etcdserverpb.ResponseHeader} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.etcdserverpb.ResponseHeader}
 */
proto.etcdserverpb.ResponseHeader.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setClusterId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setMemberId(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setRevision(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setRaftTerm(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.etcdserverpb.ResponseHeader} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.etcdserverpb.ResponseHeader.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.etcdserverpb.ResponseHeader.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.etcdserverpb.ResponseHeader.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getClusterId();
  if (f != null) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = this.getMemberId();
  if (f != null) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = this.getRevision();
  if (f != null) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = this.getRaftTerm();
  if (f != null) {
    writer.writeUint64(
      4,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.etcdserverpb.ResponseHeader} The clone.
 */
proto.etcdserverpb.ResponseHeader.prototype.cloneMessage = function() {
  return /** @type {!proto.etcdserverpb.ResponseHeader} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional uint64 cluster_id = 1;
 * @return {number?}
 */
proto.etcdserverpb.ResponseHeader.prototype.getClusterId = function() {
  return /** @type {number?} */ (jspb.Message.getField(this, 1));
};


/** @param {number?|undefined} value  */
proto.etcdserverpb.ResponseHeader.prototype.setClusterId = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.etcdserverpb.ResponseHeader.prototype.clearClusterId = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * optional uint64 member_id = 2;
 * @return {number?}
 */
proto.etcdserverpb.ResponseHeader.prototype.getMemberId = function() {
  return /** @type {number?} */ (jspb.Message.getField(this, 2));
};


/** @param {number?|undefined} value  */
proto.etcdserverpb.ResponseHeader.prototype.setMemberId = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.etcdserverpb.ResponseHeader.prototype.clearMemberId = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * optional int64 revision = 3;
 * @return {number?}
 */
proto.etcdserverpb.ResponseHeader.prototype.getRevision = function() {
  return /** @type {number?} */ (jspb.Message.getField(this, 3));
};


/** @param {number?|undefined} value  */
proto.etcdserverpb.ResponseHeader.prototype.setRevision = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.etcdserverpb.ResponseHeader.prototype.clearRevision = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * optional uint64 raft_term = 4;
 * @return {number?}
 */
proto.etcdserverpb.ResponseHeader.prototype.getRaftTerm = function() {
  return /** @type {number?} */ (jspb.Message.getField(this, 4));
};


/** @param {number?|undefined} value  */
proto.etcdserverpb.ResponseHeader.prototype.setRaftTerm = function(value) {
  jspb.Message.setField(this, 4, value);
};


proto.etcdserverpb.ResponseHeader.prototype.clearRaftTerm = function() {
  jspb.Message.setField(this, 4, undefined);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.etcdserverpb.RangeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.etcdserverpb.RangeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.etcdserverpb.RangeRequest.displayName = 'proto.etcdserverpb.RangeRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.etcdserverpb.RangeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.etcdserverpb.RangeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.etcdserverpb.RangeRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.etcdserverpb.RangeRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    key: jspb.Message.getField(msg, 1),
    rangeEnd: jspb.Message.getField(msg, 2),
    limit: jspb.Message.getField(msg, 3),
    revision: jspb.Message.getField(msg, 4),
    sortOrder: jspb.Message.getField(msg, 5),
    sortTarget: jspb.Message.getField(msg, 6),
    serializable: jspb.Message.getField(msg, 7),
    keysOnly: jspb.Message.getField(msg, 8),
    countOnly: jspb.Message.getField(msg, 9)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.etcdserverpb.RangeRequest}
 */
proto.etcdserverpb.RangeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.etcdserverpb.RangeRequest;
  return proto.etcdserverpb.RangeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.etcdserverpb.RangeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.etcdserverpb.RangeRequest}
 */
proto.etcdserverpb.RangeRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setKey(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setRangeEnd(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setLimit(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setRevision(value);
      break;
    case 5:
      var value = /** @type {!proto.etcdserverpb.RangeRequest.SortOrder} */ (reader.readEnum());
      msg.setSortOrder(value);
      break;
    case 6:
      var value = /** @type {!proto.etcdserverpb.RangeRequest.SortTarget} */ (reader.readEnum());
      msg.setSortTarget(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSerializable(value);
      break;
    case 8:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setKeysOnly(value);
      break;
    case 9:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setCountOnly(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.etcdserverpb.RangeRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.etcdserverpb.RangeRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.etcdserverpb.RangeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.etcdserverpb.RangeRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getKey();
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = this.getRangeEnd();
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = this.getLimit();
  if (f != null) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = this.getRevision();
  if (f != null) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = this.getSortOrder();
  if (f != null) {
    writer.writeEnum(
      5,
      f
    );
  }
  f = this.getSortTarget();
  if (f != null) {
    writer.writeEnum(
      6,
      f
    );
  }
  f = this.getSerializable();
  if (f != null) {
    writer.writeBool(
      7,
      f
    );
  }
  f = this.getKeysOnly();
  if (f != null) {
    writer.writeBool(
      8,
      f
    );
  }
  f = this.getCountOnly();
  if (f != null) {
    writer.writeBool(
      9,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.etcdserverpb.RangeRequest} The clone.
 */
proto.etcdserverpb.RangeRequest.prototype.cloneMessage = function() {
  return /** @type {!proto.etcdserverpb.RangeRequest} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional string key = 1;
 * @return {string?}
 */
proto.etcdserverpb.RangeRequest.prototype.getKey = function() {
  return /** @type {string?} */ (jspb.Message.getField(this, 1));
};


/** @param {string?|undefined} value  */
proto.etcdserverpb.RangeRequest.prototype.setKey = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.etcdserverpb.RangeRequest.prototype.clearKey = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * optional string range_end = 2;
 * @return {string?}
 */
proto.etcdserverpb.RangeRequest.prototype.getRangeEnd = function() {
  return /** @type {string?} */ (jspb.Message.getField(this, 2));
};


/** @param {string?|undefined} value  */
proto.etcdserverpb.RangeRequest.prototype.setRangeEnd = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.etcdserverpb.RangeRequest.prototype.clearRangeEnd = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * optional int64 limit = 3;
 * @return {number?}
 */
proto.etcdserverpb.RangeRequest.prototype.getLimit = function() {
  return /** @type {number?} */ (jspb.Message.getField(this, 3));
};


/** @param {number?|undefined} value  */
proto.etcdserverpb.RangeRequest.prototype.setLimit = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.etcdserverpb.RangeRequest.prototype.clearLimit = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * optional int64 revision = 4;
 * @return {number?}
 */
proto.etcdserverpb.RangeRequest.prototype.getRevision = function() {
  return /** @type {number?} */ (jspb.Message.getField(this, 4));
};


/** @param {number?|undefined} value  */
proto.etcdserverpb.RangeRequest.prototype.setRevision = function(value) {
  jspb.Message.setField(this, 4, value);
};


proto.etcdserverpb.RangeRequest.prototype.clearRevision = function() {
  jspb.Message.setField(this, 4, undefined);
};


/**
 * optional SortOrder sort_order = 5;
 * @return {proto.etcdserverpb.RangeRequest.SortOrder}
 */
proto.etcdserverpb.RangeRequest.prototype.getSortOrder = function() {
  return /** @type {proto.etcdserverpb.RangeRequest.SortOrder} */ (jspb.Message.getField(this, 5));
};


/** @param {proto.etcdserverpb.RangeRequest.SortOrder|undefined} value  */
proto.etcdserverpb.RangeRequest.prototype.setSortOrder = function(value) {
  jspb.Message.setField(this, 5, value);
};


proto.etcdserverpb.RangeRequest.prototype.clearSortOrder = function() {
  jspb.Message.setField(this, 5, undefined);
};


/**
 * optional SortTarget sort_target = 6;
 * @return {proto.etcdserverpb.RangeRequest.SortTarget}
 */
proto.etcdserverpb.RangeRequest.prototype.getSortTarget = function() {
  return /** @type {proto.etcdserverpb.RangeRequest.SortTarget} */ (jspb.Message.getField(this, 6));
};


/** @param {proto.etcdserverpb.RangeRequest.SortTarget|undefined} value  */
proto.etcdserverpb.RangeRequest.prototype.setSortTarget = function(value) {
  jspb.Message.setField(this, 6, value);
};


proto.etcdserverpb.RangeRequest.prototype.clearSortTarget = function() {
  jspb.Message.setField(this, 6, undefined);
};


/**
 * optional bool serializable = 7;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean?}
 */
proto.etcdserverpb.RangeRequest.prototype.getSerializable = function() {
  return /** @type {boolean?} */ (jspb.Message.getField(this, 7));
};


/** @param {boolean?|undefined} value  */
proto.etcdserverpb.RangeRequest.prototype.setSerializable = function(value) {
  jspb.Message.setField(this, 7, value);
};


proto.etcdserverpb.RangeRequest.prototype.clearSerializable = function() {
  jspb.Message.setField(this, 7, undefined);
};


/**
 * optional bool keys_only = 8;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean?}
 */
proto.etcdserverpb.RangeRequest.prototype.getKeysOnly = function() {
  return /** @type {boolean?} */ (jspb.Message.getField(this, 8));
};


/** @param {boolean?|undefined} value  */
proto.etcdserverpb.RangeRequest.prototype.setKeysOnly = function(value) {
  jspb.Message.setField(this, 8, value);
};


proto.etcdserverpb.RangeRequest.prototype.clearKeysOnly = function() {
  jspb.Message.setField(this, 8, undefined);
};


/**
 * optional bool count_only = 9;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean?}
 */
proto.etcdserverpb.RangeRequest.prototype.getCountOnly = function() {
  return /** @type {boolean?} */ (jspb.Message.getField(this, 9));
};


/** @param {boolean?|undefined} value  */
proto.etcdserverpb.RangeRequest.prototype.setCountOnly = function(value) {
  jspb.Message.setField(this, 9, value);
};


proto.etcdserverpb.RangeRequest.prototype.clearCountOnly = function() {
  jspb.Message.setField(this, 9, undefined);
};


/**
 * @enum {number}
 */
proto.etcdserverpb.RangeRequest.SortOrder = {
  NONE: 0,
  ASCEND: 1,
  DESCEND: 2
};

/**
 * @enum {number}
 */
proto.etcdserverpb.RangeRequest.SortTarget = {
  KEY: 0,
  VERSION: 1,
  CREATE: 2,
  MOD: 3,
  VALUE: 4
};


/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.etcdserverpb.RangeResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.etcdserverpb.RangeResponse.repeatedFields_, null);
};
goog.inherits(proto.etcdserverpb.RangeResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.etcdserverpb.RangeResponse.displayName = 'proto.etcdserverpb.RangeResponse';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.etcdserverpb.RangeResponse.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.etcdserverpb.RangeResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.etcdserverpb.RangeResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.etcdserverpb.RangeResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.etcdserverpb.RangeResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && proto.etcdserverpb.ResponseHeader.toObject(includeInstance, f),
    kvsList: jspb.Message.toObjectList(msg.getKvsList(),
    mvccpb_pb.KeyValue.toObject, includeInstance),
    more: jspb.Message.getField(msg, 3),
    count: jspb.Message.getField(msg, 4)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.etcdserverpb.RangeResponse}
 */
proto.etcdserverpb.RangeResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.etcdserverpb.RangeResponse;
  return proto.etcdserverpb.RangeResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.etcdserverpb.RangeResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.etcdserverpb.RangeResponse}
 */
proto.etcdserverpb.RangeResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.etcdserverpb.ResponseHeader;
      reader.readMessage(value,proto.etcdserverpb.ResponseHeader.deserializeBinaryFromReader);
      msg.setHeader(value);
      break;
    case 2:
      var value = new mvccpb_pb.KeyValue;
      reader.readMessage(value,mvccpb_pb.KeyValue.deserializeBinaryFromReader);
      msg.getKvsList().push(value);
      msg.setKvsList(msg.getKvsList());
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setMore(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.etcdserverpb.RangeResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.etcdserverpb.RangeResponse.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.etcdserverpb.RangeResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.etcdserverpb.RangeResponse.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getHeader();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.etcdserverpb.ResponseHeader.serializeBinaryToWriter
    );
  }
  f = this.getKvsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      mvccpb_pb.KeyValue.serializeBinaryToWriter
    );
  }
  f = this.getMore();
  if (f != null) {
    writer.writeBool(
      3,
      f
    );
  }
  f = this.getCount();
  if (f != null) {
    writer.writeInt64(
      4,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.etcdserverpb.RangeResponse} The clone.
 */
proto.etcdserverpb.RangeResponse.prototype.cloneMessage = function() {
  return /** @type {!proto.etcdserverpb.RangeResponse} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional ResponseHeader header = 1;
 * @return {proto.etcdserverpb.ResponseHeader}
 */
proto.etcdserverpb.RangeResponse.prototype.getHeader = function() {
  return /** @type{proto.etcdserverpb.ResponseHeader} */ (
    jspb.Message.getWrapperField(this, proto.etcdserverpb.ResponseHeader, 1));
};


/** @param {proto.etcdserverpb.ResponseHeader|undefined} value  */
proto.etcdserverpb.RangeResponse.prototype.setHeader = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.etcdserverpb.RangeResponse.prototype.clearHeader = function() {
  this.setHeader(undefined);
};


/**
 * repeated mvccpb.KeyValue kvs = 2;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.mvccpb.KeyValue>}
 */
proto.etcdserverpb.RangeResponse.prototype.getKvsList = function() {
  return /** @type{!Array.<!proto.mvccpb.KeyValue>} */ (
    jspb.Message.getRepeatedWrapperField(this, mvccpb_pb.KeyValue, 2));
};


/** @param {Array.<!proto.mvccpb.KeyValue>|undefined} value  */
proto.etcdserverpb.RangeResponse.prototype.setKvsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 2, value);
};


proto.etcdserverpb.RangeResponse.prototype.clearKvsList = function() {
  this.setKvsList([]);
};


/**
 * optional bool more = 3;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean?}
 */
proto.etcdserverpb.RangeResponse.prototype.getMore = function() {
  return /** @type {boolean?} */ (jspb.Message.getField(this, 3));
};


/** @param {boolean?|undefined} value  */
proto.etcdserverpb.RangeResponse.prototype.setMore = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.etcdserverpb.RangeResponse.prototype.clearMore = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * optional int64 count = 4;
 * @return {number?}
 */
proto.etcdserverpb.RangeResponse.prototype.getCount = function() {
  return /** @type {number?} */ (jspb.Message.getField(this, 4));
};


/** @param {number?|undefined} value  */
proto.etcdserverpb.RangeResponse.prototype.setCount = function(value) {
  jspb.Message.setField(this, 4, value);
};


proto.etcdserverpb.RangeResponse.prototype.clearCount = function() {
  jspb.Message.setField(this, 4, undefined);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.etcdserverpb.PutRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.etcdserverpb.PutRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.etcdserverpb.PutRequest.displayName = 'proto.etcdserverpb.PutRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.etcdserverpb.PutRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.etcdserverpb.PutRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.etcdserverpb.PutRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.etcdserverpb.PutRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    key: jspb.Message.getField(msg, 1),
    value: jspb.Message.getField(msg, 2),
    lease: jspb.Message.getField(msg, 3),
    prevKv: jspb.Message.getField(msg, 4)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.etcdserverpb.PutRequest}
 */
proto.etcdserverpb.PutRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.etcdserverpb.PutRequest;
  return proto.etcdserverpb.PutRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.etcdserverpb.PutRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.etcdserverpb.PutRequest}
 */
proto.etcdserverpb.PutRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setKey(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setValue(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setLease(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPrevKv(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.etcdserverpb.PutRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.etcdserverpb.PutRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.etcdserverpb.PutRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.etcdserverpb.PutRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getKey();
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = this.getValue();
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = this.getLease();
  if (f != null) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = this.getPrevKv();
  if (f != null) {
    writer.writeBool(
      4,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.etcdserverpb.PutRequest} The clone.
 */
proto.etcdserverpb.PutRequest.prototype.cloneMessage = function() {
  return /** @type {!proto.etcdserverpb.PutRequest} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional string key = 1;
 * @return {string?}
 */
proto.etcdserverpb.PutRequest.prototype.getKey = function() {
  return /** @type {string?} */ (jspb.Message.getField(this, 1));
};


/** @param {string?|undefined} value  */
proto.etcdserverpb.PutRequest.prototype.setKey = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.etcdserverpb.PutRequest.prototype.clearKey = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * optional string value = 2;
 * @return {string?}
 */
proto.etcdserverpb.PutRequest.prototype.getValue = function() {
  return /** @type {string?} */ (jspb.Message.getField(this, 2));
};


/** @param {string?|undefined} value  */
proto.etcdserverpb.PutRequest.prototype.setValue = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.etcdserverpb.PutRequest.prototype.clearValue = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * optional int64 lease = 3;
 * @return {number?}
 */
proto.etcdserverpb.PutRequest.prototype.getLease = function() {
  return /** @type {number?} */ (jspb.Message.getField(this, 3));
};


/** @param {number?|undefined} value  */
proto.etcdserverpb.PutRequest.prototype.setLease = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.etcdserverpb.PutRequest.prototype.clearLease = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * optional bool prev_kv = 4;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean?}
 */
proto.etcdserverpb.PutRequest.prototype.getPrevKv = function() {
  return /** @type {boolean?} */ (jspb.Message.getField(this, 4));
};


/** @param {boolean?|undefined} value  */
proto.etcdserverpb.PutRequest.prototype.setPrevKv = function(value) {
  jspb.Message.setField(this, 4, value);
};


proto.etcdserverpb.PutRequest.prototype.clearPrevKv = function() {
  jspb.Message.setField(this, 4, undefined);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.etcdserverpb.PutResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.etcdserverpb.PutResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.etcdserverpb.PutResponse.displayName = 'proto.etcdserverpb.PutResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.etcdserverpb.PutResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.etcdserverpb.PutResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.etcdserverpb.PutResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.etcdserverpb.PutResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && proto.etcdserverpb.ResponseHeader.toObject(includeInstance, f),
    prevKv: (f = msg.getPrevKv()) && mvccpb_pb.KeyValue.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.etcdserverpb.PutResponse}
 */
proto.etcdserverpb.PutResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.etcdserverpb.PutResponse;
  return proto.etcdserverpb.PutResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.etcdserverpb.PutResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.etcdserverpb.PutResponse}
 */
proto.etcdserverpb.PutResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.etcdserverpb.ResponseHeader;
      reader.readMessage(value,proto.etcdserverpb.ResponseHeader.deserializeBinaryFromReader);
      msg.setHeader(value);
      break;
    case 2:
      var value = new mvccpb_pb.KeyValue;
      reader.readMessage(value,mvccpb_pb.KeyValue.deserializeBinaryFromReader);
      msg.setPrevKv(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.etcdserverpb.PutResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.etcdserverpb.PutResponse.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.etcdserverpb.PutResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.etcdserverpb.PutResponse.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getHeader();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.etcdserverpb.ResponseHeader.serializeBinaryToWriter
    );
  }
  f = this.getPrevKv();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      mvccpb_pb.KeyValue.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.etcdserverpb.PutResponse} The clone.
 */
proto.etcdserverpb.PutResponse.prototype.cloneMessage = function() {
  return /** @type {!proto.etcdserverpb.PutResponse} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional ResponseHeader header = 1;
 * @return {proto.etcdserverpb.ResponseHeader}
 */
proto.etcdserverpb.PutResponse.prototype.getHeader = function() {
  return /** @type{proto.etcdserverpb.ResponseHeader} */ (
    jspb.Message.getWrapperField(this, proto.etcdserverpb.ResponseHeader, 1));
};


/** @param {proto.etcdserverpb.ResponseHeader|undefined} value  */
proto.etcdserverpb.PutResponse.prototype.setHeader = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.etcdserverpb.PutResponse.prototype.clearHeader = function() {
  this.setHeader(undefined);
};


/**
 * optional mvccpb.KeyValue prev_kv = 2;
 * @return {proto.mvccpb.KeyValue}
 */
proto.etcdserverpb.PutResponse.prototype.getPrevKv = function() {
  return /** @type{proto.mvccpb.KeyValue} */ (
    jspb.Message.getWrapperField(this, mvccpb_pb.KeyValue, 2));
};


/** @param {proto.mvccpb.KeyValue|undefined} value  */
proto.etcdserverpb.PutResponse.prototype.setPrevKv = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.etcdserverpb.PutResponse.prototype.clearPrevKv = function() {
  this.setPrevKv(undefined);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.etcdserverpb.DeleteRangeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.etcdserverpb.DeleteRangeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.etcdserverpb.DeleteRangeRequest.displayName = 'proto.etcdserverpb.DeleteRangeRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.etcdserverpb.DeleteRangeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.etcdserverpb.DeleteRangeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.etcdserverpb.DeleteRangeRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.etcdserverpb.DeleteRangeRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    key: jspb.Message.getField(msg, 1),
    rangeEnd: jspb.Message.getField(msg, 2),
    prevKv: jspb.Message.getField(msg, 3)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.etcdserverpb.DeleteRangeRequest}
 */
proto.etcdserverpb.DeleteRangeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.etcdserverpb.DeleteRangeRequest;
  return proto.etcdserverpb.DeleteRangeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.etcdserverpb.DeleteRangeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.etcdserverpb.DeleteRangeRequest}
 */
proto.etcdserverpb.DeleteRangeRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setKey(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setRangeEnd(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPrevKv(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.etcdserverpb.DeleteRangeRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.etcdserverpb.DeleteRangeRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.etcdserverpb.DeleteRangeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.etcdserverpb.DeleteRangeRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getKey();
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = this.getRangeEnd();
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = this.getPrevKv();
  if (f != null) {
    writer.writeBool(
      3,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.etcdserverpb.DeleteRangeRequest} The clone.
 */
proto.etcdserverpb.DeleteRangeRequest.prototype.cloneMessage = function() {
  return /** @type {!proto.etcdserverpb.DeleteRangeRequest} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional string key = 1;
 * @return {string?}
 */
proto.etcdserverpb.DeleteRangeRequest.prototype.getKey = function() {
  return /** @type {string?} */ (jspb.Message.getField(this, 1));
};


/** @param {string?|undefined} value  */
proto.etcdserverpb.DeleteRangeRequest.prototype.setKey = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.etcdserverpb.DeleteRangeRequest.prototype.clearKey = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * optional string range_end = 2;
 * @return {string?}
 */
proto.etcdserverpb.DeleteRangeRequest.prototype.getRangeEnd = function() {
  return /** @type {string?} */ (jspb.Message.getField(this, 2));
};


/** @param {string?|undefined} value  */
proto.etcdserverpb.DeleteRangeRequest.prototype.setRangeEnd = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.etcdserverpb.DeleteRangeRequest.prototype.clearRangeEnd = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * optional bool prev_kv = 3;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean?}
 */
proto.etcdserverpb.DeleteRangeRequest.prototype.getPrevKv = function() {
  return /** @type {boolean?} */ (jspb.Message.getField(this, 3));
};


/** @param {boolean?|undefined} value  */
proto.etcdserverpb.DeleteRangeRequest.prototype.setPrevKv = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.etcdserverpb.DeleteRangeRequest.prototype.clearPrevKv = function() {
  jspb.Message.setField(this, 3, undefined);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.etcdserverpb.DeleteRangeResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.etcdserverpb.DeleteRangeResponse.repeatedFields_, null);
};
goog.inherits(proto.etcdserverpb.DeleteRangeResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.etcdserverpb.DeleteRangeResponse.displayName = 'proto.etcdserverpb.DeleteRangeResponse';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.etcdserverpb.DeleteRangeResponse.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.etcdserverpb.DeleteRangeResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.etcdserverpb.DeleteRangeResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.etcdserverpb.DeleteRangeResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.etcdserverpb.DeleteRangeResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && proto.etcdserverpb.ResponseHeader.toObject(includeInstance, f),
    deleted: jspb.Message.getField(msg, 2),
    prevKvsList: jspb.Message.toObjectList(msg.getPrevKvsList(),
    mvccpb_pb.KeyValue.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.etcdserverpb.DeleteRangeResponse}
 */
proto.etcdserverpb.DeleteRangeResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.etcdserverpb.DeleteRangeResponse;
  return proto.etcdserverpb.DeleteRangeResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.etcdserverpb.DeleteRangeResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.etcdserverpb.DeleteRangeResponse}
 */
proto.etcdserverpb.DeleteRangeResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.etcdserverpb.ResponseHeader;
      reader.readMessage(value,proto.etcdserverpb.ResponseHeader.deserializeBinaryFromReader);
      msg.setHeader(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setDeleted(value);
      break;
    case 3:
      var value = new mvccpb_pb.KeyValue;
      reader.readMessage(value,mvccpb_pb.KeyValue.deserializeBinaryFromReader);
      msg.getPrevKvsList().push(value);
      msg.setPrevKvsList(msg.getPrevKvsList());
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.etcdserverpb.DeleteRangeResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.etcdserverpb.DeleteRangeResponse.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.etcdserverpb.DeleteRangeResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.etcdserverpb.DeleteRangeResponse.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getHeader();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.etcdserverpb.ResponseHeader.serializeBinaryToWriter
    );
  }
  f = this.getDeleted();
  if (f != null) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = this.getPrevKvsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      mvccpb_pb.KeyValue.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.etcdserverpb.DeleteRangeResponse} The clone.
 */
proto.etcdserverpb.DeleteRangeResponse.prototype.cloneMessage = function() {
  return /** @type {!proto.etcdserverpb.DeleteRangeResponse} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional ResponseHeader header = 1;
 * @return {proto.etcdserverpb.ResponseHeader}
 */
proto.etcdserverpb.DeleteRangeResponse.prototype.getHeader = function() {
  return /** @type{proto.etcdserverpb.ResponseHeader} */ (
    jspb.Message.getWrapperField(this, proto.etcdserverpb.ResponseHeader, 1));
};


/** @param {proto.etcdserverpb.ResponseHeader|undefined} value  */
proto.etcdserverpb.DeleteRangeResponse.prototype.setHeader = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.etcdserverpb.DeleteRangeResponse.prototype.clearHeader = function() {
  this.setHeader(undefined);
};


/**
 * optional int64 deleted = 2;
 * @return {number?}
 */
proto.etcdserverpb.DeleteRangeResponse.prototype.getDeleted = function() {
  return /** @type {number?} */ (jspb.Message.getField(this, 2));
};


/** @param {number?|undefined} value  */
proto.etcdserverpb.DeleteRangeResponse.prototype.setDeleted = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.etcdserverpb.DeleteRangeResponse.prototype.clearDeleted = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * repeated mvccpb.KeyValue prev_kvs = 3;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.mvccpb.KeyValue>}
 */
proto.etcdserverpb.DeleteRangeResponse.prototype.getPrevKvsList = function() {
  return /** @type{!Array.<!proto.mvccpb.KeyValue>} */ (
    jspb.Message.getRepeatedWrapperField(this, mvccpb_pb.KeyValue, 3));
};


/** @param {Array.<!proto.mvccpb.KeyValue>|undefined} value  */
proto.etcdserverpb.DeleteRangeResponse.prototype.setPrevKvsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 3, value);
};


proto.etcdserverpb.DeleteRangeResponse.prototype.clearPrevKvsList = function() {
  this.setPrevKvsList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.etcdserverpb.RequestOp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.etcdserverpb.RequestOp.oneofGroups_);
};
goog.inherits(proto.etcdserverpb.RequestOp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.etcdserverpb.RequestOp.displayName = 'proto.etcdserverpb.RequestOp';
}
/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.etcdserverpb.RequestOp.oneofGroups_ = [[1,2,3]];

/**
 * @enum {number}
 */
proto.etcdserverpb.RequestOp.RequestCase = {
  REQUEST_NOT_SET: 0,
  REQUEST_RANGE: 1,
  REQUEST_PUT: 2,
  REQUEST_DELETE_RANGE: 3
};

/**
 * @return {proto.etcdserverpb.RequestOp.RequestCase}
 */
proto.etcdserverpb.RequestOp.prototype.getRequestCase = function() {
  return /** @type {proto.etcdserverpb.RequestOp.RequestCase} */(jspb.Message.computeOneofCase(this, proto.etcdserverpb.RequestOp.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.etcdserverpb.RequestOp.prototype.toObject = function(opt_includeInstance) {
  return proto.etcdserverpb.RequestOp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.etcdserverpb.RequestOp} msg The msg instance to transform.
 * @return {!Object}
 */
proto.etcdserverpb.RequestOp.toObject = function(includeInstance, msg) {
  var f, obj = {
    requestRange: (f = msg.getRequestRange()) && proto.etcdserverpb.RangeRequest.toObject(includeInstance, f),
    requestPut: (f = msg.getRequestPut()) && proto.etcdserverpb.PutRequest.toObject(includeInstance, f),
    requestDeleteRange: (f = msg.getRequestDeleteRange()) && proto.etcdserverpb.DeleteRangeRequest.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.etcdserverpb.RequestOp}
 */
proto.etcdserverpb.RequestOp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.etcdserverpb.RequestOp;
  return proto.etcdserverpb.RequestOp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.etcdserverpb.RequestOp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.etcdserverpb.RequestOp}
 */
proto.etcdserverpb.RequestOp.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.etcdserverpb.RangeRequest;
      reader.readMessage(value,proto.etcdserverpb.RangeRequest.deserializeBinaryFromReader);
      msg.setRequestRange(value);
      break;
    case 2:
      var value = new proto.etcdserverpb.PutRequest;
      reader.readMessage(value,proto.etcdserverpb.PutRequest.deserializeBinaryFromReader);
      msg.setRequestPut(value);
      break;
    case 3:
      var value = new proto.etcdserverpb.DeleteRangeRequest;
      reader.readMessage(value,proto.etcdserverpb.DeleteRangeRequest.deserializeBinaryFromReader);
      msg.setRequestDeleteRange(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.etcdserverpb.RequestOp} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.etcdserverpb.RequestOp.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.etcdserverpb.RequestOp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.etcdserverpb.RequestOp.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getRequestRange();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.etcdserverpb.RangeRequest.serializeBinaryToWriter
    );
  }
  f = this.getRequestPut();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.etcdserverpb.PutRequest.serializeBinaryToWriter
    );
  }
  f = this.getRequestDeleteRange();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.etcdserverpb.DeleteRangeRequest.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.etcdserverpb.RequestOp} The clone.
 */
proto.etcdserverpb.RequestOp.prototype.cloneMessage = function() {
  return /** @type {!proto.etcdserverpb.RequestOp} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional RangeRequest request_range = 1;
 * @return {proto.etcdserverpb.RangeRequest}
 */
proto.etcdserverpb.RequestOp.prototype.getRequestRange = function() {
  return /** @type{proto.etcdserverpb.RangeRequest} */ (
    jspb.Message.getWrapperField(this, proto.etcdserverpb.RangeRequest, 1));
};


/** @param {proto.etcdserverpb.RangeRequest|undefined} value  */
proto.etcdserverpb.RequestOp.prototype.setRequestRange = function(value) {
  jspb.Message.setOneofWrapperField(this, 1, proto.etcdserverpb.RequestOp.oneofGroups_[0], value);
};


proto.etcdserverpb.RequestOp.prototype.clearRequestRange = function() {
  this.setRequestRange(undefined);
};


/**
 * optional PutRequest request_put = 2;
 * @return {proto.etcdserverpb.PutRequest}
 */
proto.etcdserverpb.RequestOp.prototype.getRequestPut = function() {
  return /** @type{proto.etcdserverpb.PutRequest} */ (
    jspb.Message.getWrapperField(this, proto.etcdserverpb.PutRequest, 2));
};


/** @param {proto.etcdserverpb.PutRequest|undefined} value  */
proto.etcdserverpb.RequestOp.prototype.setRequestPut = function(value) {
  jspb.Message.setOneofWrapperField(this, 2, proto.etcdserverpb.RequestOp.oneofGroups_[0], value);
};


proto.etcdserverpb.RequestOp.prototype.clearRequestPut = function() {
  this.setRequestPut(undefined);
};


/**
 * optional DeleteRangeRequest request_delete_range = 3;
 * @return {proto.etcdserverpb.DeleteRangeRequest}
 */
proto.etcdserverpb.RequestOp.prototype.getRequestDeleteRange = function() {
  return /** @type{proto.etcdserverpb.DeleteRangeRequest} */ (
    jspb.Message.getWrapperField(this, proto.etcdserverpb.DeleteRangeRequest, 3));
};


/** @param {proto.etcdserverpb.DeleteRangeRequest|undefined} value  */
proto.etcdserverpb.RequestOp.prototype.setRequestDeleteRange = function(value) {
  jspb.Message.setOneofWrapperField(this, 3, proto.etcdserverpb.RequestOp.oneofGroups_[0], value);
};


proto.etcdserverpb.RequestOp.prototype.clearRequestDeleteRange = function() {
  this.setRequestDeleteRange(undefined);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.etcdserverpb.ResponseOp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.etcdserverpb.ResponseOp.oneofGroups_);
};
goog.inherits(proto.etcdserverpb.ResponseOp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.etcdserverpb.ResponseOp.displayName = 'proto.etcdserverpb.ResponseOp';
}
/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.etcdserverpb.ResponseOp.oneofGroups_ = [[1,2,3]];

/**
 * @enum {number}
 */
proto.etcdserverpb.ResponseOp.ResponseCase = {
  RESPONSE_NOT_SET: 0,
  RESPONSE_RANGE: 1,
  RESPONSE_PUT: 2,
  RESPONSE_DELETE_RANGE: 3
};

/**
 * @return {proto.etcdserverpb.ResponseOp.ResponseCase}
 */
proto.etcdserverpb.ResponseOp.prototype.getResponseCase = function() {
  return /** @type {proto.etcdserverpb.ResponseOp.ResponseCase} */(jspb.Message.computeOneofCase(this, proto.etcdserverpb.ResponseOp.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.etcdserverpb.ResponseOp.prototype.toObject = function(opt_includeInstance) {
  return proto.etcdserverpb.ResponseOp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.etcdserverpb.ResponseOp} msg The msg instance to transform.
 * @return {!Object}
 */
proto.etcdserverpb.ResponseOp.toObject = function(includeInstance, msg) {
  var f, obj = {
    responseRange: (f = msg.getResponseRange()) && proto.etcdserverpb.RangeResponse.toObject(includeInstance, f),
    responsePut: (f = msg.getResponsePut()) && proto.etcdserverpb.PutResponse.toObject(includeInstance, f),
    responseDeleteRange: (f = msg.getResponseDeleteRange()) && proto.etcdserverpb.DeleteRangeResponse.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.etcdserverpb.ResponseOp}
 */
proto.etcdserverpb.ResponseOp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.etcdserverpb.ResponseOp;
  return proto.etcdserverpb.ResponseOp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.etcdserverpb.ResponseOp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.etcdserverpb.ResponseOp}
 */
proto.etcdserverpb.ResponseOp.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.etcdserverpb.RangeResponse;
      reader.readMessage(value,proto.etcdserverpb.RangeResponse.deserializeBinaryFromReader);
      msg.setResponseRange(value);
      break;
    case 2:
      var value = new proto.etcdserverpb.PutResponse;
      reader.readMessage(value,proto.etcdserverpb.PutResponse.deserializeBinaryFromReader);
      msg.setResponsePut(value);
      break;
    case 3:
      var value = new proto.etcdserverpb.DeleteRangeResponse;
      reader.readMessage(value,proto.etcdserverpb.DeleteRangeResponse.deserializeBinaryFromReader);
      msg.setResponseDeleteRange(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.etcdserverpb.ResponseOp} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.etcdserverpb.ResponseOp.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.etcdserverpb.ResponseOp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.etcdserverpb.ResponseOp.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getResponseRange();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.etcdserverpb.RangeResponse.serializeBinaryToWriter
    );
  }
  f = this.getResponsePut();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.etcdserverpb.PutResponse.serializeBinaryToWriter
    );
  }
  f = this.getResponseDeleteRange();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.etcdserverpb.DeleteRangeResponse.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.etcdserverpb.ResponseOp} The clone.
 */
proto.etcdserverpb.ResponseOp.prototype.cloneMessage = function() {
  return /** @type {!proto.etcdserverpb.ResponseOp} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional RangeResponse response_range = 1;
 * @return {proto.etcdserverpb.RangeResponse}
 */
proto.etcdserverpb.ResponseOp.prototype.getResponseRange = function() {
  return /** @type{proto.etcdserverpb.RangeResponse} */ (
    jspb.Message.getWrapperField(this, proto.etcdserverpb.RangeResponse, 1));
};


/** @param {proto.etcdserverpb.RangeResponse|undefined} value  */
proto.etcdserverpb.ResponseOp.prototype.setResponseRange = function(value) {
  jspb.Message.setOneofWrapperField(this, 1, proto.etcdserverpb.ResponseOp.oneofGroups_[0], value);
};


proto.etcdserverpb.ResponseOp.prototype.clearResponseRange = function() {
  this.setResponseRange(undefined);
};


/**
 * optional PutResponse response_put = 2;
 * @return {proto.etcdserverpb.PutResponse}
 */
proto.etcdserverpb.ResponseOp.prototype.getResponsePut = function() {
  return /** @type{proto.etcdserverpb.PutResponse} */ (
    jspb.Message.getWrapperField(this, proto.etcdserverpb.PutResponse, 2));
};


/** @param {proto.etcdserverpb.PutResponse|undefined} value  */
proto.etcdserverpb.ResponseOp.prototype.setResponsePut = function(value) {
  jspb.Message.setOneofWrapperField(this, 2, proto.etcdserverpb.ResponseOp.oneofGroups_[0], value);
};


proto.etcdserverpb.ResponseOp.prototype.clearResponsePut = function() {
  this.setResponsePut(undefined);
};


/**
 * optional DeleteRangeResponse response_delete_range = 3;
 * @return {proto.etcdserverpb.DeleteRangeResponse}
 */
proto.etcdserverpb.ResponseOp.prototype.getResponseDeleteRange = function() {
  return /** @type{proto.etcdserverpb.DeleteRangeResponse} */ (
    jspb.Message.getWrapperField(this, proto.etcdserverpb.DeleteRangeResponse, 3));
};


/** @param {proto.etcdserverpb.DeleteRangeResponse|undefined} value  */
proto.etcdserverpb.ResponseOp.prototype.setResponseDeleteRange = function(value) {
  jspb.Message.setOneofWrapperField(this, 3, proto.etcdserverpb.ResponseOp.oneofGroups_[0], value);
};


proto.etcdserverpb.ResponseOp.prototype.clearResponseDeleteRange = function() {
  this.setResponseDeleteRange(undefined);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.etcdserverpb.Compare = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.etcdserverpb.Compare.oneofGroups_);
};
goog.inherits(proto.etcdserverpb.Compare, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.etcdserverpb.Compare.displayName = 'proto.etcdserverpb.Compare';
}
/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.etcdserverpb.Compare.oneofGroups_ = [[4,5,6,7]];

/**
 * @enum {number}
 */
proto.etcdserverpb.Compare.TargetUnionCase = {
  TARGET_UNION_NOT_SET: 0,
  VERSION: 4,
  CREATE_REVISION: 5,
  MOD_REVISION: 6,
  VALUE: 7
};

/**
 * @return {proto.etcdserverpb.Compare.TargetUnionCase}
 */
proto.etcdserverpb.Compare.prototype.getTargetUnionCase = function() {
  return /** @type {proto.etcdserverpb.Compare.TargetUnionCase} */(jspb.Message.computeOneofCase(this, proto.etcdserverpb.Compare.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.etcdserverpb.Compare.prototype.toObject = function(opt_includeInstance) {
  return proto.etcdserverpb.Compare.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.etcdserverpb.Compare} msg The msg instance to transform.
 * @return {!Object}
 */
proto.etcdserverpb.Compare.toObject = function(includeInstance, msg) {
  var f, obj = {
    version: jspb.Message.getField(msg, 4),
    createRevision: jspb.Message.getField(msg, 5),
    modRevision: jspb.Message.getField(msg, 6),
    value: jspb.Message.getField(msg, 7),
    result: jspb.Message.getField(msg, 1),
    target: jspb.Message.getField(msg, 2),
    key: jspb.Message.getField(msg, 3)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.etcdserverpb.Compare}
 */
proto.etcdserverpb.Compare.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.etcdserverpb.Compare;
  return proto.etcdserverpb.Compare.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.etcdserverpb.Compare} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.etcdserverpb.Compare}
 */
proto.etcdserverpb.Compare.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setVersion(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCreateRevision(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setModRevision(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setValue(value);
      break;
    case 1:
      var value = /** @type {!proto.etcdserverpb.Compare.CompareResult} */ (reader.readEnum());
      msg.setResult(value);
      break;
    case 2:
      var value = /** @type {!proto.etcdserverpb.Compare.CompareTarget} */ (reader.readEnum());
      msg.setTarget(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setKey(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.etcdserverpb.Compare} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.etcdserverpb.Compare.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.etcdserverpb.Compare.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.etcdserverpb.Compare.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getVersion();
  if (f != null) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = this.getCreateRevision();
  if (f != null) {
    writer.writeInt64(
      5,
      f
    );
  }
  f = this.getModRevision();
  if (f != null) {
    writer.writeInt64(
      6,
      f
    );
  }
  f = this.getValue();
  if (f != null) {
    writer.writeString(
      7,
      f
    );
  }
  f = this.getResult();
  if (f != null) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = this.getTarget();
  if (f != null) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = this.getKey();
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.etcdserverpb.Compare} The clone.
 */
proto.etcdserverpb.Compare.prototype.cloneMessage = function() {
  return /** @type {!proto.etcdserverpb.Compare} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional int64 version = 4;
 * @return {number?}
 */
proto.etcdserverpb.Compare.prototype.getVersion = function() {
  return /** @type {number?} */ (jspb.Message.getField(this, 4));
};


/** @param {number?|undefined} value  */
proto.etcdserverpb.Compare.prototype.setVersion = function(value) {
  jspb.Message.setOneofField(this, 4, proto.etcdserverpb.Compare.oneofGroups_[0], value);
};


proto.etcdserverpb.Compare.prototype.clearVersion = function() {
  jspb.Message.setOneofField(this, 4, proto.etcdserverpb.Compare.oneofGroups_[0], undefined);
};


/**
 * optional int64 create_revision = 5;
 * @return {number?}
 */
proto.etcdserverpb.Compare.prototype.getCreateRevision = function() {
  return /** @type {number?} */ (jspb.Message.getField(this, 5));
};


/** @param {number?|undefined} value  */
proto.etcdserverpb.Compare.prototype.setCreateRevision = function(value) {
  jspb.Message.setOneofField(this, 5, proto.etcdserverpb.Compare.oneofGroups_[0], value);
};


proto.etcdserverpb.Compare.prototype.clearCreateRevision = function() {
  jspb.Message.setOneofField(this, 5, proto.etcdserverpb.Compare.oneofGroups_[0], undefined);
};


/**
 * optional int64 mod_revision = 6;
 * @return {number?}
 */
proto.etcdserverpb.Compare.prototype.getModRevision = function() {
  return /** @type {number?} */ (jspb.Message.getField(this, 6));
};


/** @param {number?|undefined} value  */
proto.etcdserverpb.Compare.prototype.setModRevision = function(value) {
  jspb.Message.setOneofField(this, 6, proto.etcdserverpb.Compare.oneofGroups_[0], value);
};


proto.etcdserverpb.Compare.prototype.clearModRevision = function() {
  jspb.Message.setOneofField(this, 6, proto.etcdserverpb.Compare.oneofGroups_[0], undefined);
};


/**
 * optional string value = 7;
 * @return {string?}
 */
proto.etcdserverpb.Compare.prototype.getValue = function() {
  return /** @type {string?} */ (jspb.Message.getField(this, 7));
};


/** @param {string?|undefined} value  */
proto.etcdserverpb.Compare.prototype.setValue = function(value) {
  jspb.Message.setOneofField(this, 7, proto.etcdserverpb.Compare.oneofGroups_[0], value);
};


proto.etcdserverpb.Compare.prototype.clearValue = function() {
  jspb.Message.setOneofField(this, 7, proto.etcdserverpb.Compare.oneofGroups_[0], undefined);
};


/**
 * optional CompareResult result = 1;
 * @return {proto.etcdserverpb.Compare.CompareResult}
 */
proto.etcdserverpb.Compare.prototype.getResult = function() {
  return /** @type {proto.etcdserverpb.Compare.CompareResult} */ (jspb.Message.getField(this, 1));
};


/** @param {proto.etcdserverpb.Compare.CompareResult|undefined} value  */
proto.etcdserverpb.Compare.prototype.setResult = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.etcdserverpb.Compare.prototype.clearResult = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * optional CompareTarget target = 2;
 * @return {proto.etcdserverpb.Compare.CompareTarget}
 */
proto.etcdserverpb.Compare.prototype.getTarget = function() {
  return /** @type {proto.etcdserverpb.Compare.CompareTarget} */ (jspb.Message.getField(this, 2));
};


/** @param {proto.etcdserverpb.Compare.CompareTarget|undefined} value  */
proto.etcdserverpb.Compare.prototype.setTarget = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.etcdserverpb.Compare.prototype.clearTarget = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * optional string key = 3;
 * @return {string?}
 */
proto.etcdserverpb.Compare.prototype.getKey = function() {
  return /** @type {string?} */ (jspb.Message.getField(this, 3));
};


/** @param {string?|undefined} value  */
proto.etcdserverpb.Compare.prototype.setKey = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.etcdserverpb.Compare.prototype.clearKey = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * @enum {number}
 */
proto.etcdserverpb.Compare.CompareResult = {
  EQUAL: 0,
  GREATER: 1,
  LESS: 2
};

/**
 * @enum {number}
 */
proto.etcdserverpb.Compare.CompareTarget = {
  VERSION: 0,
  CREATE: 1,
  MOD: 2,
  VALUE: 3
};


/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.etcdserverpb.TxnRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.etcdserverpb.TxnRequest.repeatedFields_, null);
};
goog.inherits(proto.etcdserverpb.TxnRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.etcdserverpb.TxnRequest.displayName = 'proto.etcdserverpb.TxnRequest';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.etcdserverpb.TxnRequest.repeatedFields_ = [1,2,3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.etcdserverpb.TxnRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.etcdserverpb.TxnRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.etcdserverpb.TxnRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.etcdserverpb.TxnRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    compareList: jspb.Message.toObjectList(msg.getCompareList(),
    proto.etcdserverpb.Compare.toObject, includeInstance),
    successList: jspb.Message.toObjectList(msg.getSuccessList(),
    proto.etcdserverpb.RequestOp.toObject, includeInstance),
    failureList: jspb.Message.toObjectList(msg.getFailureList(),
    proto.etcdserverpb.RequestOp.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.etcdserverpb.TxnRequest}
 */
proto.etcdserverpb.TxnRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.etcdserverpb.TxnRequest;
  return proto.etcdserverpb.TxnRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.etcdserverpb.TxnRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.etcdserverpb.TxnRequest}
 */
proto.etcdserverpb.TxnRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.etcdserverpb.Compare;
      reader.readMessage(value,proto.etcdserverpb.Compare.deserializeBinaryFromReader);
      msg.getCompareList().push(value);
      msg.setCompareList(msg.getCompareList());
      break;
    case 2:
      var value = new proto.etcdserverpb.RequestOp;
      reader.readMessage(value,proto.etcdserverpb.RequestOp.deserializeBinaryFromReader);
      msg.getSuccessList().push(value);
      msg.setSuccessList(msg.getSuccessList());
      break;
    case 3:
      var value = new proto.etcdserverpb.RequestOp;
      reader.readMessage(value,proto.etcdserverpb.RequestOp.deserializeBinaryFromReader);
      msg.getFailureList().push(value);
      msg.setFailureList(msg.getFailureList());
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.etcdserverpb.TxnRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.etcdserverpb.TxnRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.etcdserverpb.TxnRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.etcdserverpb.TxnRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getCompareList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.etcdserverpb.Compare.serializeBinaryToWriter
    );
  }
  f = this.getSuccessList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.etcdserverpb.RequestOp.serializeBinaryToWriter
    );
  }
  f = this.getFailureList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.etcdserverpb.RequestOp.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.etcdserverpb.TxnRequest} The clone.
 */
proto.etcdserverpb.TxnRequest.prototype.cloneMessage = function() {
  return /** @type {!proto.etcdserverpb.TxnRequest} */ (jspb.Message.cloneMessage(this));
};


/**
 * repeated Compare compare = 1;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.etcdserverpb.Compare>}
 */
proto.etcdserverpb.TxnRequest.prototype.getCompareList = function() {
  return /** @type{!Array.<!proto.etcdserverpb.Compare>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.etcdserverpb.Compare, 1));
};


/** @param {Array.<!proto.etcdserverpb.Compare>|undefined} value  */
proto.etcdserverpb.TxnRequest.prototype.setCompareList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


proto.etcdserverpb.TxnRequest.prototype.clearCompareList = function() {
  this.setCompareList([]);
};


/**
 * repeated RequestOp success = 2;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.etcdserverpb.RequestOp>}
 */
proto.etcdserverpb.TxnRequest.prototype.getSuccessList = function() {
  return /** @type{!Array.<!proto.etcdserverpb.RequestOp>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.etcdserverpb.RequestOp, 2));
};


/** @param {Array.<!proto.etcdserverpb.RequestOp>|undefined} value  */
proto.etcdserverpb.TxnRequest.prototype.setSuccessList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 2, value);
};


proto.etcdserverpb.TxnRequest.prototype.clearSuccessList = function() {
  this.setSuccessList([]);
};


/**
 * repeated RequestOp failure = 3;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.etcdserverpb.RequestOp>}
 */
proto.etcdserverpb.TxnRequest.prototype.getFailureList = function() {
  return /** @type{!Array.<!proto.etcdserverpb.RequestOp>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.etcdserverpb.RequestOp, 3));
};


/** @param {Array.<!proto.etcdserverpb.RequestOp>|undefined} value  */
proto.etcdserverpb.TxnRequest.prototype.setFailureList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 3, value);
};


proto.etcdserverpb.TxnRequest.prototype.clearFailureList = function() {
  this.setFailureList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.etcdserverpb.TxnResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.etcdserverpb.TxnResponse.repeatedFields_, null);
};
goog.inherits(proto.etcdserverpb.TxnResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.etcdserverpb.TxnResponse.displayName = 'proto.etcdserverpb.TxnResponse';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.etcdserverpb.TxnResponse.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.etcdserverpb.TxnResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.etcdserverpb.TxnResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.etcdserverpb.TxnResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.etcdserverpb.TxnResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && proto.etcdserverpb.ResponseHeader.toObject(includeInstance, f),
    succeeded: jspb.Message.getField(msg, 2),
    responsesList: jspb.Message.toObjectList(msg.getResponsesList(),
    proto.etcdserverpb.ResponseOp.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.etcdserverpb.TxnResponse}
 */
proto.etcdserverpb.TxnResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.etcdserverpb.TxnResponse;
  return proto.etcdserverpb.TxnResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.etcdserverpb.TxnResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.etcdserverpb.TxnResponse}
 */
proto.etcdserverpb.TxnResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.etcdserverpb.ResponseHeader;
      reader.readMessage(value,proto.etcdserverpb.ResponseHeader.deserializeBinaryFromReader);
      msg.setHeader(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSucceeded(value);
      break;
    case 3:
      var value = new proto.etcdserverpb.ResponseOp;
      reader.readMessage(value,proto.etcdserverpb.ResponseOp.deserializeBinaryFromReader);
      msg.getResponsesList().push(value);
      msg.setResponsesList(msg.getResponsesList());
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.etcdserverpb.TxnResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.etcdserverpb.TxnResponse.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.etcdserverpb.TxnResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.etcdserverpb.TxnResponse.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getHeader();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.etcdserverpb.ResponseHeader.serializeBinaryToWriter
    );
  }
  f = this.getSucceeded();
  if (f != null) {
    writer.writeBool(
      2,
      f
    );
  }
  f = this.getResponsesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.etcdserverpb.ResponseOp.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.etcdserverpb.TxnResponse} The clone.
 */
proto.etcdserverpb.TxnResponse.prototype.cloneMessage = function() {
  return /** @type {!proto.etcdserverpb.TxnResponse} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional ResponseHeader header = 1;
 * @return {proto.etcdserverpb.ResponseHeader}
 */
proto.etcdserverpb.TxnResponse.prototype.getHeader = function() {
  return /** @type{proto.etcdserverpb.ResponseHeader} */ (
    jspb.Message.getWrapperField(this, proto.etcdserverpb.ResponseHeader, 1));
};


/** @param {proto.etcdserverpb.ResponseHeader|undefined} value  */
proto.etcdserverpb.TxnResponse.prototype.setHeader = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.etcdserverpb.TxnResponse.prototype.clearHeader = function() {
  this.setHeader(undefined);
};


/**
 * optional bool succeeded = 2;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean?}
 */
proto.etcdserverpb.TxnResponse.prototype.getSucceeded = function() {
  return /** @type {boolean?} */ (jspb.Message.getField(this, 2));
};


/** @param {boolean?|undefined} value  */
proto.etcdserverpb.TxnResponse.prototype.setSucceeded = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.etcdserverpb.TxnResponse.prototype.clearSucceeded = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * repeated ResponseOp responses = 3;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.etcdserverpb.ResponseOp>}
 */
proto.etcdserverpb.TxnResponse.prototype.getResponsesList = function() {
  return /** @type{!Array.<!proto.etcdserverpb.ResponseOp>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.etcdserverpb.ResponseOp, 3));
};


/** @param {Array.<!proto.etcdserverpb.ResponseOp>|undefined} value  */
proto.etcdserverpb.TxnResponse.prototype.setResponsesList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 3, value);
};


proto.etcdserverpb.TxnResponse.prototype.clearResponsesList = function() {
  this.setResponsesList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.etcdserverpb.CompactionRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.etcdserverpb.CompactionRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.etcdserverpb.CompactionRequest.displayName = 'proto.etcdserverpb.CompactionRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.etcdserverpb.CompactionRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.etcdserverpb.CompactionRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.etcdserverpb.CompactionRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.etcdserverpb.CompactionRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    revision: jspb.Message.getField(msg, 1),
    physical: jspb.Message.getField(msg, 2)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.etcdserverpb.CompactionRequest}
 */
proto.etcdserverpb.CompactionRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.etcdserverpb.CompactionRequest;
  return proto.etcdserverpb.CompactionRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.etcdserverpb.CompactionRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.etcdserverpb.CompactionRequest}
 */
proto.etcdserverpb.CompactionRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setRevision(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPhysical(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.etcdserverpb.CompactionRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.etcdserverpb.CompactionRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.etcdserverpb.CompactionRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.etcdserverpb.CompactionRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getRevision();
  if (f != null) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = this.getPhysical();
  if (f != null) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.etcdserverpb.CompactionRequest} The clone.
 */
proto.etcdserverpb.CompactionRequest.prototype.cloneMessage = function() {
  return /** @type {!proto.etcdserverpb.CompactionRequest} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional int64 revision = 1;
 * @return {number?}
 */
proto.etcdserverpb.CompactionRequest.prototype.getRevision = function() {
  return /** @type {number?} */ (jspb.Message.getField(this, 1));
};


/** @param {number?|undefined} value  */
proto.etcdserverpb.CompactionRequest.prototype.setRevision = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.etcdserverpb.CompactionRequest.prototype.clearRevision = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * optional bool physical = 2;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean?}
 */
proto.etcdserverpb.CompactionRequest.prototype.getPhysical = function() {
  return /** @type {boolean?} */ (jspb.Message.getField(this, 2));
};


/** @param {boolean?|undefined} value  */
proto.etcdserverpb.CompactionRequest.prototype.setPhysical = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.etcdserverpb.CompactionRequest.prototype.clearPhysical = function() {
  jspb.Message.setField(this, 2, undefined);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.etcdserverpb.CompactionResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.etcdserverpb.CompactionResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.etcdserverpb.CompactionResponse.displayName = 'proto.etcdserverpb.CompactionResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.etcdserverpb.CompactionResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.etcdserverpb.CompactionResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.etcdserverpb.CompactionResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.etcdserverpb.CompactionResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && proto.etcdserverpb.ResponseHeader.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.etcdserverpb.CompactionResponse}
 */
proto.etcdserverpb.CompactionResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.etcdserverpb.CompactionResponse;
  return proto.etcdserverpb.CompactionResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.etcdserverpb.CompactionResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.etcdserverpb.CompactionResponse}
 */
proto.etcdserverpb.CompactionResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.etcdserverpb.ResponseHeader;
      reader.readMessage(value,proto.etcdserverpb.ResponseHeader.deserializeBinaryFromReader);
      msg.setHeader(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.etcdserverpb.CompactionResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.etcdserverpb.CompactionResponse.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.etcdserverpb.CompactionResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.etcdserverpb.CompactionResponse.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getHeader();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.etcdserverpb.ResponseHeader.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.etcdserverpb.CompactionResponse} The clone.
 */
proto.etcdserverpb.CompactionResponse.prototype.cloneMessage = function() {
  return /** @type {!proto.etcdserverpb.CompactionResponse} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional ResponseHeader header = 1;
 * @return {proto.etcdserverpb.ResponseHeader}
 */
proto.etcdserverpb.CompactionResponse.prototype.getHeader = function() {
  return /** @type{proto.etcdserverpb.ResponseHeader} */ (
    jspb.Message.getWrapperField(this, proto.etcdserverpb.ResponseHeader, 1));
};


/** @param {proto.etcdserverpb.ResponseHeader|undefined} value  */
proto.etcdserverpb.CompactionResponse.prototype.setHeader = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.etcdserverpb.CompactionResponse.prototype.clearHeader = function() {
  this.setHeader(undefined);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.etcdserverpb.HashRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.etcdserverpb.HashRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.etcdserverpb.HashRequest.displayName = 'proto.etcdserverpb.HashRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.etcdserverpb.HashRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.etcdserverpb.HashRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.etcdserverpb.HashRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.etcdserverpb.HashRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.etcdserverpb.HashRequest}
 */
proto.etcdserverpb.HashRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.etcdserverpb.HashRequest;
  return proto.etcdserverpb.HashRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.etcdserverpb.HashRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.etcdserverpb.HashRequest}
 */
proto.etcdserverpb.HashRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.etcdserverpb.HashRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.etcdserverpb.HashRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.etcdserverpb.HashRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.etcdserverpb.HashRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.etcdserverpb.HashRequest} The clone.
 */
proto.etcdserverpb.HashRequest.prototype.cloneMessage = function() {
  return /** @type {!proto.etcdserverpb.HashRequest} */ (jspb.Message.cloneMessage(this));
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.etcdserverpb.HashResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.etcdserverpb.HashResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.etcdserverpb.HashResponse.displayName = 'proto.etcdserverpb.HashResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.etcdserverpb.HashResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.etcdserverpb.HashResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.etcdserverpb.HashResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.etcdserverpb.HashResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && proto.etcdserverpb.ResponseHeader.toObject(includeInstance, f),
    hash: jspb.Message.getField(msg, 2)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.etcdserverpb.HashResponse}
 */
proto.etcdserverpb.HashResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.etcdserverpb.HashResponse;
  return proto.etcdserverpb.HashResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.etcdserverpb.HashResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.etcdserverpb.HashResponse}
 */
proto.etcdserverpb.HashResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.etcdserverpb.ResponseHeader;
      reader.readMessage(value,proto.etcdserverpb.ResponseHeader.deserializeBinaryFromReader);
      msg.setHeader(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setHash(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.etcdserverpb.HashResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.etcdserverpb.HashResponse.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.etcdserverpb.HashResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.etcdserverpb.HashResponse.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getHeader();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.etcdserverpb.ResponseHeader.serializeBinaryToWriter
    );
  }
  f = this.getHash();
  if (f != null) {
    writer.writeUint32(
      2,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.etcdserverpb.HashResponse} The clone.
 */
proto.etcdserverpb.HashResponse.prototype.cloneMessage = function() {
  return /** @type {!proto.etcdserverpb.HashResponse} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional ResponseHeader header = 1;
 * @return {proto.etcdserverpb.ResponseHeader}
 */
proto.etcdserverpb.HashResponse.prototype.getHeader = function() {
  return /** @type{proto.etcdserverpb.ResponseHeader} */ (
    jspb.Message.getWrapperField(this, proto.etcdserverpb.ResponseHeader, 1));
};


/** @param {proto.etcdserverpb.ResponseHeader|undefined} value  */
proto.etcdserverpb.HashResponse.prototype.setHeader = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.etcdserverpb.HashResponse.prototype.clearHeader = function() {
  this.setHeader(undefined);
};


/**
 * optional uint32 hash = 2;
 * @return {number?}
 */
proto.etcdserverpb.HashResponse.prototype.getHash = function() {
  return /** @type {number?} */ (jspb.Message.getField(this, 2));
};


/** @param {number?|undefined} value  */
proto.etcdserverpb.HashResponse.prototype.setHash = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.etcdserverpb.HashResponse.prototype.clearHash = function() {
  jspb.Message.setField(this, 2, undefined);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.etcdserverpb.SnapshotRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.etcdserverpb.SnapshotRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.etcdserverpb.SnapshotRequest.displayName = 'proto.etcdserverpb.SnapshotRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.etcdserverpb.SnapshotRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.etcdserverpb.SnapshotRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.etcdserverpb.SnapshotRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.etcdserverpb.SnapshotRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.etcdserverpb.SnapshotRequest}
 */
proto.etcdserverpb.SnapshotRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.etcdserverpb.SnapshotRequest;
  return proto.etcdserverpb.SnapshotRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.etcdserverpb.SnapshotRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.etcdserverpb.SnapshotRequest}
 */
proto.etcdserverpb.SnapshotRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.etcdserverpb.SnapshotRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.etcdserverpb.SnapshotRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.etcdserverpb.SnapshotRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.etcdserverpb.SnapshotRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.etcdserverpb.SnapshotRequest} The clone.
 */
proto.etcdserverpb.SnapshotRequest.prototype.cloneMessage = function() {
  return /** @type {!proto.etcdserverpb.SnapshotRequest} */ (jspb.Message.cloneMessage(this));
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.etcdserverpb.SnapshotResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.etcdserverpb.SnapshotResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.etcdserverpb.SnapshotResponse.displayName = 'proto.etcdserverpb.SnapshotResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.etcdserverpb.SnapshotResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.etcdserverpb.SnapshotResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.etcdserverpb.SnapshotResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.etcdserverpb.SnapshotResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && proto.etcdserverpb.ResponseHeader.toObject(includeInstance, f),
    remainingBytes: jspb.Message.getField(msg, 2),
    blob: jspb.Message.getField(msg, 3)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.etcdserverpb.SnapshotResponse}
 */
proto.etcdserverpb.SnapshotResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.etcdserverpb.SnapshotResponse;
  return proto.etcdserverpb.SnapshotResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.etcdserverpb.SnapshotResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.etcdserverpb.SnapshotResponse}
 */
proto.etcdserverpb.SnapshotResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.etcdserverpb.ResponseHeader;
      reader.readMessage(value,proto.etcdserverpb.ResponseHeader.deserializeBinaryFromReader);
      msg.setHeader(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setRemainingBytes(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setBlob(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.etcdserverpb.SnapshotResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.etcdserverpb.SnapshotResponse.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.etcdserverpb.SnapshotResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.etcdserverpb.SnapshotResponse.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getHeader();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.etcdserverpb.ResponseHeader.serializeBinaryToWriter
    );
  }
  f = this.getRemainingBytes();
  if (f != null) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = this.getBlob();
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.etcdserverpb.SnapshotResponse} The clone.
 */
proto.etcdserverpb.SnapshotResponse.prototype.cloneMessage = function() {
  return /** @type {!proto.etcdserverpb.SnapshotResponse} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional ResponseHeader header = 1;
 * @return {proto.etcdserverpb.ResponseHeader}
 */
proto.etcdserverpb.SnapshotResponse.prototype.getHeader = function() {
  return /** @type{proto.etcdserverpb.ResponseHeader} */ (
    jspb.Message.getWrapperField(this, proto.etcdserverpb.ResponseHeader, 1));
};


/** @param {proto.etcdserverpb.ResponseHeader|undefined} value  */
proto.etcdserverpb.SnapshotResponse.prototype.setHeader = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.etcdserverpb.SnapshotResponse.prototype.clearHeader = function() {
  this.setHeader(undefined);
};


/**
 * optional uint64 remaining_bytes = 2;
 * @return {number?}
 */
proto.etcdserverpb.SnapshotResponse.prototype.getRemainingBytes = function() {
  return /** @type {number?} */ (jspb.Message.getField(this, 2));
};


/** @param {number?|undefined} value  */
proto.etcdserverpb.SnapshotResponse.prototype.setRemainingBytes = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.etcdserverpb.SnapshotResponse.prototype.clearRemainingBytes = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * optional string blob = 3;
 * @return {string?}
 */
proto.etcdserverpb.SnapshotResponse.prototype.getBlob = function() {
  return /** @type {string?} */ (jspb.Message.getField(this, 3));
};


/** @param {string?|undefined} value  */
proto.etcdserverpb.SnapshotResponse.prototype.setBlob = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.etcdserverpb.SnapshotResponse.prototype.clearBlob = function() {
  jspb.Message.setField(this, 3, undefined);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.etcdserverpb.WatchRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.etcdserverpb.WatchRequest.oneofGroups_);
};
goog.inherits(proto.etcdserverpb.WatchRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.etcdserverpb.WatchRequest.displayName = 'proto.etcdserverpb.WatchRequest';
}
/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.etcdserverpb.WatchRequest.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.etcdserverpb.WatchRequest.RequestUnionCase = {
  REQUEST_UNION_NOT_SET: 0,
  CREATE_REQUEST: 1,
  CANCEL_REQUEST: 2
};

/**
 * @return {proto.etcdserverpb.WatchRequest.RequestUnionCase}
 */
proto.etcdserverpb.WatchRequest.prototype.getRequestUnionCase = function() {
  return /** @type {proto.etcdserverpb.WatchRequest.RequestUnionCase} */(jspb.Message.computeOneofCase(this, proto.etcdserverpb.WatchRequest.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.etcdserverpb.WatchRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.etcdserverpb.WatchRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.etcdserverpb.WatchRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.etcdserverpb.WatchRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    createRequest: (f = msg.getCreateRequest()) && proto.etcdserverpb.WatchCreateRequest.toObject(includeInstance, f),
    cancelRequest: (f = msg.getCancelRequest()) && proto.etcdserverpb.WatchCancelRequest.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.etcdserverpb.WatchRequest}
 */
proto.etcdserverpb.WatchRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.etcdserverpb.WatchRequest;
  return proto.etcdserverpb.WatchRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.etcdserverpb.WatchRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.etcdserverpb.WatchRequest}
 */
proto.etcdserverpb.WatchRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.etcdserverpb.WatchCreateRequest;
      reader.readMessage(value,proto.etcdserverpb.WatchCreateRequest.deserializeBinaryFromReader);
      msg.setCreateRequest(value);
      break;
    case 2:
      var value = new proto.etcdserverpb.WatchCancelRequest;
      reader.readMessage(value,proto.etcdserverpb.WatchCancelRequest.deserializeBinaryFromReader);
      msg.setCancelRequest(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.etcdserverpb.WatchRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.etcdserverpb.WatchRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.etcdserverpb.WatchRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.etcdserverpb.WatchRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getCreateRequest();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.etcdserverpb.WatchCreateRequest.serializeBinaryToWriter
    );
  }
  f = this.getCancelRequest();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.etcdserverpb.WatchCancelRequest.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.etcdserverpb.WatchRequest} The clone.
 */
proto.etcdserverpb.WatchRequest.prototype.cloneMessage = function() {
  return /** @type {!proto.etcdserverpb.WatchRequest} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional WatchCreateRequest create_request = 1;
 * @return {proto.etcdserverpb.WatchCreateRequest}
 */
proto.etcdserverpb.WatchRequest.prototype.getCreateRequest = function() {
  return /** @type{proto.etcdserverpb.WatchCreateRequest} */ (
    jspb.Message.getWrapperField(this, proto.etcdserverpb.WatchCreateRequest, 1));
};


/** @param {proto.etcdserverpb.WatchCreateRequest|undefined} value  */
proto.etcdserverpb.WatchRequest.prototype.setCreateRequest = function(value) {
  jspb.Message.setOneofWrapperField(this, 1, proto.etcdserverpb.WatchRequest.oneofGroups_[0], value);
};


proto.etcdserverpb.WatchRequest.prototype.clearCreateRequest = function() {
  this.setCreateRequest(undefined);
};


/**
 * optional WatchCancelRequest cancel_request = 2;
 * @return {proto.etcdserverpb.WatchCancelRequest}
 */
proto.etcdserverpb.WatchRequest.prototype.getCancelRequest = function() {
  return /** @type{proto.etcdserverpb.WatchCancelRequest} */ (
    jspb.Message.getWrapperField(this, proto.etcdserverpb.WatchCancelRequest, 2));
};


/** @param {proto.etcdserverpb.WatchCancelRequest|undefined} value  */
proto.etcdserverpb.WatchRequest.prototype.setCancelRequest = function(value) {
  jspb.Message.setOneofWrapperField(this, 2, proto.etcdserverpb.WatchRequest.oneofGroups_[0], value);
};


proto.etcdserverpb.WatchRequest.prototype.clearCancelRequest = function() {
  this.setCancelRequest(undefined);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.etcdserverpb.WatchCreateRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.etcdserverpb.WatchCreateRequest.repeatedFields_, null);
};
goog.inherits(proto.etcdserverpb.WatchCreateRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.etcdserverpb.WatchCreateRequest.displayName = 'proto.etcdserverpb.WatchCreateRequest';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.etcdserverpb.WatchCreateRequest.repeatedFields_ = [5];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.etcdserverpb.WatchCreateRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.etcdserverpb.WatchCreateRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.etcdserverpb.WatchCreateRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.etcdserverpb.WatchCreateRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    key: jspb.Message.getField(msg, 1),
    rangeEnd: jspb.Message.getField(msg, 2),
    startRevision: jspb.Message.getField(msg, 3),
    progressNotify: jspb.Message.getField(msg, 4),
    filtersList: jspb.Message.getField(msg, 5),
    prevKv: jspb.Message.getField(msg, 6)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.etcdserverpb.WatchCreateRequest}
 */
proto.etcdserverpb.WatchCreateRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.etcdserverpb.WatchCreateRequest;
  return proto.etcdserverpb.WatchCreateRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.etcdserverpb.WatchCreateRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.etcdserverpb.WatchCreateRequest}
 */
proto.etcdserverpb.WatchCreateRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setKey(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setRangeEnd(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setStartRevision(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setProgressNotify(value);
      break;
    case 5:
      var value = /** @type {!proto.etcdserverpb.WatchCreateRequest.FilterType} */ (reader.readEnum());
      msg.getFiltersList().push(value);
      msg.setFiltersList(msg.getFiltersList());
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPrevKv(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.etcdserverpb.WatchCreateRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.etcdserverpb.WatchCreateRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.etcdserverpb.WatchCreateRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.etcdserverpb.WatchCreateRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getKey();
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = this.getRangeEnd();
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = this.getStartRevision();
  if (f != null) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = this.getProgressNotify();
  if (f != null) {
    writer.writeBool(
      4,
      f
    );
  }
  f = this.getFiltersList();
  if (f.length > 0) {
    writer.writeRepeatedEnum(
      5,
      f
    );
  }
  f = this.getPrevKv();
  if (f != null) {
    writer.writeBool(
      6,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.etcdserverpb.WatchCreateRequest} The clone.
 */
proto.etcdserverpb.WatchCreateRequest.prototype.cloneMessage = function() {
  return /** @type {!proto.etcdserverpb.WatchCreateRequest} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional string key = 1;
 * @return {string?}
 */
proto.etcdserverpb.WatchCreateRequest.prototype.getKey = function() {
  return /** @type {string?} */ (jspb.Message.getField(this, 1));
};


/** @param {string?|undefined} value  */
proto.etcdserverpb.WatchCreateRequest.prototype.setKey = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.etcdserverpb.WatchCreateRequest.prototype.clearKey = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * optional string range_end = 2;
 * @return {string?}
 */
proto.etcdserverpb.WatchCreateRequest.prototype.getRangeEnd = function() {
  return /** @type {string?} */ (jspb.Message.getField(this, 2));
};


/** @param {string?|undefined} value  */
proto.etcdserverpb.WatchCreateRequest.prototype.setRangeEnd = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.etcdserverpb.WatchCreateRequest.prototype.clearRangeEnd = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * optional int64 start_revision = 3;
 * @return {number?}
 */
proto.etcdserverpb.WatchCreateRequest.prototype.getStartRevision = function() {
  return /** @type {number?} */ (jspb.Message.getField(this, 3));
};


/** @param {number?|undefined} value  */
proto.etcdserverpb.WatchCreateRequest.prototype.setStartRevision = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.etcdserverpb.WatchCreateRequest.prototype.clearStartRevision = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * optional bool progress_notify = 4;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean?}
 */
proto.etcdserverpb.WatchCreateRequest.prototype.getProgressNotify = function() {
  return /** @type {boolean?} */ (jspb.Message.getField(this, 4));
};


/** @param {boolean?|undefined} value  */
proto.etcdserverpb.WatchCreateRequest.prototype.setProgressNotify = function(value) {
  jspb.Message.setField(this, 4, value);
};


proto.etcdserverpb.WatchCreateRequest.prototype.clearProgressNotify = function() {
  jspb.Message.setField(this, 4, undefined);
};


/**
 * repeated FilterType filters = 5;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.etcdserverpb.WatchCreateRequest.FilterType>}
 */
proto.etcdserverpb.WatchCreateRequest.prototype.getFiltersList = function() {
  return /** @type {!Array.<!proto.etcdserverpb.WatchCreateRequest.FilterType>} */ (jspb.Message.getField(this, 5));
};


/** @param {Array.<!proto.etcdserverpb.WatchCreateRequest.FilterType>|undefined} value  */
proto.etcdserverpb.WatchCreateRequest.prototype.setFiltersList = function(value) {
  jspb.Message.setField(this, 5, value || []);
};


proto.etcdserverpb.WatchCreateRequest.prototype.clearFiltersList = function() {
  jspb.Message.setField(this, 5, []);
};


/**
 * optional bool prev_kv = 6;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean?}
 */
proto.etcdserverpb.WatchCreateRequest.prototype.getPrevKv = function() {
  return /** @type {boolean?} */ (jspb.Message.getField(this, 6));
};


/** @param {boolean?|undefined} value  */
proto.etcdserverpb.WatchCreateRequest.prototype.setPrevKv = function(value) {
  jspb.Message.setField(this, 6, value);
};


proto.etcdserverpb.WatchCreateRequest.prototype.clearPrevKv = function() {
  jspb.Message.setField(this, 6, undefined);
};


/**
 * @enum {number}
 */
proto.etcdserverpb.WatchCreateRequest.FilterType = {
  NOPUT: 0,
  NODELETE: 1
};


/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.etcdserverpb.WatchCancelRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.etcdserverpb.WatchCancelRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.etcdserverpb.WatchCancelRequest.displayName = 'proto.etcdserverpb.WatchCancelRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.etcdserverpb.WatchCancelRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.etcdserverpb.WatchCancelRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.etcdserverpb.WatchCancelRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.etcdserverpb.WatchCancelRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    watchId: jspb.Message.getField(msg, 1)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.etcdserverpb.WatchCancelRequest}
 */
proto.etcdserverpb.WatchCancelRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.etcdserverpb.WatchCancelRequest;
  return proto.etcdserverpb.WatchCancelRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.etcdserverpb.WatchCancelRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.etcdserverpb.WatchCancelRequest}
 */
proto.etcdserverpb.WatchCancelRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setWatchId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.etcdserverpb.WatchCancelRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.etcdserverpb.WatchCancelRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.etcdserverpb.WatchCancelRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.etcdserverpb.WatchCancelRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getWatchId();
  if (f != null) {
    writer.writeInt64(
      1,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.etcdserverpb.WatchCancelRequest} The clone.
 */
proto.etcdserverpb.WatchCancelRequest.prototype.cloneMessage = function() {
  return /** @type {!proto.etcdserverpb.WatchCancelRequest} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional int64 watch_id = 1;
 * @return {number?}
 */
proto.etcdserverpb.WatchCancelRequest.prototype.getWatchId = function() {
  return /** @type {number?} */ (jspb.Message.getField(this, 1));
};


/** @param {number?|undefined} value  */
proto.etcdserverpb.WatchCancelRequest.prototype.setWatchId = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.etcdserverpb.WatchCancelRequest.prototype.clearWatchId = function() {
  jspb.Message.setField(this, 1, undefined);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.etcdserverpb.WatchResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.etcdserverpb.WatchResponse.repeatedFields_, null);
};
goog.inherits(proto.etcdserverpb.WatchResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.etcdserverpb.WatchResponse.displayName = 'proto.etcdserverpb.WatchResponse';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.etcdserverpb.WatchResponse.repeatedFields_ = [11];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.etcdserverpb.WatchResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.etcdserverpb.WatchResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.etcdserverpb.WatchResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.etcdserverpb.WatchResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && proto.etcdserverpb.ResponseHeader.toObject(includeInstance, f),
    watchId: jspb.Message.getField(msg, 2),
    created: jspb.Message.getField(msg, 3),
    canceled: jspb.Message.getField(msg, 4),
    compactRevision: jspb.Message.getField(msg, 5),
    eventsList: jspb.Message.toObjectList(msg.getEventsList(),
    mvccpb_pb.Event.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.etcdserverpb.WatchResponse}
 */
proto.etcdserverpb.WatchResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.etcdserverpb.WatchResponse;
  return proto.etcdserverpb.WatchResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.etcdserverpb.WatchResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.etcdserverpb.WatchResponse}
 */
proto.etcdserverpb.WatchResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.etcdserverpb.ResponseHeader;
      reader.readMessage(value,proto.etcdserverpb.ResponseHeader.deserializeBinaryFromReader);
      msg.setHeader(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setWatchId(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setCreated(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setCanceled(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCompactRevision(value);
      break;
    case 11:
      var value = new mvccpb_pb.Event;
      reader.readMessage(value,mvccpb_pb.Event.deserializeBinaryFromReader);
      msg.getEventsList().push(value);
      msg.setEventsList(msg.getEventsList());
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.etcdserverpb.WatchResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.etcdserverpb.WatchResponse.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.etcdserverpb.WatchResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.etcdserverpb.WatchResponse.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getHeader();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.etcdserverpb.ResponseHeader.serializeBinaryToWriter
    );
  }
  f = this.getWatchId();
  if (f != null) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = this.getCreated();
  if (f != null) {
    writer.writeBool(
      3,
      f
    );
  }
  f = this.getCanceled();
  if (f != null) {
    writer.writeBool(
      4,
      f
    );
  }
  f = this.getCompactRevision();
  if (f != null) {
    writer.writeInt64(
      5,
      f
    );
  }
  f = this.getEventsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      11,
      f,
      mvccpb_pb.Event.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.etcdserverpb.WatchResponse} The clone.
 */
proto.etcdserverpb.WatchResponse.prototype.cloneMessage = function() {
  return /** @type {!proto.etcdserverpb.WatchResponse} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional ResponseHeader header = 1;
 * @return {proto.etcdserverpb.ResponseHeader}
 */
proto.etcdserverpb.WatchResponse.prototype.getHeader = function() {
  return /** @type{proto.etcdserverpb.ResponseHeader} */ (
    jspb.Message.getWrapperField(this, proto.etcdserverpb.ResponseHeader, 1));
};


/** @param {proto.etcdserverpb.ResponseHeader|undefined} value  */
proto.etcdserverpb.WatchResponse.prototype.setHeader = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.etcdserverpb.WatchResponse.prototype.clearHeader = function() {
  this.setHeader(undefined);
};


/**
 * optional int64 watch_id = 2;
 * @return {number?}
 */
proto.etcdserverpb.WatchResponse.prototype.getWatchId = function() {
  return /** @type {number?} */ (jspb.Message.getField(this, 2));
};


/** @param {number?|undefined} value  */
proto.etcdserverpb.WatchResponse.prototype.setWatchId = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.etcdserverpb.WatchResponse.prototype.clearWatchId = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * optional bool created = 3;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean?}
 */
proto.etcdserverpb.WatchResponse.prototype.getCreated = function() {
  return /** @type {boolean?} */ (jspb.Message.getField(this, 3));
};


/** @param {boolean?|undefined} value  */
proto.etcdserverpb.WatchResponse.prototype.setCreated = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.etcdserverpb.WatchResponse.prototype.clearCreated = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * optional bool canceled = 4;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean?}
 */
proto.etcdserverpb.WatchResponse.prototype.getCanceled = function() {
  return /** @type {boolean?} */ (jspb.Message.getField(this, 4));
};


/** @param {boolean?|undefined} value  */
proto.etcdserverpb.WatchResponse.prototype.setCanceled = function(value) {
  jspb.Message.setField(this, 4, value);
};


proto.etcdserverpb.WatchResponse.prototype.clearCanceled = function() {
  jspb.Message.setField(this, 4, undefined);
};


/**
 * optional int64 compact_revision = 5;
 * @return {number?}
 */
proto.etcdserverpb.WatchResponse.prototype.getCompactRevision = function() {
  return /** @type {number?} */ (jspb.Message.getField(this, 5));
};


/** @param {number?|undefined} value  */
proto.etcdserverpb.WatchResponse.prototype.setCompactRevision = function(value) {
  jspb.Message.setField(this, 5, value);
};


proto.etcdserverpb.WatchResponse.prototype.clearCompactRevision = function() {
  jspb.Message.setField(this, 5, undefined);
};


/**
 * repeated mvccpb.Event events = 11;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.mvccpb.Event>}
 */
proto.etcdserverpb.WatchResponse.prototype.getEventsList = function() {
  return /** @type{!Array.<!proto.mvccpb.Event>} */ (
    jspb.Message.getRepeatedWrapperField(this, mvccpb_pb.Event, 11));
};


/** @param {Array.<!proto.mvccpb.Event>|undefined} value  */
proto.etcdserverpb.WatchResponse.prototype.setEventsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 11, value);
};


proto.etcdserverpb.WatchResponse.prototype.clearEventsList = function() {
  this.setEventsList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.etcdserverpb.LeaseGrantRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.etcdserverpb.LeaseGrantRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.etcdserverpb.LeaseGrantRequest.displayName = 'proto.etcdserverpb.LeaseGrantRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.etcdserverpb.LeaseGrantRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.etcdserverpb.LeaseGrantRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.etcdserverpb.LeaseGrantRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.etcdserverpb.LeaseGrantRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    ttl: jspb.Message.getField(msg, 1),
    id: jspb.Message.getField(msg, 2)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.etcdserverpb.LeaseGrantRequest}
 */
proto.etcdserverpb.LeaseGrantRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.etcdserverpb.LeaseGrantRequest;
  return proto.etcdserverpb.LeaseGrantRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.etcdserverpb.LeaseGrantRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.etcdserverpb.LeaseGrantRequest}
 */
proto.etcdserverpb.LeaseGrantRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTtl(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.etcdserverpb.LeaseGrantRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.etcdserverpb.LeaseGrantRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.etcdserverpb.LeaseGrantRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.etcdserverpb.LeaseGrantRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getTtl();
  if (f != null) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = this.getId();
  if (f != null) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.etcdserverpb.LeaseGrantRequest} The clone.
 */
proto.etcdserverpb.LeaseGrantRequest.prototype.cloneMessage = function() {
  return /** @type {!proto.etcdserverpb.LeaseGrantRequest} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional int64 TTL = 1;
 * @return {number?}
 */
proto.etcdserverpb.LeaseGrantRequest.prototype.getTtl = function() {
  return /** @type {number?} */ (jspb.Message.getField(this, 1));
};


/** @param {number?|undefined} value  */
proto.etcdserverpb.LeaseGrantRequest.prototype.setTtl = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.etcdserverpb.LeaseGrantRequest.prototype.clearTtl = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * optional int64 ID = 2;
 * @return {number?}
 */
proto.etcdserverpb.LeaseGrantRequest.prototype.getId = function() {
  return /** @type {number?} */ (jspb.Message.getField(this, 2));
};


/** @param {number?|undefined} value  */
proto.etcdserverpb.LeaseGrantRequest.prototype.setId = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.etcdserverpb.LeaseGrantRequest.prototype.clearId = function() {
  jspb.Message.setField(this, 2, undefined);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.etcdserverpb.LeaseGrantResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.etcdserverpb.LeaseGrantResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.etcdserverpb.LeaseGrantResponse.displayName = 'proto.etcdserverpb.LeaseGrantResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.etcdserverpb.LeaseGrantResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.etcdserverpb.LeaseGrantResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.etcdserverpb.LeaseGrantResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.etcdserverpb.LeaseGrantResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && proto.etcdserverpb.ResponseHeader.toObject(includeInstance, f),
    id: jspb.Message.getField(msg, 2),
    ttl: jspb.Message.getField(msg, 3),
    error: jspb.Message.getField(msg, 4)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.etcdserverpb.LeaseGrantResponse}
 */
proto.etcdserverpb.LeaseGrantResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.etcdserverpb.LeaseGrantResponse;
  return proto.etcdserverpb.LeaseGrantResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.etcdserverpb.LeaseGrantResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.etcdserverpb.LeaseGrantResponse}
 */
proto.etcdserverpb.LeaseGrantResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.etcdserverpb.ResponseHeader;
      reader.readMessage(value,proto.etcdserverpb.ResponseHeader.deserializeBinaryFromReader);
      msg.setHeader(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setId(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTtl(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setError(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.etcdserverpb.LeaseGrantResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.etcdserverpb.LeaseGrantResponse.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.etcdserverpb.LeaseGrantResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.etcdserverpb.LeaseGrantResponse.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getHeader();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.etcdserverpb.ResponseHeader.serializeBinaryToWriter
    );
  }
  f = this.getId();
  if (f != null) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = this.getTtl();
  if (f != null) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = this.getError();
  if (f != null) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.etcdserverpb.LeaseGrantResponse} The clone.
 */
proto.etcdserverpb.LeaseGrantResponse.prototype.cloneMessage = function() {
  return /** @type {!proto.etcdserverpb.LeaseGrantResponse} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional ResponseHeader header = 1;
 * @return {proto.etcdserverpb.ResponseHeader}
 */
proto.etcdserverpb.LeaseGrantResponse.prototype.getHeader = function() {
  return /** @type{proto.etcdserverpb.ResponseHeader} */ (
    jspb.Message.getWrapperField(this, proto.etcdserverpb.ResponseHeader, 1));
};


/** @param {proto.etcdserverpb.ResponseHeader|undefined} value  */
proto.etcdserverpb.LeaseGrantResponse.prototype.setHeader = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.etcdserverpb.LeaseGrantResponse.prototype.clearHeader = function() {
  this.setHeader(undefined);
};


/**
 * optional int64 ID = 2;
 * @return {number?}
 */
proto.etcdserverpb.LeaseGrantResponse.prototype.getId = function() {
  return /** @type {number?} */ (jspb.Message.getField(this, 2));
};


/** @param {number?|undefined} value  */
proto.etcdserverpb.LeaseGrantResponse.prototype.setId = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.etcdserverpb.LeaseGrantResponse.prototype.clearId = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * optional int64 TTL = 3;
 * @return {number?}
 */
proto.etcdserverpb.LeaseGrantResponse.prototype.getTtl = function() {
  return /** @type {number?} */ (jspb.Message.getField(this, 3));
};


/** @param {number?|undefined} value  */
proto.etcdserverpb.LeaseGrantResponse.prototype.setTtl = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.etcdserverpb.LeaseGrantResponse.prototype.clearTtl = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * optional string error = 4;
 * @return {string?}
 */
proto.etcdserverpb.LeaseGrantResponse.prototype.getError = function() {
  return /** @type {string?} */ (jspb.Message.getField(this, 4));
};


/** @param {string?|undefined} value  */
proto.etcdserverpb.LeaseGrantResponse.prototype.setError = function(value) {
  jspb.Message.setField(this, 4, value);
};


proto.etcdserverpb.LeaseGrantResponse.prototype.clearError = function() {
  jspb.Message.setField(this, 4, undefined);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.etcdserverpb.LeaseRevokeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.etcdserverpb.LeaseRevokeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.etcdserverpb.LeaseRevokeRequest.displayName = 'proto.etcdserverpb.LeaseRevokeRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.etcdserverpb.LeaseRevokeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.etcdserverpb.LeaseRevokeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.etcdserverpb.LeaseRevokeRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.etcdserverpb.LeaseRevokeRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getField(msg, 1)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.etcdserverpb.LeaseRevokeRequest}
 */
proto.etcdserverpb.LeaseRevokeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.etcdserverpb.LeaseRevokeRequest;
  return proto.etcdserverpb.LeaseRevokeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.etcdserverpb.LeaseRevokeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.etcdserverpb.LeaseRevokeRequest}
 */
proto.etcdserverpb.LeaseRevokeRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.etcdserverpb.LeaseRevokeRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.etcdserverpb.LeaseRevokeRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.etcdserverpb.LeaseRevokeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.etcdserverpb.LeaseRevokeRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getId();
  if (f != null) {
    writer.writeInt64(
      1,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.etcdserverpb.LeaseRevokeRequest} The clone.
 */
proto.etcdserverpb.LeaseRevokeRequest.prototype.cloneMessage = function() {
  return /** @type {!proto.etcdserverpb.LeaseRevokeRequest} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional int64 ID = 1;
 * @return {number?}
 */
proto.etcdserverpb.LeaseRevokeRequest.prototype.getId = function() {
  return /** @type {number?} */ (jspb.Message.getField(this, 1));
};


/** @param {number?|undefined} value  */
proto.etcdserverpb.LeaseRevokeRequest.prototype.setId = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.etcdserverpb.LeaseRevokeRequest.prototype.clearId = function() {
  jspb.Message.setField(this, 1, undefined);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.etcdserverpb.LeaseRevokeResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.etcdserverpb.LeaseRevokeResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.etcdserverpb.LeaseRevokeResponse.displayName = 'proto.etcdserverpb.LeaseRevokeResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.etcdserverpb.LeaseRevokeResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.etcdserverpb.LeaseRevokeResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.etcdserverpb.LeaseRevokeResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.etcdserverpb.LeaseRevokeResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && proto.etcdserverpb.ResponseHeader.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.etcdserverpb.LeaseRevokeResponse}
 */
proto.etcdserverpb.LeaseRevokeResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.etcdserverpb.LeaseRevokeResponse;
  return proto.etcdserverpb.LeaseRevokeResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.etcdserverpb.LeaseRevokeResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.etcdserverpb.LeaseRevokeResponse}
 */
proto.etcdserverpb.LeaseRevokeResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.etcdserverpb.ResponseHeader;
      reader.readMessage(value,proto.etcdserverpb.ResponseHeader.deserializeBinaryFromReader);
      msg.setHeader(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.etcdserverpb.LeaseRevokeResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.etcdserverpb.LeaseRevokeResponse.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.etcdserverpb.LeaseRevokeResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.etcdserverpb.LeaseRevokeResponse.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getHeader();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.etcdserverpb.ResponseHeader.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.etcdserverpb.LeaseRevokeResponse} The clone.
 */
proto.etcdserverpb.LeaseRevokeResponse.prototype.cloneMessage = function() {
  return /** @type {!proto.etcdserverpb.LeaseRevokeResponse} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional ResponseHeader header = 1;
 * @return {proto.etcdserverpb.ResponseHeader}
 */
proto.etcdserverpb.LeaseRevokeResponse.prototype.getHeader = function() {
  return /** @type{proto.etcdserverpb.ResponseHeader} */ (
    jspb.Message.getWrapperField(this, proto.etcdserverpb.ResponseHeader, 1));
};


/** @param {proto.etcdserverpb.ResponseHeader|undefined} value  */
proto.etcdserverpb.LeaseRevokeResponse.prototype.setHeader = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.etcdserverpb.LeaseRevokeResponse.prototype.clearHeader = function() {
  this.setHeader(undefined);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.etcdserverpb.LeaseKeepAliveRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.etcdserverpb.LeaseKeepAliveRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.etcdserverpb.LeaseKeepAliveRequest.displayName = 'proto.etcdserverpb.LeaseKeepAliveRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.etcdserverpb.LeaseKeepAliveRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.etcdserverpb.LeaseKeepAliveRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.etcdserverpb.LeaseKeepAliveRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.etcdserverpb.LeaseKeepAliveRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getField(msg, 1)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.etcdserverpb.LeaseKeepAliveRequest}
 */
proto.etcdserverpb.LeaseKeepAliveRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.etcdserverpb.LeaseKeepAliveRequest;
  return proto.etcdserverpb.LeaseKeepAliveRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.etcdserverpb.LeaseKeepAliveRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.etcdserverpb.LeaseKeepAliveRequest}
 */
proto.etcdserverpb.LeaseKeepAliveRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.etcdserverpb.LeaseKeepAliveRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.etcdserverpb.LeaseKeepAliveRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.etcdserverpb.LeaseKeepAliveRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.etcdserverpb.LeaseKeepAliveRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getId();
  if (f != null) {
    writer.writeInt64(
      1,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.etcdserverpb.LeaseKeepAliveRequest} The clone.
 */
proto.etcdserverpb.LeaseKeepAliveRequest.prototype.cloneMessage = function() {
  return /** @type {!proto.etcdserverpb.LeaseKeepAliveRequest} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional int64 ID = 1;
 * @return {number?}
 */
proto.etcdserverpb.LeaseKeepAliveRequest.prototype.getId = function() {
  return /** @type {number?} */ (jspb.Message.getField(this, 1));
};


/** @param {number?|undefined} value  */
proto.etcdserverpb.LeaseKeepAliveRequest.prototype.setId = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.etcdserverpb.LeaseKeepAliveRequest.prototype.clearId = function() {
  jspb.Message.setField(this, 1, undefined);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.etcdserverpb.LeaseKeepAliveResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.etcdserverpb.LeaseKeepAliveResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.etcdserverpb.LeaseKeepAliveResponse.displayName = 'proto.etcdserverpb.LeaseKeepAliveResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.etcdserverpb.LeaseKeepAliveResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.etcdserverpb.LeaseKeepAliveResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.etcdserverpb.LeaseKeepAliveResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.etcdserverpb.LeaseKeepAliveResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && proto.etcdserverpb.ResponseHeader.toObject(includeInstance, f),
    id: jspb.Message.getField(msg, 2),
    ttl: jspb.Message.getField(msg, 3)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.etcdserverpb.LeaseKeepAliveResponse}
 */
proto.etcdserverpb.LeaseKeepAliveResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.etcdserverpb.LeaseKeepAliveResponse;
  return proto.etcdserverpb.LeaseKeepAliveResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.etcdserverpb.LeaseKeepAliveResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.etcdserverpb.LeaseKeepAliveResponse}
 */
proto.etcdserverpb.LeaseKeepAliveResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.etcdserverpb.ResponseHeader;
      reader.readMessage(value,proto.etcdserverpb.ResponseHeader.deserializeBinaryFromReader);
      msg.setHeader(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setId(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTtl(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.etcdserverpb.LeaseKeepAliveResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.etcdserverpb.LeaseKeepAliveResponse.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.etcdserverpb.LeaseKeepAliveResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.etcdserverpb.LeaseKeepAliveResponse.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getHeader();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.etcdserverpb.ResponseHeader.serializeBinaryToWriter
    );
  }
  f = this.getId();
  if (f != null) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = this.getTtl();
  if (f != null) {
    writer.writeInt64(
      3,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.etcdserverpb.LeaseKeepAliveResponse} The clone.
 */
proto.etcdserverpb.LeaseKeepAliveResponse.prototype.cloneMessage = function() {
  return /** @type {!proto.etcdserverpb.LeaseKeepAliveResponse} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional ResponseHeader header = 1;
 * @return {proto.etcdserverpb.ResponseHeader}
 */
proto.etcdserverpb.LeaseKeepAliveResponse.prototype.getHeader = function() {
  return /** @type{proto.etcdserverpb.ResponseHeader} */ (
    jspb.Message.getWrapperField(this, proto.etcdserverpb.ResponseHeader, 1));
};


/** @param {proto.etcdserverpb.ResponseHeader|undefined} value  */
proto.etcdserverpb.LeaseKeepAliveResponse.prototype.setHeader = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.etcdserverpb.LeaseKeepAliveResponse.prototype.clearHeader = function() {
  this.setHeader(undefined);
};


/**
 * optional int64 ID = 2;
 * @return {number?}
 */
proto.etcdserverpb.LeaseKeepAliveResponse.prototype.getId = function() {
  return /** @type {number?} */ (jspb.Message.getField(this, 2));
};


/** @param {number?|undefined} value  */
proto.etcdserverpb.LeaseKeepAliveResponse.prototype.setId = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.etcdserverpb.LeaseKeepAliveResponse.prototype.clearId = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * optional int64 TTL = 3;
 * @return {number?}
 */
proto.etcdserverpb.LeaseKeepAliveResponse.prototype.getTtl = function() {
  return /** @type {number?} */ (jspb.Message.getField(this, 3));
};


/** @param {number?|undefined} value  */
proto.etcdserverpb.LeaseKeepAliveResponse.prototype.setTtl = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.etcdserverpb.LeaseKeepAliveResponse.prototype.clearTtl = function() {
  jspb.Message.setField(this, 3, undefined);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.etcdserverpb.Member = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.etcdserverpb.Member.repeatedFields_, null);
};
goog.inherits(proto.etcdserverpb.Member, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.etcdserverpb.Member.displayName = 'proto.etcdserverpb.Member';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.etcdserverpb.Member.repeatedFields_ = [3,4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.etcdserverpb.Member.prototype.toObject = function(opt_includeInstance) {
  return proto.etcdserverpb.Member.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.etcdserverpb.Member} msg The msg instance to transform.
 * @return {!Object}
 */
proto.etcdserverpb.Member.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getField(msg, 1),
    name: jspb.Message.getField(msg, 2),
    peerurlsList: jspb.Message.getField(msg, 3),
    clienturlsList: jspb.Message.getField(msg, 4)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.etcdserverpb.Member}
 */
proto.etcdserverpb.Member.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.etcdserverpb.Member;
  return proto.etcdserverpb.Member.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.etcdserverpb.Member} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.etcdserverpb.Member}
 */
proto.etcdserverpb.Member.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.getPeerurlsList().push(value);
      msg.setPeerurlsList(msg.getPeerurlsList());
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.getClienturlsList().push(value);
      msg.setClienturlsList(msg.getClienturlsList());
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.etcdserverpb.Member} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.etcdserverpb.Member.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.etcdserverpb.Member.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.etcdserverpb.Member.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getId();
  if (f != null) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = this.getName();
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = this.getPeerurlsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
  f = this.getClienturlsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      4,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.etcdserverpb.Member} The clone.
 */
proto.etcdserverpb.Member.prototype.cloneMessage = function() {
  return /** @type {!proto.etcdserverpb.Member} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional uint64 ID = 1;
 * @return {number?}
 */
proto.etcdserverpb.Member.prototype.getId = function() {
  return /** @type {number?} */ (jspb.Message.getField(this, 1));
};


/** @param {number?|undefined} value  */
proto.etcdserverpb.Member.prototype.setId = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.etcdserverpb.Member.prototype.clearId = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * optional string name = 2;
 * @return {string?}
 */
proto.etcdserverpb.Member.prototype.getName = function() {
  return /** @type {string?} */ (jspb.Message.getField(this, 2));
};


/** @param {string?|undefined} value  */
proto.etcdserverpb.Member.prototype.setName = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.etcdserverpb.Member.prototype.clearName = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * repeated string peerURLs = 3;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<string>}
 */
proto.etcdserverpb.Member.prototype.getPeerurlsList = function() {
  return /** @type {!Array.<string>} */ (jspb.Message.getField(this, 3));
};


/** @param {Array.<string>|undefined} value  */
proto.etcdserverpb.Member.prototype.setPeerurlsList = function(value) {
  jspb.Message.setField(this, 3, value || []);
};


proto.etcdserverpb.Member.prototype.clearPeerurlsList = function() {
  jspb.Message.setField(this, 3, []);
};


/**
 * repeated string clientURLs = 4;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<string>}
 */
proto.etcdserverpb.Member.prototype.getClienturlsList = function() {
  return /** @type {!Array.<string>} */ (jspb.Message.getField(this, 4));
};


/** @param {Array.<string>|undefined} value  */
proto.etcdserverpb.Member.prototype.setClienturlsList = function(value) {
  jspb.Message.setField(this, 4, value || []);
};


proto.etcdserverpb.Member.prototype.clearClienturlsList = function() {
  jspb.Message.setField(this, 4, []);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.etcdserverpb.MemberAddRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.etcdserverpb.MemberAddRequest.repeatedFields_, null);
};
goog.inherits(proto.etcdserverpb.MemberAddRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.etcdserverpb.MemberAddRequest.displayName = 'proto.etcdserverpb.MemberAddRequest';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.etcdserverpb.MemberAddRequest.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.etcdserverpb.MemberAddRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.etcdserverpb.MemberAddRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.etcdserverpb.MemberAddRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.etcdserverpb.MemberAddRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    peerurlsList: jspb.Message.getField(msg, 1)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.etcdserverpb.MemberAddRequest}
 */
proto.etcdserverpb.MemberAddRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.etcdserverpb.MemberAddRequest;
  return proto.etcdserverpb.MemberAddRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.etcdserverpb.MemberAddRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.etcdserverpb.MemberAddRequest}
 */
proto.etcdserverpb.MemberAddRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.getPeerurlsList().push(value);
      msg.setPeerurlsList(msg.getPeerurlsList());
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.etcdserverpb.MemberAddRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.etcdserverpb.MemberAddRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.etcdserverpb.MemberAddRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.etcdserverpb.MemberAddRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getPeerurlsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.etcdserverpb.MemberAddRequest} The clone.
 */
proto.etcdserverpb.MemberAddRequest.prototype.cloneMessage = function() {
  return /** @type {!proto.etcdserverpb.MemberAddRequest} */ (jspb.Message.cloneMessage(this));
};


/**
 * repeated string peerURLs = 1;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<string>}
 */
proto.etcdserverpb.MemberAddRequest.prototype.getPeerurlsList = function() {
  return /** @type {!Array.<string>} */ (jspb.Message.getField(this, 1));
};


/** @param {Array.<string>|undefined} value  */
proto.etcdserverpb.MemberAddRequest.prototype.setPeerurlsList = function(value) {
  jspb.Message.setField(this, 1, value || []);
};


proto.etcdserverpb.MemberAddRequest.prototype.clearPeerurlsList = function() {
  jspb.Message.setField(this, 1, []);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.etcdserverpb.MemberAddResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.etcdserverpb.MemberAddResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.etcdserverpb.MemberAddResponse.displayName = 'proto.etcdserverpb.MemberAddResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.etcdserverpb.MemberAddResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.etcdserverpb.MemberAddResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.etcdserverpb.MemberAddResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.etcdserverpb.MemberAddResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && proto.etcdserverpb.ResponseHeader.toObject(includeInstance, f),
    member: (f = msg.getMember()) && proto.etcdserverpb.Member.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.etcdserverpb.MemberAddResponse}
 */
proto.etcdserverpb.MemberAddResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.etcdserverpb.MemberAddResponse;
  return proto.etcdserverpb.MemberAddResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.etcdserverpb.MemberAddResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.etcdserverpb.MemberAddResponse}
 */
proto.etcdserverpb.MemberAddResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.etcdserverpb.ResponseHeader;
      reader.readMessage(value,proto.etcdserverpb.ResponseHeader.deserializeBinaryFromReader);
      msg.setHeader(value);
      break;
    case 2:
      var value = new proto.etcdserverpb.Member;
      reader.readMessage(value,proto.etcdserverpb.Member.deserializeBinaryFromReader);
      msg.setMember(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.etcdserverpb.MemberAddResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.etcdserverpb.MemberAddResponse.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.etcdserverpb.MemberAddResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.etcdserverpb.MemberAddResponse.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getHeader();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.etcdserverpb.ResponseHeader.serializeBinaryToWriter
    );
  }
  f = this.getMember();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.etcdserverpb.Member.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.etcdserverpb.MemberAddResponse} The clone.
 */
proto.etcdserverpb.MemberAddResponse.prototype.cloneMessage = function() {
  return /** @type {!proto.etcdserverpb.MemberAddResponse} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional ResponseHeader header = 1;
 * @return {proto.etcdserverpb.ResponseHeader}
 */
proto.etcdserverpb.MemberAddResponse.prototype.getHeader = function() {
  return /** @type{proto.etcdserverpb.ResponseHeader} */ (
    jspb.Message.getWrapperField(this, proto.etcdserverpb.ResponseHeader, 1));
};


/** @param {proto.etcdserverpb.ResponseHeader|undefined} value  */
proto.etcdserverpb.MemberAddResponse.prototype.setHeader = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.etcdserverpb.MemberAddResponse.prototype.clearHeader = function() {
  this.setHeader(undefined);
};


/**
 * optional Member member = 2;
 * @return {proto.etcdserverpb.Member}
 */
proto.etcdserverpb.MemberAddResponse.prototype.getMember = function() {
  return /** @type{proto.etcdserverpb.Member} */ (
    jspb.Message.getWrapperField(this, proto.etcdserverpb.Member, 2));
};


/** @param {proto.etcdserverpb.Member|undefined} value  */
proto.etcdserverpb.MemberAddResponse.prototype.setMember = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.etcdserverpb.MemberAddResponse.prototype.clearMember = function() {
  this.setMember(undefined);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.etcdserverpb.MemberRemoveRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.etcdserverpb.MemberRemoveRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.etcdserverpb.MemberRemoveRequest.displayName = 'proto.etcdserverpb.MemberRemoveRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.etcdserverpb.MemberRemoveRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.etcdserverpb.MemberRemoveRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.etcdserverpb.MemberRemoveRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.etcdserverpb.MemberRemoveRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getField(msg, 1)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.etcdserverpb.MemberRemoveRequest}
 */
proto.etcdserverpb.MemberRemoveRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.etcdserverpb.MemberRemoveRequest;
  return proto.etcdserverpb.MemberRemoveRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.etcdserverpb.MemberRemoveRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.etcdserverpb.MemberRemoveRequest}
 */
proto.etcdserverpb.MemberRemoveRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.etcdserverpb.MemberRemoveRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.etcdserverpb.MemberRemoveRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.etcdserverpb.MemberRemoveRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.etcdserverpb.MemberRemoveRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getId();
  if (f != null) {
    writer.writeUint64(
      1,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.etcdserverpb.MemberRemoveRequest} The clone.
 */
proto.etcdserverpb.MemberRemoveRequest.prototype.cloneMessage = function() {
  return /** @type {!proto.etcdserverpb.MemberRemoveRequest} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional uint64 ID = 1;
 * @return {number?}
 */
proto.etcdserverpb.MemberRemoveRequest.prototype.getId = function() {
  return /** @type {number?} */ (jspb.Message.getField(this, 1));
};


/** @param {number?|undefined} value  */
proto.etcdserverpb.MemberRemoveRequest.prototype.setId = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.etcdserverpb.MemberRemoveRequest.prototype.clearId = function() {
  jspb.Message.setField(this, 1, undefined);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.etcdserverpb.MemberRemoveResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.etcdserverpb.MemberRemoveResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.etcdserverpb.MemberRemoveResponse.displayName = 'proto.etcdserverpb.MemberRemoveResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.etcdserverpb.MemberRemoveResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.etcdserverpb.MemberRemoveResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.etcdserverpb.MemberRemoveResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.etcdserverpb.MemberRemoveResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && proto.etcdserverpb.ResponseHeader.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.etcdserverpb.MemberRemoveResponse}
 */
proto.etcdserverpb.MemberRemoveResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.etcdserverpb.MemberRemoveResponse;
  return proto.etcdserverpb.MemberRemoveResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.etcdserverpb.MemberRemoveResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.etcdserverpb.MemberRemoveResponse}
 */
proto.etcdserverpb.MemberRemoveResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.etcdserverpb.ResponseHeader;
      reader.readMessage(value,proto.etcdserverpb.ResponseHeader.deserializeBinaryFromReader);
      msg.setHeader(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.etcdserverpb.MemberRemoveResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.etcdserverpb.MemberRemoveResponse.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.etcdserverpb.MemberRemoveResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.etcdserverpb.MemberRemoveResponse.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getHeader();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.etcdserverpb.ResponseHeader.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.etcdserverpb.MemberRemoveResponse} The clone.
 */
proto.etcdserverpb.MemberRemoveResponse.prototype.cloneMessage = function() {
  return /** @type {!proto.etcdserverpb.MemberRemoveResponse} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional ResponseHeader header = 1;
 * @return {proto.etcdserverpb.ResponseHeader}
 */
proto.etcdserverpb.MemberRemoveResponse.prototype.getHeader = function() {
  return /** @type{proto.etcdserverpb.ResponseHeader} */ (
    jspb.Message.getWrapperField(this, proto.etcdserverpb.ResponseHeader, 1));
};


/** @param {proto.etcdserverpb.ResponseHeader|undefined} value  */
proto.etcdserverpb.MemberRemoveResponse.prototype.setHeader = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.etcdserverpb.MemberRemoveResponse.prototype.clearHeader = function() {
  this.setHeader(undefined);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.etcdserverpb.MemberUpdateRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.etcdserverpb.MemberUpdateRequest.repeatedFields_, null);
};
goog.inherits(proto.etcdserverpb.MemberUpdateRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.etcdserverpb.MemberUpdateRequest.displayName = 'proto.etcdserverpb.MemberUpdateRequest';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.etcdserverpb.MemberUpdateRequest.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.etcdserverpb.MemberUpdateRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.etcdserverpb.MemberUpdateRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.etcdserverpb.MemberUpdateRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.etcdserverpb.MemberUpdateRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getField(msg, 1),
    peerurlsList: jspb.Message.getField(msg, 2)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.etcdserverpb.MemberUpdateRequest}
 */
proto.etcdserverpb.MemberUpdateRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.etcdserverpb.MemberUpdateRequest;
  return proto.etcdserverpb.MemberUpdateRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.etcdserverpb.MemberUpdateRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.etcdserverpb.MemberUpdateRequest}
 */
proto.etcdserverpb.MemberUpdateRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.getPeerurlsList().push(value);
      msg.setPeerurlsList(msg.getPeerurlsList());
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.etcdserverpb.MemberUpdateRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.etcdserverpb.MemberUpdateRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.etcdserverpb.MemberUpdateRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.etcdserverpb.MemberUpdateRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getId();
  if (f != null) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = this.getPeerurlsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.etcdserverpb.MemberUpdateRequest} The clone.
 */
proto.etcdserverpb.MemberUpdateRequest.prototype.cloneMessage = function() {
  return /** @type {!proto.etcdserverpb.MemberUpdateRequest} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional uint64 ID = 1;
 * @return {number?}
 */
proto.etcdserverpb.MemberUpdateRequest.prototype.getId = function() {
  return /** @type {number?} */ (jspb.Message.getField(this, 1));
};


/** @param {number?|undefined} value  */
proto.etcdserverpb.MemberUpdateRequest.prototype.setId = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.etcdserverpb.MemberUpdateRequest.prototype.clearId = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * repeated string peerURLs = 2;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<string>}
 */
proto.etcdserverpb.MemberUpdateRequest.prototype.getPeerurlsList = function() {
  return /** @type {!Array.<string>} */ (jspb.Message.getField(this, 2));
};


/** @param {Array.<string>|undefined} value  */
proto.etcdserverpb.MemberUpdateRequest.prototype.setPeerurlsList = function(value) {
  jspb.Message.setField(this, 2, value || []);
};


proto.etcdserverpb.MemberUpdateRequest.prototype.clearPeerurlsList = function() {
  jspb.Message.setField(this, 2, []);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.etcdserverpb.MemberUpdateResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.etcdserverpb.MemberUpdateResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.etcdserverpb.MemberUpdateResponse.displayName = 'proto.etcdserverpb.MemberUpdateResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.etcdserverpb.MemberUpdateResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.etcdserverpb.MemberUpdateResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.etcdserverpb.MemberUpdateResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.etcdserverpb.MemberUpdateResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && proto.etcdserverpb.ResponseHeader.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.etcdserverpb.MemberUpdateResponse}
 */
proto.etcdserverpb.MemberUpdateResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.etcdserverpb.MemberUpdateResponse;
  return proto.etcdserverpb.MemberUpdateResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.etcdserverpb.MemberUpdateResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.etcdserverpb.MemberUpdateResponse}
 */
proto.etcdserverpb.MemberUpdateResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.etcdserverpb.ResponseHeader;
      reader.readMessage(value,proto.etcdserverpb.ResponseHeader.deserializeBinaryFromReader);
      msg.setHeader(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.etcdserverpb.MemberUpdateResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.etcdserverpb.MemberUpdateResponse.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.etcdserverpb.MemberUpdateResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.etcdserverpb.MemberUpdateResponse.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getHeader();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.etcdserverpb.ResponseHeader.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.etcdserverpb.MemberUpdateResponse} The clone.
 */
proto.etcdserverpb.MemberUpdateResponse.prototype.cloneMessage = function() {
  return /** @type {!proto.etcdserverpb.MemberUpdateResponse} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional ResponseHeader header = 1;
 * @return {proto.etcdserverpb.ResponseHeader}
 */
proto.etcdserverpb.MemberUpdateResponse.prototype.getHeader = function() {
  return /** @type{proto.etcdserverpb.ResponseHeader} */ (
    jspb.Message.getWrapperField(this, proto.etcdserverpb.ResponseHeader, 1));
};


/** @param {proto.etcdserverpb.ResponseHeader|undefined} value  */
proto.etcdserverpb.MemberUpdateResponse.prototype.setHeader = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.etcdserverpb.MemberUpdateResponse.prototype.clearHeader = function() {
  this.setHeader(undefined);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.etcdserverpb.MemberListRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.etcdserverpb.MemberListRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.etcdserverpb.MemberListRequest.displayName = 'proto.etcdserverpb.MemberListRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.etcdserverpb.MemberListRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.etcdserverpb.MemberListRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.etcdserverpb.MemberListRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.etcdserverpb.MemberListRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.etcdserverpb.MemberListRequest}
 */
proto.etcdserverpb.MemberListRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.etcdserverpb.MemberListRequest;
  return proto.etcdserverpb.MemberListRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.etcdserverpb.MemberListRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.etcdserverpb.MemberListRequest}
 */
proto.etcdserverpb.MemberListRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.etcdserverpb.MemberListRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.etcdserverpb.MemberListRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.etcdserverpb.MemberListRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.etcdserverpb.MemberListRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.etcdserverpb.MemberListRequest} The clone.
 */
proto.etcdserverpb.MemberListRequest.prototype.cloneMessage = function() {
  return /** @type {!proto.etcdserverpb.MemberListRequest} */ (jspb.Message.cloneMessage(this));
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.etcdserverpb.MemberListResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.etcdserverpb.MemberListResponse.repeatedFields_, null);
};
goog.inherits(proto.etcdserverpb.MemberListResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.etcdserverpb.MemberListResponse.displayName = 'proto.etcdserverpb.MemberListResponse';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.etcdserverpb.MemberListResponse.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.etcdserverpb.MemberListResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.etcdserverpb.MemberListResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.etcdserverpb.MemberListResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.etcdserverpb.MemberListResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && proto.etcdserverpb.ResponseHeader.toObject(includeInstance, f),
    membersList: jspb.Message.toObjectList(msg.getMembersList(),
    proto.etcdserverpb.Member.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.etcdserverpb.MemberListResponse}
 */
proto.etcdserverpb.MemberListResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.etcdserverpb.MemberListResponse;
  return proto.etcdserverpb.MemberListResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.etcdserverpb.MemberListResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.etcdserverpb.MemberListResponse}
 */
proto.etcdserverpb.MemberListResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.etcdserverpb.ResponseHeader;
      reader.readMessage(value,proto.etcdserverpb.ResponseHeader.deserializeBinaryFromReader);
      msg.setHeader(value);
      break;
    case 2:
      var value = new proto.etcdserverpb.Member;
      reader.readMessage(value,proto.etcdserverpb.Member.deserializeBinaryFromReader);
      msg.getMembersList().push(value);
      msg.setMembersList(msg.getMembersList());
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.etcdserverpb.MemberListResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.etcdserverpb.MemberListResponse.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.etcdserverpb.MemberListResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.etcdserverpb.MemberListResponse.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getHeader();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.etcdserverpb.ResponseHeader.serializeBinaryToWriter
    );
  }
  f = this.getMembersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.etcdserverpb.Member.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.etcdserverpb.MemberListResponse} The clone.
 */
proto.etcdserverpb.MemberListResponse.prototype.cloneMessage = function() {
  return /** @type {!proto.etcdserverpb.MemberListResponse} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional ResponseHeader header = 1;
 * @return {proto.etcdserverpb.ResponseHeader}
 */
proto.etcdserverpb.MemberListResponse.prototype.getHeader = function() {
  return /** @type{proto.etcdserverpb.ResponseHeader} */ (
    jspb.Message.getWrapperField(this, proto.etcdserverpb.ResponseHeader, 1));
};


/** @param {proto.etcdserverpb.ResponseHeader|undefined} value  */
proto.etcdserverpb.MemberListResponse.prototype.setHeader = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.etcdserverpb.MemberListResponse.prototype.clearHeader = function() {
  this.setHeader(undefined);
};


/**
 * repeated Member members = 2;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.etcdserverpb.Member>}
 */
proto.etcdserverpb.MemberListResponse.prototype.getMembersList = function() {
  return /** @type{!Array.<!proto.etcdserverpb.Member>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.etcdserverpb.Member, 2));
};


/** @param {Array.<!proto.etcdserverpb.Member>|undefined} value  */
proto.etcdserverpb.MemberListResponse.prototype.setMembersList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 2, value);
};


proto.etcdserverpb.MemberListResponse.prototype.clearMembersList = function() {
  this.setMembersList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.etcdserverpb.DefragmentRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.etcdserverpb.DefragmentRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.etcdserverpb.DefragmentRequest.displayName = 'proto.etcdserverpb.DefragmentRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.etcdserverpb.DefragmentRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.etcdserverpb.DefragmentRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.etcdserverpb.DefragmentRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.etcdserverpb.DefragmentRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.etcdserverpb.DefragmentRequest}
 */
proto.etcdserverpb.DefragmentRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.etcdserverpb.DefragmentRequest;
  return proto.etcdserverpb.DefragmentRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.etcdserverpb.DefragmentRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.etcdserverpb.DefragmentRequest}
 */
proto.etcdserverpb.DefragmentRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.etcdserverpb.DefragmentRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.etcdserverpb.DefragmentRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.etcdserverpb.DefragmentRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.etcdserverpb.DefragmentRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.etcdserverpb.DefragmentRequest} The clone.
 */
proto.etcdserverpb.DefragmentRequest.prototype.cloneMessage = function() {
  return /** @type {!proto.etcdserverpb.DefragmentRequest} */ (jspb.Message.cloneMessage(this));
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.etcdserverpb.DefragmentResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.etcdserverpb.DefragmentResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.etcdserverpb.DefragmentResponse.displayName = 'proto.etcdserverpb.DefragmentResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.etcdserverpb.DefragmentResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.etcdserverpb.DefragmentResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.etcdserverpb.DefragmentResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.etcdserverpb.DefragmentResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && proto.etcdserverpb.ResponseHeader.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.etcdserverpb.DefragmentResponse}
 */
proto.etcdserverpb.DefragmentResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.etcdserverpb.DefragmentResponse;
  return proto.etcdserverpb.DefragmentResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.etcdserverpb.DefragmentResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.etcdserverpb.DefragmentResponse}
 */
proto.etcdserverpb.DefragmentResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.etcdserverpb.ResponseHeader;
      reader.readMessage(value,proto.etcdserverpb.ResponseHeader.deserializeBinaryFromReader);
      msg.setHeader(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.etcdserverpb.DefragmentResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.etcdserverpb.DefragmentResponse.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.etcdserverpb.DefragmentResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.etcdserverpb.DefragmentResponse.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getHeader();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.etcdserverpb.ResponseHeader.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.etcdserverpb.DefragmentResponse} The clone.
 */
proto.etcdserverpb.DefragmentResponse.prototype.cloneMessage = function() {
  return /** @type {!proto.etcdserverpb.DefragmentResponse} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional ResponseHeader header = 1;
 * @return {proto.etcdserverpb.ResponseHeader}
 */
proto.etcdserverpb.DefragmentResponse.prototype.getHeader = function() {
  return /** @type{proto.etcdserverpb.ResponseHeader} */ (
    jspb.Message.getWrapperField(this, proto.etcdserverpb.ResponseHeader, 1));
};


/** @param {proto.etcdserverpb.ResponseHeader|undefined} value  */
proto.etcdserverpb.DefragmentResponse.prototype.setHeader = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.etcdserverpb.DefragmentResponse.prototype.clearHeader = function() {
  this.setHeader(undefined);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.etcdserverpb.AlarmRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.etcdserverpb.AlarmRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.etcdserverpb.AlarmRequest.displayName = 'proto.etcdserverpb.AlarmRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.etcdserverpb.AlarmRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.etcdserverpb.AlarmRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.etcdserverpb.AlarmRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.etcdserverpb.AlarmRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    action: jspb.Message.getField(msg, 1),
    memberid: jspb.Message.getField(msg, 2),
    alarm: jspb.Message.getField(msg, 3)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.etcdserverpb.AlarmRequest}
 */
proto.etcdserverpb.AlarmRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.etcdserverpb.AlarmRequest;
  return proto.etcdserverpb.AlarmRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.etcdserverpb.AlarmRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.etcdserverpb.AlarmRequest}
 */
proto.etcdserverpb.AlarmRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.etcdserverpb.AlarmRequest.AlarmAction} */ (reader.readEnum());
      msg.setAction(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setMemberid(value);
      break;
    case 3:
      var value = /** @type {!proto.etcdserverpb.AlarmType} */ (reader.readEnum());
      msg.setAlarm(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.etcdserverpb.AlarmRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.etcdserverpb.AlarmRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.etcdserverpb.AlarmRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.etcdserverpb.AlarmRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getAction();
  if (f != null) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = this.getMemberid();
  if (f != null) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = this.getAlarm();
  if (f != null) {
    writer.writeEnum(
      3,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.etcdserverpb.AlarmRequest} The clone.
 */
proto.etcdserverpb.AlarmRequest.prototype.cloneMessage = function() {
  return /** @type {!proto.etcdserverpb.AlarmRequest} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional AlarmAction action = 1;
 * @return {proto.etcdserverpb.AlarmRequest.AlarmAction}
 */
proto.etcdserverpb.AlarmRequest.prototype.getAction = function() {
  return /** @type {proto.etcdserverpb.AlarmRequest.AlarmAction} */ (jspb.Message.getField(this, 1));
};


/** @param {proto.etcdserverpb.AlarmRequest.AlarmAction|undefined} value  */
proto.etcdserverpb.AlarmRequest.prototype.setAction = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.etcdserverpb.AlarmRequest.prototype.clearAction = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * optional uint64 memberID = 2;
 * @return {number?}
 */
proto.etcdserverpb.AlarmRequest.prototype.getMemberid = function() {
  return /** @type {number?} */ (jspb.Message.getField(this, 2));
};


/** @param {number?|undefined} value  */
proto.etcdserverpb.AlarmRequest.prototype.setMemberid = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.etcdserverpb.AlarmRequest.prototype.clearMemberid = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * optional AlarmType alarm = 3;
 * @return {proto.etcdserverpb.AlarmType}
 */
proto.etcdserverpb.AlarmRequest.prototype.getAlarm = function() {
  return /** @type {proto.etcdserverpb.AlarmType} */ (jspb.Message.getField(this, 3));
};


/** @param {proto.etcdserverpb.AlarmType|undefined} value  */
proto.etcdserverpb.AlarmRequest.prototype.setAlarm = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.etcdserverpb.AlarmRequest.prototype.clearAlarm = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * @enum {number}
 */
proto.etcdserverpb.AlarmRequest.AlarmAction = {
  GET: 0,
  ACTIVATE: 1,
  DEACTIVATE: 2
};


/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.etcdserverpb.AlarmMember = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.etcdserverpb.AlarmMember, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.etcdserverpb.AlarmMember.displayName = 'proto.etcdserverpb.AlarmMember';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.etcdserverpb.AlarmMember.prototype.toObject = function(opt_includeInstance) {
  return proto.etcdserverpb.AlarmMember.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.etcdserverpb.AlarmMember} msg The msg instance to transform.
 * @return {!Object}
 */
proto.etcdserverpb.AlarmMember.toObject = function(includeInstance, msg) {
  var f, obj = {
    memberid: jspb.Message.getField(msg, 1),
    alarm: jspb.Message.getField(msg, 2)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.etcdserverpb.AlarmMember}
 */
proto.etcdserverpb.AlarmMember.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.etcdserverpb.AlarmMember;
  return proto.etcdserverpb.AlarmMember.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.etcdserverpb.AlarmMember} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.etcdserverpb.AlarmMember}
 */
proto.etcdserverpb.AlarmMember.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setMemberid(value);
      break;
    case 2:
      var value = /** @type {!proto.etcdserverpb.AlarmType} */ (reader.readEnum());
      msg.setAlarm(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.etcdserverpb.AlarmMember} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.etcdserverpb.AlarmMember.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.etcdserverpb.AlarmMember.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.etcdserverpb.AlarmMember.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getMemberid();
  if (f != null) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = this.getAlarm();
  if (f != null) {
    writer.writeEnum(
      2,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.etcdserverpb.AlarmMember} The clone.
 */
proto.etcdserverpb.AlarmMember.prototype.cloneMessage = function() {
  return /** @type {!proto.etcdserverpb.AlarmMember} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional uint64 memberID = 1;
 * @return {number?}
 */
proto.etcdserverpb.AlarmMember.prototype.getMemberid = function() {
  return /** @type {number?} */ (jspb.Message.getField(this, 1));
};


/** @param {number?|undefined} value  */
proto.etcdserverpb.AlarmMember.prototype.setMemberid = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.etcdserverpb.AlarmMember.prototype.clearMemberid = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * optional AlarmType alarm = 2;
 * @return {proto.etcdserverpb.AlarmType}
 */
proto.etcdserverpb.AlarmMember.prototype.getAlarm = function() {
  return /** @type {proto.etcdserverpb.AlarmType} */ (jspb.Message.getField(this, 2));
};


/** @param {proto.etcdserverpb.AlarmType|undefined} value  */
proto.etcdserverpb.AlarmMember.prototype.setAlarm = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.etcdserverpb.AlarmMember.prototype.clearAlarm = function() {
  jspb.Message.setField(this, 2, undefined);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.etcdserverpb.AlarmResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.etcdserverpb.AlarmResponse.repeatedFields_, null);
};
goog.inherits(proto.etcdserverpb.AlarmResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.etcdserverpb.AlarmResponse.displayName = 'proto.etcdserverpb.AlarmResponse';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.etcdserverpb.AlarmResponse.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.etcdserverpb.AlarmResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.etcdserverpb.AlarmResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.etcdserverpb.AlarmResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.etcdserverpb.AlarmResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && proto.etcdserverpb.ResponseHeader.toObject(includeInstance, f),
    alarmsList: jspb.Message.toObjectList(msg.getAlarmsList(),
    proto.etcdserverpb.AlarmMember.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.etcdserverpb.AlarmResponse}
 */
proto.etcdserverpb.AlarmResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.etcdserverpb.AlarmResponse;
  return proto.etcdserverpb.AlarmResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.etcdserverpb.AlarmResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.etcdserverpb.AlarmResponse}
 */
proto.etcdserverpb.AlarmResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.etcdserverpb.ResponseHeader;
      reader.readMessage(value,proto.etcdserverpb.ResponseHeader.deserializeBinaryFromReader);
      msg.setHeader(value);
      break;
    case 2:
      var value = new proto.etcdserverpb.AlarmMember;
      reader.readMessage(value,proto.etcdserverpb.AlarmMember.deserializeBinaryFromReader);
      msg.getAlarmsList().push(value);
      msg.setAlarmsList(msg.getAlarmsList());
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.etcdserverpb.AlarmResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.etcdserverpb.AlarmResponse.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.etcdserverpb.AlarmResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.etcdserverpb.AlarmResponse.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getHeader();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.etcdserverpb.ResponseHeader.serializeBinaryToWriter
    );
  }
  f = this.getAlarmsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.etcdserverpb.AlarmMember.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.etcdserverpb.AlarmResponse} The clone.
 */
proto.etcdserverpb.AlarmResponse.prototype.cloneMessage = function() {
  return /** @type {!proto.etcdserverpb.AlarmResponse} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional ResponseHeader header = 1;
 * @return {proto.etcdserverpb.ResponseHeader}
 */
proto.etcdserverpb.AlarmResponse.prototype.getHeader = function() {
  return /** @type{proto.etcdserverpb.ResponseHeader} */ (
    jspb.Message.getWrapperField(this, proto.etcdserverpb.ResponseHeader, 1));
};


/** @param {proto.etcdserverpb.ResponseHeader|undefined} value  */
proto.etcdserverpb.AlarmResponse.prototype.setHeader = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.etcdserverpb.AlarmResponse.prototype.clearHeader = function() {
  this.setHeader(undefined);
};


/**
 * repeated AlarmMember alarms = 2;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.etcdserverpb.AlarmMember>}
 */
proto.etcdserverpb.AlarmResponse.prototype.getAlarmsList = function() {
  return /** @type{!Array.<!proto.etcdserverpb.AlarmMember>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.etcdserverpb.AlarmMember, 2));
};


/** @param {Array.<!proto.etcdserverpb.AlarmMember>|undefined} value  */
proto.etcdserverpb.AlarmResponse.prototype.setAlarmsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 2, value);
};


proto.etcdserverpb.AlarmResponse.prototype.clearAlarmsList = function() {
  this.setAlarmsList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.etcdserverpb.StatusRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.etcdserverpb.StatusRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.etcdserverpb.StatusRequest.displayName = 'proto.etcdserverpb.StatusRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.etcdserverpb.StatusRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.etcdserverpb.StatusRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.etcdserverpb.StatusRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.etcdserverpb.StatusRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.etcdserverpb.StatusRequest}
 */
proto.etcdserverpb.StatusRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.etcdserverpb.StatusRequest;
  return proto.etcdserverpb.StatusRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.etcdserverpb.StatusRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.etcdserverpb.StatusRequest}
 */
proto.etcdserverpb.StatusRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.etcdserverpb.StatusRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.etcdserverpb.StatusRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.etcdserverpb.StatusRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.etcdserverpb.StatusRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.etcdserverpb.StatusRequest} The clone.
 */
proto.etcdserverpb.StatusRequest.prototype.cloneMessage = function() {
  return /** @type {!proto.etcdserverpb.StatusRequest} */ (jspb.Message.cloneMessage(this));
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.etcdserverpb.StatusResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.etcdserverpb.StatusResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.etcdserverpb.StatusResponse.displayName = 'proto.etcdserverpb.StatusResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.etcdserverpb.StatusResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.etcdserverpb.StatusResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.etcdserverpb.StatusResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.etcdserverpb.StatusResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && proto.etcdserverpb.ResponseHeader.toObject(includeInstance, f),
    version: jspb.Message.getField(msg, 2),
    dbsize: jspb.Message.getField(msg, 3),
    leader: jspb.Message.getField(msg, 4),
    raftindex: jspb.Message.getField(msg, 5),
    raftterm: jspb.Message.getField(msg, 6)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.etcdserverpb.StatusResponse}
 */
proto.etcdserverpb.StatusResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.etcdserverpb.StatusResponse;
  return proto.etcdserverpb.StatusResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.etcdserverpb.StatusResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.etcdserverpb.StatusResponse}
 */
proto.etcdserverpb.StatusResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.etcdserverpb.ResponseHeader;
      reader.readMessage(value,proto.etcdserverpb.ResponseHeader.deserializeBinaryFromReader);
      msg.setHeader(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setVersion(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setDbsize(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setLeader(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setRaftindex(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setRaftterm(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.etcdserverpb.StatusResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.etcdserverpb.StatusResponse.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.etcdserverpb.StatusResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.etcdserverpb.StatusResponse.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getHeader();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.etcdserverpb.ResponseHeader.serializeBinaryToWriter
    );
  }
  f = this.getVersion();
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = this.getDbsize();
  if (f != null) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = this.getLeader();
  if (f != null) {
    writer.writeUint64(
      4,
      f
    );
  }
  f = this.getRaftindex();
  if (f != null) {
    writer.writeUint64(
      5,
      f
    );
  }
  f = this.getRaftterm();
  if (f != null) {
    writer.writeUint64(
      6,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.etcdserverpb.StatusResponse} The clone.
 */
proto.etcdserverpb.StatusResponse.prototype.cloneMessage = function() {
  return /** @type {!proto.etcdserverpb.StatusResponse} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional ResponseHeader header = 1;
 * @return {proto.etcdserverpb.ResponseHeader}
 */
proto.etcdserverpb.StatusResponse.prototype.getHeader = function() {
  return /** @type{proto.etcdserverpb.ResponseHeader} */ (
    jspb.Message.getWrapperField(this, proto.etcdserverpb.ResponseHeader, 1));
};


/** @param {proto.etcdserverpb.ResponseHeader|undefined} value  */
proto.etcdserverpb.StatusResponse.prototype.setHeader = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.etcdserverpb.StatusResponse.prototype.clearHeader = function() {
  this.setHeader(undefined);
};


/**
 * optional string version = 2;
 * @return {string?}
 */
proto.etcdserverpb.StatusResponse.prototype.getVersion = function() {
  return /** @type {string?} */ (jspb.Message.getField(this, 2));
};


/** @param {string?|undefined} value  */
proto.etcdserverpb.StatusResponse.prototype.setVersion = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.etcdserverpb.StatusResponse.prototype.clearVersion = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * optional int64 dbSize = 3;
 * @return {number?}
 */
proto.etcdserverpb.StatusResponse.prototype.getDbsize = function() {
  return /** @type {number?} */ (jspb.Message.getField(this, 3));
};


/** @param {number?|undefined} value  */
proto.etcdserverpb.StatusResponse.prototype.setDbsize = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.etcdserverpb.StatusResponse.prototype.clearDbsize = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * optional uint64 leader = 4;
 * @return {number?}
 */
proto.etcdserverpb.StatusResponse.prototype.getLeader = function() {
  return /** @type {number?} */ (jspb.Message.getField(this, 4));
};


/** @param {number?|undefined} value  */
proto.etcdserverpb.StatusResponse.prototype.setLeader = function(value) {
  jspb.Message.setField(this, 4, value);
};


proto.etcdserverpb.StatusResponse.prototype.clearLeader = function() {
  jspb.Message.setField(this, 4, undefined);
};


/**
 * optional uint64 raftIndex = 5;
 * @return {number?}
 */
proto.etcdserverpb.StatusResponse.prototype.getRaftindex = function() {
  return /** @type {number?} */ (jspb.Message.getField(this, 5));
};


/** @param {number?|undefined} value  */
proto.etcdserverpb.StatusResponse.prototype.setRaftindex = function(value) {
  jspb.Message.setField(this, 5, value);
};


proto.etcdserverpb.StatusResponse.prototype.clearRaftindex = function() {
  jspb.Message.setField(this, 5, undefined);
};


/**
 * optional uint64 raftTerm = 6;
 * @return {number?}
 */
proto.etcdserverpb.StatusResponse.prototype.getRaftterm = function() {
  return /** @type {number?} */ (jspb.Message.getField(this, 6));
};


/** @param {number?|undefined} value  */
proto.etcdserverpb.StatusResponse.prototype.setRaftterm = function(value) {
  jspb.Message.setField(this, 6, value);
};


proto.etcdserverpb.StatusResponse.prototype.clearRaftterm = function() {
  jspb.Message.setField(this, 6, undefined);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.etcdserverpb.AuthEnableRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.etcdserverpb.AuthEnableRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.etcdserverpb.AuthEnableRequest.displayName = 'proto.etcdserverpb.AuthEnableRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.etcdserverpb.AuthEnableRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.etcdserverpb.AuthEnableRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.etcdserverpb.AuthEnableRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.etcdserverpb.AuthEnableRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.etcdserverpb.AuthEnableRequest}
 */
proto.etcdserverpb.AuthEnableRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.etcdserverpb.AuthEnableRequest;
  return proto.etcdserverpb.AuthEnableRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.etcdserverpb.AuthEnableRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.etcdserverpb.AuthEnableRequest}
 */
proto.etcdserverpb.AuthEnableRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.etcdserverpb.AuthEnableRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.etcdserverpb.AuthEnableRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.etcdserverpb.AuthEnableRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.etcdserverpb.AuthEnableRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.etcdserverpb.AuthEnableRequest} The clone.
 */
proto.etcdserverpb.AuthEnableRequest.prototype.cloneMessage = function() {
  return /** @type {!proto.etcdserverpb.AuthEnableRequest} */ (jspb.Message.cloneMessage(this));
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.etcdserverpb.AuthDisableRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.etcdserverpb.AuthDisableRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.etcdserverpb.AuthDisableRequest.displayName = 'proto.etcdserverpb.AuthDisableRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.etcdserverpb.AuthDisableRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.etcdserverpb.AuthDisableRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.etcdserverpb.AuthDisableRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.etcdserverpb.AuthDisableRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.etcdserverpb.AuthDisableRequest}
 */
proto.etcdserverpb.AuthDisableRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.etcdserverpb.AuthDisableRequest;
  return proto.etcdserverpb.AuthDisableRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.etcdserverpb.AuthDisableRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.etcdserverpb.AuthDisableRequest}
 */
proto.etcdserverpb.AuthDisableRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.etcdserverpb.AuthDisableRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.etcdserverpb.AuthDisableRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.etcdserverpb.AuthDisableRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.etcdserverpb.AuthDisableRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.etcdserverpb.AuthDisableRequest} The clone.
 */
proto.etcdserverpb.AuthDisableRequest.prototype.cloneMessage = function() {
  return /** @type {!proto.etcdserverpb.AuthDisableRequest} */ (jspb.Message.cloneMessage(this));
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.etcdserverpb.AuthenticateRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.etcdserverpb.AuthenticateRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.etcdserverpb.AuthenticateRequest.displayName = 'proto.etcdserverpb.AuthenticateRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.etcdserverpb.AuthenticateRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.etcdserverpb.AuthenticateRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.etcdserverpb.AuthenticateRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.etcdserverpb.AuthenticateRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getField(msg, 1),
    password: jspb.Message.getField(msg, 2)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.etcdserverpb.AuthenticateRequest}
 */
proto.etcdserverpb.AuthenticateRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.etcdserverpb.AuthenticateRequest;
  return proto.etcdserverpb.AuthenticateRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.etcdserverpb.AuthenticateRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.etcdserverpb.AuthenticateRequest}
 */
proto.etcdserverpb.AuthenticateRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPassword(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.etcdserverpb.AuthenticateRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.etcdserverpb.AuthenticateRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.etcdserverpb.AuthenticateRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.etcdserverpb.AuthenticateRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getName();
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = this.getPassword();
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.etcdserverpb.AuthenticateRequest} The clone.
 */
proto.etcdserverpb.AuthenticateRequest.prototype.cloneMessage = function() {
  return /** @type {!proto.etcdserverpb.AuthenticateRequest} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional string name = 1;
 * @return {string?}
 */
proto.etcdserverpb.AuthenticateRequest.prototype.getName = function() {
  return /** @type {string?} */ (jspb.Message.getField(this, 1));
};


/** @param {string?|undefined} value  */
proto.etcdserverpb.AuthenticateRequest.prototype.setName = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.etcdserverpb.AuthenticateRequest.prototype.clearName = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * optional string password = 2;
 * @return {string?}
 */
proto.etcdserverpb.AuthenticateRequest.prototype.getPassword = function() {
  return /** @type {string?} */ (jspb.Message.getField(this, 2));
};


/** @param {string?|undefined} value  */
proto.etcdserverpb.AuthenticateRequest.prototype.setPassword = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.etcdserverpb.AuthenticateRequest.prototype.clearPassword = function() {
  jspb.Message.setField(this, 2, undefined);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.etcdserverpb.AuthUserAddRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.etcdserverpb.AuthUserAddRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.etcdserverpb.AuthUserAddRequest.displayName = 'proto.etcdserverpb.AuthUserAddRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.etcdserverpb.AuthUserAddRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.etcdserverpb.AuthUserAddRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.etcdserverpb.AuthUserAddRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.etcdserverpb.AuthUserAddRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getField(msg, 1),
    password: jspb.Message.getField(msg, 2)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.etcdserverpb.AuthUserAddRequest}
 */
proto.etcdserverpb.AuthUserAddRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.etcdserverpb.AuthUserAddRequest;
  return proto.etcdserverpb.AuthUserAddRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.etcdserverpb.AuthUserAddRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.etcdserverpb.AuthUserAddRequest}
 */
proto.etcdserverpb.AuthUserAddRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPassword(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.etcdserverpb.AuthUserAddRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.etcdserverpb.AuthUserAddRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.etcdserverpb.AuthUserAddRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.etcdserverpb.AuthUserAddRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getName();
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = this.getPassword();
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.etcdserverpb.AuthUserAddRequest} The clone.
 */
proto.etcdserverpb.AuthUserAddRequest.prototype.cloneMessage = function() {
  return /** @type {!proto.etcdserverpb.AuthUserAddRequest} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional string name = 1;
 * @return {string?}
 */
proto.etcdserverpb.AuthUserAddRequest.prototype.getName = function() {
  return /** @type {string?} */ (jspb.Message.getField(this, 1));
};


/** @param {string?|undefined} value  */
proto.etcdserverpb.AuthUserAddRequest.prototype.setName = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.etcdserverpb.AuthUserAddRequest.prototype.clearName = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * optional string password = 2;
 * @return {string?}
 */
proto.etcdserverpb.AuthUserAddRequest.prototype.getPassword = function() {
  return /** @type {string?} */ (jspb.Message.getField(this, 2));
};


/** @param {string?|undefined} value  */
proto.etcdserverpb.AuthUserAddRequest.prototype.setPassword = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.etcdserverpb.AuthUserAddRequest.prototype.clearPassword = function() {
  jspb.Message.setField(this, 2, undefined);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.etcdserverpb.AuthUserGetRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.etcdserverpb.AuthUserGetRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.etcdserverpb.AuthUserGetRequest.displayName = 'proto.etcdserverpb.AuthUserGetRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.etcdserverpb.AuthUserGetRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.etcdserverpb.AuthUserGetRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.etcdserverpb.AuthUserGetRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.etcdserverpb.AuthUserGetRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getField(msg, 1)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.etcdserverpb.AuthUserGetRequest}
 */
proto.etcdserverpb.AuthUserGetRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.etcdserverpb.AuthUserGetRequest;
  return proto.etcdserverpb.AuthUserGetRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.etcdserverpb.AuthUserGetRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.etcdserverpb.AuthUserGetRequest}
 */
proto.etcdserverpb.AuthUserGetRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.etcdserverpb.AuthUserGetRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.etcdserverpb.AuthUserGetRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.etcdserverpb.AuthUserGetRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.etcdserverpb.AuthUserGetRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getName();
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.etcdserverpb.AuthUserGetRequest} The clone.
 */
proto.etcdserverpb.AuthUserGetRequest.prototype.cloneMessage = function() {
  return /** @type {!proto.etcdserverpb.AuthUserGetRequest} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional string name = 1;
 * @return {string?}
 */
proto.etcdserverpb.AuthUserGetRequest.prototype.getName = function() {
  return /** @type {string?} */ (jspb.Message.getField(this, 1));
};


/** @param {string?|undefined} value  */
proto.etcdserverpb.AuthUserGetRequest.prototype.setName = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.etcdserverpb.AuthUserGetRequest.prototype.clearName = function() {
  jspb.Message.setField(this, 1, undefined);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.etcdserverpb.AuthUserDeleteRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.etcdserverpb.AuthUserDeleteRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.etcdserverpb.AuthUserDeleteRequest.displayName = 'proto.etcdserverpb.AuthUserDeleteRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.etcdserverpb.AuthUserDeleteRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.etcdserverpb.AuthUserDeleteRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.etcdserverpb.AuthUserDeleteRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.etcdserverpb.AuthUserDeleteRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getField(msg, 1)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.etcdserverpb.AuthUserDeleteRequest}
 */
proto.etcdserverpb.AuthUserDeleteRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.etcdserverpb.AuthUserDeleteRequest;
  return proto.etcdserverpb.AuthUserDeleteRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.etcdserverpb.AuthUserDeleteRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.etcdserverpb.AuthUserDeleteRequest}
 */
proto.etcdserverpb.AuthUserDeleteRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.etcdserverpb.AuthUserDeleteRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.etcdserverpb.AuthUserDeleteRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.etcdserverpb.AuthUserDeleteRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.etcdserverpb.AuthUserDeleteRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getName();
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.etcdserverpb.AuthUserDeleteRequest} The clone.
 */
proto.etcdserverpb.AuthUserDeleteRequest.prototype.cloneMessage = function() {
  return /** @type {!proto.etcdserverpb.AuthUserDeleteRequest} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional string name = 1;
 * @return {string?}
 */
proto.etcdserverpb.AuthUserDeleteRequest.prototype.getName = function() {
  return /** @type {string?} */ (jspb.Message.getField(this, 1));
};


/** @param {string?|undefined} value  */
proto.etcdserverpb.AuthUserDeleteRequest.prototype.setName = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.etcdserverpb.AuthUserDeleteRequest.prototype.clearName = function() {
  jspb.Message.setField(this, 1, undefined);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.etcdserverpb.AuthUserChangePasswordRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.etcdserverpb.AuthUserChangePasswordRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.etcdserverpb.AuthUserChangePasswordRequest.displayName = 'proto.etcdserverpb.AuthUserChangePasswordRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.etcdserverpb.AuthUserChangePasswordRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.etcdserverpb.AuthUserChangePasswordRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.etcdserverpb.AuthUserChangePasswordRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.etcdserverpb.AuthUserChangePasswordRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getField(msg, 1),
    password: jspb.Message.getField(msg, 2)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.etcdserverpb.AuthUserChangePasswordRequest}
 */
proto.etcdserverpb.AuthUserChangePasswordRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.etcdserverpb.AuthUserChangePasswordRequest;
  return proto.etcdserverpb.AuthUserChangePasswordRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.etcdserverpb.AuthUserChangePasswordRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.etcdserverpb.AuthUserChangePasswordRequest}
 */
proto.etcdserverpb.AuthUserChangePasswordRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPassword(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.etcdserverpb.AuthUserChangePasswordRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.etcdserverpb.AuthUserChangePasswordRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.etcdserverpb.AuthUserChangePasswordRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.etcdserverpb.AuthUserChangePasswordRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getName();
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = this.getPassword();
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.etcdserverpb.AuthUserChangePasswordRequest} The clone.
 */
proto.etcdserverpb.AuthUserChangePasswordRequest.prototype.cloneMessage = function() {
  return /** @type {!proto.etcdserverpb.AuthUserChangePasswordRequest} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional string name = 1;
 * @return {string?}
 */
proto.etcdserverpb.AuthUserChangePasswordRequest.prototype.getName = function() {
  return /** @type {string?} */ (jspb.Message.getField(this, 1));
};


/** @param {string?|undefined} value  */
proto.etcdserverpb.AuthUserChangePasswordRequest.prototype.setName = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.etcdserverpb.AuthUserChangePasswordRequest.prototype.clearName = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * optional string password = 2;
 * @return {string?}
 */
proto.etcdserverpb.AuthUserChangePasswordRequest.prototype.getPassword = function() {
  return /** @type {string?} */ (jspb.Message.getField(this, 2));
};


/** @param {string?|undefined} value  */
proto.etcdserverpb.AuthUserChangePasswordRequest.prototype.setPassword = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.etcdserverpb.AuthUserChangePasswordRequest.prototype.clearPassword = function() {
  jspb.Message.setField(this, 2, undefined);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.etcdserverpb.AuthUserGrantRoleRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.etcdserverpb.AuthUserGrantRoleRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.etcdserverpb.AuthUserGrantRoleRequest.displayName = 'proto.etcdserverpb.AuthUserGrantRoleRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.etcdserverpb.AuthUserGrantRoleRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.etcdserverpb.AuthUserGrantRoleRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.etcdserverpb.AuthUserGrantRoleRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.etcdserverpb.AuthUserGrantRoleRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    user: jspb.Message.getField(msg, 1),
    role: jspb.Message.getField(msg, 2)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.etcdserverpb.AuthUserGrantRoleRequest}
 */
proto.etcdserverpb.AuthUserGrantRoleRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.etcdserverpb.AuthUserGrantRoleRequest;
  return proto.etcdserverpb.AuthUserGrantRoleRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.etcdserverpb.AuthUserGrantRoleRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.etcdserverpb.AuthUserGrantRoleRequest}
 */
proto.etcdserverpb.AuthUserGrantRoleRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUser(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setRole(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.etcdserverpb.AuthUserGrantRoleRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.etcdserverpb.AuthUserGrantRoleRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.etcdserverpb.AuthUserGrantRoleRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.etcdserverpb.AuthUserGrantRoleRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getUser();
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = this.getRole();
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.etcdserverpb.AuthUserGrantRoleRequest} The clone.
 */
proto.etcdserverpb.AuthUserGrantRoleRequest.prototype.cloneMessage = function() {
  return /** @type {!proto.etcdserverpb.AuthUserGrantRoleRequest} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional string user = 1;
 * @return {string?}
 */
proto.etcdserverpb.AuthUserGrantRoleRequest.prototype.getUser = function() {
  return /** @type {string?} */ (jspb.Message.getField(this, 1));
};


/** @param {string?|undefined} value  */
proto.etcdserverpb.AuthUserGrantRoleRequest.prototype.setUser = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.etcdserverpb.AuthUserGrantRoleRequest.prototype.clearUser = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * optional string role = 2;
 * @return {string?}
 */
proto.etcdserverpb.AuthUserGrantRoleRequest.prototype.getRole = function() {
  return /** @type {string?} */ (jspb.Message.getField(this, 2));
};


/** @param {string?|undefined} value  */
proto.etcdserverpb.AuthUserGrantRoleRequest.prototype.setRole = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.etcdserverpb.AuthUserGrantRoleRequest.prototype.clearRole = function() {
  jspb.Message.setField(this, 2, undefined);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.etcdserverpb.AuthUserRevokeRoleRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.etcdserverpb.AuthUserRevokeRoleRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.etcdserverpb.AuthUserRevokeRoleRequest.displayName = 'proto.etcdserverpb.AuthUserRevokeRoleRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.etcdserverpb.AuthUserRevokeRoleRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.etcdserverpb.AuthUserRevokeRoleRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.etcdserverpb.AuthUserRevokeRoleRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.etcdserverpb.AuthUserRevokeRoleRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getField(msg, 1),
    role: jspb.Message.getField(msg, 2)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.etcdserverpb.AuthUserRevokeRoleRequest}
 */
proto.etcdserverpb.AuthUserRevokeRoleRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.etcdserverpb.AuthUserRevokeRoleRequest;
  return proto.etcdserverpb.AuthUserRevokeRoleRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.etcdserverpb.AuthUserRevokeRoleRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.etcdserverpb.AuthUserRevokeRoleRequest}
 */
proto.etcdserverpb.AuthUserRevokeRoleRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setRole(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.etcdserverpb.AuthUserRevokeRoleRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.etcdserverpb.AuthUserRevokeRoleRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.etcdserverpb.AuthUserRevokeRoleRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.etcdserverpb.AuthUserRevokeRoleRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getName();
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = this.getRole();
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.etcdserverpb.AuthUserRevokeRoleRequest} The clone.
 */
proto.etcdserverpb.AuthUserRevokeRoleRequest.prototype.cloneMessage = function() {
  return /** @type {!proto.etcdserverpb.AuthUserRevokeRoleRequest} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional string name = 1;
 * @return {string?}
 */
proto.etcdserverpb.AuthUserRevokeRoleRequest.prototype.getName = function() {
  return /** @type {string?} */ (jspb.Message.getField(this, 1));
};


/** @param {string?|undefined} value  */
proto.etcdserverpb.AuthUserRevokeRoleRequest.prototype.setName = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.etcdserverpb.AuthUserRevokeRoleRequest.prototype.clearName = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * optional string role = 2;
 * @return {string?}
 */
proto.etcdserverpb.AuthUserRevokeRoleRequest.prototype.getRole = function() {
  return /** @type {string?} */ (jspb.Message.getField(this, 2));
};


/** @param {string?|undefined} value  */
proto.etcdserverpb.AuthUserRevokeRoleRequest.prototype.setRole = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.etcdserverpb.AuthUserRevokeRoleRequest.prototype.clearRole = function() {
  jspb.Message.setField(this, 2, undefined);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.etcdserverpb.AuthRoleAddRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.etcdserverpb.AuthRoleAddRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.etcdserverpb.AuthRoleAddRequest.displayName = 'proto.etcdserverpb.AuthRoleAddRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.etcdserverpb.AuthRoleAddRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.etcdserverpb.AuthRoleAddRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.etcdserverpb.AuthRoleAddRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.etcdserverpb.AuthRoleAddRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getField(msg, 1)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.etcdserverpb.AuthRoleAddRequest}
 */
proto.etcdserverpb.AuthRoleAddRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.etcdserverpb.AuthRoleAddRequest;
  return proto.etcdserverpb.AuthRoleAddRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.etcdserverpb.AuthRoleAddRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.etcdserverpb.AuthRoleAddRequest}
 */
proto.etcdserverpb.AuthRoleAddRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.etcdserverpb.AuthRoleAddRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.etcdserverpb.AuthRoleAddRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.etcdserverpb.AuthRoleAddRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.etcdserverpb.AuthRoleAddRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getName();
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.etcdserverpb.AuthRoleAddRequest} The clone.
 */
proto.etcdserverpb.AuthRoleAddRequest.prototype.cloneMessage = function() {
  return /** @type {!proto.etcdserverpb.AuthRoleAddRequest} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional string name = 1;
 * @return {string?}
 */
proto.etcdserverpb.AuthRoleAddRequest.prototype.getName = function() {
  return /** @type {string?} */ (jspb.Message.getField(this, 1));
};


/** @param {string?|undefined} value  */
proto.etcdserverpb.AuthRoleAddRequest.prototype.setName = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.etcdserverpb.AuthRoleAddRequest.prototype.clearName = function() {
  jspb.Message.setField(this, 1, undefined);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.etcdserverpb.AuthRoleGetRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.etcdserverpb.AuthRoleGetRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.etcdserverpb.AuthRoleGetRequest.displayName = 'proto.etcdserverpb.AuthRoleGetRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.etcdserverpb.AuthRoleGetRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.etcdserverpb.AuthRoleGetRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.etcdserverpb.AuthRoleGetRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.etcdserverpb.AuthRoleGetRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    role: jspb.Message.getField(msg, 1)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.etcdserverpb.AuthRoleGetRequest}
 */
proto.etcdserverpb.AuthRoleGetRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.etcdserverpb.AuthRoleGetRequest;
  return proto.etcdserverpb.AuthRoleGetRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.etcdserverpb.AuthRoleGetRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.etcdserverpb.AuthRoleGetRequest}
 */
proto.etcdserverpb.AuthRoleGetRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRole(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.etcdserverpb.AuthRoleGetRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.etcdserverpb.AuthRoleGetRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.etcdserverpb.AuthRoleGetRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.etcdserverpb.AuthRoleGetRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getRole();
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.etcdserverpb.AuthRoleGetRequest} The clone.
 */
proto.etcdserverpb.AuthRoleGetRequest.prototype.cloneMessage = function() {
  return /** @type {!proto.etcdserverpb.AuthRoleGetRequest} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional string role = 1;
 * @return {string?}
 */
proto.etcdserverpb.AuthRoleGetRequest.prototype.getRole = function() {
  return /** @type {string?} */ (jspb.Message.getField(this, 1));
};


/** @param {string?|undefined} value  */
proto.etcdserverpb.AuthRoleGetRequest.prototype.setRole = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.etcdserverpb.AuthRoleGetRequest.prototype.clearRole = function() {
  jspb.Message.setField(this, 1, undefined);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.etcdserverpb.AuthUserListRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.etcdserverpb.AuthUserListRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.etcdserverpb.AuthUserListRequest.displayName = 'proto.etcdserverpb.AuthUserListRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.etcdserverpb.AuthUserListRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.etcdserverpb.AuthUserListRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.etcdserverpb.AuthUserListRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.etcdserverpb.AuthUserListRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.etcdserverpb.AuthUserListRequest}
 */
proto.etcdserverpb.AuthUserListRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.etcdserverpb.AuthUserListRequest;
  return proto.etcdserverpb.AuthUserListRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.etcdserverpb.AuthUserListRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.etcdserverpb.AuthUserListRequest}
 */
proto.etcdserverpb.AuthUserListRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.etcdserverpb.AuthUserListRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.etcdserverpb.AuthUserListRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.etcdserverpb.AuthUserListRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.etcdserverpb.AuthUserListRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.etcdserverpb.AuthUserListRequest} The clone.
 */
proto.etcdserverpb.AuthUserListRequest.prototype.cloneMessage = function() {
  return /** @type {!proto.etcdserverpb.AuthUserListRequest} */ (jspb.Message.cloneMessage(this));
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.etcdserverpb.AuthRoleListRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.etcdserverpb.AuthRoleListRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.etcdserverpb.AuthRoleListRequest.displayName = 'proto.etcdserverpb.AuthRoleListRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.etcdserverpb.AuthRoleListRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.etcdserverpb.AuthRoleListRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.etcdserverpb.AuthRoleListRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.etcdserverpb.AuthRoleListRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.etcdserverpb.AuthRoleListRequest}
 */
proto.etcdserverpb.AuthRoleListRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.etcdserverpb.AuthRoleListRequest;
  return proto.etcdserverpb.AuthRoleListRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.etcdserverpb.AuthRoleListRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.etcdserverpb.AuthRoleListRequest}
 */
proto.etcdserverpb.AuthRoleListRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.etcdserverpb.AuthRoleListRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.etcdserverpb.AuthRoleListRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.etcdserverpb.AuthRoleListRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.etcdserverpb.AuthRoleListRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.etcdserverpb.AuthRoleListRequest} The clone.
 */
proto.etcdserverpb.AuthRoleListRequest.prototype.cloneMessage = function() {
  return /** @type {!proto.etcdserverpb.AuthRoleListRequest} */ (jspb.Message.cloneMessage(this));
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.etcdserverpb.AuthRoleDeleteRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.etcdserverpb.AuthRoleDeleteRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.etcdserverpb.AuthRoleDeleteRequest.displayName = 'proto.etcdserverpb.AuthRoleDeleteRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.etcdserverpb.AuthRoleDeleteRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.etcdserverpb.AuthRoleDeleteRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.etcdserverpb.AuthRoleDeleteRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.etcdserverpb.AuthRoleDeleteRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    role: jspb.Message.getField(msg, 1)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.etcdserverpb.AuthRoleDeleteRequest}
 */
proto.etcdserverpb.AuthRoleDeleteRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.etcdserverpb.AuthRoleDeleteRequest;
  return proto.etcdserverpb.AuthRoleDeleteRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.etcdserverpb.AuthRoleDeleteRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.etcdserverpb.AuthRoleDeleteRequest}
 */
proto.etcdserverpb.AuthRoleDeleteRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRole(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.etcdserverpb.AuthRoleDeleteRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.etcdserverpb.AuthRoleDeleteRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.etcdserverpb.AuthRoleDeleteRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.etcdserverpb.AuthRoleDeleteRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getRole();
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.etcdserverpb.AuthRoleDeleteRequest} The clone.
 */
proto.etcdserverpb.AuthRoleDeleteRequest.prototype.cloneMessage = function() {
  return /** @type {!proto.etcdserverpb.AuthRoleDeleteRequest} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional string role = 1;
 * @return {string?}
 */
proto.etcdserverpb.AuthRoleDeleteRequest.prototype.getRole = function() {
  return /** @type {string?} */ (jspb.Message.getField(this, 1));
};


/** @param {string?|undefined} value  */
proto.etcdserverpb.AuthRoleDeleteRequest.prototype.setRole = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.etcdserverpb.AuthRoleDeleteRequest.prototype.clearRole = function() {
  jspb.Message.setField(this, 1, undefined);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.etcdserverpb.AuthRoleGrantPermissionRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.etcdserverpb.AuthRoleGrantPermissionRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.etcdserverpb.AuthRoleGrantPermissionRequest.displayName = 'proto.etcdserverpb.AuthRoleGrantPermissionRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.etcdserverpb.AuthRoleGrantPermissionRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.etcdserverpb.AuthRoleGrantPermissionRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.etcdserverpb.AuthRoleGrantPermissionRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.etcdserverpb.AuthRoleGrantPermissionRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getField(msg, 1),
    perm: (f = msg.getPerm()) && authpb_pb.Permission.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.etcdserverpb.AuthRoleGrantPermissionRequest}
 */
proto.etcdserverpb.AuthRoleGrantPermissionRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.etcdserverpb.AuthRoleGrantPermissionRequest;
  return proto.etcdserverpb.AuthRoleGrantPermissionRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.etcdserverpb.AuthRoleGrantPermissionRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.etcdserverpb.AuthRoleGrantPermissionRequest}
 */
proto.etcdserverpb.AuthRoleGrantPermissionRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = new authpb_pb.Permission;
      reader.readMessage(value,authpb_pb.Permission.deserializeBinaryFromReader);
      msg.setPerm(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.etcdserverpb.AuthRoleGrantPermissionRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.etcdserverpb.AuthRoleGrantPermissionRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.etcdserverpb.AuthRoleGrantPermissionRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.etcdserverpb.AuthRoleGrantPermissionRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getName();
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = this.getPerm();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      authpb_pb.Permission.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.etcdserverpb.AuthRoleGrantPermissionRequest} The clone.
 */
proto.etcdserverpb.AuthRoleGrantPermissionRequest.prototype.cloneMessage = function() {
  return /** @type {!proto.etcdserverpb.AuthRoleGrantPermissionRequest} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional string name = 1;
 * @return {string?}
 */
proto.etcdserverpb.AuthRoleGrantPermissionRequest.prototype.getName = function() {
  return /** @type {string?} */ (jspb.Message.getField(this, 1));
};


/** @param {string?|undefined} value  */
proto.etcdserverpb.AuthRoleGrantPermissionRequest.prototype.setName = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.etcdserverpb.AuthRoleGrantPermissionRequest.prototype.clearName = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * optional authpb.Permission perm = 2;
 * @return {proto.authpb.Permission}
 */
proto.etcdserverpb.AuthRoleGrantPermissionRequest.prototype.getPerm = function() {
  return /** @type{proto.authpb.Permission} */ (
    jspb.Message.getWrapperField(this, authpb_pb.Permission, 2));
};


/** @param {proto.authpb.Permission|undefined} value  */
proto.etcdserverpb.AuthRoleGrantPermissionRequest.prototype.setPerm = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.etcdserverpb.AuthRoleGrantPermissionRequest.prototype.clearPerm = function() {
  this.setPerm(undefined);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.etcdserverpb.AuthRoleRevokePermissionRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.etcdserverpb.AuthRoleRevokePermissionRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.etcdserverpb.AuthRoleRevokePermissionRequest.displayName = 'proto.etcdserverpb.AuthRoleRevokePermissionRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.etcdserverpb.AuthRoleRevokePermissionRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.etcdserverpb.AuthRoleRevokePermissionRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.etcdserverpb.AuthRoleRevokePermissionRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.etcdserverpb.AuthRoleRevokePermissionRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    role: jspb.Message.getField(msg, 1),
    key: jspb.Message.getField(msg, 2),
    rangeEnd: jspb.Message.getField(msg, 3)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.etcdserverpb.AuthRoleRevokePermissionRequest}
 */
proto.etcdserverpb.AuthRoleRevokePermissionRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.etcdserverpb.AuthRoleRevokePermissionRequest;
  return proto.etcdserverpb.AuthRoleRevokePermissionRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.etcdserverpb.AuthRoleRevokePermissionRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.etcdserverpb.AuthRoleRevokePermissionRequest}
 */
proto.etcdserverpb.AuthRoleRevokePermissionRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRole(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setKey(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setRangeEnd(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.etcdserverpb.AuthRoleRevokePermissionRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.etcdserverpb.AuthRoleRevokePermissionRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.etcdserverpb.AuthRoleRevokePermissionRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.etcdserverpb.AuthRoleRevokePermissionRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getRole();
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = this.getKey();
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = this.getRangeEnd();
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.etcdserverpb.AuthRoleRevokePermissionRequest} The clone.
 */
proto.etcdserverpb.AuthRoleRevokePermissionRequest.prototype.cloneMessage = function() {
  return /** @type {!proto.etcdserverpb.AuthRoleRevokePermissionRequest} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional string role = 1;
 * @return {string?}
 */
proto.etcdserverpb.AuthRoleRevokePermissionRequest.prototype.getRole = function() {
  return /** @type {string?} */ (jspb.Message.getField(this, 1));
};


/** @param {string?|undefined} value  */
proto.etcdserverpb.AuthRoleRevokePermissionRequest.prototype.setRole = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.etcdserverpb.AuthRoleRevokePermissionRequest.prototype.clearRole = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * optional string key = 2;
 * @return {string?}
 */
proto.etcdserverpb.AuthRoleRevokePermissionRequest.prototype.getKey = function() {
  return /** @type {string?} */ (jspb.Message.getField(this, 2));
};


/** @param {string?|undefined} value  */
proto.etcdserverpb.AuthRoleRevokePermissionRequest.prototype.setKey = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.etcdserverpb.AuthRoleRevokePermissionRequest.prototype.clearKey = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * optional string range_end = 3;
 * @return {string?}
 */
proto.etcdserverpb.AuthRoleRevokePermissionRequest.prototype.getRangeEnd = function() {
  return /** @type {string?} */ (jspb.Message.getField(this, 3));
};


/** @param {string?|undefined} value  */
proto.etcdserverpb.AuthRoleRevokePermissionRequest.prototype.setRangeEnd = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.etcdserverpb.AuthRoleRevokePermissionRequest.prototype.clearRangeEnd = function() {
  jspb.Message.setField(this, 3, undefined);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.etcdserverpb.AuthEnableResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.etcdserverpb.AuthEnableResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.etcdserverpb.AuthEnableResponse.displayName = 'proto.etcdserverpb.AuthEnableResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.etcdserverpb.AuthEnableResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.etcdserverpb.AuthEnableResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.etcdserverpb.AuthEnableResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.etcdserverpb.AuthEnableResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && proto.etcdserverpb.ResponseHeader.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.etcdserverpb.AuthEnableResponse}
 */
proto.etcdserverpb.AuthEnableResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.etcdserverpb.AuthEnableResponse;
  return proto.etcdserverpb.AuthEnableResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.etcdserverpb.AuthEnableResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.etcdserverpb.AuthEnableResponse}
 */
proto.etcdserverpb.AuthEnableResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.etcdserverpb.ResponseHeader;
      reader.readMessage(value,proto.etcdserverpb.ResponseHeader.deserializeBinaryFromReader);
      msg.setHeader(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.etcdserverpb.AuthEnableResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.etcdserverpb.AuthEnableResponse.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.etcdserverpb.AuthEnableResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.etcdserverpb.AuthEnableResponse.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getHeader();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.etcdserverpb.ResponseHeader.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.etcdserverpb.AuthEnableResponse} The clone.
 */
proto.etcdserverpb.AuthEnableResponse.prototype.cloneMessage = function() {
  return /** @type {!proto.etcdserverpb.AuthEnableResponse} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional ResponseHeader header = 1;
 * @return {proto.etcdserverpb.ResponseHeader}
 */
proto.etcdserverpb.AuthEnableResponse.prototype.getHeader = function() {
  return /** @type{proto.etcdserverpb.ResponseHeader} */ (
    jspb.Message.getWrapperField(this, proto.etcdserverpb.ResponseHeader, 1));
};


/** @param {proto.etcdserverpb.ResponseHeader|undefined} value  */
proto.etcdserverpb.AuthEnableResponse.prototype.setHeader = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.etcdserverpb.AuthEnableResponse.prototype.clearHeader = function() {
  this.setHeader(undefined);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.etcdserverpb.AuthDisableResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.etcdserverpb.AuthDisableResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.etcdserverpb.AuthDisableResponse.displayName = 'proto.etcdserverpb.AuthDisableResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.etcdserverpb.AuthDisableResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.etcdserverpb.AuthDisableResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.etcdserverpb.AuthDisableResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.etcdserverpb.AuthDisableResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && proto.etcdserverpb.ResponseHeader.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.etcdserverpb.AuthDisableResponse}
 */
proto.etcdserverpb.AuthDisableResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.etcdserverpb.AuthDisableResponse;
  return proto.etcdserverpb.AuthDisableResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.etcdserverpb.AuthDisableResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.etcdserverpb.AuthDisableResponse}
 */
proto.etcdserverpb.AuthDisableResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.etcdserverpb.ResponseHeader;
      reader.readMessage(value,proto.etcdserverpb.ResponseHeader.deserializeBinaryFromReader);
      msg.setHeader(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.etcdserverpb.AuthDisableResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.etcdserverpb.AuthDisableResponse.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.etcdserverpb.AuthDisableResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.etcdserverpb.AuthDisableResponse.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getHeader();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.etcdserverpb.ResponseHeader.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.etcdserverpb.AuthDisableResponse} The clone.
 */
proto.etcdserverpb.AuthDisableResponse.prototype.cloneMessage = function() {
  return /** @type {!proto.etcdserverpb.AuthDisableResponse} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional ResponseHeader header = 1;
 * @return {proto.etcdserverpb.ResponseHeader}
 */
proto.etcdserverpb.AuthDisableResponse.prototype.getHeader = function() {
  return /** @type{proto.etcdserverpb.ResponseHeader} */ (
    jspb.Message.getWrapperField(this, proto.etcdserverpb.ResponseHeader, 1));
};


/** @param {proto.etcdserverpb.ResponseHeader|undefined} value  */
proto.etcdserverpb.AuthDisableResponse.prototype.setHeader = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.etcdserverpb.AuthDisableResponse.prototype.clearHeader = function() {
  this.setHeader(undefined);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.etcdserverpb.AuthenticateResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.etcdserverpb.AuthenticateResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.etcdserverpb.AuthenticateResponse.displayName = 'proto.etcdserverpb.AuthenticateResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.etcdserverpb.AuthenticateResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.etcdserverpb.AuthenticateResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.etcdserverpb.AuthenticateResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.etcdserverpb.AuthenticateResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && proto.etcdserverpb.ResponseHeader.toObject(includeInstance, f),
    token: jspb.Message.getField(msg, 2)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.etcdserverpb.AuthenticateResponse}
 */
proto.etcdserverpb.AuthenticateResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.etcdserverpb.AuthenticateResponse;
  return proto.etcdserverpb.AuthenticateResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.etcdserverpb.AuthenticateResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.etcdserverpb.AuthenticateResponse}
 */
proto.etcdserverpb.AuthenticateResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.etcdserverpb.ResponseHeader;
      reader.readMessage(value,proto.etcdserverpb.ResponseHeader.deserializeBinaryFromReader);
      msg.setHeader(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.etcdserverpb.AuthenticateResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.etcdserverpb.AuthenticateResponse.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.etcdserverpb.AuthenticateResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.etcdserverpb.AuthenticateResponse.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getHeader();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.etcdserverpb.ResponseHeader.serializeBinaryToWriter
    );
  }
  f = this.getToken();
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.etcdserverpb.AuthenticateResponse} The clone.
 */
proto.etcdserverpb.AuthenticateResponse.prototype.cloneMessage = function() {
  return /** @type {!proto.etcdserverpb.AuthenticateResponse} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional ResponseHeader header = 1;
 * @return {proto.etcdserverpb.ResponseHeader}
 */
proto.etcdserverpb.AuthenticateResponse.prototype.getHeader = function() {
  return /** @type{proto.etcdserverpb.ResponseHeader} */ (
    jspb.Message.getWrapperField(this, proto.etcdserverpb.ResponseHeader, 1));
};


/** @param {proto.etcdserverpb.ResponseHeader|undefined} value  */
proto.etcdserverpb.AuthenticateResponse.prototype.setHeader = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.etcdserverpb.AuthenticateResponse.prototype.clearHeader = function() {
  this.setHeader(undefined);
};


/**
 * optional string token = 2;
 * @return {string?}
 */
proto.etcdserverpb.AuthenticateResponse.prototype.getToken = function() {
  return /** @type {string?} */ (jspb.Message.getField(this, 2));
};


/** @param {string?|undefined} value  */
proto.etcdserverpb.AuthenticateResponse.prototype.setToken = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.etcdserverpb.AuthenticateResponse.prototype.clearToken = function() {
  jspb.Message.setField(this, 2, undefined);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.etcdserverpb.AuthUserAddResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.etcdserverpb.AuthUserAddResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.etcdserverpb.AuthUserAddResponse.displayName = 'proto.etcdserverpb.AuthUserAddResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.etcdserverpb.AuthUserAddResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.etcdserverpb.AuthUserAddResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.etcdserverpb.AuthUserAddResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.etcdserverpb.AuthUserAddResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && proto.etcdserverpb.ResponseHeader.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.etcdserverpb.AuthUserAddResponse}
 */
proto.etcdserverpb.AuthUserAddResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.etcdserverpb.AuthUserAddResponse;
  return proto.etcdserverpb.AuthUserAddResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.etcdserverpb.AuthUserAddResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.etcdserverpb.AuthUserAddResponse}
 */
proto.etcdserverpb.AuthUserAddResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.etcdserverpb.ResponseHeader;
      reader.readMessage(value,proto.etcdserverpb.ResponseHeader.deserializeBinaryFromReader);
      msg.setHeader(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.etcdserverpb.AuthUserAddResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.etcdserverpb.AuthUserAddResponse.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.etcdserverpb.AuthUserAddResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.etcdserverpb.AuthUserAddResponse.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getHeader();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.etcdserverpb.ResponseHeader.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.etcdserverpb.AuthUserAddResponse} The clone.
 */
proto.etcdserverpb.AuthUserAddResponse.prototype.cloneMessage = function() {
  return /** @type {!proto.etcdserverpb.AuthUserAddResponse} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional ResponseHeader header = 1;
 * @return {proto.etcdserverpb.ResponseHeader}
 */
proto.etcdserverpb.AuthUserAddResponse.prototype.getHeader = function() {
  return /** @type{proto.etcdserverpb.ResponseHeader} */ (
    jspb.Message.getWrapperField(this, proto.etcdserverpb.ResponseHeader, 1));
};


/** @param {proto.etcdserverpb.ResponseHeader|undefined} value  */
proto.etcdserverpb.AuthUserAddResponse.prototype.setHeader = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.etcdserverpb.AuthUserAddResponse.prototype.clearHeader = function() {
  this.setHeader(undefined);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.etcdserverpb.AuthUserGetResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.etcdserverpb.AuthUserGetResponse.repeatedFields_, null);
};
goog.inherits(proto.etcdserverpb.AuthUserGetResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.etcdserverpb.AuthUserGetResponse.displayName = 'proto.etcdserverpb.AuthUserGetResponse';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.etcdserverpb.AuthUserGetResponse.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.etcdserverpb.AuthUserGetResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.etcdserverpb.AuthUserGetResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.etcdserverpb.AuthUserGetResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.etcdserverpb.AuthUserGetResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && proto.etcdserverpb.ResponseHeader.toObject(includeInstance, f),
    rolesList: jspb.Message.getField(msg, 2)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.etcdserverpb.AuthUserGetResponse}
 */
proto.etcdserverpb.AuthUserGetResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.etcdserverpb.AuthUserGetResponse;
  return proto.etcdserverpb.AuthUserGetResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.etcdserverpb.AuthUserGetResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.etcdserverpb.AuthUserGetResponse}
 */
proto.etcdserverpb.AuthUserGetResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.etcdserverpb.ResponseHeader;
      reader.readMessage(value,proto.etcdserverpb.ResponseHeader.deserializeBinaryFromReader);
      msg.setHeader(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.getRolesList().push(value);
      msg.setRolesList(msg.getRolesList());
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.etcdserverpb.AuthUserGetResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.etcdserverpb.AuthUserGetResponse.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.etcdserverpb.AuthUserGetResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.etcdserverpb.AuthUserGetResponse.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getHeader();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.etcdserverpb.ResponseHeader.serializeBinaryToWriter
    );
  }
  f = this.getRolesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.etcdserverpb.AuthUserGetResponse} The clone.
 */
proto.etcdserverpb.AuthUserGetResponse.prototype.cloneMessage = function() {
  return /** @type {!proto.etcdserverpb.AuthUserGetResponse} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional ResponseHeader header = 1;
 * @return {proto.etcdserverpb.ResponseHeader}
 */
proto.etcdserverpb.AuthUserGetResponse.prototype.getHeader = function() {
  return /** @type{proto.etcdserverpb.ResponseHeader} */ (
    jspb.Message.getWrapperField(this, proto.etcdserverpb.ResponseHeader, 1));
};


/** @param {proto.etcdserverpb.ResponseHeader|undefined} value  */
proto.etcdserverpb.AuthUserGetResponse.prototype.setHeader = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.etcdserverpb.AuthUserGetResponse.prototype.clearHeader = function() {
  this.setHeader(undefined);
};


/**
 * repeated string roles = 2;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<string>}
 */
proto.etcdserverpb.AuthUserGetResponse.prototype.getRolesList = function() {
  return /** @type {!Array.<string>} */ (jspb.Message.getField(this, 2));
};


/** @param {Array.<string>|undefined} value  */
proto.etcdserverpb.AuthUserGetResponse.prototype.setRolesList = function(value) {
  jspb.Message.setField(this, 2, value || []);
};


proto.etcdserverpb.AuthUserGetResponse.prototype.clearRolesList = function() {
  jspb.Message.setField(this, 2, []);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.etcdserverpb.AuthUserDeleteResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.etcdserverpb.AuthUserDeleteResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.etcdserverpb.AuthUserDeleteResponse.displayName = 'proto.etcdserverpb.AuthUserDeleteResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.etcdserverpb.AuthUserDeleteResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.etcdserverpb.AuthUserDeleteResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.etcdserverpb.AuthUserDeleteResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.etcdserverpb.AuthUserDeleteResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && proto.etcdserverpb.ResponseHeader.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.etcdserverpb.AuthUserDeleteResponse}
 */
proto.etcdserverpb.AuthUserDeleteResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.etcdserverpb.AuthUserDeleteResponse;
  return proto.etcdserverpb.AuthUserDeleteResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.etcdserverpb.AuthUserDeleteResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.etcdserverpb.AuthUserDeleteResponse}
 */
proto.etcdserverpb.AuthUserDeleteResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.etcdserverpb.ResponseHeader;
      reader.readMessage(value,proto.etcdserverpb.ResponseHeader.deserializeBinaryFromReader);
      msg.setHeader(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.etcdserverpb.AuthUserDeleteResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.etcdserverpb.AuthUserDeleteResponse.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.etcdserverpb.AuthUserDeleteResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.etcdserverpb.AuthUserDeleteResponse.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getHeader();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.etcdserverpb.ResponseHeader.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.etcdserverpb.AuthUserDeleteResponse} The clone.
 */
proto.etcdserverpb.AuthUserDeleteResponse.prototype.cloneMessage = function() {
  return /** @type {!proto.etcdserverpb.AuthUserDeleteResponse} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional ResponseHeader header = 1;
 * @return {proto.etcdserverpb.ResponseHeader}
 */
proto.etcdserverpb.AuthUserDeleteResponse.prototype.getHeader = function() {
  return /** @type{proto.etcdserverpb.ResponseHeader} */ (
    jspb.Message.getWrapperField(this, proto.etcdserverpb.ResponseHeader, 1));
};


/** @param {proto.etcdserverpb.ResponseHeader|undefined} value  */
proto.etcdserverpb.AuthUserDeleteResponse.prototype.setHeader = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.etcdserverpb.AuthUserDeleteResponse.prototype.clearHeader = function() {
  this.setHeader(undefined);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.etcdserverpb.AuthUserChangePasswordResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.etcdserverpb.AuthUserChangePasswordResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.etcdserverpb.AuthUserChangePasswordResponse.displayName = 'proto.etcdserverpb.AuthUserChangePasswordResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.etcdserverpb.AuthUserChangePasswordResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.etcdserverpb.AuthUserChangePasswordResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.etcdserverpb.AuthUserChangePasswordResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.etcdserverpb.AuthUserChangePasswordResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && proto.etcdserverpb.ResponseHeader.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.etcdserverpb.AuthUserChangePasswordResponse}
 */
proto.etcdserverpb.AuthUserChangePasswordResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.etcdserverpb.AuthUserChangePasswordResponse;
  return proto.etcdserverpb.AuthUserChangePasswordResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.etcdserverpb.AuthUserChangePasswordResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.etcdserverpb.AuthUserChangePasswordResponse}
 */
proto.etcdserverpb.AuthUserChangePasswordResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.etcdserverpb.ResponseHeader;
      reader.readMessage(value,proto.etcdserverpb.ResponseHeader.deserializeBinaryFromReader);
      msg.setHeader(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.etcdserverpb.AuthUserChangePasswordResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.etcdserverpb.AuthUserChangePasswordResponse.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.etcdserverpb.AuthUserChangePasswordResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.etcdserverpb.AuthUserChangePasswordResponse.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getHeader();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.etcdserverpb.ResponseHeader.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.etcdserverpb.AuthUserChangePasswordResponse} The clone.
 */
proto.etcdserverpb.AuthUserChangePasswordResponse.prototype.cloneMessage = function() {
  return /** @type {!proto.etcdserverpb.AuthUserChangePasswordResponse} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional ResponseHeader header = 1;
 * @return {proto.etcdserverpb.ResponseHeader}
 */
proto.etcdserverpb.AuthUserChangePasswordResponse.prototype.getHeader = function() {
  return /** @type{proto.etcdserverpb.ResponseHeader} */ (
    jspb.Message.getWrapperField(this, proto.etcdserverpb.ResponseHeader, 1));
};


/** @param {proto.etcdserverpb.ResponseHeader|undefined} value  */
proto.etcdserverpb.AuthUserChangePasswordResponse.prototype.setHeader = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.etcdserverpb.AuthUserChangePasswordResponse.prototype.clearHeader = function() {
  this.setHeader(undefined);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.etcdserverpb.AuthUserGrantRoleResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.etcdserverpb.AuthUserGrantRoleResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.etcdserverpb.AuthUserGrantRoleResponse.displayName = 'proto.etcdserverpb.AuthUserGrantRoleResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.etcdserverpb.AuthUserGrantRoleResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.etcdserverpb.AuthUserGrantRoleResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.etcdserverpb.AuthUserGrantRoleResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.etcdserverpb.AuthUserGrantRoleResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && proto.etcdserverpb.ResponseHeader.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.etcdserverpb.AuthUserGrantRoleResponse}
 */
proto.etcdserverpb.AuthUserGrantRoleResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.etcdserverpb.AuthUserGrantRoleResponse;
  return proto.etcdserverpb.AuthUserGrantRoleResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.etcdserverpb.AuthUserGrantRoleResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.etcdserverpb.AuthUserGrantRoleResponse}
 */
proto.etcdserverpb.AuthUserGrantRoleResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.etcdserverpb.ResponseHeader;
      reader.readMessage(value,proto.etcdserverpb.ResponseHeader.deserializeBinaryFromReader);
      msg.setHeader(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.etcdserverpb.AuthUserGrantRoleResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.etcdserverpb.AuthUserGrantRoleResponse.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.etcdserverpb.AuthUserGrantRoleResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.etcdserverpb.AuthUserGrantRoleResponse.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getHeader();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.etcdserverpb.ResponseHeader.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.etcdserverpb.AuthUserGrantRoleResponse} The clone.
 */
proto.etcdserverpb.AuthUserGrantRoleResponse.prototype.cloneMessage = function() {
  return /** @type {!proto.etcdserverpb.AuthUserGrantRoleResponse} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional ResponseHeader header = 1;
 * @return {proto.etcdserverpb.ResponseHeader}
 */
proto.etcdserverpb.AuthUserGrantRoleResponse.prototype.getHeader = function() {
  return /** @type{proto.etcdserverpb.ResponseHeader} */ (
    jspb.Message.getWrapperField(this, proto.etcdserverpb.ResponseHeader, 1));
};


/** @param {proto.etcdserverpb.ResponseHeader|undefined} value  */
proto.etcdserverpb.AuthUserGrantRoleResponse.prototype.setHeader = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.etcdserverpb.AuthUserGrantRoleResponse.prototype.clearHeader = function() {
  this.setHeader(undefined);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.etcdserverpb.AuthUserRevokeRoleResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.etcdserverpb.AuthUserRevokeRoleResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.etcdserverpb.AuthUserRevokeRoleResponse.displayName = 'proto.etcdserverpb.AuthUserRevokeRoleResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.etcdserverpb.AuthUserRevokeRoleResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.etcdserverpb.AuthUserRevokeRoleResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.etcdserverpb.AuthUserRevokeRoleResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.etcdserverpb.AuthUserRevokeRoleResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && proto.etcdserverpb.ResponseHeader.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.etcdserverpb.AuthUserRevokeRoleResponse}
 */
proto.etcdserverpb.AuthUserRevokeRoleResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.etcdserverpb.AuthUserRevokeRoleResponse;
  return proto.etcdserverpb.AuthUserRevokeRoleResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.etcdserverpb.AuthUserRevokeRoleResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.etcdserverpb.AuthUserRevokeRoleResponse}
 */
proto.etcdserverpb.AuthUserRevokeRoleResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.etcdserverpb.ResponseHeader;
      reader.readMessage(value,proto.etcdserverpb.ResponseHeader.deserializeBinaryFromReader);
      msg.setHeader(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.etcdserverpb.AuthUserRevokeRoleResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.etcdserverpb.AuthUserRevokeRoleResponse.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.etcdserverpb.AuthUserRevokeRoleResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.etcdserverpb.AuthUserRevokeRoleResponse.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getHeader();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.etcdserverpb.ResponseHeader.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.etcdserverpb.AuthUserRevokeRoleResponse} The clone.
 */
proto.etcdserverpb.AuthUserRevokeRoleResponse.prototype.cloneMessage = function() {
  return /** @type {!proto.etcdserverpb.AuthUserRevokeRoleResponse} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional ResponseHeader header = 1;
 * @return {proto.etcdserverpb.ResponseHeader}
 */
proto.etcdserverpb.AuthUserRevokeRoleResponse.prototype.getHeader = function() {
  return /** @type{proto.etcdserverpb.ResponseHeader} */ (
    jspb.Message.getWrapperField(this, proto.etcdserverpb.ResponseHeader, 1));
};


/** @param {proto.etcdserverpb.ResponseHeader|undefined} value  */
proto.etcdserverpb.AuthUserRevokeRoleResponse.prototype.setHeader = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.etcdserverpb.AuthUserRevokeRoleResponse.prototype.clearHeader = function() {
  this.setHeader(undefined);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.etcdserverpb.AuthRoleAddResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.etcdserverpb.AuthRoleAddResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.etcdserverpb.AuthRoleAddResponse.displayName = 'proto.etcdserverpb.AuthRoleAddResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.etcdserverpb.AuthRoleAddResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.etcdserverpb.AuthRoleAddResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.etcdserverpb.AuthRoleAddResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.etcdserverpb.AuthRoleAddResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && proto.etcdserverpb.ResponseHeader.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.etcdserverpb.AuthRoleAddResponse}
 */
proto.etcdserverpb.AuthRoleAddResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.etcdserverpb.AuthRoleAddResponse;
  return proto.etcdserverpb.AuthRoleAddResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.etcdserverpb.AuthRoleAddResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.etcdserverpb.AuthRoleAddResponse}
 */
proto.etcdserverpb.AuthRoleAddResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.etcdserverpb.ResponseHeader;
      reader.readMessage(value,proto.etcdserverpb.ResponseHeader.deserializeBinaryFromReader);
      msg.setHeader(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.etcdserverpb.AuthRoleAddResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.etcdserverpb.AuthRoleAddResponse.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.etcdserverpb.AuthRoleAddResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.etcdserverpb.AuthRoleAddResponse.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getHeader();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.etcdserverpb.ResponseHeader.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.etcdserverpb.AuthRoleAddResponse} The clone.
 */
proto.etcdserverpb.AuthRoleAddResponse.prototype.cloneMessage = function() {
  return /** @type {!proto.etcdserverpb.AuthRoleAddResponse} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional ResponseHeader header = 1;
 * @return {proto.etcdserverpb.ResponseHeader}
 */
proto.etcdserverpb.AuthRoleAddResponse.prototype.getHeader = function() {
  return /** @type{proto.etcdserverpb.ResponseHeader} */ (
    jspb.Message.getWrapperField(this, proto.etcdserverpb.ResponseHeader, 1));
};


/** @param {proto.etcdserverpb.ResponseHeader|undefined} value  */
proto.etcdserverpb.AuthRoleAddResponse.prototype.setHeader = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.etcdserverpb.AuthRoleAddResponse.prototype.clearHeader = function() {
  this.setHeader(undefined);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.etcdserverpb.AuthRoleGetResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.etcdserverpb.AuthRoleGetResponse.repeatedFields_, null);
};
goog.inherits(proto.etcdserverpb.AuthRoleGetResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.etcdserverpb.AuthRoleGetResponse.displayName = 'proto.etcdserverpb.AuthRoleGetResponse';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.etcdserverpb.AuthRoleGetResponse.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.etcdserverpb.AuthRoleGetResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.etcdserverpb.AuthRoleGetResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.etcdserverpb.AuthRoleGetResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.etcdserverpb.AuthRoleGetResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && proto.etcdserverpb.ResponseHeader.toObject(includeInstance, f),
    permList: jspb.Message.toObjectList(msg.getPermList(),
    authpb_pb.Permission.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.etcdserverpb.AuthRoleGetResponse}
 */
proto.etcdserverpb.AuthRoleGetResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.etcdserverpb.AuthRoleGetResponse;
  return proto.etcdserverpb.AuthRoleGetResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.etcdserverpb.AuthRoleGetResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.etcdserverpb.AuthRoleGetResponse}
 */
proto.etcdserverpb.AuthRoleGetResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.etcdserverpb.ResponseHeader;
      reader.readMessage(value,proto.etcdserverpb.ResponseHeader.deserializeBinaryFromReader);
      msg.setHeader(value);
      break;
    case 2:
      var value = new authpb_pb.Permission;
      reader.readMessage(value,authpb_pb.Permission.deserializeBinaryFromReader);
      msg.getPermList().push(value);
      msg.setPermList(msg.getPermList());
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.etcdserverpb.AuthRoleGetResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.etcdserverpb.AuthRoleGetResponse.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.etcdserverpb.AuthRoleGetResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.etcdserverpb.AuthRoleGetResponse.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getHeader();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.etcdserverpb.ResponseHeader.serializeBinaryToWriter
    );
  }
  f = this.getPermList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      authpb_pb.Permission.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.etcdserverpb.AuthRoleGetResponse} The clone.
 */
proto.etcdserverpb.AuthRoleGetResponse.prototype.cloneMessage = function() {
  return /** @type {!proto.etcdserverpb.AuthRoleGetResponse} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional ResponseHeader header = 1;
 * @return {proto.etcdserverpb.ResponseHeader}
 */
proto.etcdserverpb.AuthRoleGetResponse.prototype.getHeader = function() {
  return /** @type{proto.etcdserverpb.ResponseHeader} */ (
    jspb.Message.getWrapperField(this, proto.etcdserverpb.ResponseHeader, 1));
};


/** @param {proto.etcdserverpb.ResponseHeader|undefined} value  */
proto.etcdserverpb.AuthRoleGetResponse.prototype.setHeader = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.etcdserverpb.AuthRoleGetResponse.prototype.clearHeader = function() {
  this.setHeader(undefined);
};


/**
 * repeated authpb.Permission perm = 2;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.authpb.Permission>}
 */
proto.etcdserverpb.AuthRoleGetResponse.prototype.getPermList = function() {
  return /** @type{!Array.<!proto.authpb.Permission>} */ (
    jspb.Message.getRepeatedWrapperField(this, authpb_pb.Permission, 2));
};


/** @param {Array.<!proto.authpb.Permission>|undefined} value  */
proto.etcdserverpb.AuthRoleGetResponse.prototype.setPermList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 2, value);
};


proto.etcdserverpb.AuthRoleGetResponse.prototype.clearPermList = function() {
  this.setPermList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.etcdserverpb.AuthRoleListResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.etcdserverpb.AuthRoleListResponse.repeatedFields_, null);
};
goog.inherits(proto.etcdserverpb.AuthRoleListResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.etcdserverpb.AuthRoleListResponse.displayName = 'proto.etcdserverpb.AuthRoleListResponse';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.etcdserverpb.AuthRoleListResponse.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.etcdserverpb.AuthRoleListResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.etcdserverpb.AuthRoleListResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.etcdserverpb.AuthRoleListResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.etcdserverpb.AuthRoleListResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && proto.etcdserverpb.ResponseHeader.toObject(includeInstance, f),
    rolesList: jspb.Message.getField(msg, 2)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.etcdserverpb.AuthRoleListResponse}
 */
proto.etcdserverpb.AuthRoleListResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.etcdserverpb.AuthRoleListResponse;
  return proto.etcdserverpb.AuthRoleListResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.etcdserverpb.AuthRoleListResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.etcdserverpb.AuthRoleListResponse}
 */
proto.etcdserverpb.AuthRoleListResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.etcdserverpb.ResponseHeader;
      reader.readMessage(value,proto.etcdserverpb.ResponseHeader.deserializeBinaryFromReader);
      msg.setHeader(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.getRolesList().push(value);
      msg.setRolesList(msg.getRolesList());
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.etcdserverpb.AuthRoleListResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.etcdserverpb.AuthRoleListResponse.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.etcdserverpb.AuthRoleListResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.etcdserverpb.AuthRoleListResponse.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getHeader();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.etcdserverpb.ResponseHeader.serializeBinaryToWriter
    );
  }
  f = this.getRolesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.etcdserverpb.AuthRoleListResponse} The clone.
 */
proto.etcdserverpb.AuthRoleListResponse.prototype.cloneMessage = function() {
  return /** @type {!proto.etcdserverpb.AuthRoleListResponse} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional ResponseHeader header = 1;
 * @return {proto.etcdserverpb.ResponseHeader}
 */
proto.etcdserverpb.AuthRoleListResponse.prototype.getHeader = function() {
  return /** @type{proto.etcdserverpb.ResponseHeader} */ (
    jspb.Message.getWrapperField(this, proto.etcdserverpb.ResponseHeader, 1));
};


/** @param {proto.etcdserverpb.ResponseHeader|undefined} value  */
proto.etcdserverpb.AuthRoleListResponse.prototype.setHeader = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.etcdserverpb.AuthRoleListResponse.prototype.clearHeader = function() {
  this.setHeader(undefined);
};


/**
 * repeated string roles = 2;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<string>}
 */
proto.etcdserverpb.AuthRoleListResponse.prototype.getRolesList = function() {
  return /** @type {!Array.<string>} */ (jspb.Message.getField(this, 2));
};


/** @param {Array.<string>|undefined} value  */
proto.etcdserverpb.AuthRoleListResponse.prototype.setRolesList = function(value) {
  jspb.Message.setField(this, 2, value || []);
};


proto.etcdserverpb.AuthRoleListResponse.prototype.clearRolesList = function() {
  jspb.Message.setField(this, 2, []);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.etcdserverpb.AuthUserListResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.etcdserverpb.AuthUserListResponse.repeatedFields_, null);
};
goog.inherits(proto.etcdserverpb.AuthUserListResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.etcdserverpb.AuthUserListResponse.displayName = 'proto.etcdserverpb.AuthUserListResponse';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.etcdserverpb.AuthUserListResponse.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.etcdserverpb.AuthUserListResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.etcdserverpb.AuthUserListResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.etcdserverpb.AuthUserListResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.etcdserverpb.AuthUserListResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && proto.etcdserverpb.ResponseHeader.toObject(includeInstance, f),
    usersList: jspb.Message.getField(msg, 2)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.etcdserverpb.AuthUserListResponse}
 */
proto.etcdserverpb.AuthUserListResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.etcdserverpb.AuthUserListResponse;
  return proto.etcdserverpb.AuthUserListResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.etcdserverpb.AuthUserListResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.etcdserverpb.AuthUserListResponse}
 */
proto.etcdserverpb.AuthUserListResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.etcdserverpb.ResponseHeader;
      reader.readMessage(value,proto.etcdserverpb.ResponseHeader.deserializeBinaryFromReader);
      msg.setHeader(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.getUsersList().push(value);
      msg.setUsersList(msg.getUsersList());
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.etcdserverpb.AuthUserListResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.etcdserverpb.AuthUserListResponse.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.etcdserverpb.AuthUserListResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.etcdserverpb.AuthUserListResponse.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getHeader();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.etcdserverpb.ResponseHeader.serializeBinaryToWriter
    );
  }
  f = this.getUsersList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.etcdserverpb.AuthUserListResponse} The clone.
 */
proto.etcdserverpb.AuthUserListResponse.prototype.cloneMessage = function() {
  return /** @type {!proto.etcdserverpb.AuthUserListResponse} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional ResponseHeader header = 1;
 * @return {proto.etcdserverpb.ResponseHeader}
 */
proto.etcdserverpb.AuthUserListResponse.prototype.getHeader = function() {
  return /** @type{proto.etcdserverpb.ResponseHeader} */ (
    jspb.Message.getWrapperField(this, proto.etcdserverpb.ResponseHeader, 1));
};


/** @param {proto.etcdserverpb.ResponseHeader|undefined} value  */
proto.etcdserverpb.AuthUserListResponse.prototype.setHeader = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.etcdserverpb.AuthUserListResponse.prototype.clearHeader = function() {
  this.setHeader(undefined);
};


/**
 * repeated string users = 2;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<string>}
 */
proto.etcdserverpb.AuthUserListResponse.prototype.getUsersList = function() {
  return /** @type {!Array.<string>} */ (jspb.Message.getField(this, 2));
};


/** @param {Array.<string>|undefined} value  */
proto.etcdserverpb.AuthUserListResponse.prototype.setUsersList = function(value) {
  jspb.Message.setField(this, 2, value || []);
};


proto.etcdserverpb.AuthUserListResponse.prototype.clearUsersList = function() {
  jspb.Message.setField(this, 2, []);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.etcdserverpb.AuthRoleDeleteResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.etcdserverpb.AuthRoleDeleteResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.etcdserverpb.AuthRoleDeleteResponse.displayName = 'proto.etcdserverpb.AuthRoleDeleteResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.etcdserverpb.AuthRoleDeleteResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.etcdserverpb.AuthRoleDeleteResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.etcdserverpb.AuthRoleDeleteResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.etcdserverpb.AuthRoleDeleteResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && proto.etcdserverpb.ResponseHeader.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.etcdserverpb.AuthRoleDeleteResponse}
 */
proto.etcdserverpb.AuthRoleDeleteResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.etcdserverpb.AuthRoleDeleteResponse;
  return proto.etcdserverpb.AuthRoleDeleteResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.etcdserverpb.AuthRoleDeleteResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.etcdserverpb.AuthRoleDeleteResponse}
 */
proto.etcdserverpb.AuthRoleDeleteResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.etcdserverpb.ResponseHeader;
      reader.readMessage(value,proto.etcdserverpb.ResponseHeader.deserializeBinaryFromReader);
      msg.setHeader(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.etcdserverpb.AuthRoleDeleteResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.etcdserverpb.AuthRoleDeleteResponse.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.etcdserverpb.AuthRoleDeleteResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.etcdserverpb.AuthRoleDeleteResponse.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getHeader();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.etcdserverpb.ResponseHeader.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.etcdserverpb.AuthRoleDeleteResponse} The clone.
 */
proto.etcdserverpb.AuthRoleDeleteResponse.prototype.cloneMessage = function() {
  return /** @type {!proto.etcdserverpb.AuthRoleDeleteResponse} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional ResponseHeader header = 1;
 * @return {proto.etcdserverpb.ResponseHeader}
 */
proto.etcdserverpb.AuthRoleDeleteResponse.prototype.getHeader = function() {
  return /** @type{proto.etcdserverpb.ResponseHeader} */ (
    jspb.Message.getWrapperField(this, proto.etcdserverpb.ResponseHeader, 1));
};


/** @param {proto.etcdserverpb.ResponseHeader|undefined} value  */
proto.etcdserverpb.AuthRoleDeleteResponse.prototype.setHeader = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.etcdserverpb.AuthRoleDeleteResponse.prototype.clearHeader = function() {
  this.setHeader(undefined);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.etcdserverpb.AuthRoleGrantPermissionResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.etcdserverpb.AuthRoleGrantPermissionResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.etcdserverpb.AuthRoleGrantPermissionResponse.displayName = 'proto.etcdserverpb.AuthRoleGrantPermissionResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.etcdserverpb.AuthRoleGrantPermissionResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.etcdserverpb.AuthRoleGrantPermissionResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.etcdserverpb.AuthRoleGrantPermissionResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.etcdserverpb.AuthRoleGrantPermissionResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && proto.etcdserverpb.ResponseHeader.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.etcdserverpb.AuthRoleGrantPermissionResponse}
 */
proto.etcdserverpb.AuthRoleGrantPermissionResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.etcdserverpb.AuthRoleGrantPermissionResponse;
  return proto.etcdserverpb.AuthRoleGrantPermissionResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.etcdserverpb.AuthRoleGrantPermissionResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.etcdserverpb.AuthRoleGrantPermissionResponse}
 */
proto.etcdserverpb.AuthRoleGrantPermissionResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.etcdserverpb.ResponseHeader;
      reader.readMessage(value,proto.etcdserverpb.ResponseHeader.deserializeBinaryFromReader);
      msg.setHeader(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.etcdserverpb.AuthRoleGrantPermissionResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.etcdserverpb.AuthRoleGrantPermissionResponse.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.etcdserverpb.AuthRoleGrantPermissionResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.etcdserverpb.AuthRoleGrantPermissionResponse.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getHeader();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.etcdserverpb.ResponseHeader.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.etcdserverpb.AuthRoleGrantPermissionResponse} The clone.
 */
proto.etcdserverpb.AuthRoleGrantPermissionResponse.prototype.cloneMessage = function() {
  return /** @type {!proto.etcdserverpb.AuthRoleGrantPermissionResponse} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional ResponseHeader header = 1;
 * @return {proto.etcdserverpb.ResponseHeader}
 */
proto.etcdserverpb.AuthRoleGrantPermissionResponse.prototype.getHeader = function() {
  return /** @type{proto.etcdserverpb.ResponseHeader} */ (
    jspb.Message.getWrapperField(this, proto.etcdserverpb.ResponseHeader, 1));
};


/** @param {proto.etcdserverpb.ResponseHeader|undefined} value  */
proto.etcdserverpb.AuthRoleGrantPermissionResponse.prototype.setHeader = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.etcdserverpb.AuthRoleGrantPermissionResponse.prototype.clearHeader = function() {
  this.setHeader(undefined);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.etcdserverpb.AuthRoleRevokePermissionResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.etcdserverpb.AuthRoleRevokePermissionResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.etcdserverpb.AuthRoleRevokePermissionResponse.displayName = 'proto.etcdserverpb.AuthRoleRevokePermissionResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.etcdserverpb.AuthRoleRevokePermissionResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.etcdserverpb.AuthRoleRevokePermissionResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.etcdserverpb.AuthRoleRevokePermissionResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.etcdserverpb.AuthRoleRevokePermissionResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && proto.etcdserverpb.ResponseHeader.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.etcdserverpb.AuthRoleRevokePermissionResponse}
 */
proto.etcdserverpb.AuthRoleRevokePermissionResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.etcdserverpb.AuthRoleRevokePermissionResponse;
  return proto.etcdserverpb.AuthRoleRevokePermissionResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.etcdserverpb.AuthRoleRevokePermissionResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.etcdserverpb.AuthRoleRevokePermissionResponse}
 */
proto.etcdserverpb.AuthRoleRevokePermissionResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.etcdserverpb.ResponseHeader;
      reader.readMessage(value,proto.etcdserverpb.ResponseHeader.deserializeBinaryFromReader);
      msg.setHeader(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.etcdserverpb.AuthRoleRevokePermissionResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.etcdserverpb.AuthRoleRevokePermissionResponse.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.etcdserverpb.AuthRoleRevokePermissionResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.etcdserverpb.AuthRoleRevokePermissionResponse.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getHeader();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.etcdserverpb.ResponseHeader.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.etcdserverpb.AuthRoleRevokePermissionResponse} The clone.
 */
proto.etcdserverpb.AuthRoleRevokePermissionResponse.prototype.cloneMessage = function() {
  return /** @type {!proto.etcdserverpb.AuthRoleRevokePermissionResponse} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional ResponseHeader header = 1;
 * @return {proto.etcdserverpb.ResponseHeader}
 */
proto.etcdserverpb.AuthRoleRevokePermissionResponse.prototype.getHeader = function() {
  return /** @type{proto.etcdserverpb.ResponseHeader} */ (
    jspb.Message.getWrapperField(this, proto.etcdserverpb.ResponseHeader, 1));
};


/** @param {proto.etcdserverpb.ResponseHeader|undefined} value  */
proto.etcdserverpb.AuthRoleRevokePermissionResponse.prototype.setHeader = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.etcdserverpb.AuthRoleRevokePermissionResponse.prototype.clearHeader = function() {
  this.setHeader(undefined);
};


/**
 * @enum {number}
 */
proto.etcdserverpb.AlarmType = {
  NONE: 0,
  NOSPACE: 1
};

goog.object.extend(exports, proto.etcdserverpb);
