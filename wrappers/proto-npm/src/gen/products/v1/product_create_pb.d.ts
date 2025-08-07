// package: products.v1
// file: products/v1/product_create.proto

import * as jspb from "google-protobuf";
import * as shared_v1_types_pb from "../../shared/v1/types_pb";
import * as shared_v1_error_pb from "../../shared/v1/error_pb";

export class ProductCreateTag extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): number;
  setId(value: number): void;

  hasName(): boolean;
  clearName(): void;
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProductCreateTag.AsObject;
  static toObject(includeInstance: boolean, msg: ProductCreateTag): ProductCreateTag.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProductCreateTag, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProductCreateTag;
  static deserializeBinaryFromReader(message: ProductCreateTag, reader: jspb.BinaryReader): ProductCreateTag;
}

export namespace ProductCreateTag {
  export type AsObject = {
    id: number,
    name: string,
  }
}

export class ProductCreateRequest extends jspb.Message {
  getTitle(): string;
  setTitle(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getSku(): string;
  setSku(value: string): void;

  getPrice(): string;
  setPrice(value: string): void;

  getCurrencyCode(): string;
  setCurrencyCode(value: string): void;

  clearTagsList(): void;
  getTagsList(): Array<ProductCreateTag>;
  setTagsList(value: Array<ProductCreateTag>): void;
  addTags(value?: ProductCreateTag, index?: number): ProductCreateTag;

  getArEnabled(): boolean;
  setArEnabled(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProductCreateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ProductCreateRequest): ProductCreateRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
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
  hasData(): boolean;
  clearData(): void;
  getData(): shared_v1_types_pb.Empty | undefined;
  setData(value?: shared_v1_types_pb.Empty): void;

  hasError(): boolean;
  clearError(): void;
  getError(): shared_v1_error_pb.AppError | undefined;
  setError(value?: shared_v1_error_pb.AppError): void;

  getResponseCase(): ProductCreateResponse.ResponseCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProductCreateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ProductCreateResponse): ProductCreateResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProductCreateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProductCreateResponse;
  static deserializeBinaryFromReader(message: ProductCreateResponse, reader: jspb.BinaryReader): ProductCreateResponse;
}

export namespace ProductCreateResponse {
  export type AsObject = {
    data?: shared_v1_types_pb.Empty.AsObject,
    error?: shared_v1_error_pb.AppError.AsObject,
  }

  export enum ResponseCase {
    RESPONSE_NOT_SET = 0,
    DATA = 1,
    ERROR = 2,
  }
}

