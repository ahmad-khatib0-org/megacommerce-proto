import * as jspb from 'google-protobuf'

import * as shared_v1_types_pb from '../../shared/v1/types_pb'; // proto import: "shared/v1/types.proto"


export class ProductCategory extends jspb.Message {
  getId(): string;
  setId(value: string): ProductCategory;

  getName(): string;
  setName(value: string): ProductCategory;

  getSubcategoriesList(): Array<ProductSubcategory>;
  setSubcategoriesList(value: Array<ProductSubcategory>): ProductCategory;
  clearSubcategoriesList(): ProductCategory;
  addSubcategories(value?: ProductSubcategory, index?: number): ProductSubcategory;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProductCategory.AsObject;
  static toObject(includeInstance: boolean, msg: ProductCategory): ProductCategory.AsObject;
  static serializeBinaryToWriter(message: ProductCategory, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProductCategory;
  static deserializeBinaryFromReader(message: ProductCategory, reader: jspb.BinaryReader): ProductCategory;
}

export namespace ProductCategory {
  export type AsObject = {
    id: string,
    name: string,
    subcategoriesList: Array<ProductSubcategory.AsObject>,
  }
}

export class ProductSubcategory extends jspb.Message {
  getId(): string;
  setId(value: string): ProductSubcategory;

  getName(): string;
  setName(value: string): ProductSubcategory;

  getAttributesMap(): jspb.Map<string, ProductSubcategoryAttribute>;
  clearAttributesMap(): ProductSubcategory;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProductSubcategory.AsObject;
  static toObject(includeInstance: boolean, msg: ProductSubcategory): ProductSubcategory.AsObject;
  static serializeBinaryToWriter(message: ProductSubcategory, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProductSubcategory;
  static deserializeBinaryFromReader(message: ProductSubcategory, reader: jspb.BinaryReader): ProductSubcategory;
}

export namespace ProductSubcategory {
  export type AsObject = {
    id: string,
    name: string,
    attributesMap: Array<[string, ProductSubcategoryAttribute.AsObject]>,
  }
}

export class ProductSubcategoryAttribute extends jspb.Message {
  getRequired(): boolean;
  setRequired(value: boolean): ProductSubcategoryAttribute;

  getType(): string;
  setType(value: string): ProductSubcategoryAttribute;

  getData(): shared_v1_types_pb.Any | undefined;
  setData(value?: shared_v1_types_pb.Any): ProductSubcategoryAttribute;
  hasData(): boolean;
  clearData(): ProductSubcategoryAttribute;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProductSubcategoryAttribute.AsObject;
  static toObject(includeInstance: boolean, msg: ProductSubcategoryAttribute): ProductSubcategoryAttribute.AsObject;
  static serializeBinaryToWriter(message: ProductSubcategoryAttribute, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProductSubcategoryAttribute;
  static deserializeBinaryFromReader(message: ProductSubcategoryAttribute, reader: jspb.BinaryReader): ProductSubcategoryAttribute;
}

export namespace ProductSubcategoryAttribute {
  export type AsObject = {
    required: boolean,
    type: string,
    data?: shared_v1_types_pb.Any.AsObject,
  }

  export enum DataCase { 
    _DATA_NOT_SET = 0,
    DATA = 3,
  }
}

