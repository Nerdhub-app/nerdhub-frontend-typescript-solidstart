import { createContext } from "solid-js";

export type SidebarContextState = {
  isOpen: boolean;
};

export type SidebarContextActions = {
  toggleSidebar: (open?: boolean) => void;
};

export type SidebarContextValue = [SidebarContextState, SidebarContextActions];

const sidebarContextDefaultValue: SidebarContextValue = [
  {
    isOpen: false,
  },
  {
    toggleSidebar: () => {},
  },
];

export const SidebarContext = createContext(sidebarContextDefaultValue);
