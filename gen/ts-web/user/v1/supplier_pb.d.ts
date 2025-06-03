import * as jspb from 'google-protobuf'



export class SupplierCreateRequest extends jspb.Message {
  getUsername(): string;
  setUsername(value: string): SupplierCreateRequest;

  getEmail(): string;
  setEmail(value: string): SupplierCreateRequest;

  getFirstName(): string;
  setFirstName(value: string): SupplierCreateRequest;

  getLastName(): string;
  setLastName(value: string): SupplierCreateRequest;

  getPassword(): string;
  setPassword(value: string): SupplierCreateRequest;

  getMembership(): string;
  setMembership(value: string): SupplierCreateRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SupplierCreateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SupplierCreateRequest): SupplierCreateRequest.AsObject;
  static serializeBinaryToWriter(message: SupplierCreateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SupplierCreateRequest;
  static deserializeBinaryFromReader(message: SupplierCreateRequest, reader: jspb.BinaryReader): SupplierCreateRequest;
}

export namespace SupplierCreateRequest {
  export type AsObject = {
    username: string,
    email: string,
    firstName: string,
    lastName: string,
    password: string,
    membership: string,
  }
}

export class SupplierCreateResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SupplierCreateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SupplierCreateResponse): SupplierCreateResponse.AsObject;
  static serializeBinaryToWriter(message: SupplierCreateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SupplierCreateResponse;
  static deserializeBinaryFromReader(message: SupplierCreateResponse, reader: jspb.BinaryReader): SupplierCreateResponse;
}

export namespace SupplierCreateResponse {
  export type AsObject = {
  }
}

