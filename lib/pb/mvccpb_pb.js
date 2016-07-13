/**
 * @fileoverview
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.mvccpb.Event', null, global);
goog.exportSymbol('proto.mvccpb.Event.EventType', null, global);
goog.exportSymbol('proto.mvccpb.KeyValue', null, global);

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
proto.mvccpb.KeyValue = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mvccpb.KeyValue, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.mvccpb.KeyValue.displayName = 'proto.mvccpb.KeyValue';
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
proto.mvccpb.KeyValue.prototype.toObject = function(opt_includeInstance) {
  return proto.mvccpb.KeyValue.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mvccpb.KeyValue} msg The msg instance to transform.
 * @return {!Object}
 */
proto.mvccpb.KeyValue.toObject = function(includeInstance, msg) {
  var f, obj = {
    key: msg.getKey_asB64(),
    createRevision: jspb.Message.getField(msg, 2),
    modRevision: jspb.Message.getField(msg, 3),
    version: jspb.Message.getField(msg, 4),
    value: msg.getValue_asB64(),
    lease: jspb.Message.getField(msg, 6)
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
 * @return {!proto.mvccpb.KeyValue}
 */
proto.mvccpb.KeyValue.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mvccpb.KeyValue;
  return proto.mvccpb.KeyValue.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mvccpb.KeyValue} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mvccpb.KeyValue}
 */
proto.mvccpb.KeyValue.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setKey(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCreateRevision(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setModRevision(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setVersion(value);
      break;
    case 5:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setValue(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setLease(value);
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
 * @param {!proto.mvccpb.KeyValue} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.mvccpb.KeyValue.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mvccpb.KeyValue.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.mvccpb.KeyValue.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getKey_asU8();
  if (f != null) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = this.getCreateRevision();
  if (f != null) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = this.getModRevision();
  if (f != null) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = this.getVersion();
  if (f != null) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = this.getValue_asU8();
  if (f != null) {
    writer.writeBytes(
      5,
      f
    );
  }
  f = this.getLease();
  if (f != null) {
    writer.writeInt64(
      6,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.mvccpb.KeyValue} The clone.
 */
proto.mvccpb.KeyValue.prototype.cloneMessage = function() {
  return /** @type {!proto.mvccpb.KeyValue} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional bytes key = 1;
 * @return {(string|Uint8Array)}
 */
proto.mvccpb.KeyValue.prototype.getKey = function() {
  return /** @type {(string|Uint8Array)} */ (jspb.Message.getField(this, 1));
};


/**
 * optional bytes key = 1;
 * This is a type-conversion wrapper around `getKey()`
 * @return {string?}
 */
proto.mvccpb.KeyValue.prototype.getKey_asB64 = function() {
  return /** @type {string?} */ (jspb.Message.bytesAsB64(
      this.getKey()));
};


/**
 * optional bytes key = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getKey()`
 * @return {Uint8Array}
 */
proto.mvccpb.KeyValue.prototype.getKey_asU8 = function() {
  return /** @type {Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getKey()));
};


/** @param {(string|Uint8Array)|undefined} value  */
proto.mvccpb.KeyValue.prototype.setKey = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.mvccpb.KeyValue.prototype.clearKey = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * optional int64 create_revision = 2;
 * @return {number?}
 */
proto.mvccpb.KeyValue.prototype.getCreateRevision = function() {
  return /** @type {number?} */ (jspb.Message.getField(this, 2));
};


/** @param {number?|undefined} value  */
proto.mvccpb.KeyValue.prototype.setCreateRevision = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.mvccpb.KeyValue.prototype.clearCreateRevision = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * optional int64 mod_revision = 3;
 * @return {number?}
 */
proto.mvccpb.KeyValue.prototype.getModRevision = function() {
  return /** @type {number?} */ (jspb.Message.getField(this, 3));
};


/** @param {number?|undefined} value  */
proto.mvccpb.KeyValue.prototype.setModRevision = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.mvccpb.KeyValue.prototype.clearModRevision = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * optional int64 version = 4;
 * @return {number?}
 */
proto.mvccpb.KeyValue.prototype.getVersion = function() {
  return /** @type {number?} */ (jspb.Message.getField(this, 4));
};


/** @param {number?|undefined} value  */
proto.mvccpb.KeyValue.prototype.setVersion = function(value) {
  jspb.Message.setField(this, 4, value);
};


proto.mvccpb.KeyValue.prototype.clearVersion = function() {
  jspb.Message.setField(this, 4, undefined);
};


/**
 * optional bytes value = 5;
 * @return {(string|Uint8Array)}
 */
proto.mvccpb.KeyValue.prototype.getValue = function() {
  return /** @type {(string|Uint8Array)} */ (jspb.Message.getField(this, 5));
};


/**
 * optional bytes value = 5;
 * This is a type-conversion wrapper around `getValue()`
 * @return {string?}
 */
proto.mvccpb.KeyValue.prototype.getValue_asB64 = function() {
  return /** @type {string?} */ (jspb.Message.bytesAsB64(
      this.getValue()));
};


/**
 * optional bytes value = 5;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getValue()`
 * @return {Uint8Array}
 */
proto.mvccpb.KeyValue.prototype.getValue_asU8 = function() {
  return /** @type {Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getValue()));
};


/** @param {(string|Uint8Array)|undefined} value  */
proto.mvccpb.KeyValue.prototype.setValue = function(value) {
  jspb.Message.setField(this, 5, value);
};


proto.mvccpb.KeyValue.prototype.clearValue = function() {
  jspb.Message.setField(this, 5, undefined);
};


/**
 * optional int64 lease = 6;
 * @return {number?}
 */
proto.mvccpb.KeyValue.prototype.getLease = function() {
  return /** @type {number?} */ (jspb.Message.getField(this, 6));
};


/** @param {number?|undefined} value  */
proto.mvccpb.KeyValue.prototype.setLease = function(value) {
  jspb.Message.setField(this, 6, value);
};


proto.mvccpb.KeyValue.prototype.clearLease = function() {
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
proto.mvccpb.Event = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mvccpb.Event, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.mvccpb.Event.displayName = 'proto.mvccpb.Event';
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
proto.mvccpb.Event.prototype.toObject = function(opt_includeInstance) {
  return proto.mvccpb.Event.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mvccpb.Event} msg The msg instance to transform.
 * @return {!Object}
 */
proto.mvccpb.Event.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getField(msg, 1),
    kv: (f = msg.getKv()) && proto.mvccpb.KeyValue.toObject(includeInstance, f),
    prevKv: (f = msg.getPrevKv()) && proto.mvccpb.KeyValue.toObject(includeInstance, f)
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
 * @return {!proto.mvccpb.Event}
 */
proto.mvccpb.Event.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mvccpb.Event;
  return proto.mvccpb.Event.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mvccpb.Event} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mvccpb.Event}
 */
proto.mvccpb.Event.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.mvccpb.Event.EventType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 2:
      var value = new proto.mvccpb.KeyValue;
      reader.readMessage(value,proto.mvccpb.KeyValue.deserializeBinaryFromReader);
      msg.setKv(value);
      break;
    case 3:
      var value = new proto.mvccpb.KeyValue;
      reader.readMessage(value,proto.mvccpb.KeyValue.deserializeBinaryFromReader);
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
 * @param {!proto.mvccpb.Event} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.mvccpb.Event.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mvccpb.Event.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.mvccpb.Event.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getType();
  if (f != null) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = this.getKv();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.mvccpb.KeyValue.serializeBinaryToWriter
    );
  }
  f = this.getPrevKv();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.mvccpb.KeyValue.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.mvccpb.Event} The clone.
 */
proto.mvccpb.Event.prototype.cloneMessage = function() {
  return /** @type {!proto.mvccpb.Event} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional EventType type = 1;
 * @return {proto.mvccpb.Event.EventType}
 */
proto.mvccpb.Event.prototype.getType = function() {
  return /** @type {proto.mvccpb.Event.EventType} */ (jspb.Message.getField(this, 1));
};


/** @param {proto.mvccpb.Event.EventType|undefined} value  */
proto.mvccpb.Event.prototype.setType = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.mvccpb.Event.prototype.clearType = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * optional KeyValue kv = 2;
 * @return {proto.mvccpb.KeyValue}
 */
proto.mvccpb.Event.prototype.getKv = function() {
  return /** @type{proto.mvccpb.KeyValue} */ (
    jspb.Message.getWrapperField(this, proto.mvccpb.KeyValue, 2));
};


/** @param {proto.mvccpb.KeyValue|undefined} value  */
proto.mvccpb.Event.prototype.setKv = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.mvccpb.Event.prototype.clearKv = function() {
  this.setKv(undefined);
};


/**
 * optional KeyValue prev_kv = 3;
 * @return {proto.mvccpb.KeyValue}
 */
proto.mvccpb.Event.prototype.getPrevKv = function() {
  return /** @type{proto.mvccpb.KeyValue} */ (
    jspb.Message.getWrapperField(this, proto.mvccpb.KeyValue, 3));
};


/** @param {proto.mvccpb.KeyValue|undefined} value  */
proto.mvccpb.Event.prototype.setPrevKv = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.mvccpb.Event.prototype.clearPrevKv = function() {
  this.setPrevKv(undefined);
};


/**
 * @enum {number}
 */
proto.mvccpb.Event.EventType = {
  PUT: 0,
  DELETE: 1
};

goog.object.extend(exports, proto.mvccpb);