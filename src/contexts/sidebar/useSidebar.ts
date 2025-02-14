import { useContext } from "solid-js";

import { SidebarContext } from "./sidebar.context";

export function useSidebar() {
  return useContext(SidebarContext);
}
