import * as jspb from 'google-protobuf'

import * as shared_v1_error_pb from '../../shared/v1/error_pb'; // proto import: "shared/v1/error.proto"
import * as products_v1_product_categories_pb from '../../products/v1/product_categories_pb'; // proto import: "products/v1/product_categories.proto"


export class ProductDataRequest extends jspb.Message {
  getGetAllCategories(): boolean;
  setGetAllCategories(value: boolean): ProductDataRequest;
  hasGetAllCategories(): boolean;
  clearGetAllCategories(): ProductDataRequest;

  getCategoryName(): string;
  setCategoryName(value: string): ProductDataRequest;
  hasCategoryName(): boolean;
  clearCategoryName(): ProductDataRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProductDataRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ProductDataRequest): ProductDataRequest.AsObject;
  static serializeBinaryToWriter(message: ProductDataRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProductDataRequest;
  static deserializeBinaryFromReader(message: ProductDataRequest, reader: jspb.BinaryReader): ProductDataRequest;
}

export namespace ProductDataRequest {
  export type AsObject = {
    getAllCategories?: boolean,
    categoryName?: string,
  }

  export enum GetAllCategoriesCase { 
    _GET_ALL_CATEGORIES_NOT_SET = 0,
    GET_ALL_CATEGORIES = 1,
  }

  export enum CategoryNameCase { 
    _CATEGORY_NAME_NOT_SET = 0,
    CATEGORY_NAME = 2,
  }
}

export class ProductDataResponse extends jspb.Message {
  getData(): ProductDataResponseData | undefined;
  setData(value?: ProductDataResponseData): ProductDataResponse;
  hasData(): boolean;
  clearData(): ProductDataResponse;

  getError(): shared_v1_error_pb.AppError | undefined;
  setError(value?: shared_v1_error_pb.AppError): ProductDataResponse;
  hasError(): boolean;
  clearError(): ProductDataResponse;

  getResponseCase(): ProductDataResponse.ResponseCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProductDataResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ProductDataResponse): ProductDataResponse.AsObject;
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

export class ProductDataResponseData extends jspb.Message {
  getCategoriesList(): Array<products_v1_product_categories_pb.ProductCategory>;
  setCategoriesList(value: Array<products_v1_product_categories_pb.ProductCategory>): ProductDataResponseData;
  clearCategoriesList(): ProductDataResponseData;
  addCategories(value?: products_v1_product_categories_pb.ProductCategory, index?: number): products_v1_product_categories_pb.ProductCategory;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProductDataResponseData.AsObject;
  static toObject(includeInstance: boolean, msg: ProductDataResponseData): ProductDataResponseData.AsObject;
  static serializeBinaryToWriter(message: ProductDataResponseData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProductDataResponseData;
  static deserializeBinaryFromReader(message: ProductDataResponseData, reader: jspb.BinaryReader): ProductDataResponseData;
}

export namespace ProductDataResponseData {
  export type AsObject = {
    categoriesList: Array<products_v1_product_categories_pb.ProductCategory.AsObject>,
  }
}

