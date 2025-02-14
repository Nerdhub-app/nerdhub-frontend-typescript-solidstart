import { ParentComponent } from "solid-js";

import SiteFooter from "./SiteFooter";
import SiteNavbar from "./SiteNavbar";
import { SidebarProvider } from "~/contexts/sidebar";

/**
 * !IMPORTANT: This component is to imported per page in the top-level routes
 */

export const SiteLayout: ParentComponent = (props) => {
  return (
    <SidebarProvider>
      <SiteNavbar />
      {props.children}
      <SiteFooter />
    </SidebarProvider>
  );
};
