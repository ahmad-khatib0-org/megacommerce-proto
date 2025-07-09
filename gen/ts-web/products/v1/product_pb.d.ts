import * as jspb from 'google-protobuf'



export class ProductTag extends jspb.Message {
  getId(): number;
  setId(value: number): ProductTag;
  hasId(): boolean;
  clearId(): ProductTag;

  getName(): string;
  setName(value: string): ProductTag;
  hasName(): boolean;
  clearName(): ProductTag;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProductTag.AsObject;
  static toObject(includeInstance: boolean, msg: ProductTag): ProductTag.AsObject;
  static serializeBinaryToWriter(message: ProductTag, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProductTag;
  static deserializeBinaryFromReader(message: ProductTag, reader: jspb.BinaryReader): ProductTag;
}

export namespace ProductTag {
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

export class ProductMetadata extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProductMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: ProductMetadata): ProductMetadata.AsObject;
  static serializeBinaryToWriter(message: ProductMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProductMetadata;
  static deserializeBinaryFromReader(message: ProductMetadata, reader: jspb.BinaryReader): ProductMetadata;
}

export namespace ProductMetadata {
  export type AsObject = {
  }
}

export class Product extends jspb.Message {
  getId(): string;
  setId(value: string): Product;

  getUserId(): string;
  setUserId(value: string): Product;

  getSku(): string;
  setSku(value: string): Product;

  getVersion(): number;
  setVersion(value: number): Product;

  getStatus(): string;
  setStatus(value: string): Product;

  getTitle(): string;
  setTitle(value: string): Product;

  getDescription(): string;
  setDescription(value: string): Product;

  getSlug(): string;
  setSlug(value: string): Product;

  getPrice(): string;
  setPrice(value: string): Product;

  getCurrencyCode(): string;
  setCurrencyCode(value: string): Product;

  getTagsList(): Array<ProductTag>;
  setTagsList(value: Array<ProductTag>): Product;
  clearTagsList(): Product;
  addTags(value?: ProductTag, index?: number): ProductTag;

  getMetadata(): ProductMetadata | undefined;
  setMetadata(value?: ProductMetadata): Product;
  hasMetadata(): boolean;
  clearMetadata(): Product;

  getArEnabled(): boolean;
  setArEnabled(value: boolean): Product;

  getCreatedAt(): number;
  setCreatedAt(value: number): Product;

  getPublishedAt(): number;
  setPublishedAt(value: number): Product;
  hasPublishedAt(): boolean;
  clearPublishedAt(): Product;

  getUpdatedAt(): number;
  setUpdatedAt(value: number): Product;
  hasUpdatedAt(): boolean;
  clearUpdatedAt(): Product;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Product.AsObject;
  static toObject(includeInstance: boolean, msg: Product): Product.AsObject;
  static serializeBinaryToWriter(message: Product, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Product;
  static deserializeBinaryFromReader(message: Product, reader: jspb.BinaryReader): Product;
}

export namespace Product {
  export type AsObject = {
    id: string,
    userId: string,
    sku: string,
    version: number,
    status: string,
    title: string,
    description: string,
    slug: string,
    price: string,
    currencyCode: string,
    tagsList: Array<ProductTag.AsObject>,
    metadata?: ProductMetadata.AsObject,
    arEnabled: boolean,
    createdAt: number,
    publishedAt?: number,
    updatedAt?: number,
  }

  export enum MetadataCase { 
    _METADATA_NOT_SET = 0,
    METADATA = 12,
  }

  export enum PublishedAtCase { 
    _PUBLISHED_AT_NOT_SET = 0,
    PUBLISHED_AT = 15,
  }

  export enum UpdatedAtCase { 
    _UPDATED_AT_NOT_SET = 0,
    UPDATED_AT = 16,
  }
}

