const {createClient} = require('./plugins/contentful')
const cdaClient = createClient()

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'nuxt-test',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { href: 'https://fonts.googleapis.com/css?family=Barlow', rel: 'stylesheet' }
    ],
    script: [
      { src: 'https://use.fontawesome.com/releases/v5.0.6/js/all.js' },
      { src: 'https://connect.facebook.net/en_US/all.js' }
    ]
  },
  css: [
    '~/css/main.css'
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#707a73' },
  /*
  ** Build configuration
  */
  build: {
    vendor: ['vue-i18n', 'axios'],
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  modules: [
    '@nuxtjs/onesignal',
    '@nuxtjs/pwa',
    '@nuxtjs/sitemap',
    ['@nuxtjs/google-analytics', { ua: 'UA-82844671-4' }],
    [
      '@nuxtjs/yandex-metrika',
      {
        id: '47827843',
        webvisor: true,
        clickmap:true,
        trackLinks:true,
        accurateTrackBounce:true
      }
    ]
  ],
  generate: {
    routes () {
      return Promise.all([
        // get all blog posts
        cdaClient.getEntries({
          'content_type': 'blogPost'
        })
      ])
      .then((entries) => {
        return [
          // map entries to URLs
          ...entries.items.map(entry => `/blog/${entry.fields.tags[0]}/${entry.fields.slug}`)
        ]
      })
    }
  },
  router: {
    middleware: 'i18n',
    scrollBehavior: function (to, from, savedPosition) {
      return { x: 0, y: 0 }
    }
  },
  manifest: {
    name: 'Chanvre du Québec',
    lang: 'fr',
    theme_color: '#707a73'
  },
  oneSignal: {
    init: {
      appId: 'c04579cb-2c32-4739-9fee-ae7590e736ff',
      allowLocalhostAsSecureOrigin: true,
      welcomeNotification: {
          disable: true
      }
    }
  },
  sitemap: {
    generate: true,
    hostname: 'https://chanvreduquebec.org'
  },
  plugins: ['~/plugins/i18n.js', '~/plugins/cqbloc.js', '~/plugins/cqtexte.js', '~/plugins/facebookSDK.js', '~/plugins/cqbutton.js', '~/plugins/cqbigtexte.js', '~/plugins/contentful.js', '~/plugins/vueclickoutside.js', '~/plugins/cqoutbutton.js', '~/plugins/cqinterbutton.js']
}
