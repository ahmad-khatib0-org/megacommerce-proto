import * as jspb from 'google-protobuf'

import * as common_v1_config_pb from '../../common/v1/config_pb'; // proto import: "common/v1/config.proto"
import * as common_v1_error_pb from '../../common/v1/error_pb'; // proto import: "common/v1/error.proto"


export class ConfigGetRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConfigGetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ConfigGetRequest): ConfigGetRequest.AsObject;
  static serializeBinaryToWriter(message: ConfigGetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConfigGetRequest;
  static deserializeBinaryFromReader(message: ConfigGetRequest, reader: jspb.BinaryReader): ConfigGetRequest;
}

export namespace ConfigGetRequest {
  export type AsObject = {
  }
}

export class ConfigGetResponse extends jspb.Message {
  getData(): common_v1_config_pb.Config | undefined;
  setData(value?: common_v1_config_pb.Config): ConfigGetResponse;
  hasData(): boolean;
  clearData(): ConfigGetResponse;

  getError(): common_v1_error_pb.AppError | undefined;
  setError(value?: common_v1_error_pb.AppError): ConfigGetResponse;
  hasError(): boolean;
  clearError(): ConfigGetResponse;

  getResultCase(): ConfigGetResponse.ResultCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConfigGetResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ConfigGetResponse): ConfigGetResponse.AsObject;
  static serializeBinaryToWriter(message: ConfigGetResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConfigGetResponse;
  static deserializeBinaryFromReader(message: ConfigGetResponse, reader: jspb.BinaryReader): ConfigGetResponse;
}

export namespace ConfigGetResponse {
  export type AsObject = {
    data?: common_v1_config_pb.Config.AsObject,
    error?: common_v1_error_pb.AppError.AsObject,
  }

  export enum ResultCase { 
    RESULT_NOT_SET = 0,
    DATA = 1,
    ERROR = 2,
  }
}

export class ConfigUpdateRequest extends jspb.Message {
  getConfig(): common_v1_config_pb.Config | undefined;
  setConfig(value?: common_v1_config_pb.Config): ConfigUpdateRequest;
  hasConfig(): boolean;
  clearConfig(): ConfigUpdateRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConfigUpdateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ConfigUpdateRequest): ConfigUpdateRequest.AsObject;
  static serializeBinaryToWriter(message: ConfigUpdateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConfigUpdateRequest;
  static deserializeBinaryFromReader(message: ConfigUpdateRequest, reader: jspb.BinaryReader): ConfigUpdateRequest;
}

export namespace ConfigUpdateRequest {
  export type AsObject = {
    config?: common_v1_config_pb.Config.AsObject,
  }
}

export class ConfigUpdateResponse extends jspb.Message {
  getData(): common_v1_config_pb.Config | undefined;
  setData(value?: common_v1_config_pb.Config): ConfigUpdateResponse;
  hasData(): boolean;
  clearData(): ConfigUpdateResponse;

  getError(): common_v1_error_pb.AppError | undefined;
  setError(value?: common_v1_error_pb.AppError): ConfigUpdateResponse;
  hasError(): boolean;
  clearError(): ConfigUpdateResponse;

  getResultCase(): ConfigUpdateResponse.ResultCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConfigUpdateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ConfigUpdateResponse): ConfigUpdateResponse.AsObject;
  static serializeBinaryToWriter(message: ConfigUpdateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConfigUpdateResponse;
  static deserializeBinaryFromReader(message: ConfigUpdateResponse, reader: jspb.BinaryReader): ConfigUpdateResponse;
}

export namespace ConfigUpdateResponse {
  export type AsObject = {
    data?: common_v1_config_pb.Config.AsObject,
    error?: common_v1_error_pb.AppError.AsObject,
  }

  export enum ResultCase { 
    RESULT_NOT_SET = 0,
    DATA = 1,
    ERROR = 2,
  }
}

export class ConfigListenerResponse extends jspb.Message {
  getData(): common_v1_config_pb.Config | undefined;
  setData(value?: common_v1_config_pb.Config): ConfigListenerResponse;
  hasData(): boolean;
  clearData(): ConfigListenerResponse;

  getError(): common_v1_error_pb.AppError | undefined;
  setError(value?: common_v1_error_pb.AppError): ConfigListenerResponse;
  hasError(): boolean;
  clearError(): ConfigListenerResponse;

  getResultCase(): ConfigListenerResponse.ResultCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConfigListenerResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ConfigListenerResponse): ConfigListenerResponse.AsObject;
  static serializeBinaryToWriter(message: ConfigListenerResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConfigListenerResponse;
  static deserializeBinaryFromReader(message: ConfigListenerResponse, reader: jspb.BinaryReader): ConfigListenerResponse;
}

export namespace ConfigListenerResponse {
  export type AsObject = {
    data?: common_v1_config_pb.Config.AsObject,
    error?: common_v1_error_pb.AppError.AsObject,
  }

  export enum ResultCase { 
    RESULT_NOT_SET = 0,
    DATA = 1,
    ERROR = 2,
  }
}

export class ConfigListenerRequest extends jspb.Message {
  getClientId(): string;
  setClientId(value: string): ConfigListenerRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConfigListenerRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ConfigListenerRequest): ConfigListenerRequest.AsObject;
  static serializeBinaryToWriter(message: ConfigListenerRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConfigListenerRequest;
  static deserializeBinaryFromReader(message: ConfigListenerRequest, reader: jspb.BinaryReader): ConfigListenerRequest;
}

export namespace ConfigListenerRequest {
  export type AsObject = {
    clientId: string,
  }
}

