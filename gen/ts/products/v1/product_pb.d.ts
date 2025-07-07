// package: products.v1
// file: products/v1/product.proto

import * as jspb from "google-protobuf";

export class ProductTag extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): number;
  setId(value: number): void;

  hasName(): boolean;
  clearName(): void;
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProductTag.AsObject;
  static toObject(includeInstance: boolean, msg: ProductTag): ProductTag.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProductTag, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProductTag;
  static deserializeBinaryFromReader(message: ProductTag, reader: jspb.BinaryReader): ProductTag;
}

export namespace ProductTag {
  export type AsObject = {
    id: number,
    name: string,
  }
}

export class ProductMetadata extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProductMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: ProductMetadata): ProductMetadata.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
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
  setId(value: string): void;

  getUserId(): string;
  setUserId(value: string): void;

  getSku(): string;
  setSku(value: string): void;

  getVersion(): number;
  setVersion(value: number): void;

  getStatus(): string;
  setStatus(value: string): void;

  getTitle(): string;
  setTitle(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getSlug(): string;
  setSlug(value: string): void;

  getPrice(): number;
  setPrice(value: number): void;

  getCurrencyCode(): string;
  setCurrencyCode(value: string): void;

  clearTagsList(): void;
  getTagsList(): Array<ProductTag>;
  setTagsList(value: Array<ProductTag>): void;
  addTags(value?: ProductTag, index?: number): ProductTag;

  hasMetadata(): boolean;
  clearMetadata(): void;
  getMetadata(): ProductMetadata | undefined;
  setMetadata(value?: ProductMetadata): void;

  getArEnabled(): boolean;
  setArEnabled(value: boolean): void;

  getCreatedAt(): number;
  setCreatedAt(value: number): void;

  hasPublishedAt(): boolean;
  clearPublishedAt(): void;
  getPublishedAt(): number;
  setPublishedAt(value: number): void;

  hasUpdatedAt(): boolean;
  clearUpdatedAt(): void;
  getUpdatedAt(): number;
  setUpdatedAt(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Product.AsObject;
  static toObject(includeInstance: boolean, msg: Product): Product.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
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
    price: number,
    currencyCode: string,
    tagsList: Array<ProductTag.AsObject>,
    metadata?: ProductMetadata.AsObject,
    arEnabled: boolean,
    createdAt: number,
    publishedAt: number,
    updatedAt: number,
  }
}

