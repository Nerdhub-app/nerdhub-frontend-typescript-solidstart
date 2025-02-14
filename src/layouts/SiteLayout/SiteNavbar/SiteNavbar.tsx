import { A } from "@solidjs/router";
import { For, ParentComponent, createSignal, lazy, onMount } from "solid-js";

import { initTooltips } from "flowbite";

import "./SiteNavbar.css";

import SiteLogo from "~/components/SiteLogo";
import SiteThemeToggle from "~/components/SiteThemeToggle";
import { useSidebar } from "~/contexts/sidebar";
import { useTheme } from "~/contexts/theme";

const SiteSidebar = lazy(() => import("./SiteSidebar"));

const links: Record<"href" | "label", string>[] = [
  { href: "/about", label: "About" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy-policy", label: "Privacy policy" },
];

export const SiteNavbar: ParentComponent = () => {
  const [, { toggleSidebar }] = useSidebar();

  const [, { themeColor }] = useTheme();

  const [isTransparent, setTransparent] = createSignal(false);
  let navbar!: HTMLElement;

  // Initialize Flowbite
  onMount(() => {
    initTooltips();
  });

  // (Navbar background transition based on scroll and resize observer) setup
  onMount(() => {
    let navbarHeight = navbar.getBoundingClientRect().height;

    function updateNavbarBackground() {
      if (window.scrollY > navbarHeight) {
        isTransparent() && setTransparent(false);
      } else {
        !isTransparent() && setTransparent(true);
      }
    }

    updateNavbarBackground();
    window.addEventListener("scroll", updateNavbarBackground);

    new ResizeObserver((entries) => {
      for (const elt of entries) {
        navbarHeight = elt.borderBoxSize[0].blockSize;
      }
    }).observe(navbar);
  });

  function handleHambugerClick() {
    toggleSidebar();
  }

  return (
    <header
      ref={navbar}
      class="sticky top-0 left-0 z-20 border-b border-solid duration-500"
      classList={{
        "bg-paper border-divider": !isTransparent(),
        "bg-paper/0 border-transparent": isTransparent(),
      }}
    >
      <div class="container flex h-(--app-navbar-height) items-center justify-between">
        <div class="flex items-center gap-x-10">
          <div class="flex items-center gap-x-5">
            {/* Hamburger toggle button */}
            <button
              type="button"
              aria-haspopup="true"
              aria-controls="#"
              title="Navigation bar"
              class="text-muted-ligh bg-highlight hover:bg-highlight-strong focus:ring-primary-50 dark:focus:ring-primary-100 text-muted-light hover:text-muted border-divider inline-flex h-10 w-10 items-center justify-center rounded-sm border border-solid p-2 text-sm outline-0 duration-300 focus:ring-4 lg:hidden"
              onClick={handleHambugerClick}
            >
              <span class="sr-only">Open navigation bar</span>
              <svg
                class="h-5 w-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
            {/* Logo */}
            <A
              href="/"
              class="absolute left-1/2 inline-block -translate-x-1/2 md:static md:translate-x-0"
            >
              <SiteLogo width={133} theme={themeColor()} />
            </A>
          </div>
          {/* Navigation links */}
          <nav aria-label="Navigation links" class="hidden lg:block">
            <ul class="m-0 flex list-none gap-x-6 p-0">
              <For each={links}>
                {(link) => (
                  <li class="m-0 p-0">
                    <A
                      href={link.href}
                      class="text-base duration-300"
                      inactiveClass="text-muted hover:text-clear"
                      activeClass="text-clear"
                    >
                      {link.label}
                    </A>
                  </li>
                )}
              </For>
            </ul>
          </nav>
        </div>
        <div class="flex items-center">
          {/* Theme toggle */}
          <SiteThemeToggle />
          {/* Divider */}
          <div class="bg-divider mr-5 ml-3 hidden h-[1.75rem] w-[1px] md:block"></div>
          {/* Authentication links */}
          <nav aria-label="Authentication links" class="hidden items-center gap-x-4 md:flex">
            <A
              href="/auth/login"
              class="text-base duration-300"
              inactiveClass="text-muted hover:text-clear"
              activeClass="text-clear"
            >
              Sign in
            </A>
            <A
              href="/auth/signup"
              class="bg-primary-400 hover:bg-primary-500 focus:ring-primary-100 dark:focus:ring-primary-100 rounded-lg px-5 py-2.5 text-base font-medium text-white duration-300 focus:ring-4 focus:outline-none"
            >
              Get started
            </A>
          </nav>
        </div>
        {/* Sidebar */}
        <SiteSidebar />
      </div>
    </header>
  );
};
