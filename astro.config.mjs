import { defineConfig, envField } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';
import icon from 'astro-icon';
import tailwindcss from '@tailwindcss/vite';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  adapter: cloudflare({
    mode: 'directory',
  }),
  site: 'https://liwox.net',
  output: 'server', // <-- CHANGED from "hybrid" to "server"
  // ... rest of your config ...
});