import { defineNuxtConfig } from "nuxt/config";
import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/image', '@nuxt/icon'],
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [
      tailwindcss()
    ],
    optimizeDeps: {
      include: ['lucide-vue-next']
    }
  },
  app: {
    head: {
      title: 'Trofi - Ultimate Sports Tournament Management',
      meta: [
        { name: 'description', content: 'Organize, track, and manage sports leagues and tournaments with Trofi. The premium platform for competitive sports.' }
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }
      ]
    }
  }
})
