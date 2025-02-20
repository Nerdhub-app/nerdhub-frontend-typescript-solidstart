import { ParentComponent } from "solid-js";
import { createStore } from "solid-js/store";

import {
  AuthContext,
  authContextDefaultState,
  AuthContextState,
  AuthContextValue,
} from "./auth.context";

export const AuthContextProvider: ParentComponent = (props) => {
  const [state] = createStore<AuthContextState>(authContextDefaultState);

  const value: AuthContextValue = [
    state,
    {
      signOut,
    },
  ];

  async function signOut() {}

  return <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>;
};
