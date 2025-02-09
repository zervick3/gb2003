// @ts-check
import { defineConfig } from 'astro/config';
// @ts-ignore
import vercel from '@astrojs/vercel/server';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: vercel(),
  vite: {
    plugins: [tailwindcss()],

  }

});