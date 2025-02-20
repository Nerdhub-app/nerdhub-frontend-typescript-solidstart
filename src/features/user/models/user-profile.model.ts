import { UserProfileEntity, UserProfileModel } from "../user";
import { Nullable } from "~/types/api";

export default class UserProfile implements UserProfileModel {
  userId!: number;
  firstName!: string;
  lastName!: string;
  username!: string;
  profilePicture!: Nullable<string>;
  createdAt!: Date;
  updatedAt!: Date;

  constructor(entity: UserProfileEntity) {
    this.userId = entity.userId;
    this.firstName = entity.firstName;
    this.lastName = entity.lastName;
    this.username = entity.username;
    this.profilePicture = entity.profilePicture;
    this.createdAt = new Date(entity.createdAt);
    this.updatedAt = new Date(entity.updatedAt);
  }

  get fullName() {
    return this.firstName + " " + this.lastName;
  }
}
