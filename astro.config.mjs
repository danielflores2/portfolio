// @ts-check
import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  viewTransitions: true,
  vite: {
    plugins: [tailwindcss()],
  },
})