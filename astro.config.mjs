// @ts-check
import { defineConfig } from 'astro/config';

import mdx from '@astrojs/mdx';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://iamsajib.me',
  integrations: [mdx()],
  markdown: {
    shikiConfig: {
      theme: 'min-light'
    }
  },

  vite: {
    plugins: [tailwindcss()]
  }
});