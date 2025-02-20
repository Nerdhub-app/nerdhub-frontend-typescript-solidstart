import { createContext } from "solid-js";

import { PlanEntity } from "~/features/plan/plan";
import UserProfile from "~/features/user/models/user-profile.model";
import User from "~/features/user/models/user.model";
import { UserPreferencesAttributes } from "~/features/user/user";

export type AuthContextState =
  | {
      isAuthenticated: false;
      hasLoadedTokens: boolean;
      access_token: null;
      refresh_token: null;
      user: null;
      userPreferences: null;
      profile: null;
      currentPlan: null;
    }
  | {
      isAuthenticated: true;
      hasLoadedTokens: true;
      access_token: string;
      refresh_token: string;
      user: User;
      userPreferences: UserPreferencesAttributes;
      profile: UserProfile;
      currentPlan: PlanEntity;
    };

export type AuthContextMethods = {
  signOut(): Promise<void>;
};

export type AuthContextValue = [AuthContextState, AuthContextMethods];

export const authContextDefaultState: AuthContextState = {
  isAuthenticated: false,
  hasLoadedTokens: false,
  access_token: null,
  refresh_token: null,
  user: null,
  profile: null,
  userPreferences: null,
  currentPlan: null,
};

const authContextDefaultValue: AuthContextValue = [
  authContextDefaultState,
  {
    signOut: () => Promise.resolve(),
  },
];

export const AuthContext = createContext(authContextDefaultValue);

export default AuthContext;
