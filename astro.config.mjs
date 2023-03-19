import { defineConfig } from 'astro/config';

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  server: {
    host: true
  },
  integrations: [tailwind()],
  site: 'https://otakuryo.github.io',
  base: '/astro-birthday/'
});