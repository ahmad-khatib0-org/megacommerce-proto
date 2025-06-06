// source: common/v1/error.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = (function() {
  if (this) { return this; }
  if (typeof window !== 'undefined') { return window; }
  if (typeof global !== 'undefined') { return global; }
  if (typeof self !== 'undefined') { return self; }
  return Function('return this')();
}.call(null));

var google_protobuf_any_pb = require('google-protobuf/google/protobuf/any_pb.js');
goog.object.extend(proto, google_protobuf_any_pb);
goog.exportSymbol('proto.common.v1.AppError', null, global);
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
proto.common.v1.AppError = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.common.v1.AppError, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.common.v1.AppError.displayName = 'proto.common.v1.AppError';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.common.v1.AppError.prototype.toObject = function(opt_includeInstance) {
  return proto.common.v1.AppError.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.common.v1.AppError} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.common.v1.AppError.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    message: jspb.Message.getFieldWithDefault(msg, 2, ""),
    detailedError: jspb.Message.getFieldWithDefault(msg, 3, ""),
    requestId: jspb.Message.getFieldWithDefault(msg, 4, ""),
    statusCode: jspb.Message.getFieldWithDefault(msg, 5, 0),
    where: jspb.Message.getFieldWithDefault(msg, 6, ""),
    skipTranslation: jspb.Message.getBooleanFieldWithDefault(msg, 7, false),
    params: (f = msg.getParams()) && google_protobuf_any_pb.Any.toObject(includeInstance, f)
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
 * @return {!proto.common.v1.AppError}
 */
proto.common.v1.AppError.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.common.v1.AppError;
  return proto.common.v1.AppError.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.common.v1.AppError} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.common.v1.AppError}
 */
proto.common.v1.AppError.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDetailedError(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setRequestId(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setStatusCode(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setWhere(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSkipTranslation(value);
      break;
    case 8:
      var value = new google_protobuf_any_pb.Any;
      reader.readMessage(value,google_protobuf_any_pb.Any.deserializeBinaryFromReader);
      msg.setParams(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.common.v1.AppError.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.common.v1.AppError.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.common.v1.AppError} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.common.v1.AppError.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDetailedError();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getRequestId();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getStatusCode();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = message.getWhere();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getSkipTranslation();
  if (f) {
    writer.writeBool(
      7,
      f
    );
  }
  f = message.getParams();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      google_protobuf_any_pb.Any.serializeBinaryToWriter
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.common.v1.AppError.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.common.v1.AppError} returns this
 */
proto.common.v1.AppError.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string message = 2;
 * @return {string}
 */
proto.common.v1.AppError.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.common.v1.AppError} returns this
 */
proto.common.v1.AppError.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string detailed_error = 3;
 * @return {string}
 */
proto.common.v1.AppError.prototype.getDetailedError = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.common.v1.AppError} returns this
 */
proto.common.v1.AppError.prototype.setDetailedError = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string request_id = 4;
 * @return {string}
 */
proto.common.v1.AppError.prototype.getRequestId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.common.v1.AppError} returns this
 */
proto.common.v1.AppError.prototype.setRequestId = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional int32 status_code = 5;
 * @return {number}
 */
proto.common.v1.AppError.prototype.getStatusCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.common.v1.AppError} returns this
 */
proto.common.v1.AppError.prototype.setStatusCode = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional string where = 6;
 * @return {string}
 */
proto.common.v1.AppError.prototype.getWhere = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.common.v1.AppError} returns this
 */
proto.common.v1.AppError.prototype.setWhere = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional bool skip_translation = 7;
 * @return {boolean}
 */
proto.common.v1.AppError.prototype.getSkipTranslation = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/**
 * @param {boolean} value
 * @return {!proto.common.v1.AppError} returns this
 */
proto.common.v1.AppError.prototype.setSkipTranslation = function(value) {
  return jspb.Message.setProto3BooleanField(this, 7, value);
};


/**
 * optional google.protobuf.Any params = 8;
 * @return {?proto.google.protobuf.Any}
 */
proto.common.v1.AppError.prototype.getParams = function() {
  return /** @type{?proto.google.protobuf.Any} */ (
    jspb.Message.getWrapperField(this, google_protobuf_any_pb.Any, 8));
};


/**
 * @param {?proto.google.protobuf.Any|undefined} value
 * @return {!proto.common.v1.AppError} returns this
*/
proto.common.v1.AppError.prototype.setParams = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.common.v1.AppError} returns this
 */
proto.common.v1.AppError.prototype.clearParams = function() {
  return this.setParams(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.common.v1.AppError.prototype.hasParams = function() {
  return jspb.Message.getField(this, 8) != null;
};


goog.object.extend(exports, proto.common.v1);
