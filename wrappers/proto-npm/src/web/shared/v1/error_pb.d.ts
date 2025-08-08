import * as jspb from 'google-protobuf'

import * as shared_v1_types_pb from '../../shared/v1/types_pb'; // proto import: "shared/v1/types.proto"


export class AppError extends jspb.Message {
  getId(): string;
  setId(value: string): AppError;

  getMessage(): string;
  setMessage(value: string): AppError;

  getDetailedError(): string;
  setDetailedError(value: string): AppError;

  getRequestId(): string;
  setRequestId(value: string): AppError;

  getStatusCode(): number;
  setStatusCode(value: number): AppError;

  getWhere(): string;
  setWhere(value: string): AppError;

  getSkipTranslation(): boolean;
  setSkipTranslation(value: boolean): AppError;

  getParams(): shared_v1_types_pb.StringMap | undefined;
  setParams(value?: shared_v1_types_pb.StringMap): AppError;
  hasParams(): boolean;
  clearParams(): AppError;

  getNestedParams(): shared_v1_types_pb.NestedStringMap | undefined;
  setNestedParams(value?: shared_v1_types_pb.NestedStringMap): AppError;
  hasNestedParams(): boolean;
  clearNestedParams(): AppError;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AppError.AsObject;
  static toObject(includeInstance: boolean, msg: AppError): AppError.AsObject;
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
    nestedParams?: shared_v1_types_pb.NestedStringMap.AsObject,
  }
}

