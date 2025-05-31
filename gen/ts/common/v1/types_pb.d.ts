// package: common.v1
// file: common/v1/types.proto

import * as jspb from "google-protobuf";

export class StringMap extends jspb.Message {
  getDataMap(): jspb.Map<string, string>;
  clearDataMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StringMap.AsObject;
  static toObject(includeInstance: boolean, msg: StringMap): StringMap.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
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
  clearDataMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NestedStringMap.AsObject;
  static toObject(includeInstance: boolean, msg: NestedStringMap): NestedStringMap.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NestedStringMap, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NestedStringMap;
  static deserializeBinaryFromReader(message: NestedStringMap, reader: jspb.BinaryReader): NestedStringMap;
}

export namespace NestedStringMap {
  export type AsObject = {
    dataMap: Array<[string, StringMap.AsObject]>,
  }
}

export class TranslationElement extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getTr(): string;
  setTr(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TranslationElement.AsObject;
  static toObject(includeInstance: boolean, msg: TranslationElement): TranslationElement.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TranslationElement, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TranslationElement;
  static deserializeBinaryFromReader(message: TranslationElement, reader: jspb.BinaryReader): TranslationElement;
}

export namespace TranslationElement {
  export type AsObject = {
    id: string,
    tr: string,
  }
}

export class TranslationElements extends jspb.Message {
  clearTransList(): void;
  getTransList(): Array<TranslationElement>;
  setTransList(value: Array<TranslationElement>): void;
  addTrans(value?: TranslationElement, index?: number): TranslationElement;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TranslationElements.AsObject;
  static toObject(includeInstance: boolean, msg: TranslationElements): TranslationElements.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TranslationElements, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TranslationElements;
  static deserializeBinaryFromReader(message: TranslationElements, reader: jspb.BinaryReader): TranslationElements;
}

export namespace TranslationElements {
  export type AsObject = {
    transList: Array<TranslationElement.AsObject>,
  }
}

