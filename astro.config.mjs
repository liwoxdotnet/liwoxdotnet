import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';
import icon from 'astro-icon';
import tailwindcss from '@tailwindcss/vite';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  adapter: cloudflare(),

  site: 'https://liwox.net',

  integrations: [
    react(),
    mdx(),
    sitemap(),
    icon(),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});