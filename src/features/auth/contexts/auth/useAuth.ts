import { useContext } from "solid-js";

import { AuthContext } from "./auth.context";

export function useAuth() {
  return useContext(AuthContext);
}
