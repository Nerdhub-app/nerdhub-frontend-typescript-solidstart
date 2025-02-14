import { Component, onMount } from "solid-js";

import { animate, inView } from "motion";

import passkeysImg from "~/assets/img/passkeys.jpeg";

const LandingPagePasskeys: Component = () => {
  let imgWrapper!: HTMLDivElement;
  let imgMask!: HTMLDivElement;
  let contentWrapper!: HTMLDivElement;

  onMount(() => {
    animate(
      imgMask,
      {
        y: 0,
      },
      { duration: 0 },
    );
    inView(
      imgWrapper,
      () => {
        animate(
          imgMask,
          {
            y: "-100%",
          },
          {
            duration: 0.75,
            ease: "easeOut",
          },
        );
      },
      {
        amount: "all",
      },
    );

    animate(
      contentWrapper,
      {
        opacity: 0,
      },
      { duration: 0 },
    );
    inView(
      contentWrapper,
      () => {
        animate(
          contentWrapper,
          {
            opacity: 1,
          },
          {
            duration: 1,
            ease: "easeIn",
          },
        );
      },
      {
        amount: "all",
      },
    );
  });

  return (
    <article
      aria-labelledby="passkeys-heading"
      aria-describedby="passkeys-description"
      class="bg-paper pt-28 pb-28"
    >
      <div class="xl:grid-col container grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:grid-rows-1 xl:grid-cols-[auto_max-content]">
        <div ref={imgWrapper} class="relative overflow-clip">
          <img
            src={passkeysImg}
            alt="Passkeys authentication"
            class="mx-auto block w-full max-w-2xl rounded-2xl lg:max-w-none"
          />
          <div
            ref={imgMask}
            class="bg-paper absolute inset-0 h-full w-full"
            style={{ transform: `translateY(-100%)` }}
          ></div>
        </div>
        <div class="flex items-center lg:pl-6 xl:pl-12">
          <div ref={contentWrapper} class="mx-auto max-w-2xl lg:mr-0 lg:max-w-[32rem]">
            <h2
              id="passkeys-heading"
              class="text-clear mb-4 text-xl font-bold lg:text-2xl xl:text-[1.75rem]"
            >
              Log In Effortlessly with{" "}
              <strong class="from-primary-400 to-secondary-500 gradient-text bg-gradient-to-br font-bold">
                Passkeys
              </strong>
            </h2>
            <p id="passkeys-description" class="text-muted mb-9 xl:text-lg">
              Say goodbye to remembering complex passwords. Passkeys let you log in quickly and
              easily using your device's built-in biometrics (like fingerprint or face scan) or your
              screen lock. It's the easiest and most secure way to access your account.
            </p>
            <a
              href="#"
              class="text-clear hover:text-primary-400 inline-flex items-center gap-x-2 duration-300"
            >
              <span>Learn more about Passkeys</span>
              <svg
                role="img"
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.22353 1L8.90588 1.09412M8.90588 1.09412L9 7.77647M8.90588 1.09412L1 9"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </article>
  );
};

export default LandingPagePasskeys;
