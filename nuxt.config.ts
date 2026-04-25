import { defineNuxtConfig } from "nuxt/config";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  vite: {
    optimizeDeps: {
      include: ['lucide-vue-next']
    }
  },
  app: {
    head: {
      title: 'Trofy - Ultimate Sports Tournament Management',
      meta: [
        { name: 'description', content: 'Organize, track, and manage sports leagues and tournaments with Trofy. The premium platform for competitive sports.' }
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }
      ]
    }
  }
})
