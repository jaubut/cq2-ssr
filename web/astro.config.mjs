import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // Legacy Nuxt static/ holds every image (175 MB) — served as-is instead of copied.
  publicDir: '../static',
  integrations: [react()],
  vite: { plugins: [tailwindcss()], server: { allowedHosts: true } },
});
