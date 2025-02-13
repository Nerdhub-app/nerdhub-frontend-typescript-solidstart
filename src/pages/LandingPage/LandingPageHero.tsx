import { A } from "@solidjs/router";

import styles from "./LandingPageHero.module.css";

import LandingPageChatAppSVG from "./LandingPageChatAppSVG";

const LandingPageHero = () => {
  return (
    <section aria-labelledby="hero-heading" aria-describedby="hero-description" class="relative">
      <div class="lg:max-h- relative z-[2] container mx-auto flex h-full flex-col-reverse items-center justify-end px-5 lg:max-h-[35rem] lg:flex-row lg:justify-between">
        {/* Content */}
        <div class="pb-6 text-center lg:w-full lg:pb-0 lg:text-left">
          <h1
            id="hero-heading"
            class="text-clear mb-3 max-w-[22rem] text-4xl leading-[1.25] font-bold md:mb-5 md:max-w-[29.5rem] md:text-5xl xl:text-[3.25rem]"
          >
            Your{" "}
            <strong class="from-primary-400 to-secondary-500 gradient-text bg-gradient-to-br font-bold">
              Next-Gen
            </strong>{" "}
            Chat Experience
          </h1>
          <p id="hero-description" class="text-muted mb-6 md:mb-8 lg:text-lg">
            Secure, Private, and Global Conversations
          </p>
          <div class="flex justify-center gap-x-3 lg:justify-start">
            <A
              href="/auth/signup"
              class="bg-primary-400 hover:bg-primary-500 focus:ring-primary-100 rounded-lg px-5 py-2.5 text-base font-medium text-white duration-300 focus:ring-4 focus:outline-none"
            >
              Join for free
            </A>
            <A
              href="/contact"
              class="bg-primary hover:bg-highlight focus:ring-highlight-strong text-clear border-divider rounded-lg border border-solid px-5 py-2.5 text-base font-medium duration-300 focus:ring-4 focus:outline-none"
            >
              Contact us
            </A>
          </div>
        </div>
        {/* Illustration */}
        <div class="lg:w-full">
          <div class="mx-auto w-9/10 max-w-96 py-6 md:max-w-md lg:max-w-lg">
            <LandingPageChatAppSVG />
          </div>
        </div>
      </div>
      {/* Radial gradient background */}
      <div class="absolute bottom-0 left-0 z-[1] w-full" classList={{ [styles.background]: true }}>
        <div class={styles.spotlight}></div>
      </div>
    </section>
  );
};

export default LandingPageHero;
