// package: user.v1
// file: user/v1/user.proto

import * as jspb from "google-protobuf";

export class User extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): string;
  setId(value: string): void;

  hasBusinessName(): boolean;
  clearBusinessName(): void;
  getBusinessName(): string;
  setBusinessName(value: string): void;

  hasFirstName(): boolean;
  clearFirstName(): void;
  getFirstName(): string;
  setFirstName(value: string): void;

  hasNickname(): boolean;
  clearNickname(): void;
  getNickname(): string;
  setNickname(value: string): void;

  hasLastName(): boolean;
  clearLastName(): void;
  getLastName(): string;
  setLastName(value: string): void;

  hasEmail(): boolean;
  clearEmail(): void;
  getEmail(): string;
  setEmail(value: string): void;

  hasUserType(): boolean;
  clearUserType(): void;
  getUserType(): string;
  setUserType(value: string): void;

  hasMembership(): boolean;
  clearMembership(): void;
  getMembership(): string;
  setMembership(value: string): void;

  hasIsEmailVerified(): boolean;
  clearIsEmailVerified(): void;
  getIsEmailVerified(): boolean;
  setIsEmailVerified(value: boolean): void;

  hasPassword(): boolean;
  clearPassword(): void;
  getPassword(): string;
  setPassword(value: string): void;

  hasAuthData(): boolean;
  clearAuthData(): void;
  getAuthData(): string;
  setAuthData(value: string): void;

  hasAuthService(): boolean;
  clearAuthService(): void;
  getAuthService(): string;
  setAuthService(value: string): void;

  hasRoles(): boolean;
  clearRoles(): void;
  getRoles(): string;
  setRoles(value: string): void;

  getPropsMap(): jspb.Map<string, string>;
  clearPropsMap(): void;
  getNotifyPropsMap(): jspb.Map<string, string>;
  clearNotifyPropsMap(): void;
  hasLastPasswordUpdate(): boolean;
  clearLastPasswordUpdate(): void;
  getLastPasswordUpdate(): number;
  setLastPasswordUpdate(value: number): void;

  hasLastPictureUpdate(): boolean;
  clearLastPictureUpdate(): void;
  getLastPictureUpdate(): number;
  setLastPictureUpdate(value: number): void;

  hasFailedAttempts(): boolean;
  clearFailedAttempts(): void;
  getFailedAttempts(): number;
  setFailedAttempts(value: number): void;

  hasLocale(): boolean;
  clearLocale(): void;
  getLocale(): string;
  setLocale(value: string): void;

  hasMfaActive(): boolean;
  clearMfaActive(): void;
  getMfaActive(): boolean;
  setMfaActive(value: boolean): void;

  hasMfaSecret(): boolean;
  clearMfaSecret(): void;
  getMfaSecret(): string;
  setMfaSecret(value: string): void;

  hasLastActivityAt(): boolean;
  clearLastActivityAt(): void;
  getLastActivityAt(): string;
  setLastActivityAt(value: string): void;

  hasLastLogin(): boolean;
  clearLastLogin(): void;
  getLastLogin(): number;
  setLastLogin(value: number): void;

  hasCreatedAt(): boolean;
  clearCreatedAt(): void;
  getCreatedAt(): number;
  setCreatedAt(value: number): void;

  hasUpdatedAt(): boolean;
  clearUpdatedAt(): void;
  getUpdatedAt(): number;
  setUpdatedAt(value: number): void;

  hasDeletedAt(): boolean;
  clearDeletedAt(): void;
  getDeletedAt(): number;
  setDeletedAt(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): User.AsObject;
  static toObject(includeInstance: boolean, msg: User): User.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: User, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): User;
  static deserializeBinaryFromReader(message: User, reader: jspb.BinaryReader): User;
}

export namespace User {
  export type AsObject = {
    id: string,
    businessName: string,
    firstName: string,
    nickname: string,
    lastName: string,
    email: string,
    userType: string,
    membership: string,
    isEmailVerified: boolean,
    password: string,
    authData: string,
    authService: string,
    roles: string,
    propsMap: Array<[string, string]>,
    notifyPropsMap: Array<[string, string]>,
    lastPasswordUpdate: number,
    lastPictureUpdate: number,
    failedAttempts: number,
    locale: string,
    mfaActive: boolean,
    mfaSecret: string,
    lastActivityAt: string,
    lastLogin: number,
    createdAt: number,
    updatedAt: number,
    deletedAt: number,
  }
}

export class CreateSupplierRequest extends jspb.Message {
  getBusinessName(): string;
  setBusinessName(value: string): void;

  getEmail(): string;
  setEmail(value: string): void;

  getFirstName(): string;
  setFirstName(value: string): void;

  getLastName(): string;
  setLastName(value: string): void;

  getPassword(): string;
  setPassword(value: string): void;

  getMembership(): string;
  setMembership(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateSupplierRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateSupplierRequest): CreateSupplierRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateSupplierRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateSupplierRequest;
  static deserializeBinaryFromReader(message: CreateSupplierRequest, reader: jspb.BinaryReader): CreateSupplierRequest;
}

export namespace CreateSupplierRequest {
  export type AsObject = {
    businessName: string,
    email: string,
    firstName: string,
    lastName: string,
    password: string,
    membership: string,
  }
}

export class CreateSupplierResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateSupplierResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateSupplierResponse): CreateSupplierResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateSupplierResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateSupplierResponse;
  static deserializeBinaryFromReader(message: CreateSupplierResponse, reader: jspb.BinaryReader): CreateSupplierResponse;
}

export namespace CreateSupplierResponse {
  export type AsObject = {
  }
}

