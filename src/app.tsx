import { Link, MetaProvider, Title } from "@solidjs/meta";
import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Show, Suspense } from "solid-js";

import "./app.css";
import "~/lib/flowbite/flowbite.css";

import { isDevEnv } from "./helpers/runtime.helper";
import { ThemeProvider } from "~/contexts/theme";

export default function App() {
  return (
    <Router
      root={(props) => (
        <MetaProvider>
          <Title>Nerdhub - Your Next-Gen chat app</Title>
          <Show when={!isDevEnv()}>
            <Link rel="preconnect" href="https://fonts.googleapis.com" />
            <Link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
            <Link
              href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap"
              rel="stylesheet"
            ></Link>
          </Show>
          <Suspense>
            <ThemeProvider>{props.children}</ThemeProvider>
          </Suspense>
        </MetaProvider>
      )}
    >
      <FileRoutes />
    </Router>
  );
}
