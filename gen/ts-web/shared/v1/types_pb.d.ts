import * as jspb from 'google-protobuf'



export class StringMap extends jspb.Message {
  getDataMap(): jspb.Map<string, string>;
  clearDataMap(): StringMap;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StringMap.AsObject;
  static toObject(includeInstance: boolean, msg: StringMap): StringMap.AsObject;
  static serializeBinaryToWriter(message: StringMap, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StringMap;
  static deserializeBinaryFromReader(message: StringMap, reader: jspb.BinaryReader): StringMap;
}

export namespace StringMap {
  export type AsObject = {
    dataMap: Array<[string, string]>,
  }
}

export class NestedStringMap extends jspb.Message {
  getDataMap(): jspb.Map<string, StringMap>;
  clearDataMap(): NestedStringMap;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NestedStringMap.AsObject;
  static toObject(includeInstance: boolean, msg: NestedStringMap): NestedStringMap.AsObject;
  static serializeBinaryToWriter(message: NestedStringMap, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NestedStringMap;
  static deserializeBinaryFromReader(message: NestedStringMap, reader: jspb.BinaryReader): NestedStringMap;
}

export namespace NestedStringMap {
  export type AsObject = {
    dataMap: Array<[string, StringMap.AsObject]>,
  }
}

export class OrderDirection extends jspb.Message {
  getAsc(): boolean;
  setAsc(value: boolean): OrderDirection;

  getDesc(): boolean;
  setDesc(value: boolean): OrderDirection;

  getOrderCase(): OrderDirection.OrderCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OrderDirection.AsObject;
  static toObject(includeInstance: boolean, msg: OrderDirection): OrderDirection.AsObject;
  static serializeBinaryToWriter(message: OrderDirection, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OrderDirection;
  static deserializeBinaryFromReader(message: OrderDirection, reader: jspb.BinaryReader): OrderDirection;
}

export namespace OrderDirection {
  export type AsObject = {
    asc: boolean,
    desc: boolean,
  }

  export enum OrderCase { 
    ORDER_NOT_SET = 0,
    ASC = 1,
    DESC = 2,
  }
}

export class SuccessResponse extends jspb.Message {
  getMessage(): string;
  setMessage(value: string): SuccessResponse;
  hasMessage(): boolean;
  clearMessage(): SuccessResponse;

  getMetadataMap(): jspb.Map<string, string>;
  clearMetadataMap(): SuccessResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SuccessResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SuccessResponse): SuccessResponse.AsObject;
  static serializeBinaryToWriter(message: SuccessResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SuccessResponse;
  static deserializeBinaryFromReader(message: SuccessResponse, reader: jspb.BinaryReader): SuccessResponse;
}

export namespace SuccessResponse {
  export type AsObject = {
    message?: string,
    metadataMap: Array<[string, string]>,
  }

  export enum MessageCase { 
    _MESSAGE_NOT_SET = 0,
    MESSAGE = 1,
  }
}

export class Any extends jspb.Message {
  getTypeUrl(): string;
  setTypeUrl(value: string): Any;

  getValue(): Uint8Array | string;
  getValue_asU8(): Uint8Array;
  getValue_asB64(): string;
  setValue(value: Uint8Array | string): Any;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Any.AsObject;
  static toObject(includeInstance: boolean, msg: Any): Any.AsObject;
  static serializeBinaryToWriter(message: Any, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Any;
  static deserializeBinaryFromReader(message: Any, reader: jspb.BinaryReader): Any;
}

export namespace Any {
  export type AsObject = {
    typeUrl: string,
    value: Uint8Array | string,
  }
}

export class Empty extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Empty.AsObject;
  static toObject(includeInstance: boolean, msg: Empty): Empty.AsObject;
  static serializeBinaryToWriter(message: Empty, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Empty;
  static deserializeBinaryFromReader(message: Empty, reader: jspb.BinaryReader): Empty;
}

export namespace Empty {
  export type AsObject = {
  }
}

