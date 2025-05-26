// package: common.v1
// file: common/v1/common.proto

import * as jspb from "google-protobuf";
import * as common_v1_config_pb from "../../common/v1/config_pb";

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

