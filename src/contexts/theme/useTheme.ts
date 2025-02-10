import { useContext } from "solid-js";

import { ThemeContext } from "./theme.context";

export function useTheme() {
  return useContext(ThemeContext);
}
