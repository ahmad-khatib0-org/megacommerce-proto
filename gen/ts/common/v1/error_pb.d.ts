// package: common.v1
// file: common/v1/error.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";

export class AppError extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getMessage(): string;
  setMessage(value: string): void;

  getDetailedError(): string;
  setDetailedError(value: string): void;

  getRequestId(): string;
  setRequestId(value: string): void;

  getStatusCode(): number;
  setStatusCode(value: number): void;

  getWhere(): string;
  setWhere(value: string): void;

  getSkipTranslation(): boolean;
  setSkipTranslation(value: boolean): void;

  hasParams(): boolean;
  clearParams(): void;
  getParams(): google_protobuf_any_pb.Any | undefined;
  setParams(value?: google_protobuf_any_pb.Any): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AppError.AsObject;
  static toObject(includeInstance: boolean, msg: AppError): AppError.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AppError, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AppError;
  static deserializeBinaryFromReader(message: AppError, reader: jspb.BinaryReader): AppError;
}

export namespace AppError {
  export type AsObject = {
    id: string,
    message: string,
    detailedError: string,
    requestId: string,
    statusCode: number,
    where: string,
    skipTranslation: boolean,
    params?: google_protobuf_any_pb.Any.AsObject,
  }
}

