import { createEffect, createSignal, onMount, ParentComponent } from "solid-js";

import { ThemeContext, ThemeContextValue } from "./theme.context";
import { isClient } from "~/helpers/runtime.helper";
import { ThemeColor, ThemePreference } from "~/types/theme";

const THEME_COLOR_LOCAL_STORAGE_KEY = "theme-color";

function getSystemThemeColor() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function setDocumentTheme(theme: ThemeColor) {
  if (theme === "dark") {
    document.documentElement.dataset.theme = "dark";
  } else {
    document.documentElement.removeAttribute("data-theme");
  }
}

export const ThemeProvider: ParentComponent = (props) => {
  const [theme, setTheme] = createSignal<ThemePreference>("light");
  const themeColor: () => ThemeColor = () => {
    if (!isClient()) return "light";
    const themeColor = theme();
    return themeColor === "system" ? getSystemThemeColor() : themeColor;
  };

  const value: ThemeContextValue = [theme, { toggleTheme, themeColor }];

  onMount(() => {
    const storedTheme = localStorage.getItem(
      THEME_COLOR_LOCAL_STORAGE_KEY,
    ) as ThemePreference | null;
    const theme = storedTheme ?? "system";
    localStorage.setItem(THEME_COLOR_LOCAL_STORAGE_KEY, theme);
    setTheme(theme);
  });

  createEffect(() => {
    setDocumentTheme(themeColor());
  });

  function toggleTheme(theme: ThemePreference) {
    localStorage.setItem(THEME_COLOR_LOCAL_STORAGE_KEY, theme);
    setTheme(theme);
  }

  return <ThemeContext.Provider value={value}>{props.children}</ThemeContext.Provider>;
};
