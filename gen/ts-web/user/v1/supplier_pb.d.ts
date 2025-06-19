import * as jspb from 'google-protobuf'

import * as common_v1_error_pb from '../../common/v1/error_pb'; // proto import: "common/v1/error.proto"
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb'; // proto import: "google/protobuf/empty.proto"


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
  getData(): google_protobuf_empty_pb.Empty | undefined;
  setData(value?: google_protobuf_empty_pb.Empty): SupplierCreateResponse;
  hasData(): boolean;
  clearData(): SupplierCreateResponse;

  getError(): common_v1_error_pb.AppError | undefined;
  setError(value?: common_v1_error_pb.AppError): SupplierCreateResponse;
  hasError(): boolean;
  clearError(): SupplierCreateResponse;

  getResponseCase(): SupplierCreateResponse.ResponseCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SupplierCreateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SupplierCreateResponse): SupplierCreateResponse.AsObject;
  static serializeBinaryToWriter(message: SupplierCreateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SupplierCreateResponse;
  static deserializeBinaryFromReader(message: SupplierCreateResponse, reader: jspb.BinaryReader): SupplierCreateResponse;
}

export namespace SupplierCreateResponse {
  export type AsObject = {
    data?: google_protobuf_empty_pb.Empty.AsObject,
    error?: common_v1_error_pb.AppError.AsObject,
  }

  export enum ResponseCase { 
    RESPONSE_NOT_SET = 0,
    DATA = 1,
    ERROR = 2,
  }
}

