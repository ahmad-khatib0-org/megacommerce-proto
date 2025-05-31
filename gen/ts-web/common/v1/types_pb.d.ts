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

