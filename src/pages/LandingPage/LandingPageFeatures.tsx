import { onMount } from "solid-js";
import { Component, JSXElement, For } from "solid-js";

import { animate, inView } from "motion";

import GlobeSVG from "~/assets/svg/globe.svg?component-solid";
import ShieldSVG from "~/assets/svg/key-shield.svg?component-solid";
import VoiceModeSVG from "~/assets/svg/voice-mode.svg?component-solid";

const features: { id: string; title: string; description: string; icon: () => JSXElement }[] = [
  {
    id: "feature-unbreakable-policy",
    title: "Unbreakable Privacy",
    description:
      "End-to-end encryption keeps your conversations private – only you and your recipient can read them.",
    icon: () => <ShieldSVG />,
  },
  {
    id: "feature-speak-any-language",
    title: "Speak Any Language",
    description:
      "Break down language barriers with real-time message translation – no more switching apps.",
    icon: () => <GlobeSVG />,
  },
  {
    id: "feature-voice-mode",
    title: "Effortless Voice Conversations",
    description:
      "Voice mode enables hands-free communication with text-to-speech and voice transcription.",
    icon: () => <VoiceModeSVG />,
  },
];

const LandingPageFeatures: Component = () => {
  let containerElt!: HTMLDivElement;
  const articlesEltsMap = new Map<string, HTMLElement>();

  onMount(() => {
    for (const elt of articlesEltsMap.values()) {
      animate(
        elt,
        {
          y: "50%",
          opacity: 0,
        },
        {
          duration: 0,
        },
      );
      inView(
        elt,
        (elt) => {
          animate(
            elt,
            {
              y: 0,
              opacity: 1,
            },
            {
              duration: 0.5,
              ease: "easeOut",
            },
          );
        },
        {
          amount: "all",
        },
      );
    }
  });

  return (
    <section
      aria-labelledby="features-heading"
      aria-describedby="features-description"
      class="bg-surface"
    >
      <div class="container pt-20 pb-24">
        <h2
          id="features-heading"
          class="text-clear mb-4 text-center text-2xl font-bold md:text-[1.75rem] lg:text-3xl xl:text-[2rem]"
        >
          Reimagine online communications
        </h2>
        <p class="features-description text-muted mb-9 text-center lg:mb-11 lg:text-lg">
          Experience the future of messaging
        </p>
        <div
          ref={containerElt}
          class="flex flex-col items-center gap-x-5 gap-y-6 lg:flex-row lg:items-stretch"
        >
          <For each={features}>
            {(feature) => {
              const headingId = `${feature.id}-heading`;
              const descriptionId = `${feature.id}-description`;
              return (
                <article
                  ref={(elt) => articlesEltsMap.set(feature.id, elt)}
                  aria-labelledby={headingId}
                  aria-describedby={descriptionId}
                  class="bg-paper border-divider max-w-xl rounded-lg border border-solid px-4 py-4 xl:py-3"
                >
                  <div class="flex flex-col gap-x-3 sm:flex-row lg:flex-col xl:flex-row">
                    <div class="mb-4 w-[3.75rem]">{feature.icon()}</div>
                    <div>
                      <h3 id={headingId} class="text-clear mb-1 text-lg font-bold">
                        {feature.title}
                      </h3>
                      <p id={descriptionId} class="text-muted">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </article>
              );
            }}
          </For>
        </div>
      </div>
    </section>
  );
};

export default LandingPageFeatures;
