// package: users.v1
// file: users/v1/auth.proto

import * as jspb from "google-protobuf";
import * as shared_v1_error_pb from "../../shared/v1/error_pb";
import * as shared_v1_types_pb from "../../shared/v1/types_pb";

export class EmailConfirmationRequest extends jspb.Message {
  getEmail(): string;
  setEmail(value: string): void;

  getToken(): string;
  setToken(value: string): void;

  getTokenId(): string;
  setTokenId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EmailConfirmationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: EmailConfirmationRequest): EmailConfirmationRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EmailConfirmationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EmailConfirmationRequest;
  static deserializeBinaryFromReader(message: EmailConfirmationRequest, reader: jspb.BinaryReader): EmailConfirmationRequest;
}

export namespace EmailConfirmationRequest {
  export type AsObject = {
    email: string,
    token: string,
    tokenId: string,
  }
}

export class EmailConfirmationResponse extends jspb.Message {
  hasData(): boolean;
  clearData(): void;
  getData(): shared_v1_types_pb.Empty | undefined;
  setData(value?: shared_v1_types_pb.Empty): void;

  hasError(): boolean;
  clearError(): void;
  getError(): shared_v1_error_pb.AppError | undefined;
  setError(value?: shared_v1_error_pb.AppError): void;

  getResponseCase(): EmailConfirmationResponse.ResponseCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EmailConfirmationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: EmailConfirmationResponse): EmailConfirmationResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EmailConfirmationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EmailConfirmationResponse;
  static deserializeBinaryFromReader(message: EmailConfirmationResponse, reader: jspb.BinaryReader): EmailConfirmationResponse;
}

export namespace EmailConfirmationResponse {
  export type AsObject = {
    data?: shared_v1_types_pb.Empty.AsObject,
    error?: shared_v1_error_pb.AppError.AsObject,
  }

  export enum ResponseCase {
    RESPONSE_NOT_SET = 0,
    DATA = 1,
    ERROR = 2,
  }
}

