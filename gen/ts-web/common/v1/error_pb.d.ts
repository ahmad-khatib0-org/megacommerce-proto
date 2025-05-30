import * as jspb from 'google-protobuf'

import * as google_protobuf_any_pb from 'google-protobuf/google/protobuf/any_pb'; // proto import: "google/protobuf/any.proto"


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

  getParamsMap(): jspb.Map<string, google_protobuf_any_pb.Any>;
  clearParamsMap(): AppError;

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
    paramsMap: Array<[string, google_protobuf_any_pb.Any.AsObject]>,
  }
}

