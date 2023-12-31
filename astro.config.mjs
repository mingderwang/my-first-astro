import { defineConfig } from 'astro/config';
import vercel from "@astrojs/vercel/serverless";
import svelte from "@astrojs/svelte";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: node({
    mode: 'middleware',
  }), 
  integrations: [svelte(), tailwind(), react()]
});