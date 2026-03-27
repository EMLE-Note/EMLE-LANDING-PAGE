// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },

  // Fix: Disable appManifest to resolve "#app-manifest" pre-transform error
  // that breaks all client-side JavaScript (hydration, events, animations)
  experimental: {
    appManifest: false
  },

  modules: [
    '@nuxt/ui',
    '@nuxtjs/google-fonts',
    '@nuxtjs/i18n'
  ],

  i18n: {
    locales: [
      { code: 'en', language: 'en-US', dir: 'ltr', file: 'en.json' },
      { code: 'ar', language: 'ar-EG', dir: 'rtl', file: 'ar.json' }
    ],
    defaultLocale: 'ar',
    strategy: 'prefix_except_default',
    lazy: true,
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
    }
  },

  googleFonts: {
    families: {
      Cairo: [300, 400, 500, 600, 700, 800],
    },
    display: 'swap',
  },
  app: {
    head: {
      htmlAttrs: {
        dir: 'rtl',
        lang: 'ar'
      },
      title: 'إيملي نوتس - منصة التعليم الطبي الأسرع نموًا',
      meta: [
        { name: 'description', content: 'المنصة الرائدة في التعليم الطبي في العالم العربي. تعلم، تدرب، وقيم مستواك مع أقوى بنية تعليمية مدفوعة بالذكاء الاصطناعي.' }
      ]
    }
  },
  css: ['~/assets/css/main.css'],
  colorMode: {
    preference: 'light'
  },
  tailwindcss: {
    config: {
      theme: {
        extend: {
          fontFamily: {
            sans: ['Cairo', 'sans-serif'],
          },
          colors: {
            brand: {
              50: '#e6f7fe',
              100: '#b3e7fc',
              200: '#80d7fb',
              300: '#4dc7f9',
              400: '#1ab7f8',
              500: '#00adee',
              600: '#008bbe',
              700: '#006a8f',
              800: '#00495f',
              900: '#002730',
              950: '#001418',
            },
          },
        },
      },
    },
  },
})