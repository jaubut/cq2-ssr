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
      { hid: 'description', name: 'description', content: 'Nuxt.js project' },
      { name: 'google-site-verification', content: '1j6h2Q7I33tRXM8EB8DhrCzgHmvlkw59_liskhZW6pU' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { href: 'https://fonts.googleapis.com/css?family=Barlow', rel: 'stylesheet' }
    ],
    script: [
      { src: 'https://use.fontawesome.com/releases/v5.0.6/js/all.js' },
      { src: 'https://connect.facebook.net/fr_CA/sdk.js#xfbml=1&version=v2.12&appId=1515670032095765&autoLogAppEvents=1' }
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
    ],
    [
      'nuxt-facebook-pixel-module',
      {
        track: 'PageView',
        pixelId: '235742233559499'
      }
    ]
  ],
  generate: {
    routes () {
      return cdaClient.getEntries({
        'content_type': 'blogPost'
      }).then(entries => {
        return [
          ...entries.items.map(entry => `/blog/${entry.fields.tags[0]}/${entry.fields.slug}`)
        ]
      })
    }
  },
  router: {
    middleware: 'i18n',
    scrollBehavior (to, from, savedPosition) {
      if (to.hash) {
        return {
          selector: to.hash
        }
      }
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
    hostname: 'https://chanvreduquebec.org',
    routes () {
      return cdaClient.getEntries({
        'content_type': 'blogPost'
      }).then(entries => {
        return [
          ...entries.items.map(entry => `/blog/${entry.fields.tags[0]}/${entry.fields.slug}`)
        ]
      })
    }
  },
  plugins: ['~/plugins/i18n.js', '~/plugins/cqbloc.js', '~/plugins/cqtexte.js', '~/plugins/facebookSDK.js', '~/plugins/cqbutton.js', '~/plugins/cqbigtexte.js', '~/plugins/contentful.js', '~/plugins/vueclickoutside.js', '~/plugins/cqoutbutton.js', '~/plugins/cqinterbutton.js']
}
