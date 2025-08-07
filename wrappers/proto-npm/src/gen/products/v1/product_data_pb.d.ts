// package: products.v1
// file: products/v1/product_data.proto

import * as jspb from "google-protobuf";
import * as products_v1_product_pb from "../../products/v1/product_pb";
import * as products_v1_product_categories_pb from "../../products/v1/product_categories_pb";
import * as shared_v1_error_pb from "../../shared/v1/error_pb";

export class ProductDataResponseData extends jspb.Message {
  hasCategories(): boolean;
  clearCategories(): void;
  getCategories(): products_v1_product_categories_pb.ProductCategoriesWithoutSubcategories | undefined;
  setCategories(value?: products_v1_product_categories_pb.ProductCategoriesWithoutSubcategories): void;

  hasCategoryData(): boolean;
  clearCategoryData(): void;
  getCategoryData(): products_v1_product_categories_pb.ProductCategory | undefined;
  setCategoryData(value?: products_v1_product_categories_pb.ProductCategory): void;

  hasTags(): boolean;
  clearTags(): void;
  getTags(): products_v1_product_pb.ProductTags | undefined;
  setTags(value?: products_v1_product_pb.ProductTags): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProductDataResponseData.AsObject;
  static toObject(includeInstance: boolean, msg: ProductDataResponseData): ProductDataResponseData.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProductDataResponseData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProductDataResponseData;
  static deserializeBinaryFromReader(message: ProductDataResponseData, reader: jspb.BinaryReader): ProductDataResponseData;
}

export namespace ProductDataResponseData {
  export type AsObject = {
    categories?: products_v1_product_categories_pb.ProductCategoriesWithoutSubcategories.AsObject,
    categoryData?: products_v1_product_categories_pb.ProductCategory.AsObject,
    tags?: products_v1_product_pb.ProductTags.AsObject,
  }
}

export class ProductDataRequest extends jspb.Message {
  hasGetAllCategories(): boolean;
  clearGetAllCategories(): void;
  getGetAllCategories(): boolean;
  setGetAllCategories(value: boolean): void;

  hasGetCategoryData(): boolean;
  clearGetCategoryData(): void;
  getGetCategoryData(): boolean;
  setGetCategoryData(value: boolean): void;

  hasCategoryName(): boolean;
  clearCategoryName(): void;
  getCategoryName(): string;
  setCategoryName(value: string): void;

  hasGetTags(): boolean;
  clearGetTags(): void;
  getGetTags(): boolean;
  setGetTags(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProductDataRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ProductDataRequest): ProductDataRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProductDataRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProductDataRequest;
  static deserializeBinaryFromReader(message: ProductDataRequest, reader: jspb.BinaryReader): ProductDataRequest;
}

export namespace ProductDataRequest {
  export type AsObject = {
    getAllCategories: boolean,
    getCategoryData: boolean,
    categoryName: string,
    getTags: boolean,
  }
}

export class ProductDataResponse extends jspb.Message {
  hasData(): boolean;
  clearData(): void;
  getData(): ProductDataResponseData | undefined;
  setData(value?: ProductDataResponseData): void;

  hasError(): boolean;
  clearError(): void;
  getError(): shared_v1_error_pb.AppError | undefined;
  setError(value?: shared_v1_error_pb.AppError): void;

  getResponseCase(): ProductDataResponse.ResponseCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProductDataResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ProductDataResponse): ProductDataResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProductDataResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProductDataResponse;
  static deserializeBinaryFromReader(message: ProductDataResponse, reader: jspb.BinaryReader): ProductDataResponse;
}

export namespace ProductDataResponse {
  export type AsObject = {
    data?: ProductDataResponseData.AsObject,
    error?: shared_v1_error_pb.AppError.AsObject,
  }

  export enum ResponseCase {
    RESPONSE_NOT_SET = 0,
    DATA = 1,
    ERROR = 2,
  }
}

