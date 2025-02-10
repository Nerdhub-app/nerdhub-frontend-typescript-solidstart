import { MetaProvider, Title } from "@solidjs/meta";
import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";

import "./app.css";

import { ThemeProvider } from "~/contexts/theme";

export default function App() {
  return (
    <Router
      root={(props) => (
        <MetaProvider>
          <Title>Nerdhub - Your Next-Gen chat app</Title>
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
