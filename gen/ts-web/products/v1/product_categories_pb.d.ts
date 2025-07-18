import * as jspb from 'google-protobuf'



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

  getStringArrayList(): Array<string>;
  setStringArrayList(value: Array<string>): ProductSubcategoryAttribute;
  clearStringArrayList(): ProductSubcategoryAttribute;
  addStringArray(value: string, index?: number): ProductSubcategoryAttribute;

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
    stringArrayList: Array<string>,
  }
}

export class ProductCategories extends jspb.Message {
  getCategoriesList(): Array<ProductCategory>;
  setCategoriesList(value: Array<ProductCategory>): ProductCategories;
  clearCategoriesList(): ProductCategories;
  addCategories(value?: ProductCategory, index?: number): ProductCategory;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProductCategories.AsObject;
  static toObject(includeInstance: boolean, msg: ProductCategories): ProductCategories.AsObject;
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
  setId(value: string): ProductCategoryWithoutSubcategories;

  getName(): string;
  setName(value: string): ProductCategoryWithoutSubcategories;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProductCategoryWithoutSubcategories.AsObject;
  static toObject(includeInstance: boolean, msg: ProductCategoryWithoutSubcategories): ProductCategoryWithoutSubcategories.AsObject;
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
  getCategoriesList(): Array<ProductCategoryWithoutSubcategories>;
  setCategoriesList(value: Array<ProductCategoryWithoutSubcategories>): ProductCategoriesWithoutSubcategories;
  clearCategoriesList(): ProductCategoriesWithoutSubcategories;
  addCategories(value?: ProductCategoryWithoutSubcategories, index?: number): ProductCategoryWithoutSubcategories;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProductCategoriesWithoutSubcategories.AsObject;
  static toObject(includeInstance: boolean, msg: ProductCategoriesWithoutSubcategories): ProductCategoriesWithoutSubcategories.AsObject;
  static serializeBinaryToWriter(message: ProductCategoriesWithoutSubcategories, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProductCategoriesWithoutSubcategories;
  static deserializeBinaryFromReader(message: ProductCategoriesWithoutSubcategories, reader: jspb.BinaryReader): ProductCategoriesWithoutSubcategories;
}

export namespace ProductCategoriesWithoutSubcategories {
  export type AsObject = {
    categoriesList: Array<ProductCategoryWithoutSubcategories.AsObject>,
  }
}

