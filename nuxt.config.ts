// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // Nuxt configuration
  future: {
    compatibilityVersion: 4,
  },
  compatibilityDate: '2025-03-09',
  typescript: {
    typeCheck: true,
  },

  // Misc
  css: ['~/assets/css/main.css'],

  components: [
    {
      path: '~/components/',
      pathPrefix: true,
    },
  ],

  // Modules list
  modules: [
    '@nuxt/ui',
    '@nuxt/eslint',
    '@nuxthub/core',
    'nuxt-auth-utils',
    '@nuxt/image',
  ],

  // Module related configuration
  eslint: {
    config: {
      standalone: false,
    },
  },

  devtools: { enabled: true },

  hub: {
    database: true,
  },

})
