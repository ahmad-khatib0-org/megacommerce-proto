// package: common.v1
// file: common/v1/common.proto

import * as jspb from "google-protobuf";
import * as common_v1_config_pb from "../../common/v1/config_pb";
import * as common_v1_error_pb from "../../common/v1/error_pb";

export class ConfigGetRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConfigGetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ConfigGetRequest): ConfigGetRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConfigGetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConfigGetRequest;
  static deserializeBinaryFromReader(message: ConfigGetRequest, reader: jspb.BinaryReader): ConfigGetRequest;
}

export namespace ConfigGetRequest {
  export type AsObject = {
  }
}

export class ConfigGetResponse extends jspb.Message {
  hasData(): boolean;
  clearData(): void;
  getData(): common_v1_config_pb.Config | undefined;
  setData(value?: common_v1_config_pb.Config): void;

  hasError(): boolean;
  clearError(): void;
  getError(): common_v1_error_pb.AppError | undefined;
  setError(value?: common_v1_error_pb.AppError): void;

  getResultCase(): ConfigGetResponse.ResultCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConfigGetResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ConfigGetResponse): ConfigGetResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
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
  hasConfig(): boolean;
  clearConfig(): void;
  getConfig(): common_v1_config_pb.Config | undefined;
  setConfig(value?: common_v1_config_pb.Config): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConfigUpdateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ConfigUpdateRequest): ConfigUpdateRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
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
  hasData(): boolean;
  clearData(): void;
  getData(): common_v1_config_pb.Config | undefined;
  setData(value?: common_v1_config_pb.Config): void;

  hasError(): boolean;
  clearError(): void;
  getError(): common_v1_error_pb.AppError | undefined;
  setError(value?: common_v1_error_pb.AppError): void;

  getResultCase(): ConfigUpdateResponse.ResultCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConfigUpdateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ConfigUpdateResponse): ConfigUpdateResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
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
  hasData(): boolean;
  clearData(): void;
  getData(): common_v1_config_pb.Config | undefined;
  setData(value?: common_v1_config_pb.Config): void;

  hasError(): boolean;
  clearError(): void;
  getError(): common_v1_error_pb.AppError | undefined;
  setError(value?: common_v1_error_pb.AppError): void;

  getResultCase(): ConfigListenerResponse.ResultCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConfigListenerResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ConfigListenerResponse): ConfigListenerResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
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
  setClientId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConfigListenerRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ConfigListenerRequest): ConfigListenerRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConfigListenerRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConfigListenerRequest;
  static deserializeBinaryFromReader(message: ConfigListenerRequest, reader: jspb.BinaryReader): ConfigListenerRequest;
}

export namespace ConfigListenerRequest {
  export type AsObject = {
    clientId: string,
  }
}

