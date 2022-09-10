export default {
  target: 'static',
  router: {
    base: '/'
  }, 
  head: {
    title: 'novoyaz.info',
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
      { rel: 'icon', type: 'image/x-icon', href: '/hr.ico' }
    ]
  },
  css: ['@/assets/css/main.scss'],
  plugins: [],
  components: true,
  buildModules: [
    '@nuxt/typescript-build',
  ],
  modules: [
    '@nuxt/content'
  ],  
  content: {},
  build: {}
}
