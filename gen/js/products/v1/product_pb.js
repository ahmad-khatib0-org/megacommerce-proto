// source: products/v1/product.proto
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

goog.exportSymbol('proto.products.v1.Product', null, global);
goog.exportSymbol('proto.products.v1.ProductMetadata', null, global);
goog.exportSymbol('proto.products.v1.ProductTag', null, global);
goog.exportSymbol('proto.products.v1.ProductTags', null, global);
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
proto.products.v1.ProductTag = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.products.v1.ProductTag, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.products.v1.ProductTag.displayName = 'proto.products.v1.ProductTag';
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
proto.products.v1.ProductTags = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.products.v1.ProductTags.repeatedFields_, null);
};
goog.inherits(proto.products.v1.ProductTags, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.products.v1.ProductTags.displayName = 'proto.products.v1.ProductTags';
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
proto.products.v1.ProductMetadata = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.products.v1.ProductMetadata, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.products.v1.ProductMetadata.displayName = 'proto.products.v1.ProductMetadata';
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
proto.products.v1.Product = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.products.v1.Product.repeatedFields_, null);
};
goog.inherits(proto.products.v1.Product, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.products.v1.Product.displayName = 'proto.products.v1.Product';
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
proto.products.v1.ProductTag.prototype.toObject = function(opt_includeInstance) {
  return proto.products.v1.ProductTag.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.products.v1.ProductTag} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.products.v1.ProductTag.toObject = function(includeInstance, msg) {
  var f, obj = {
id: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
name: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f
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
 * @return {!proto.products.v1.ProductTag}
 */
proto.products.v1.ProductTag.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.products.v1.ProductTag;
  return proto.products.v1.ProductTag.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.products.v1.ProductTag} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.products.v1.ProductTag}
 */
proto.products.v1.ProductTag.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setId(value);
      break;
    case 2:
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
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.products.v1.ProductTag.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.products.v1.ProductTag.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.products.v1.ProductTag} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.products.v1.ProductTag.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional uint32 id = 1;
 * @return {number}
 */
proto.products.v1.ProductTag.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.products.v1.ProductTag} returns this
 */
proto.products.v1.ProductTag.prototype.setId = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.products.v1.ProductTag} returns this
 */
proto.products.v1.ProductTag.prototype.clearId = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.products.v1.ProductTag.prototype.hasId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.products.v1.ProductTag.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.products.v1.ProductTag} returns this
 */
proto.products.v1.ProductTag.prototype.setName = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.products.v1.ProductTag} returns this
 */
proto.products.v1.ProductTag.prototype.clearName = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.products.v1.ProductTag.prototype.hasName = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.products.v1.ProductTags.repeatedFields_ = [1];



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
proto.products.v1.ProductTags.prototype.toObject = function(opt_includeInstance) {
  return proto.products.v1.ProductTags.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.products.v1.ProductTags} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.products.v1.ProductTags.toObject = function(includeInstance, msg) {
  var f, obj = {
tagsList: jspb.Message.toObjectList(msg.getTagsList(),
    proto.products.v1.ProductTag.toObject, includeInstance)
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
 * @return {!proto.products.v1.ProductTags}
 */
proto.products.v1.ProductTags.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.products.v1.ProductTags;
  return proto.products.v1.ProductTags.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.products.v1.ProductTags} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.products.v1.ProductTags}
 */
proto.products.v1.ProductTags.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.products.v1.ProductTag;
      reader.readMessage(value,proto.products.v1.ProductTag.deserializeBinaryFromReader);
      msg.addTags(value);
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
proto.products.v1.ProductTags.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.products.v1.ProductTags.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.products.v1.ProductTags} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.products.v1.ProductTags.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTagsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.products.v1.ProductTag.serializeBinaryToWriter
    );
  }
};


/**
 * repeated ProductTag tags = 1;
 * @return {!Array<!proto.products.v1.ProductTag>}
 */
proto.products.v1.ProductTags.prototype.getTagsList = function() {
  return /** @type{!Array<!proto.products.v1.ProductTag>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.products.v1.ProductTag, 1));
};


/**
 * @param {!Array<!proto.products.v1.ProductTag>} value
 * @return {!proto.products.v1.ProductTags} returns this
*/
proto.products.v1.ProductTags.prototype.setTagsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.products.v1.ProductTag=} opt_value
 * @param {number=} opt_index
 * @return {!proto.products.v1.ProductTag}
 */
proto.products.v1.ProductTags.prototype.addTags = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.products.v1.ProductTag, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.products.v1.ProductTags} returns this
 */
proto.products.v1.ProductTags.prototype.clearTagsList = function() {
  return this.setTagsList([]);
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
proto.products.v1.ProductMetadata.prototype.toObject = function(opt_includeInstance) {
  return proto.products.v1.ProductMetadata.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.products.v1.ProductMetadata} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.products.v1.ProductMetadata.toObject = function(includeInstance, msg) {
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
 * @return {!proto.products.v1.ProductMetadata}
 */
proto.products.v1.ProductMetadata.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.products.v1.ProductMetadata;
  return proto.products.v1.ProductMetadata.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.products.v1.ProductMetadata} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.products.v1.ProductMetadata}
 */
proto.products.v1.ProductMetadata.deserializeBinaryFromReader = function(msg, reader) {
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
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.products.v1.ProductMetadata.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.products.v1.ProductMetadata.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.products.v1.ProductMetadata} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.products.v1.ProductMetadata.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.products.v1.Product.repeatedFields_ = [11];



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
proto.products.v1.Product.prototype.toObject = function(opt_includeInstance) {
  return proto.products.v1.Product.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.products.v1.Product} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.products.v1.Product.toObject = function(includeInstance, msg) {
  var f, obj = {
id: jspb.Message.getFieldWithDefault(msg, 1, ""),
userId: jspb.Message.getFieldWithDefault(msg, 2, ""),
sku: jspb.Message.getFieldWithDefault(msg, 3, ""),
version: jspb.Message.getFieldWithDefault(msg, 4, 0),
status: jspb.Message.getFieldWithDefault(msg, 5, ""),
title: jspb.Message.getFieldWithDefault(msg, 6, ""),
description: jspb.Message.getFieldWithDefault(msg, 7, ""),
slug: jspb.Message.getFieldWithDefault(msg, 8, ""),
price: jspb.Message.getFieldWithDefault(msg, 9, ""),
currencyCode: jspb.Message.getFieldWithDefault(msg, 10, ""),
tagsList: jspb.Message.toObjectList(msg.getTagsList(),
    proto.products.v1.ProductTag.toObject, includeInstance),
metadata: (f = msg.getMetadata()) && proto.products.v1.ProductMetadata.toObject(includeInstance, f),
arEnabled: jspb.Message.getBooleanFieldWithDefault(msg, 13, false),
createdAt: jspb.Message.getFieldWithDefault(msg, 14, 0),
publishedAt: (f = jspb.Message.getField(msg, 15)) == null ? undefined : f,
updatedAt: (f = jspb.Message.getField(msg, 16)) == null ? undefined : f
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
 * @return {!proto.products.v1.Product}
 */
proto.products.v1.Product.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.products.v1.Product;
  return proto.products.v1.Product.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.products.v1.Product} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.products.v1.Product}
 */
proto.products.v1.Product.deserializeBinaryFromReader = function(msg, reader) {
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
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setSku(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setVersion(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setStatus(value);
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
    case 11:
      var value = new proto.products.v1.ProductTag;
      reader.readMessage(value,proto.products.v1.ProductTag.deserializeBinaryFromReader);
      msg.addTags(value);
      break;
    case 12:
      var value = new proto.products.v1.ProductMetadata;
      reader.readMessage(value,proto.products.v1.ProductMetadata.deserializeBinaryFromReader);
      msg.setMetadata(value);
      break;
    case 13:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setArEnabled(value);
      break;
    case 14:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setCreatedAt(value);
      break;
    case 15:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setPublishedAt(value);
      break;
    case 16:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setUpdatedAt(value);
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
proto.products.v1.Product.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.products.v1.Product.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.products.v1.Product} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.products.v1.Product.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getSku();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getVersion();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = message.getStatus();
  if (f.length > 0) {
    writer.writeString(
      5,
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
  f = message.getTagsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      11,
      f,
      proto.products.v1.ProductTag.serializeBinaryToWriter
    );
  }
  f = message.getMetadata();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      proto.products.v1.ProductMetadata.serializeBinaryToWriter
    );
  }
  f = message.getArEnabled();
  if (f) {
    writer.writeBool(
      13,
      f
    );
  }
  f = message.getCreatedAt();
  if (f !== 0) {
    writer.writeUint64(
      14,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 15));
  if (f != null) {
    writer.writeUint64(
      15,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 16));
  if (f != null) {
    writer.writeUint64(
      16,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.products.v1.Product.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.products.v1.Product} returns this
 */
proto.products.v1.Product.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string user_id = 2;
 * @return {string}
 */
proto.products.v1.Product.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.products.v1.Product} returns this
 */
proto.products.v1.Product.prototype.setUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string sku = 3;
 * @return {string}
 */
proto.products.v1.Product.prototype.getSku = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.products.v1.Product} returns this
 */
proto.products.v1.Product.prototype.setSku = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional uint32 version = 4;
 * @return {number}
 */
proto.products.v1.Product.prototype.getVersion = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.products.v1.Product} returns this
 */
proto.products.v1.Product.prototype.setVersion = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional string status = 5;
 * @return {string}
 */
proto.products.v1.Product.prototype.getStatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.products.v1.Product} returns this
 */
proto.products.v1.Product.prototype.setStatus = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string title = 6;
 * @return {string}
 */
proto.products.v1.Product.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.products.v1.Product} returns this
 */
proto.products.v1.Product.prototype.setTitle = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string description = 7;
 * @return {string}
 */
proto.products.v1.Product.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.products.v1.Product} returns this
 */
proto.products.v1.Product.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string slug = 8;
 * @return {string}
 */
proto.products.v1.Product.prototype.getSlug = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.products.v1.Product} returns this
 */
proto.products.v1.Product.prototype.setSlug = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string price = 9;
 * @return {string}
 */
proto.products.v1.Product.prototype.getPrice = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.products.v1.Product} returns this
 */
proto.products.v1.Product.prototype.setPrice = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional string currency_code = 10;
 * @return {string}
 */
proto.products.v1.Product.prototype.getCurrencyCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.products.v1.Product} returns this
 */
proto.products.v1.Product.prototype.setCurrencyCode = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * repeated ProductTag tags = 11;
 * @return {!Array<!proto.products.v1.ProductTag>}
 */
proto.products.v1.Product.prototype.getTagsList = function() {
  return /** @type{!Array<!proto.products.v1.ProductTag>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.products.v1.ProductTag, 11));
};


/**
 * @param {!Array<!proto.products.v1.ProductTag>} value
 * @return {!proto.products.v1.Product} returns this
*/
proto.products.v1.Product.prototype.setTagsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 11, value);
};


/**
 * @param {!proto.products.v1.ProductTag=} opt_value
 * @param {number=} opt_index
 * @return {!proto.products.v1.ProductTag}
 */
proto.products.v1.Product.prototype.addTags = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 11, opt_value, proto.products.v1.ProductTag, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.products.v1.Product} returns this
 */
proto.products.v1.Product.prototype.clearTagsList = function() {
  return this.setTagsList([]);
};


/**
 * optional ProductMetadata metadata = 12;
 * @return {?proto.products.v1.ProductMetadata}
 */
proto.products.v1.Product.prototype.getMetadata = function() {
  return /** @type{?proto.products.v1.ProductMetadata} */ (
    jspb.Message.getWrapperField(this, proto.products.v1.ProductMetadata, 12));
};


/**
 * @param {?proto.products.v1.ProductMetadata|undefined} value
 * @return {!proto.products.v1.Product} returns this
*/
proto.products.v1.Product.prototype.setMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 12, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.products.v1.Product} returns this
 */
proto.products.v1.Product.prototype.clearMetadata = function() {
  return this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.products.v1.Product.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional bool ar_enabled = 13;
 * @return {boolean}
 */
proto.products.v1.Product.prototype.getArEnabled = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 13, false));
};


/**
 * @param {boolean} value
 * @return {!proto.products.v1.Product} returns this
 */
proto.products.v1.Product.prototype.setArEnabled = function(value) {
  return jspb.Message.setProto3BooleanField(this, 13, value);
};


/**
 * optional uint64 created_at = 14;
 * @return {number}
 */
proto.products.v1.Product.prototype.getCreatedAt = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 14, 0));
};


/**
 * @param {number} value
 * @return {!proto.products.v1.Product} returns this
 */
proto.products.v1.Product.prototype.setCreatedAt = function(value) {
  return jspb.Message.setProto3IntField(this, 14, value);
};


/**
 * optional uint64 published_at = 15;
 * @return {number}
 */
proto.products.v1.Product.prototype.getPublishedAt = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 15, 0));
};


/**
 * @param {number} value
 * @return {!proto.products.v1.Product} returns this
 */
proto.products.v1.Product.prototype.setPublishedAt = function(value) {
  return jspb.Message.setField(this, 15, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.products.v1.Product} returns this
 */
proto.products.v1.Product.prototype.clearPublishedAt = function() {
  return jspb.Message.setField(this, 15, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.products.v1.Product.prototype.hasPublishedAt = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * optional uint64 updated_at = 16;
 * @return {number}
 */
proto.products.v1.Product.prototype.getUpdatedAt = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 16, 0));
};


/**
 * @param {number} value
 * @return {!proto.products.v1.Product} returns this
 */
proto.products.v1.Product.prototype.setUpdatedAt = function(value) {
  return jspb.Message.setField(this, 16, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.products.v1.Product} returns this
 */
proto.products.v1.Product.prototype.clearUpdatedAt = function() {
  return jspb.Message.setField(this, 16, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.products.v1.Product.prototype.hasUpdatedAt = function() {
  return jspb.Message.getField(this, 16) != null;
};


goog.object.extend(exports, proto.products.v1);
