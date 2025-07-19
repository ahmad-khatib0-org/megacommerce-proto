import * as jspb from 'google-protobuf'

import * as user_v1_supplier_pb from '../../user/v1/supplier_pb'; // proto import: "user/v1/supplier.proto"


export class User extends jspb.Message {
  getId(): string;
  setId(value: string): User;
  hasId(): boolean;
  clearId(): User;

  getUsername(): string;
  setUsername(value: string): User;
  hasUsername(): boolean;
  clearUsername(): User;

  getFirstName(): string;
  setFirstName(value: string): User;
  hasFirstName(): boolean;
  clearFirstName(): User;

  getLastName(): string;
  setLastName(value: string): User;
  hasLastName(): boolean;
  clearLastName(): User;

  getEmail(): string;
  setEmail(value: string): User;
  hasEmail(): boolean;
  clearEmail(): User;

  getUserType(): string;
  setUserType(value: string): User;
  hasUserType(): boolean;
  clearUserType(): User;

  getMembership(): string;
  setMembership(value: string): User;
  hasMembership(): boolean;
  clearMembership(): User;

  getIsEmailVerified(): boolean;
  setIsEmailVerified(value: boolean): User;
  hasIsEmailVerified(): boolean;
  clearIsEmailVerified(): User;

  getPassword(): string;
  setPassword(value: string): User;
  hasPassword(): boolean;
  clearPassword(): User;

  getAuthData(): string;
  setAuthData(value: string): User;
  hasAuthData(): boolean;
  clearAuthData(): User;

  getAuthService(): string;
  setAuthService(value: string): User;
  hasAuthService(): boolean;
  clearAuthService(): User;

  getRolesList(): Array<string>;
  setRolesList(value: Array<string>): User;
  clearRolesList(): User;
  addRoles(value: string, index?: number): User;

  getPropsMap(): jspb.Map<string, string>;
  clearPropsMap(): User;

  getNotifyPropsMap(): jspb.Map<string, string>;
  clearNotifyPropsMap(): User;

  getLastPasswordUpdate(): number;
  setLastPasswordUpdate(value: number): User;
  hasLastPasswordUpdate(): boolean;
  clearLastPasswordUpdate(): User;

  getLastPictureUpdate(): number;
  setLastPictureUpdate(value: number): User;
  hasLastPictureUpdate(): boolean;
  clearLastPictureUpdate(): User;

  getFailedAttempts(): number;
  setFailedAttempts(value: number): User;
  hasFailedAttempts(): boolean;
  clearFailedAttempts(): User;

  getLocale(): string;
  setLocale(value: string): User;
  hasLocale(): boolean;
  clearLocale(): User;

  getMfaActive(): boolean;
  setMfaActive(value: boolean): User;
  hasMfaActive(): boolean;
  clearMfaActive(): User;

  getMfaSecret(): string;
  setMfaSecret(value: string): User;
  hasMfaSecret(): boolean;
  clearMfaSecret(): User;

  getLastActivityAt(): number;
  setLastActivityAt(value: number): User;
  hasLastActivityAt(): boolean;
  clearLastActivityAt(): User;

  getLastLogin(): number;
  setLastLogin(value: number): User;
  hasLastLogin(): boolean;
  clearLastLogin(): User;

  getCreatedAt(): number;
  setCreatedAt(value: number): User;
  hasCreatedAt(): boolean;
  clearCreatedAt(): User;

  getUpdatedAt(): number;
  setUpdatedAt(value: number): User;
  hasUpdatedAt(): boolean;
  clearUpdatedAt(): User;

  getDeletedAt(): number;
  setDeletedAt(value: number): User;
  hasDeletedAt(): boolean;
  clearDeletedAt(): User;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): User.AsObject;
  static toObject(includeInstance: boolean, msg: User): User.AsObject;
  static serializeBinaryToWriter(message: User, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): User;
  static deserializeBinaryFromReader(message: User, reader: jspb.BinaryReader): User;
}

export namespace User {
  export type AsObject = {
    id?: string,
    username?: string,
    firstName?: string,
    lastName?: string,
    email?: string,
    userType?: string,
    membership?: string,
    isEmailVerified?: boolean,
    password?: string,
    authData?: string,
    authService?: string,
    rolesList: Array<string>,
    propsMap: Array<[string, string]>,
    notifyPropsMap: Array<[string, string]>,
    lastPasswordUpdate?: number,
    lastPictureUpdate?: number,
    failedAttempts?: number,
    locale?: string,
    mfaActive?: boolean,
    mfaSecret?: string,
    lastActivityAt?: number,
    lastLogin?: number,
    createdAt?: number,
    updatedAt?: number,
    deletedAt?: number,
  }

  export enum IdCase { 
    _ID_NOT_SET = 0,
    ID = 1,
  }

  export enum UsernameCase { 
    _USERNAME_NOT_SET = 0,
    USERNAME = 2,
  }

  export enum FirstNameCase { 
    _FIRST_NAME_NOT_SET = 0,
    FIRST_NAME = 3,
  }

  export enum LastNameCase { 
    _LAST_NAME_NOT_SET = 0,
    LAST_NAME = 4,
  }

  export enum EmailCase { 
    _EMAIL_NOT_SET = 0,
    EMAIL = 5,
  }

  export enum UserTypeCase { 
    _USER_TYPE_NOT_SET = 0,
    USER_TYPE = 6,
  }

  export enum MembershipCase { 
    _MEMBERSHIP_NOT_SET = 0,
    MEMBERSHIP = 7,
  }

  export enum IsEmailVerifiedCase { 
    _IS_EMAIL_VERIFIED_NOT_SET = 0,
    IS_EMAIL_VERIFIED = 8,
  }

  export enum PasswordCase { 
    _PASSWORD_NOT_SET = 0,
    PASSWORD = 9,
  }

  export enum AuthDataCase { 
    _AUTH_DATA_NOT_SET = 0,
    AUTH_DATA = 10,
  }

  export enum AuthServiceCase { 
    _AUTH_SERVICE_NOT_SET = 0,
    AUTH_SERVICE = 11,
  }

  export enum LastPasswordUpdateCase { 
    _LAST_PASSWORD_UPDATE_NOT_SET = 0,
    LAST_PASSWORD_UPDATE = 15,
  }

  export enum LastPictureUpdateCase { 
    _LAST_PICTURE_UPDATE_NOT_SET = 0,
    LAST_PICTURE_UPDATE = 16,
  }

  export enum FailedAttemptsCase { 
    _FAILED_ATTEMPTS_NOT_SET = 0,
    FAILED_ATTEMPTS = 17,
  }

  export enum LocaleCase { 
    _LOCALE_NOT_SET = 0,
    LOCALE = 18,
  }

  export enum MfaActiveCase { 
    _MFA_ACTIVE_NOT_SET = 0,
    MFA_ACTIVE = 19,
  }

  export enum MfaSecretCase { 
    _MFA_SECRET_NOT_SET = 0,
    MFA_SECRET = 20,
  }

  export enum LastActivityAtCase { 
    _LAST_ACTIVITY_AT_NOT_SET = 0,
    LAST_ACTIVITY_AT = 21,
  }

  export enum LastLoginCase { 
    _LAST_LOGIN_NOT_SET = 0,
    LAST_LOGIN = 22,
  }

  export enum CreatedAtCase { 
    _CREATED_AT_NOT_SET = 0,
    CREATED_AT = 23,
  }

  export enum UpdatedAtCase { 
    _UPDATED_AT_NOT_SET = 0,
    UPDATED_AT = 24,
  }

  export enum DeletedAtCase { 
    _DELETED_AT_NOT_SET = 0,
    DELETED_AT = 25,
  }
}

