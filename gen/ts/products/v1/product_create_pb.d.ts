// package: products.v1
// file: products/v1/product_create.proto

import * as jspb from "google-protobuf";

export class ProductCreateTag extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): number;
  setId(value: number): void;

  hasName(): boolean;
  clearName(): void;
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProductCreateTag.AsObject;
  static toObject(includeInstance: boolean, msg: ProductCreateTag): ProductCreateTag.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProductCreateTag, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProductCreateTag;
  static deserializeBinaryFromReader(message: ProductCreateTag, reader: jspb.BinaryReader): ProductCreateTag;
}

export namespace ProductCreateTag {
  export type AsObject = {
    id: number,
    name: string,
  }
}

export class ProductCreateRequest extends jspb.Message {
  getTitle(): string;
  setTitle(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getSku(): string;
  setSku(value: string): void;

  getPrice(): number;
  setPrice(value: number): void;

  getCurrencyCode(): string;
  setCurrencyCode(value: string): void;

  clearTagsList(): void;
  getTagsList(): Array<ProductCreateTag>;
  setTagsList(value: Array<ProductCreateTag>): void;
  addTags(value?: ProductCreateTag, index?: number): ProductCreateTag;

  getArEnabled(): boolean;
  setArEnabled(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProductCreateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ProductCreateRequest): ProductCreateRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProductCreateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProductCreateRequest;
  static deserializeBinaryFromReader(message: ProductCreateRequest, reader: jspb.BinaryReader): ProductCreateRequest;
}

export namespace ProductCreateRequest {
  export type AsObject = {
    title: string,
    description: string,
    sku: string,
    price: number,
    currencyCode: string,
    tagsList: Array<ProductCreateTag.AsObject>,
    arEnabled: boolean,
  }
}

export class ProductCreateResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProductCreateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ProductCreateResponse): ProductCreateResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProductCreateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProductCreateResponse;
  static deserializeBinaryFromReader(message: ProductCreateResponse, reader: jspb.BinaryReader): ProductCreateResponse;
}

export namespace ProductCreateResponse {
  export type AsObject = {
  }
}

