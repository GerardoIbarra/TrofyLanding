import { defineNuxtConfig } from "nuxt/config";
import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxt/icon',
    '@nuxt/image',
    '@vueuse/nuxt',
    '@nuxtjs/i18n',
    '@vercel/analytics/nuxt',
    '@vercel/speed-insights/nuxt',
    '@vite-pwa/nuxt'
  ],
  pwa: {
    registerType: 'prompt',
    manifest: {
      name: 'Trofi - Ultimate Sports Tournament Management',
      short_name: 'Trofi',
      description: 'Organize, track, and manage sports leagues and tournaments with Trofi.',
      theme_color: '#0a0a0a',
      background_color: '#0a0a0a',
      display: 'standalone',
      orientation: 'portrait',
      scope: '/',
      start_url: '/',
      icons: [
        {
          src: '/favicon.svg',
          sizes: 'any',
          type: 'image/svg+xml',
          purpose: 'any'
        },
        {
          src: '/trofy.svg',
          sizes: 'any',
          type: 'image/svg+xml',
          purpose: 'maskable'
        }
      ]
    },
    workbox: {
      globPatterns: ['**/*.{js,css,html,png,svg,ico}']
    },
    devOptions: {
      enabled: true,
      type: 'module'
    }
  },
  i18n: {
    locales: [
      { code: 'en', name: 'English', file: 'en.json' },
      { code: 'es', name: 'Español', file: 'es.json' }
    ],
    defaultLocale: 'en',
    langDir: '../locales',
    strategy: 'prefix_except_default',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      alwaysRedirect: true
    }
  },
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
