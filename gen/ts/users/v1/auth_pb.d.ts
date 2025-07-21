// package: users.v1
// file: users/v1/auth.proto

import * as jspb from "google-protobuf";
import * as shared_v1_error_pb from "../../shared/v1/error_pb";
import * as shared_v1_types_pb from "../../shared/v1/types_pb";

export class Token extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getToken(): string;
  setToken(value: string): void;

  getType(): string;
  setType(value: string): void;

  getUsed(): boolean;
  setUsed(value: boolean): void;

  getCreatedAt(): number;
  setCreatedAt(value: number): void;

  getExpiresAt(): number;
  setExpiresAt(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Token.AsObject;
  static toObject(includeInstance: boolean, msg: Token): Token.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Token, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Token;
  static deserializeBinaryFromReader(message: Token, reader: jspb.BinaryReader): Token;
}

export namespace Token {
  export type AsObject = {
    id: string,
    token: string,
    type: string,
    used: boolean,
    createdAt: number,
    expiresAt: number,
  }
}

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
  getData(): shared_v1_types_pb.SuccessResponse | undefined;
  setData(value?: shared_v1_types_pb.SuccessResponse): void;

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
    data?: shared_v1_types_pb.SuccessResponse.AsObject,
    error?: shared_v1_error_pb.AppError.AsObject,
  }

  export enum ResponseCase {
    RESPONSE_NOT_SET = 0,
    DATA = 1,
    ERROR = 2,
  }
}

