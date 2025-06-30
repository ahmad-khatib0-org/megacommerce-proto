import * as jspb from 'google-protobuf'



export class ProductTag extends jspb.Message {
  getId(): number;
  setId(value: number): ProductTag;

  getName(): string;
  setName(value: string): ProductTag;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProductTag.AsObject;
  static toObject(includeInstance: boolean, msg: ProductTag): ProductTag.AsObject;
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
  setTitle(value: string): ProductCreateRequest;

  getDescription(): string;
  setDescription(value: string): ProductCreateRequest;

  getSku(): string;
  setSku(value: string): ProductCreateRequest;

  getPrice(): number;
  setPrice(value: number): ProductCreateRequest;

  getCurrencyCode(): string;
  setCurrencyCode(value: string): ProductCreateRequest;

  getTagsList(): Array<ProductTag>;
  setTagsList(value: Array<ProductTag>): ProductCreateRequest;
  clearTagsList(): ProductCreateRequest;
  addTags(value?: ProductTag, index?: number): ProductTag;

  getArEnabled(): boolean;
  setArEnabled(value: boolean): ProductCreateRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProductCreateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ProductCreateRequest): ProductCreateRequest.AsObject;
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
  static serializeBinaryToWriter(message: ProductCreateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProductCreateResponse;
  static deserializeBinaryFromReader(message: ProductCreateResponse, reader: jspb.BinaryReader): ProductCreateResponse;
}

export namespace ProductCreateResponse {
  export type AsObject = {
  }
}

