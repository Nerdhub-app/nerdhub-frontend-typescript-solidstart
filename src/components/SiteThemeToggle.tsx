import { Component, For, JSXElement, onMount } from "solid-js";

import { initDropdowns, initTooltips } from "flowbite";

import { useTheme } from "~/contexts/theme";
import { ThemePreference } from "~/types/theme";

const icons: Record<ThemePreference, () => JSXElement> = {
  dark: () => (
    <>
      <svg
        data-toggle-icon="moon"
        class="h-4 w-4"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 18 20"
      >
        <path d="M17.8 13.75a1 1 0 0 0-.859-.5A7.488 7.488 0 0 1 10.52 2a1 1 0 0 0 0-.969A1.035 1.035 0 0 0 9.687.5h-.113a9.5 9.5 0 1 0 8.222 14.247 1 1 0 0 0 .004-.997Z"></path>
      </svg>
      <span class="sr-only">Dark mode</span>
    </>
  ),
  light: () => (
    <>
      <svg
        data-toggle-icon="sun"
        class="h-4 w-4"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M10 15a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0-11a1 1 0 0 0 1-1V1a1 1 0 0 0-2 0v2a1 1 0 0 0 1 1Zm0 12a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0v-2a1 1 0 0 0-1-1ZM4.343 5.757a1 1 0 0 0 1.414-1.414L4.343 2.929a1 1 0 0 0-1.414 1.414l1.414 1.414Zm11.314 8.486a1 1 0 0 0-1.414 1.414l1.414 1.414a1 1 0 0 0 1.414-1.414l-1.414-1.414ZM4 10a1 1 0 0 0-1-1H1a1 1 0 0 0 0 2h2a1 1 0 0 0 1-1Zm15-1h-2a1 1 0 1 0 0 2h2a1 1 0 0 0 0-2ZM4.343 14.243l-1.414 1.414a1 1 0 1 0 1.414 1.414l1.414-1.414a1 1 0 0 0-1.414-1.414ZM14.95 6.05a1 1 0 0 0 .707-.293l1.414-1.414a1 1 0 1 0-1.414-1.414l-1.414 1.414a1 1 0 0 0 .707 1.707Z"></path>
      </svg>
      <span class="sr-only">Light mode</span>
    </>
  ),
  system: () => (
    <>
      <svg
        viewBox="0 0 16 16"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        class="h-4 w-4"
      >
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
        <g id="SVGRepo_iconCarrier">
          <path
            d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zm0 13V2a6 6 0 1 1 0 12z"
            stroke-width="2px"
          ></path>
        </g>
      </svg>
      <span class="sr-only">System color mode</span>
    </>
  ),
};

const themes: { theme: ThemePreference; label: string; icon: () => JSXElement }[] = [
  { theme: "light", label: "Light", icon: icons.light },
  { theme: "dark", label: "Dark", icon: icons.dark },
  { theme: "system", label: "System", icon: icons.system },
];

const SiteThemeToggle: Component = () => {
  const [theme, { toggleTheme, themeColor }] = useTheme();
  const _themeColor = () => themeColor();

  const icon = () => icons[theme()]();

  onMount(() => {
    initTooltips();
    initDropdowns();
  });

  function handleChange(theme: ThemePreference) {
    toggleTheme(theme);
  }

  return (
    <>
      {/* Toggle button + tooltip */}
      <div aria-haspopup="menu" data-dropdown-toggle="theme-dropdown-menu">
        <button
          type="button"
          aria-haspopup="true"
          aria-controls="site-theme-toggle-tooltip"
          data-tooltip-target="site-theme-toggle-tooltip"
          data-tooltip-style={_themeColor()}
          data-tooltip-placement="left"
          class="focus:ring-primary-50 text-muted hover:text-clear hover:bg-highlight-strong dark:focus:ring-primary-100 flex h-10 w-10 items-center justify-center rounded-full font-medium duration-300 focus:ring-4 focus:outline-none"
        >
          {icon()}
        </button>
        <div
          id="site-theme-toggle-tooltip"
          role="tooltip"
          class="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-800 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-xs dark:bg-gray-700"
        >
          Toggle theme
          <div class="tooltip-arrow" data-popper-arrow></div>
        </div>
      </div>
      {/* Theme menu */}
      <div
        id="theme-dropdown-menu"
        class="bg-paper border-divider divide-divider z-10 hidden w-48 divide-y rounded-lg border border-solid shadow-sm"
      >
        <div class="text-clear px-4 py-3 text-sm">
          <h6 class="font-semibold">Theme color</h6>
        </div>
        <ul class="text-muted p-3 text-sm">
          <For each={themes}>
            {(data) => {
              const id = `theme-toggle-option-${data.theme}`;
              return (
                <li>
                  <div class="hover:bg-highlight flex items-center rounded-sm px-2 duration-200">
                    <input
                      id={id}
                      type="radio"
                      name="theme-toggle"
                      value={data.theme}
                      checked={data.theme === theme()}
                      class="border-divider bg-highlight text-primary-400 focus:ring-primary-200 h-4 w-4 focus:ring-2"
                      onChange={[handleChange, data.theme]}
                    />
                    <label for={id} class="text-muted ms-2 w-full py-2 text-sm font-medium">
                      <p class="flex items-center gap-x-2 pl-2">
                        <i class="text-clear">{data.icon()}</i>
                        {data.label}
                      </p>
                    </label>
                  </div>
                </li>
              );
            }}
          </For>
        </ul>
      </div>
    </>
  );
};

export default SiteThemeToggle;
