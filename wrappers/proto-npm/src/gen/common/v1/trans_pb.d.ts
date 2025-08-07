// package: common.v1
// file: common/v1/trans.proto

import * as jspb from "google-protobuf";
import * as shared_v1_error_pb from "../../shared/v1/error_pb";

export class TranslationsGetRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TranslationsGetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TranslationsGetRequest): TranslationsGetRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TranslationsGetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TranslationsGetRequest;
  static deserializeBinaryFromReader(message: TranslationsGetRequest, reader: jspb.BinaryReader): TranslationsGetRequest;
}

export namespace TranslationsGetRequest {
  export type AsObject = {
  }
}

export class TranslationsGetResponse extends jspb.Message {
  getDataMap(): jspb.Map<string, TranslationElements>;
  clearDataMap(): void;
  hasError(): boolean;
  clearError(): void;
  getError(): shared_v1_error_pb.AppError | undefined;
  setError(value?: shared_v1_error_pb.AppError): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TranslationsGetResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TranslationsGetResponse): TranslationsGetResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TranslationsGetResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TranslationsGetResponse;
  static deserializeBinaryFromReader(message: TranslationsGetResponse, reader: jspb.BinaryReader): TranslationsGetResponse;
}

export namespace TranslationsGetResponse {
  export type AsObject = {
    dataMap: Array<[string, TranslationElements.AsObject]>,
    error?: shared_v1_error_pb.AppError.AsObject,
  }
}

export class TranslationsForLangGetRequest extends jspb.Message {
  getLang(): string;
  setLang(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TranslationsForLangGetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TranslationsForLangGetRequest): TranslationsForLangGetRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TranslationsForLangGetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TranslationsForLangGetRequest;
  static deserializeBinaryFromReader(message: TranslationsForLangGetRequest, reader: jspb.BinaryReader): TranslationsForLangGetRequest;
}

export namespace TranslationsForLangGetRequest {
  export type AsObject = {
    lang: string,
  }
}

export class TranslationsForLangGetResponse extends jspb.Message {
  hasData(): boolean;
  clearData(): void;
  getData(): TranslationElements | undefined;
  setData(value?: TranslationElements): void;

  hasError(): boolean;
  clearError(): void;
  getError(): shared_v1_error_pb.AppError | undefined;
  setError(value?: shared_v1_error_pb.AppError): void;

  getResponseCase(): TranslationsForLangGetResponse.ResponseCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TranslationsForLangGetResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TranslationsForLangGetResponse): TranslationsForLangGetResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TranslationsForLangGetResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TranslationsForLangGetResponse;
  static deserializeBinaryFromReader(message: TranslationsForLangGetResponse, reader: jspb.BinaryReader): TranslationsForLangGetResponse;
}

export namespace TranslationsForLangGetResponse {
  export type AsObject = {
    data?: TranslationElements.AsObject,
    error?: shared_v1_error_pb.AppError.AsObject,
  }

  export enum ResponseCase {
    RESPONSE_NOT_SET = 0,
    DATA = 1,
    ERROR = 2,
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

