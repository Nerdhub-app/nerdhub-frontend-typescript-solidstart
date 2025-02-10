import { createContext, Accessor } from "solid-js";

import { ThemeColor, ThemePreference } from "~/types/theme";

export type ThemeContextState = Accessor<ThemePreference>;

export type ThemeContextMethods = {
  themeColor: Accessor<ThemeColor>;
  toggleTheme(theme: ThemePreference): void;
};

export type ThemeContextValue = [ThemeContextState, ThemeContextMethods];

const themeContextDefaultValue: ThemeContextValue = [
  () => "light",
  {
    themeColor: () => "light",
    toggleTheme: () => {},
  },
];

export const ThemeContext = createContext(themeContextDefaultValue);
