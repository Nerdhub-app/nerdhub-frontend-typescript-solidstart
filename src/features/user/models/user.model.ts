import { OAuthData, UserEntity, UserModel } from "../user";
import { UserRole } from "../user.constants";
import { Nullable } from "~/types/api";

export default class User implements UserModel {
  id!: number;
  email!: string;
  pwdLastChangedAt!: Nullable<Date>;
  oauth!: Nullable<OAuthData>;
  role!: UserRole;
  createdAt!: Date;
  updatedAt!: Date;

  constructor(entity: UserEntity) {
    this.id = entity.id;
    this.email = entity.email;
    if (entity.pwdLastChangedAt) {
      this.pwdLastChangedAt = new Date(entity.pwdLastChangedAt);
    }
    if (entity.oauth) {
      this.oauth = entity.oauth;
    }
    this.role = entity.role;
    this.createdAt = new Date(this.createdAt);
    this.updatedAt = new Date(this.updatedAt);
  }
}
