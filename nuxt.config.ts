export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'IBook',
    htmlAttrs: {
      lang: 'pt-BR'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Uma nova maneira de ler livros on-line!'
      },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['normalize.css/normalize.css', '@/assets/scss/base.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['@/plugins/hello.client'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [{ path: '@/components', pathPrefix: false }], // seta como auto import em todas as subpastas

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/axios', '@nuxtjs/style-resources'],

  styleResources: {
    scss: ['@/components/bosons/*.scss']
  },

  axios: {
    baseUrl: process.env.NOV_ENV === 'production' ? '' : 'http://localhost:3333'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
}
