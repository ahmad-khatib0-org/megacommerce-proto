import * as jspb from 'google-protobuf'

import * as shared_v1_error_pb from '../../shared/v1/error_pb'; // proto import: "shared/v1/error.proto"
import * as shared_v1_types_pb from '../../shared/v1/types_pb'; // proto import: "shared/v1/types.proto"


export class ProductListItem extends jspb.Message {
  getId(): string;
  setId(value: string): ProductListItem;

  getUserId(): string;
  setUserId(value: string): ProductListItem;

  getTitle(): string;
  setTitle(value: string): ProductListItem;

  getDescription(): string;
  setDescription(value: string): ProductListItem;

  getSlug(): string;
  setSlug(value: string): ProductListItem;

  getPrice(): string;
  setPrice(value: string): ProductListItem;

  getCurrencyCode(): string;
  setCurrencyCode(value: string): ProductListItem;

  getArEnabled(): boolean;
  setArEnabled(value: boolean): ProductListItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProductListItem.AsObject;
  static toObject(includeInstance: boolean, msg: ProductListItem): ProductListItem.AsObject;
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
  setPage(value: number): ProductListRequest;

  getLastId(): string;
  setLastId(value: string): ProductListRequest;

  getOrderPrice(): shared_v1_types_pb.OrderDirection | undefined;
  setOrderPrice(value?: shared_v1_types_pb.OrderDirection): ProductListRequest;
  hasOrderPrice(): boolean;
  clearOrderPrice(): ProductListRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProductListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ProductListRequest): ProductListRequest.AsObject;
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

  export enum OrderPriceCase { 
    _ORDER_PRICE_NOT_SET = 0,
    ORDER_PRICE = 3,
  }
}

export class ProductListResponse extends jspb.Message {
  getData(): ProductListResponseData | undefined;
  setData(value?: ProductListResponseData): ProductListResponse;
  hasData(): boolean;
  clearData(): ProductListResponse;

  getError(): shared_v1_error_pb.AppError | undefined;
  setError(value?: shared_v1_error_pb.AppError): ProductListResponse;
  hasError(): boolean;
  clearError(): ProductListResponse;

  getResponseCase(): ProductListResponse.ResponseCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProductListResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ProductListResponse): ProductListResponse.AsObject;
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
  getDataList(): Array<ProductListItem>;
  setDataList(value: Array<ProductListItem>): ProductListResponseData;
  clearDataList(): ProductListResponseData;
  addData(value?: ProductListItem, index?: number): ProductListItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProductListResponseData.AsObject;
  static toObject(includeInstance: boolean, msg: ProductListResponseData): ProductListResponseData.AsObject;
  static serializeBinaryToWriter(message: ProductListResponseData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProductListResponseData;
  static deserializeBinaryFromReader(message: ProductListResponseData, reader: jspb.BinaryReader): ProductListResponseData;
}

export namespace ProductListResponseData {
  export type AsObject = {
    dataList: Array<ProductListItem.AsObject>,
  }
}

