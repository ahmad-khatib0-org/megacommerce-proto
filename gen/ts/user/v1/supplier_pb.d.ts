// package: user.v1
// file: user/v1/supplier.proto

import * as jspb from "google-protobuf";

export class SupplierCreateRequest extends jspb.Message {
  getUsername(): string;
  setUsername(value: string): void;

  getEmail(): string;
  setEmail(value: string): void;

  getFirstName(): string;
  setFirstName(value: string): void;

  getLastName(): string;
  setLastName(value: string): void;

  getPassword(): string;
  setPassword(value: string): void;

  getMembership(): string;
  setMembership(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SupplierCreateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SupplierCreateRequest): SupplierCreateRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
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
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SupplierCreateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SupplierCreateResponse;
  static deserializeBinaryFromReader(message: SupplierCreateResponse, reader: jspb.BinaryReader): SupplierCreateResponse;
}

export namespace SupplierCreateResponse {
  export type AsObject = {
  }
}

