// package: products.v1
// file: products/v1/product_list.proto

import * as jspb from "google-protobuf";
import * as shared_v1_error_pb from "../../shared/v1/error_pb";
import * as shared_v1_types_pb from "../../shared/v1/types_pb";

export class ProductListItem extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getUserId(): string;
  setUserId(value: string): void;

  getTitle(): string;
  setTitle(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getSlug(): string;
  setSlug(value: string): void;

  getPrice(): string;
  setPrice(value: string): void;

  getCurrencyCode(): string;
  setCurrencyCode(value: string): void;

  getArEnabled(): boolean;
  setArEnabled(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProductListItem.AsObject;
  static toObject(includeInstance: boolean, msg: ProductListItem): ProductListItem.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProductListItem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProductListItem;
  static deserializeBinaryFromReader(message: ProductListItem, reader: jspb.BinaryReader): ProductListItem;
}

export namespace ProductListItem {
  export type AsObject = {
    id: string,
    userId: string,
    title: string,
    description: string,
    slug: string,
    price: string,
    currencyCode: string,
    arEnabled: boolean,
  }
}

export class ProductListRequest extends jspb.Message {
  getPage(): number;
  setPage(value: number): void;

  getLastId(): string;
  setLastId(value: string): void;

  hasOrderPrice(): boolean;
  clearOrderPrice(): void;
  getOrderPrice(): shared_v1_types_pb.OrderDirection | undefined;
  setOrderPrice(value?: shared_v1_types_pb.OrderDirection): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProductListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ProductListRequest): ProductListRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProductListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProductListRequest;
  static deserializeBinaryFromReader(message: ProductListRequest, reader: jspb.BinaryReader): ProductListRequest;
}

export namespace ProductListRequest {
  export type AsObject = {
    page: number,
    lastId: string,
    orderPrice?: shared_v1_types_pb.OrderDirection.AsObject,
  }
}

export class ProductListResponse extends jspb.Message {
  hasData(): boolean;
  clearData(): void;
  getData(): ProductListResponseData | undefined;
  setData(value?: ProductListResponseData): void;

  hasError(): boolean;
  clearError(): void;
  getError(): shared_v1_error_pb.AppError | undefined;
  setError(value?: shared_v1_error_pb.AppError): void;

  getResponseCase(): ProductListResponse.ResponseCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProductListResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ProductListResponse): ProductListResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProductListResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProductListResponse;
  static deserializeBinaryFromReader(message: ProductListResponse, reader: jspb.BinaryReader): ProductListResponse;
}

export namespace ProductListResponse {
  export type AsObject = {
    data?: ProductListResponseData.AsObject,
    error?: shared_v1_error_pb.AppError.AsObject,
  }

  export enum ResponseCase {
    RESPONSE_NOT_SET = 0,
    DATA = 1,
    ERROR = 2,
  }
}

export class ProductListResponseData extends jspb.Message {
  clearDataList(): void;
  getDataList(): Array<ProductListItem>;
  setDataList(value: Array<ProductListItem>): void;
  addData(value?: ProductListItem, index?: number): ProductListItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProductListResponseData.AsObject;
  static toObject(includeInstance: boolean, msg: ProductListResponseData): ProductListResponseData.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProductListResponseData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProductListResponseData;
  static deserializeBinaryFromReader(message: ProductListResponseData, reader: jspb.BinaryReader): ProductListResponseData;
}

export namespace ProductListResponseData {
  export type AsObject = {
    dataList: Array<ProductListItem.AsObject>,
  }
}

