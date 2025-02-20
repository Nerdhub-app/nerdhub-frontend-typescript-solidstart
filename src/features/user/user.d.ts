import { UserRole } from "./user.constants";
import { Entity, EntityWithTimestamps, ModelWithTimestamps, Nullable } from "~/types/api";

export type OAuthProvider = "google" | "github" | "linkedin";

export type OAuthData = {
  provider: OAuthProvider;
  accountId: string | number;
};

export interface UserAttributes {
  email: string;
  pwdLastChangedAt: Nullable<string>;
  oauth: Nullable<OAuthData>;
  role: UserRole;
}

export type UserEntity = Entity<UserAttributes>;

export type UserModel = ModelWithTimestamps<
  Omit<UserAttributes, "pwdLastChangedAt"> & {
    pwdLastChangedAt: Nullable<Date>;
  }
>;

export type UserDarkModePreference = "ON" | "OFF" | "SYSTEM";

export type UserPreferencesAttributes = {
  userId: number;
  showActive: boolean;
  enableNotifSounds: boolean;
  darkMode: UserDarkModePreference;
  msgTranslationLocale: string;
};

export type UserPreferencesEntity = EntityWithTimestamps<UserPreferencesAttributes>;

export type UserProfileAttributes = {
  userId: number;
  firstName: string;
  lastName: string;
  username: string;
  profilePicture: Nullable<string>;
};

export type UserProfileEntity = EntityWithTimestamps<UserProfileAttributes>;

export type UserProfileModel = ModelWithTimestamps<UserProfileAttributes & { fullName: string }>;
