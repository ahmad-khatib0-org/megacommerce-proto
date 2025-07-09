import * as jspb from 'google-protobuf'

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb'; // proto import: "google/protobuf/empty.proto"
import * as shared_v1_error_pb from '../../shared/v1/error_pb'; // proto import: "shared/v1/error.proto"


export class ProductCreateTag extends jspb.Message {
  getId(): number;
  setId(value: number): ProductCreateTag;
  hasId(): boolean;
  clearId(): ProductCreateTag;

  getName(): string;
  setName(value: string): ProductCreateTag;
  hasName(): boolean;
  clearName(): ProductCreateTag;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProductCreateTag.AsObject;
  static toObject(includeInstance: boolean, msg: ProductCreateTag): ProductCreateTag.AsObject;
  static serializeBinaryToWriter(message: ProductCreateTag, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProductCreateTag;
  static deserializeBinaryFromReader(message: ProductCreateTag, reader: jspb.BinaryReader): ProductCreateTag;
}

export namespace ProductCreateTag {
  export type AsObject = {
    id?: number,
    name?: string,
  }

  export enum IdCase { 
    _ID_NOT_SET = 0,
    ID = 1,
  }

  export enum NameCase { 
    _NAME_NOT_SET = 0,
    NAME = 2,
  }
}

export class ProductCreateRequest extends jspb.Message {
  getTitle(): string;
  setTitle(value: string): ProductCreateRequest;

  getDescription(): string;
  setDescription(value: string): ProductCreateRequest;

  getSku(): string;
  setSku(value: string): ProductCreateRequest;

  getPrice(): string;
  setPrice(value: string): ProductCreateRequest;

  getCurrencyCode(): string;
  setCurrencyCode(value: string): ProductCreateRequest;

  getTagsList(): Array<ProductCreateTag>;
  setTagsList(value: Array<ProductCreateTag>): ProductCreateRequest;
  clearTagsList(): ProductCreateRequest;
  addTags(value?: ProductCreateTag, index?: number): ProductCreateTag;

  getArEnabled(): boolean;
  setArEnabled(value: boolean): ProductCreateRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProductCreateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ProductCreateRequest): ProductCreateRequest.AsObject;
  static serializeBinaryToWriter(message: ProductCreateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProductCreateRequest;
  static deserializeBinaryFromReader(message: ProductCreateRequest, reader: jspb.BinaryReader): ProductCreateRequest;
}

export namespace ProductCreateRequest {
  export type AsObject = {
    title: string,
    description: string,
    sku: string,
    price: string,
    currencyCode: string,
    tagsList: Array<ProductCreateTag.AsObject>,
    arEnabled: boolean,
  }
}

export class ProductCreateResponse extends jspb.Message {
  getData(): google_protobuf_empty_pb.Empty | undefined;
  setData(value?: google_protobuf_empty_pb.Empty): ProductCreateResponse;
  hasData(): boolean;
  clearData(): ProductCreateResponse;

  getError(): shared_v1_error_pb.AppError | undefined;
  setError(value?: shared_v1_error_pb.AppError): ProductCreateResponse;
  hasError(): boolean;
  clearError(): ProductCreateResponse;

  getResponseCase(): ProductCreateResponse.ResponseCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProductCreateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ProductCreateResponse): ProductCreateResponse.AsObject;
  static serializeBinaryToWriter(message: ProductCreateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProductCreateResponse;
  static deserializeBinaryFromReader(message: ProductCreateResponse, reader: jspb.BinaryReader): ProductCreateResponse;
}

export namespace ProductCreateResponse {
  export type AsObject = {
    data?: google_protobuf_empty_pb.Empty.AsObject,
    error?: shared_v1_error_pb.AppError.AsObject,
  }

  export enum ResponseCase { 
    RESPONSE_NOT_SET = 0,
    DATA = 1,
    ERROR = 2,
  }
}

