export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Maukerja',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/services',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    '@nuxtjs/i18n',
    '@nuxtjs/axios',
  ],

  // localization
  i18n: {
    locales: [{ code: 'en', iso: 'id-EN', file: 'EN.js', dir: 'ltr' }],
    defaultLocale: 'en',
    langDir: 'lang/'
  },

   // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: 'http://feapi.ajt.my/',
    https: false,
    // FIXME: proxy work when false, when set to true, it'll give unexpected behaviour
    // unexpected behaviour : API call inside async data not executed properly when executed on client,
    // usually triggered by nuxt-link
    proxy: true,
    credentials: false
  },

  proxy: {
    '/jobs': {
      target: 'http://feapi.ajt.my/',
      changeOrigin: true,
      // pathRewrite: { '^/jobs': '/' },
    },
  },

  bootstrapVue: {
    icons: true
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
