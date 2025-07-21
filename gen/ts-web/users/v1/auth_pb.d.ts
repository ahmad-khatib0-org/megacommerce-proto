import * as jspb from 'google-protobuf'

import * as shared_v1_error_pb from '../../shared/v1/error_pb'; // proto import: "shared/v1/error.proto"
import * as shared_v1_types_pb from '../../shared/v1/types_pb'; // proto import: "shared/v1/types.proto"


export class Token extends jspb.Message {
  getId(): string;
  setId(value: string): Token;

  getToken(): string;
  setToken(value: string): Token;

  getType(): string;
  setType(value: string): Token;

  getUsed(): boolean;
  setUsed(value: boolean): Token;

  getCreatedAt(): number;
  setCreatedAt(value: number): Token;

  getExpiresAt(): number;
  setExpiresAt(value: number): Token;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Token.AsObject;
  static toObject(includeInstance: boolean, msg: Token): Token.AsObject;
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
  setEmail(value: string): EmailConfirmationRequest;

  getToken(): string;
  setToken(value: string): EmailConfirmationRequest;

  getTokenId(): string;
  setTokenId(value: string): EmailConfirmationRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EmailConfirmationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: EmailConfirmationRequest): EmailConfirmationRequest.AsObject;
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
  getData(): shared_v1_types_pb.Empty | undefined;
  setData(value?: shared_v1_types_pb.Empty): EmailConfirmationResponse;
  hasData(): boolean;
  clearData(): EmailConfirmationResponse;

  getError(): shared_v1_error_pb.AppError | undefined;
  setError(value?: shared_v1_error_pb.AppError): EmailConfirmationResponse;
  hasError(): boolean;
  clearError(): EmailConfirmationResponse;

  getResponseCase(): EmailConfirmationResponse.ResponseCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EmailConfirmationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: EmailConfirmationResponse): EmailConfirmationResponse.AsObject;
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

