import { A } from "@solidjs/router";
import { Component, For } from "solid-js";

import Overlay from "~/components/ui/Overlay";
import { useSidebar } from "~/contexts/sidebar";

const mainLinks: Record<"href" | "label", string>[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy-policy", label: "Privacy policy" },
];

const authLinks: Record<"href" | "label", string>[] = [
  { href: "/auth/login", label: "Sign in" },
  { href: "/auth/signup", label: "Sign up" },
];

const SiteSidebar: Component = () => {
  const [sidebarState, { toggleSidebar }] = useSidebar();

  function closeSidebar() {
    toggleSidebar(false);
  }

  return (
    <>
      {/* Wrapper */}
      <section
        aria-labelledby="site-sidebar-title"
        class="bg-paper format dark:format-invert format-a border-divider solid fixed top-0 left-0 z-20 h-screen w-72 border border-r py-4 duration-500 lg:hidden"
        classList={{
          "translate-x-0 opacity-full": sidebarState.isOpen,
          "-translate-x-full opacity-0": !sidebarState.isOpen,
        }}
      >
        <h3 id="site-sidebar-title" class="mb-4 px-4">
          Navigation menu
        </h3>
        <div class="divide-divider space-y-3 divide-y">
          <nav aria-label="Site navigation" class="pb-3">
            <ul class="m-0 list-none p-0">
              <For each={mainLinks}>
                {(link) => (
                  <li class="m-0 px-2">
                    <A
                      href={link.href}
                      class="block rounded-sm px-4 py-3 text-base font-semibold no-underline duration-300"
                      inactiveClass="text-muted hover:bg-highlight"
                      activeClass="bg-highlight-strong hover:bg-highlight-strong text-clear"
                    >
                      {link.label}
                    </A>
                  </li>
                )}
              </For>
            </ul>
          </nav>
          <nav aria-label="Authentication navigation">
            <ul class="m-0 list-none p-0">
              <For each={authLinks}>
                {(link) => (
                  <li class="m-0 px-2">
                    <A
                      href={link.href}
                      class="block rounded-sm px-4 py-3 text-base font-semibold no-underline duration-300"
                      inactiveClass="text-muted hover:bg-highlight"
                      activeClass="bg-highlight-strong hover:bg-highlight-strong text-clear"
                    >
                      {link.label}
                    </A>
                  </li>
                )}
              </For>
            </ul>
          </nav>
        </div>
      </section>
      {/* Overlay */}
      <Overlay
        show={sidebarState.isOpen}
        classList={{ "lg:hidden": true }}
        onClick={closeSidebar}
      />
    </>
  );
};

export default SiteSidebar;
