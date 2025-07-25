// source: products/v1/product_list.proto
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
var global =
    (typeof globalThis !== 'undefined' && globalThis) ||
    (typeof window !== 'undefined' && window) ||
    (typeof global !== 'undefined' && global) ||
    (typeof self !== 'undefined' && self) ||
    (function () { return this; }).call(null) ||
    Function('return this')();

var shared_v1_error_pb = require('../../shared/v1/error_pb.js');
goog.object.extend(proto, shared_v1_error_pb);
var shared_v1_types_pb = require('../../shared/v1/types_pb.js');
goog.object.extend(proto, shared_v1_types_pb);
goog.exportSymbol('proto.products.v1.ProductListItem', null, global);
goog.exportSymbol('proto.products.v1.ProductListRequest', null, global);
goog.exportSymbol('proto.products.v1.ProductListResponse', null, global);
goog.exportSymbol('proto.products.v1.ProductListResponse.ResponseCase', null, global);
goog.exportSymbol('proto.products.v1.ProductListResponseData', null, global);
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
proto.products.v1.ProductListItem = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.products.v1.ProductListItem, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.products.v1.ProductListItem.displayName = 'proto.products.v1.ProductListItem';
}
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
proto.products.v1.ProductListRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.products.v1.ProductListRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.products.v1.ProductListRequest.displayName = 'proto.products.v1.ProductListRequest';
}
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
proto.products.v1.ProductListResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.products.v1.ProductListResponse.oneofGroups_);
};
goog.inherits(proto.products.v1.ProductListResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.products.v1.ProductListResponse.displayName = 'proto.products.v1.ProductListResponse';
}
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
proto.products.v1.ProductListResponseData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.products.v1.ProductListResponseData.repeatedFields_, null);
};
goog.inherits(proto.products.v1.ProductListResponseData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.products.v1.ProductListResponseData.displayName = 'proto.products.v1.ProductListResponseData';
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
proto.products.v1.ProductListItem.prototype.toObject = function(opt_includeInstance) {
  return proto.products.v1.ProductListItem.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.products.v1.ProductListItem} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.products.v1.ProductListItem.toObject = function(includeInstance, msg) {
  var f, obj = {
id: jspb.Message.getFieldWithDefault(msg, 1, ""),
userId: jspb.Message.getFieldWithDefault(msg, 2, ""),
title: jspb.Message.getFieldWithDefault(msg, 6, ""),
description: jspb.Message.getFieldWithDefault(msg, 7, ""),
slug: jspb.Message.getFieldWithDefault(msg, 8, ""),
price: jspb.Message.getFieldWithDefault(msg, 9, ""),
currencyCode: jspb.Message.getFieldWithDefault(msg, 10, ""),
arEnabled: jspb.Message.getBooleanFieldWithDefault(msg, 13, false)
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
 * @return {!proto.products.v1.ProductListItem}
 */
proto.products.v1.ProductListItem.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.products.v1.ProductListItem;
  return proto.products.v1.ProductListItem.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.products.v1.ProductListItem} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.products.v1.ProductListItem}
 */
proto.products.v1.ProductListItem.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setUserId(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setTitle(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setSlug(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setPrice(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setCurrencyCode(value);
      break;
    case 13:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setArEnabled(value);
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
proto.products.v1.ProductListItem.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.products.v1.ProductListItem.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.products.v1.ProductListItem} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.products.v1.ProductListItem.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getUserId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getTitle();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getSlug();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getPrice();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getCurrencyCode();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getArEnabled();
  if (f) {
    writer.writeBool(
      13,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.products.v1.ProductListItem.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.products.v1.ProductListItem} returns this
 */
proto.products.v1.ProductListItem.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string user_id = 2;
 * @return {string}
 */
proto.products.v1.ProductListItem.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.products.v1.ProductListItem} returns this
 */
proto.products.v1.ProductListItem.prototype.setUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string title = 6;
 * @return {string}
 */
proto.products.v1.ProductListItem.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.products.v1.ProductListItem} returns this
 */
proto.products.v1.ProductListItem.prototype.setTitle = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string description = 7;
 * @return {string}
 */
proto.products.v1.ProductListItem.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.products.v1.ProductListItem} returns this
 */
proto.products.v1.ProductListItem.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string slug = 8;
 * @return {string}
 */
proto.products.v1.ProductListItem.prototype.getSlug = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.products.v1.ProductListItem} returns this
 */
proto.products.v1.ProductListItem.prototype.setSlug = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string price = 9;
 * @return {string}
 */
proto.products.v1.ProductListItem.prototype.getPrice = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.products.v1.ProductListItem} returns this
 */
proto.products.v1.ProductListItem.prototype.setPrice = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional string currency_code = 10;
 * @return {string}
 */
proto.products.v1.ProductListItem.prototype.getCurrencyCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.products.v1.ProductListItem} returns this
 */
proto.products.v1.ProductListItem.prototype.setCurrencyCode = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional bool ar_enabled = 13;
 * @return {boolean}
 */
proto.products.v1.ProductListItem.prototype.getArEnabled = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 13, false));
};


/**
 * @param {boolean} value
 * @return {!proto.products.v1.ProductListItem} returns this
 */
proto.products.v1.ProductListItem.prototype.setArEnabled = function(value) {
  return jspb.Message.setProto3BooleanField(this, 13, value);
};





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
proto.products.v1.ProductListRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.products.v1.ProductListRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.products.v1.ProductListRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.products.v1.ProductListRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
page: jspb.Message.getFieldWithDefault(msg, 1, 0),
lastId: jspb.Message.getFieldWithDefault(msg, 2, ""),
orderPrice: (f = msg.getOrderPrice()) && shared_v1_types_pb.OrderDirection.toObject(includeInstance, f)
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
 * @return {!proto.products.v1.ProductListRequest}
 */
proto.products.v1.ProductListRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.products.v1.ProductListRequest;
  return proto.products.v1.ProductListRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.products.v1.ProductListRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.products.v1.ProductListRequest}
 */
proto.products.v1.ProductListRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPage(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setLastId(value);
      break;
    case 3:
      var value = new shared_v1_types_pb.OrderDirection;
      reader.readMessage(value,shared_v1_types_pb.OrderDirection.deserializeBinaryFromReader);
      msg.setOrderPrice(value);
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
proto.products.v1.ProductListRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.products.v1.ProductListRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.products.v1.ProductListRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.products.v1.ProductListRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPage();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getLastId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getOrderPrice();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      shared_v1_types_pb.OrderDirection.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint32 page = 1;
 * @return {number}
 */
proto.products.v1.ProductListRequest.prototype.getPage = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.products.v1.ProductListRequest} returns this
 */
proto.products.v1.ProductListRequest.prototype.setPage = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string last_id = 2;
 * @return {string}
 */
proto.products.v1.ProductListRequest.prototype.getLastId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.products.v1.ProductListRequest} returns this
 */
proto.products.v1.ProductListRequest.prototype.setLastId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional shared.v1.OrderDirection order_price = 3;
 * @return {?proto.shared.v1.OrderDirection}
 */
proto.products.v1.ProductListRequest.prototype.getOrderPrice = function() {
  return /** @type{?proto.shared.v1.OrderDirection} */ (
    jspb.Message.getWrapperField(this, shared_v1_types_pb.OrderDirection, 3));
};


/**
 * @param {?proto.shared.v1.OrderDirection|undefined} value
 * @return {!proto.products.v1.ProductListRequest} returns this
*/
proto.products.v1.ProductListRequest.prototype.setOrderPrice = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.products.v1.ProductListRequest} returns this
 */
proto.products.v1.ProductListRequest.prototype.clearOrderPrice = function() {
  return this.setOrderPrice(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.products.v1.ProductListRequest.prototype.hasOrderPrice = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.products.v1.ProductListResponse.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.products.v1.ProductListResponse.ResponseCase = {
  RESPONSE_NOT_SET: 0,
  DATA: 1,
  ERROR: 2
};

/**
 * @return {proto.products.v1.ProductListResponse.ResponseCase}
 */
proto.products.v1.ProductListResponse.prototype.getResponseCase = function() {
  return /** @type {proto.products.v1.ProductListResponse.ResponseCase} */(jspb.Message.computeOneofCase(this, proto.products.v1.ProductListResponse.oneofGroups_[0]));
};



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
proto.products.v1.ProductListResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.products.v1.ProductListResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.products.v1.ProductListResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.products.v1.ProductListResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
data: (f = msg.getData()) && proto.products.v1.ProductListResponseData.toObject(includeInstance, f),
error: (f = msg.getError()) && shared_v1_error_pb.AppError.toObject(includeInstance, f)
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
 * @return {!proto.products.v1.ProductListResponse}
 */
proto.products.v1.ProductListResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.products.v1.ProductListResponse;
  return proto.products.v1.ProductListResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.products.v1.ProductListResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.products.v1.ProductListResponse}
 */
proto.products.v1.ProductListResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.products.v1.ProductListResponseData;
      reader.readMessage(value,proto.products.v1.ProductListResponseData.deserializeBinaryFromReader);
      msg.setData(value);
      break;
    case 2:
      var value = new shared_v1_error_pb.AppError;
      reader.readMessage(value,shared_v1_error_pb.AppError.deserializeBinaryFromReader);
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
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.products.v1.ProductListResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.products.v1.ProductListResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.products.v1.ProductListResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.products.v1.ProductListResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getData();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.products.v1.ProductListResponseData.serializeBinaryToWriter
    );
  }
  f = message.getError();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      shared_v1_error_pb.AppError.serializeBinaryToWriter
    );
  }
};


/**
 * optional ProductListResponseData data = 1;
 * @return {?proto.products.v1.ProductListResponseData}
 */
proto.products.v1.ProductListResponse.prototype.getData = function() {
  return /** @type{?proto.products.v1.ProductListResponseData} */ (
    jspb.Message.getWrapperField(this, proto.products.v1.ProductListResponseData, 1));
};


/**
 * @param {?proto.products.v1.ProductListResponseData|undefined} value
 * @return {!proto.products.v1.ProductListResponse} returns this
*/
proto.products.v1.ProductListResponse.prototype.setData = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.products.v1.ProductListResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.products.v1.ProductListResponse} returns this
 */
proto.products.v1.ProductListResponse.prototype.clearData = function() {
  return this.setData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.products.v1.ProductListResponse.prototype.hasData = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional shared.v1.AppError error = 2;
 * @return {?proto.shared.v1.AppError}
 */
proto.products.v1.ProductListResponse.prototype.getError = function() {
  return /** @type{?proto.shared.v1.AppError} */ (
    jspb.Message.getWrapperField(this, shared_v1_error_pb.AppError, 2));
};


/**
 * @param {?proto.shared.v1.AppError|undefined} value
 * @return {!proto.products.v1.ProductListResponse} returns this
*/
proto.products.v1.ProductListResponse.prototype.setError = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.products.v1.ProductListResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.products.v1.ProductListResponse} returns this
 */
proto.products.v1.ProductListResponse.prototype.clearError = function() {
  return this.setError(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.products.v1.ProductListResponse.prototype.hasError = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.products.v1.ProductListResponseData.repeatedFields_ = [1];



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
proto.products.v1.ProductListResponseData.prototype.toObject = function(opt_includeInstance) {
  return proto.products.v1.ProductListResponseData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.products.v1.ProductListResponseData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.products.v1.ProductListResponseData.toObject = function(includeInstance, msg) {
  var f, obj = {
dataList: jspb.Message.toObjectList(msg.getDataList(),
    proto.products.v1.ProductListItem.toObject, includeInstance)
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
 * @return {!proto.products.v1.ProductListResponseData}
 */
proto.products.v1.ProductListResponseData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.products.v1.ProductListResponseData;
  return proto.products.v1.ProductListResponseData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.products.v1.ProductListResponseData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.products.v1.ProductListResponseData}
 */
proto.products.v1.ProductListResponseData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.products.v1.ProductListItem;
      reader.readMessage(value,proto.products.v1.ProductListItem.deserializeBinaryFromReader);
      msg.addData(value);
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
proto.products.v1.ProductListResponseData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.products.v1.ProductListResponseData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.products.v1.ProductListResponseData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.products.v1.ProductListResponseData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDataList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.products.v1.ProductListItem.serializeBinaryToWriter
    );
  }
};


/**
 * repeated ProductListItem data = 1;
 * @return {!Array<!proto.products.v1.ProductListItem>}
 */
proto.products.v1.ProductListResponseData.prototype.getDataList = function() {
  return /** @type{!Array<!proto.products.v1.ProductListItem>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.products.v1.ProductListItem, 1));
};


/**
 * @param {!Array<!proto.products.v1.ProductListItem>} value
 * @return {!proto.products.v1.ProductListResponseData} returns this
*/
proto.products.v1.ProductListResponseData.prototype.setDataList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.products.v1.ProductListItem=} opt_value
 * @param {number=} opt_index
 * @return {!proto.products.v1.ProductListItem}
 */
proto.products.v1.ProductListResponseData.prototype.addData = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.products.v1.ProductListItem, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.products.v1.ProductListResponseData} returns this
 */
proto.products.v1.ProductListResponseData.prototype.clearDataList = function() {
  return this.setDataList([]);
};


goog.object.extend(exports, proto.products.v1);
