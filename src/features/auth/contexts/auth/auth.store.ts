import { createStore } from "solid-js/store";

import { authContextDefaultState, AuthContextState } from "./auth.context";

const authStore = createStore<AuthContextState>(authContextDefaultState);

export default authStore;
