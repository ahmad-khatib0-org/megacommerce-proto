// package: shared.v1
// file: shared/v1/error.proto

import * as jspb from "google-protobuf";
import * as shared_v1_types_pb from "../../shared/v1/types_pb";

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
  getParams(): shared_v1_types_pb.StringMap | undefined;
  setParams(value?: shared_v1_types_pb.StringMap): void;

  getNestedParamsMap(): jspb.Map<string, shared_v1_types_pb.StringMap>;
  clearNestedParamsMap(): void;
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
    params?: shared_v1_types_pb.StringMap.AsObject,
    nestedParamsMap: Array<[string, shared_v1_types_pb.StringMap.AsObject]>,
  }
}

