// @ts-check
import { defineConfig } from "astro/config";

import svelte from "@astrojs/svelte";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  devToolbar: { enabled: false },
  integrations: [svelte()],

  vite: {
    plugins: [tailwindcss()],
  },
});
