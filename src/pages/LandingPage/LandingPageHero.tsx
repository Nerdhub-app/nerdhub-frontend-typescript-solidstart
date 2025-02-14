import { A } from "@solidjs/router";
import { onMount } from "solid-js";

import { animate, stagger } from "motion";
import SplitType from "split-type";

import styles from "./LandingPageHero.module.css";

import LandingPageChatAppSVG from "./LandingPageChatAppSVG";

const LandingPageHero = () => {
  let descriptionParagraph!: HTMLParagraphElement;
  let joinUsLink!: HTMLAnchorElement;
  let contactUsLink!: HTMLAnchorElement;
  let spotlightDiv!: HTMLDivElement;
  let illustrationWrapper!: HTMLDivElement;

  onMount(() => {
    const headingWords = [...document.querySelectorAll(`#hero-heading .${styles.headingLine} *`)];
    const descriptionSplitType = new SplitType(descriptionParagraph, {
      types: ["chars"],
    });
    const links = [joinUsLink, contactUsLink];

    animate([
      [
        headingWords,
        {
          y: ["3.5rem", 0],
        },
        {
          duration: 0.5,
          delay: stagger(0.1),
        },
      ],
      [
        descriptionSplitType.chars as HTMLElement[],
        {
          opacity: [0, 1],
          scale: [1.5, 1],
        },
        {
          type: "spring",
          bounce: 0.56,
          duration: 0.2,
          delay: stagger(0.025),
        },
      ],
      [
        links,
        {
          opacity: [0, 1],
          y: ["100%", 0],
        },
        {
          duration: 0.25,
          ease: "easeOut",
          delay: stagger(0.1),
        },
      ],
      [
        illustrationWrapper,
        {
          x: ["25%", 0],
          opacity: [0, 1],
        },
        {
          duration: 1,
          delay: 0.5,
          ease: "easeOut",
        },
      ],
      [
        spotlightDiv,
        {
          transform: [
            "translateX(-50%) translateY(-50%) rotateZ(25deg) scale(0)",
            "translateX(-50%) translateY(-50%) rotateZ(25deg) scale(1)",
          ],
        },
        {
          duration: 2,
          ease: "easeOut",
          delay: 0.75,
        },
      ],
    ]);
  });

  return (
    <section
      aria-labelledby="hero-heading"
      aria-describedby="hero-description"
      class="relative overflow-x-clip"
    >
      <div class="lg:max-h- relative z-[2] container mx-auto flex h-full flex-col-reverse items-center justify-end px-5 lg:max-h-[35rem] lg:flex-row lg:justify-between">
        {/* Content */}
        <div class="pb-16 text-center md:pb-18 lg:w-full lg:pb-0 lg:text-left">
          <h1
            id="hero-heading"
            class="text-clear mb-3 max-w-[22rem] text-4xl leading-[1.25] font-bold md:mb-5 md:max-w-[29.5rem] md:text-5xl xl:text-[3.25rem]"
          >
            <div class={styles.headingLine}>
              <span class={styles.headingWord}>Your</span>{" "}
              <strong
                class="from-primary-400 to-secondary-500 gradient-text bg-gradient-to-br font-bold"
                classList={{
                  [styles.headingWord]: true,
                }}
              >
                Next-Gen
              </strong>{" "}
            </div>
            <div class={styles.headingLine}>
              <span class={styles.headingWord}>Chat</span>{" "}
              <span class={styles.headingWord}>Experience</span>
            </div>
          </h1>
          <p
            ref={descriptionParagraph}
            id="hero-description"
            class="text-muted mb-6 md:mb-8 lg:text-lg"
          >
            Secure, Private, and Global Conversations
          </p>
          <div class="flex justify-center gap-x-3 lg:justify-start">
            <A
              ref={joinUsLink}
              href="/auth/signup"
              class="bg-primary-400 hover:bg-primary-500 focus:ring-primary-100 rounded-lg px-5 py-2.5 text-base font-medium text-white duration-300 focus:ring-4 focus:outline-none"
            >
              Join for free
            </A>
            <A
              ref={contactUsLink}
              href="/contact"
              class="bg-primary hover:bg-highlight focus:ring-highlight-strong text-clear border-divider rounded-lg border border-solid px-5 py-2.5 text-base font-medium duration-300 focus:ring-4 focus:outline-none"
            >
              Contact us
            </A>
          </div>
        </div>
        {/* Illustration */}
        <div class="lg:w-full">
          <div
            ref={illustrationWrapper}
            class="mx-auto w-9/10 max-w-96 py-6 md:max-w-md lg:max-w-lg"
          >
            <LandingPageChatAppSVG />
          </div>
        </div>
      </div>
      {/* Radial gradient background */}
      <div class="absolute bottom-0 left-0 z-[1] w-full" classList={{ [styles.background]: true }}>
        <div ref={spotlightDiv} class={styles.spotlight}></div>
      </div>
    </section>
  );
};

export default LandingPageHero;
