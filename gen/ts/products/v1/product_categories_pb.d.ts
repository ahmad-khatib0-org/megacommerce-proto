// package: products.v1
// file: products/v1/product_categories.proto

import * as jspb from "google-protobuf";
import * as shared_v1_types_pb from "../../shared/v1/types_pb";

export class ProductCategory extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getName(): string;
  setName(value: string): void;

  clearSubcategoriesList(): void;
  getSubcategoriesList(): Array<ProductSubcategory>;
  setSubcategoriesList(value: Array<ProductSubcategory>): void;
  addSubcategories(value?: ProductSubcategory, index?: number): ProductSubcategory;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProductCategory.AsObject;
  static toObject(includeInstance: boolean, msg: ProductCategory): ProductCategory.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
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
  setId(value: string): void;

  getName(): string;
  setName(value: string): void;

  getAttributesMap(): jspb.Map<string, ProductSubcategoryAttribute>;
  clearAttributesMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProductSubcategory.AsObject;
  static toObject(includeInstance: boolean, msg: ProductSubcategory): ProductSubcategory.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
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
  setRequired(value: boolean): void;

  getType(): string;
  setType(value: string): void;

  hasData(): boolean;
  clearData(): void;
  getData(): shared_v1_types_pb.Any | undefined;
  setData(value?: shared_v1_types_pb.Any): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProductSubcategoryAttribute.AsObject;
  static toObject(includeInstance: boolean, msg: ProductSubcategoryAttribute): ProductSubcategoryAttribute.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
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
}

export class ProductCategories extends jspb.Message {
  clearCategoriesList(): void;
  getCategoriesList(): Array<ProductCategory>;
  setCategoriesList(value: Array<ProductCategory>): void;
  addCategories(value?: ProductCategory, index?: number): ProductCategory;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProductCategories.AsObject;
  static toObject(includeInstance: boolean, msg: ProductCategories): ProductCategories.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProductCategories, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProductCategories;
  static deserializeBinaryFromReader(message: ProductCategories, reader: jspb.BinaryReader): ProductCategories;
}

export namespace ProductCategories {
  export type AsObject = {
    categoriesList: Array<ProductCategory.AsObject>,
  }
}

export class ProductCategoryWithoutSubcategories extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProductCategoryWithoutSubcategories.AsObject;
  static toObject(includeInstance: boolean, msg: ProductCategoryWithoutSubcategories): ProductCategoryWithoutSubcategories.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProductCategoryWithoutSubcategories, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProductCategoryWithoutSubcategories;
  static deserializeBinaryFromReader(message: ProductCategoryWithoutSubcategories, reader: jspb.BinaryReader): ProductCategoryWithoutSubcategories;
}

export namespace ProductCategoryWithoutSubcategories {
  export type AsObject = {
    id: string,
    name: string,
  }
}

export class ProductCategoriesWithoutSubcategories extends jspb.Message {
  clearCategoriesList(): void;
  getCategoriesList(): Array<ProductCategoryWithoutSubcategories>;
  setCategoriesList(value: Array<ProductCategoryWithoutSubcategories>): void;
  addCategories(value?: ProductCategoryWithoutSubcategories, index?: number): ProductCategoryWithoutSubcategories;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProductCategoriesWithoutSubcategories.AsObject;
  static toObject(includeInstance: boolean, msg: ProductCategoriesWithoutSubcategories): ProductCategoriesWithoutSubcategories.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProductCategoriesWithoutSubcategories, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProductCategoriesWithoutSubcategories;
  static deserializeBinaryFromReader(message: ProductCategoriesWithoutSubcategories, reader: jspb.BinaryReader): ProductCategoriesWithoutSubcategories;
}

export namespace ProductCategoriesWithoutSubcategories {
  export type AsObject = {
    categoriesList: Array<ProductCategoryWithoutSubcategories.AsObject>,
  }
}

