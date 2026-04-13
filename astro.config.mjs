import { defineConfig, envField } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';
import icon from 'astro-icon';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // ✅ CRITICAL: Required for Cloudflare Pages
  output: 'static',

  // 🌐 Site URL (you can update later to https://liwox.net)
  site: process.env.SITE_URL || 'https://liwox.net',

  // 🔐 Environment Variables Schema
  env: {
    schema: {
      SITE_URL: envField.string({ context: 'server', access: 'public', optional: true }),
      PUBLIC_GA_MEASUREMENT_ID: envField.string({ context: 'client', access: 'public', optional: true }),
      PUBLIC_GTM_ID: envField.string({ context: 'client', access: 'public', optional: true }),
      RESEND_API_KEY: envField.string({ context: 'server', access: 'secret', optional: true }),
      RESEND_FROM_EMAIL: envField.string({ context: 'server', access: 'secret', optional: true }),
      NEWSLETTER_API_KEY: envField.string({ context: 'server', access: 'secret', optional: true }),
      GOOGLE_SITE_VERIFICATION: envField.string({ context: 'server', access: 'public', optional: true }),
      BING_SITE_VERIFICATION: envField.string({ context: 'server', access: 'public', optional: true }),
      PUBLIC_GOOGLE_MAPS_API_KEY: envField.string({
        context: 'client',
        access: 'public',
        optional: true,
        default: '',
      }),
      PUBLIC_CONSENT_ENABLED: envField.boolean({
        context: 'client',
        access: 'public',
        optional: true,
        default: false,
      }),
      PUBLIC_PRIVACY_POLICY_URL: envField.string({
        context: 'client',
        access: 'public',
        optional: true,
        default: '',
      }),
    },
  },

  // 🖼️ Image handling
  image: {
    layout: 'constrained',
  },

  // 🔌 Integrations
  integrations: [
    react(),
    mdx(),
    sitemap(),
    icon(),
  ],

  // ⚡ Vite config (Tailwind)
  vite: {
    plugins: [tailwindcss()],
  },

  // 🔒 Security
  security: {
    checkOrigin: true,
  },

  // ✍️ Markdown rendering
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      wrap: true,
    },
  },
});