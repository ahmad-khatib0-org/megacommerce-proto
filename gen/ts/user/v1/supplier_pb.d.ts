// package: user.v1
// file: user/v1/supplier.proto

import * as jspb from "google-protobuf";
import * as shared_v1_error_pb from "../../shared/v1/error_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

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
  hasData(): boolean;
  clearData(): void;
  getData(): google_protobuf_empty_pb.Empty | undefined;
  setData(value?: google_protobuf_empty_pb.Empty): void;

  hasError(): boolean;
  clearError(): void;
  getError(): shared_v1_error_pb.AppError | undefined;
  setError(value?: shared_v1_error_pb.AppError): void;

  getResponseCase(): SupplierCreateResponse.ResponseCase;
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
    data?: google_protobuf_empty_pb.Empty.AsObject,
    error?: shared_v1_error_pb.AppError.AsObject,
  }

  export enum ResponseCase {
    RESPONSE_NOT_SET = 0,
    DATA = 1,
    ERROR = 2,
  }
}

