import { Component, For, onMount } from "solid-js";
import { DOMElement } from "solid-js/jsx-runtime";

import { initAccordions } from "flowbite";

const faqs: Record<"id" | "question" | "response", string>[] = [
  {
    id: "credit-card",
    question: "Are credit card information required during signup for the free plan?",
    response:
      "No, we do not require you to provide credit card information when signing up for the plan. However, you do need to provide those when opting in for the plans that require a monthly subscription fee.",
  },
  {
    id: "free-plan-validity",
    question: "How long am I allowed to use the free plan?",
    response:
      "You can use the free plan for a lifetime. However, in that plan, restrictions are applied to some features such as the usable daily credits, the messages retention period, and the Secure Storage.",
  },
  {
    id: "optional-e2ee",
    question: "Is the end-to-end encryption of messages optional?",
    response:
      "No, end-to-end encryption (e2ee) is applied for all messages and you cannot opt out of e2ee. We decided to enforce that behavior so that you can rest assured that the messages can be only read at the sender’s end and at the recipients’ ends.",
  },
  {
    id: "missing-message-ss",
    question: "Can I miss some messages when Secure Storage is disabled?",
    response:
      "Yes, when you log in to a new device while Secure Storage is disabled, you do miss all of your previous messages prior to that login on that new device, and your messages history on that device starts with only the messages that will be exchanged from then on.",
  },
  {
    id: "opt-out-passkeys",
    question: "Can I opt out of Passkeys authentication?",
    response:
      "Yes, you can fallback to other common means of authentication such as password credentials, or OAuth social authentications as you please. We included Passkeys authentication because we want to embrace the latest standards of online authentication.",
  },
];

const LandingPageFAQ: Component = () => {
  onMount(() => {
    initAccordions();
  });

  function handleHeadingEnterKeyPress(
    e: KeyboardEvent & {
      currentTarget: HTMLDivElement;
      target: DOMElement;
    },
  ) {
    if (e.key === "Enter" || e.code === "Enter" || e.key === "Space" || e.code === "Space") {
      e.preventDefault();
      (e.target as HTMLDivElement).click();
    }
  }

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      class="from-primary-400 to-secondary-700 bg-linear-to-br pt-20 pb-24"
    >
      <div class="container">
        <div class="mx-auto max-w-[40rem]">
          <h2
            id="faq-heading"
            class="mb-8 text-center text-xl font-bold text-white md:mb-10 md:text-2xl lg:mb-12 lg:text-3xl xl:text-[2rem]"
          >
            Fequently Asked Questions
          </h2>
          <div data-accordion="open" class="w-full space-y-4">
            <For each={faqs}>
              {(faq, i) => {
                const headingId = `faq-${faq.id}-heading`;
                const responseId = `faq-${faq.id}-response`;
                const isDefaultOpen = i() === 0;
                return (
                  <article aria-labelledby={headingId} class="bg-paper overflow-hidden rounded-lg">
                    <div
                      role="button"
                      tabIndex={0}
                      aria-expanded={isDefaultOpen}
                      aria-controls={responseId}
                      data-accordion-target={`#${responseId}`}
                      class="rounded-lg"
                      onKeyDown={handleHeadingEnterKeyPress}
                    >
                      <h3
                        id={headingId}
                        class="hover:bg-highlight font-roboto text-clear bg-paper flex cursor-pointer justify-between gap-x-2 rounded-b-lg p-4 text-base font-semibold duration-300"
                      >
                        <span>{faq.question}</span>
                        <svg
                          data-accordion-icon
                          class="mt-1 h-3 w-3 shrink-0 rotate-180"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 10 6"
                        >
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M9 5 5 1 1 5"
                          />
                        </svg>
                      </h3>
                    </div>
                    <p
                      id={responseId}
                      class="text-muted px-4 pb-4"
                      classList={{ hidden: !isDefaultOpen }}
                    >
                      {faq.response}
                    </p>
                  </article>
                );
              }}
            </For>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingPageFAQ;
