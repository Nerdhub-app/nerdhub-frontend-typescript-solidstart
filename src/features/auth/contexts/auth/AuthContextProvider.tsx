import { ParentComponent } from "solid-js";
import { createStore } from "solid-js/store";

import {
  AuthContext,
  authContextDefaultState,
  AuthContextState,
  AuthContextValue,
} from "./auth.context";
import authStore from "./auth.store";

export const AuthContextProvider: ParentComponent = (props) => {
  const [state] = authStore;

  const value: AuthContextValue = [
    state,
    {
      signOut,
    },
  ];

  async function signOut() {}

  return <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>;
};
