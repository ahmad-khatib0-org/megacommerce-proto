import * as jspb from 'google-protobuf'

import * as products_v1_product_pb from '../../products/v1/product_pb'; // proto import: "products/v1/product.proto"
import * as products_v1_product_categories_pb from '../../products/v1/product_categories_pb'; // proto import: "products/v1/product_categories.proto"
import * as shared_v1_error_pb from '../../shared/v1/error_pb'; // proto import: "shared/v1/error.proto"


export class ProductDataResponseData extends jspb.Message {
  getCategories(): products_v1_product_categories_pb.ProductCategoriesWithoutSubcategories | undefined;
  setCategories(value?: products_v1_product_categories_pb.ProductCategoriesWithoutSubcategories): ProductDataResponseData;
  hasCategories(): boolean;
  clearCategories(): ProductDataResponseData;

  getCategoryData(): products_v1_product_categories_pb.ProductCategory | undefined;
  setCategoryData(value?: products_v1_product_categories_pb.ProductCategory): ProductDataResponseData;
  hasCategoryData(): boolean;
  clearCategoryData(): ProductDataResponseData;

  getTags(): products_v1_product_pb.ProductTags | undefined;
  setTags(value?: products_v1_product_pb.ProductTags): ProductDataResponseData;
  hasTags(): boolean;
  clearTags(): ProductDataResponseData;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProductDataResponseData.AsObject;
  static toObject(includeInstance: boolean, msg: ProductDataResponseData): ProductDataResponseData.AsObject;
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

  export enum CategoriesCase { 
    _CATEGORIES_NOT_SET = 0,
    CATEGORIES = 1,
  }

  export enum CategoryDataCase { 
    _CATEGORY_DATA_NOT_SET = 0,
    CATEGORY_DATA = 2,
  }

  export enum TagsCase { 
    _TAGS_NOT_SET = 0,
    TAGS = 3,
  }
}

export class ProductDataRequest extends jspb.Message {
  getGetAllCategories(): boolean;
  setGetAllCategories(value: boolean): ProductDataRequest;
  hasGetAllCategories(): boolean;
  clearGetAllCategories(): ProductDataRequest;

  getGetCategoryData(): boolean;
  setGetCategoryData(value: boolean): ProductDataRequest;
  hasGetCategoryData(): boolean;
  clearGetCategoryData(): ProductDataRequest;

  getCategoryName(): string;
  setCategoryName(value: string): ProductDataRequest;
  hasCategoryName(): boolean;
  clearCategoryName(): ProductDataRequest;

  getGetTags(): boolean;
  setGetTags(value: boolean): ProductDataRequest;
  hasGetTags(): boolean;
  clearGetTags(): ProductDataRequest;

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
    getCategoryData?: boolean,
    categoryName?: string,
    getTags?: boolean,
  }

  export enum GetAllCategoriesCase { 
    _GET_ALL_CATEGORIES_NOT_SET = 0,
    GET_ALL_CATEGORIES = 1,
  }

  export enum GetCategoryDataCase { 
    _GET_CATEGORY_DATA_NOT_SET = 0,
    GET_CATEGORY_DATA = 2,
  }

  export enum CategoryNameCase { 
    _CATEGORY_NAME_NOT_SET = 0,
    CATEGORY_NAME = 3,
  }

  export enum GetTagsCase { 
    _GET_TAGS_NOT_SET = 0,
    GET_TAGS = 4,
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

