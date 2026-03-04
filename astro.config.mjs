// @ts-check
import { defineConfig } from 'astro/config';
import alpinejs from '@astrojs/alpinejs';
import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';
import vue from '@astrojs/vue';

// https://astro.build/config
export default defineConfig({
  site: 'https://nicoleroydev.github.io',
  redirects: {
    '/': '/fr/',
  },
  vite: {
    plugins: [
        tailwindcss(),
    ],
    resolve: {
      alias: {
        '@': new URL('./src', import.meta.url).pathname,
        '@assets': new URL('./src/assets', import.meta.url).pathname,
        '@components': new URL('./src/components', import.meta.url).pathname,
        '@composable': new URL('./src/composable', import.meta.url).pathname,
        '@content': new URL('./src/content', import.meta.url).pathname,
        '@i18n': new URL('./src/i18n', import.meta.url).pathname,
        '@js': new URL('./src/js', import.meta.url).pathname,
        '@layouts': new URL('./src/layouts', import.meta.url).pathname,
        '@pages': new URL('./src/pages', import.meta.url).pathname,
        '@styles': new URL('./src/styles', import.meta.url).pathname,
        '@types': new URL('./src/types', import.meta.url).pathname,
        '@utils': new URL('./src/utils', import.meta.url).pathname
      }
    }
  },
  integrations: [
    alpinejs(),
    mdx(),
    vue()
  ],
});