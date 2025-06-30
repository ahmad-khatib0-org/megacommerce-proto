// package: products.v1
// file: products/v1/product.proto

import * as jspb from "google-protobuf";

export class ProductTag extends jspb.Message {
  getId(): number;
  setId(value: number): void;

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
  getTagsList(): Array<ProductTag>;
  setTagsList(value: Array<ProductTag>): void;
  addTags(value?: ProductTag, index?: number): ProductTag;

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
    tagsList: Array<ProductTag.AsObject>,
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

