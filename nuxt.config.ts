// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['~/assets/css/common.css'],
  ssr: false,
  devtools: { enabled: false },
  app: {
    baseURL: '/to-do-app/',
    head: {
      link: [
        { rel: 'stylesheet', href: 'https://fonts.cdnfonts.com/css/atkinson-hyperlegible' }]
    }
  },
  modules: ['@nuxtjs/eslint-module', '@nuxt/ui', '@pinia/nuxt'],
  plugins: [
    '~/plugins/localforage.ts'
  ]
})
