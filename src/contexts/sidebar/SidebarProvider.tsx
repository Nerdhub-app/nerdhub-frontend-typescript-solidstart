import { ParentComponent } from "solid-js";
import { createStore } from "solid-js/store";

import { SidebarContext, SidebarContextState, SidebarContextValue } from "./sidebar.context";

export const SidebarProvider: ParentComponent = (props) => {
  const [state, setState] = createStore<SidebarContextState>({
    isOpen: false,
  });

  const value: SidebarContextValue = [
    state,
    {
      toggleSidebar(open) {
        if (typeof open === "undefined") {
          setState("isOpen", (isOpen) => !isOpen);
          return;
        }
        setState("isOpen", open);
      },
    },
  ];

  return <SidebarContext.Provider value={value}>{props.children}</SidebarContext.Provider>;
};
