import * as jspb from 'google-protobuf'

import * as common_v1_error_pb from '../../common/v1/error_pb'; // proto import: "common/v1/error.proto"


export class TranslationsGetRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TranslationsGetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TranslationsGetRequest): TranslationsGetRequest.AsObject;
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
  clearDataMap(): TranslationsGetResponse;

  getError(): common_v1_error_pb.AppError | undefined;
  setError(value?: common_v1_error_pb.AppError): TranslationsGetResponse;
  hasError(): boolean;
  clearError(): TranslationsGetResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TranslationsGetResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TranslationsGetResponse): TranslationsGetResponse.AsObject;
  static serializeBinaryToWriter(message: TranslationsGetResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TranslationsGetResponse;
  static deserializeBinaryFromReader(message: TranslationsGetResponse, reader: jspb.BinaryReader): TranslationsGetResponse;
}

export namespace TranslationsGetResponse {
  export type AsObject = {
    dataMap: Array<[string, TranslationElements.AsObject]>,
    error?: common_v1_error_pb.AppError.AsObject,
  }
}

export class TranslationsForLangGetRequest extends jspb.Message {
  getLang(): string;
  setLang(value: string): TranslationsForLangGetRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TranslationsForLangGetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TranslationsForLangGetRequest): TranslationsForLangGetRequest.AsObject;
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
  getData(): TranslationElements | undefined;
  setData(value?: TranslationElements): TranslationsForLangGetResponse;
  hasData(): boolean;
  clearData(): TranslationsForLangGetResponse;

  getError(): common_v1_error_pb.AppError | undefined;
  setError(value?: common_v1_error_pb.AppError): TranslationsForLangGetResponse;
  hasError(): boolean;
  clearError(): TranslationsForLangGetResponse;

  getResponseCase(): TranslationsForLangGetResponse.ResponseCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TranslationsForLangGetResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TranslationsForLangGetResponse): TranslationsForLangGetResponse.AsObject;
  static serializeBinaryToWriter(message: TranslationsForLangGetResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TranslationsForLangGetResponse;
  static deserializeBinaryFromReader(message: TranslationsForLangGetResponse, reader: jspb.BinaryReader): TranslationsForLangGetResponse;
}

export namespace TranslationsForLangGetResponse {
  export type AsObject = {
    data?: TranslationElements.AsObject,
    error?: common_v1_error_pb.AppError.AsObject,
  }

  export enum ResponseCase { 
    RESPONSE_NOT_SET = 0,
    DATA = 1,
    ERROR = 2,
  }
}

export class TranslationElement extends jspb.Message {
  getId(): string;
  setId(value: string): TranslationElement;

  getTr(): string;
  setTr(value: string): TranslationElement;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TranslationElement.AsObject;
  static toObject(includeInstance: boolean, msg: TranslationElement): TranslationElement.AsObject;
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
  getTransList(): Array<TranslationElement>;
  setTransList(value: Array<TranslationElement>): TranslationElements;
  clearTransList(): TranslationElements;
  addTrans(value?: TranslationElement, index?: number): TranslationElement;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TranslationElements.AsObject;
  static toObject(includeInstance: boolean, msg: TranslationElements): TranslationElements.AsObject;
  static serializeBinaryToWriter(message: TranslationElements, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TranslationElements;
  static deserializeBinaryFromReader(message: TranslationElements, reader: jspb.BinaryReader): TranslationElements;
}

export namespace TranslationElements {
  export type AsObject = {
    transList: Array<TranslationElement.AsObject>,
  }
}

