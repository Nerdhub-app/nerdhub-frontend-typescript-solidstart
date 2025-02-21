import { defineConfig } from "@solidjs/start/config";

import tailwindcss from "@tailwindcss/vite";
import solidPlugin from "vite-plugin-solid";
import solidSvg from "vite-plugin-solid-svg";

export default defineConfig({
  server: {
    runtimeConfig: {
      webservicesUrl: "http://localhost:8081/api",
    },
  },
  vite: {
    plugins: [tailwindcss(), solidSvg()],
  },
});
