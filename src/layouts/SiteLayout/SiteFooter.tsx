import { A } from "@solidjs/router";
import { Component } from "solid-js";

import SiteLogo from "~/components/SiteLogo";

const SiteFooter: Component = () => {
  return (
    <footer class="bg-[#000410]">
      <div class="container flex flex-col items-stretch justify-between gap-y-8 py-14 md:flex-row">
        <div class="md: flex flex-col items-center justify-between gap-y-4 md:items-start">
          <a href="/">
            <SiteLogo theme="dark" width={124} />
          </a>
          <p class="text-gray-400">© Nerdhub - All rights reserved</p>
        </div>
        <nav aria-label="Site navigation" class="flex flex-col gap-x-10 gap-y-3 md:flex-row">
          <ul class="m-0 list-none space-y-3 p-0 text-center md:text-left">
            <li>
              <A href="/" class="hover:text-primary-300 text-gray-300 duration-300">
                Home
              </A>
            </li>
            <li>
              <A href="/about" class="hover:text-primary-300 text-gray-300 duration-300">
                About
              </A>
            </li>
            <li>
              <A href="/pricing" class="hover:text-primary-300 text-gray-300 duration-300">
                Pricing
              </A>
            </li>
          </ul>
          <ul class="m-0 list-none space-y-3 p-0 text-center md:text-left">
            <li>
              <A href="/contact" class="hover:text-primary-300 text-gray-300 duration-300">
                Contact us
              </A>
            </li>
            <li>
              <A href="/privacy-policy" class="hover:text-primary-300 text-gray-300 duration-300">
                Privacy policy
              </A>
            </li>
            <li>
              <A href="/#faq" class="hover:text-primary-300 text-gray-300 duration-300">
                FAQs
              </A>
            </li>
          </ul>
        </nav>
        <nav aria-labelledby="External links">
          <ul class="m-0 list-none space-y-3 p-0 text-center md:text-right">
            <li>
              <a
                href="https://www.techtarget.com/searchsecurity/definition/end-to-end-encryption-E2EE"
                target="_blank"
                class="text-gray-300 duration-300 hover:text-white hover:underline"
              >
                End-to-End encryption
              </a>
            </li>
            <li>
              <a
                href="https://signal.org/docs/"
                target="_blank"
                class="text-gray-300 duration-300 hover:text-white hover:underline"
              >
                Signal protocol
              </a>
            </li>
            <li>
              <a
                href="https://fidoalliance.org/"
                target="_blank"
                class="text-gray-300 duration-300 hover:text-white hover:underline"
              >
                FIDO alliance
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default SiteFooter;
