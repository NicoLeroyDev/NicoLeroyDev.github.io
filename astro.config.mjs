// @ts-check
import { defineConfig } from 'astro/config';
import alpinejs from '@astrojs/alpinejs';
import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';
import vue from '@astrojs/vue';

// https://astro.build/config
export default defineConfig({
  site: 'https://nicoleroydev.github.io',
  vite: {
    plugins: [
        tailwindcss(),
    ],
    resolve: {
      alias: {
        '@': '/src',
        '@assets': '/src/assets',
        '@components': '/src/components',
        '@composable': '/src/composable',
        '@i18n': '/src/i18n',
        '@js': '/src/js',
        '@layouts': '/src/layouts',
        '@pages': '/src/pages',
        '@styles': '/src/styles',
        '@types': '/src/types'
      }
    }
  },
  integrations: [
    alpinejs(),
    mdx(),
    vue()
  ],
});