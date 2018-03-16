<template>
  <div>
    <header>
      <nuxt-link class="logo" :to="$i18n.path('')">
        <img class="logo" src="~/assets/logo-round.svg" alt="logo, chanvre quebec">
      </nuxt-link>
      <img @click="trigger" class="burger" src="../assets/burger.svg" alt="burger">
      <div class="lang">
        <nuxt-link v-if="$i18n.locale === 'fr'" :to="`/en` + $route.fullPath" exact><span>en</span></nuxt-link>
        <nuxt-link v-else :to="$route.fullPath.replace(/^\/[^\/]+/, '')" exact><span>fr</span></nuxt-link>
      </div>
    </header>
    <transition name="fade">
      <cqMenu v-on-click-outside="close" @click.native="close" v-if="$store.state.menu.show"></cqMenu>
    </transition>
    <main :class="{ active: $store.state.menu.show }">
      <transition name="fadeIndex">
        <nuxt/>
      </transition>
    </main>
    <cqFooter/>
    <!-- Load Facebook SDK for JavaScript -->
    <div id="fb-root"></div>
    <script>(function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = 'https://connect.facebook.net/fr_FR/sdk.js#xfbml=1&version=v2.12&autoLogAppEvents=1';
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));</script>

    <!-- Your customer chat code -->
    <div class="fb-customerchat"
      page_id="1541184722867648"
      theme_color="#707a73"
      logged_in_greeting="Salut! Comment ça va?"
      logged_out_greeting="Salut! Comment ça va?">
    </div>
  </div>
</template>

<script>
import cqFooter from '@/components/cq-footer'
import cqMenu from '@/components/cq-menu'
import { mapMutations } from 'vuex'

export default {
  components: {
    cqFooter,
    cqMenu
  },
  head () {
    let canonical = `https://chanvrequebec.com${this.$route.path}`
    if (this.$store.state.locale !== 'fr') {
      canonical = `https://chanvrequebec.com/${this.$store.state.locale}${this.$route.path}`
    }
    let link = [
      { rel: 'canonical', href: canonical },
      { rel: 'alternate', hreflang: 'en', href: `https://chanvrequebec.com/${this.$store.state.locale}${this.$route.path}` }
    ]
    link.forEach((l) => {
      if (l.href.slice(-1) !== '/') {
        l.href = l.href + '/'
      }
    })
    return {
      titleTemplate: '%s | Chanvre du Québec',
      meta: [
        { hid: 'description', name: 'description', content: 'Obtenez un service qui vous aide à trouver des informations pertinentes sur le chanvre tout en vous connectant aux entreprises québécoises du domaine. Il y a des articles de blogs, des sections d’informations et des profils d’entreprises.' },
        { hid: 'og:image', property: 'og:image', content: 'https://cq2.imgix.net/img/background-social-media.png?w=320&h=320&' },
        { property: 'fb:app_id', content: '1515670032095765' }
      ],
      htmlAttrs: { lang: this.$store.state.locale },
      link
    }
  },
  methods: {
    ...mapMutations({
      close: 'menu/close',
      trigger: 'menu/trigger'
    })
  },
  mounted () {
    this.$initFbSDK()
  }
}
</script>
<style scoped>
  header {
    height: 75px;
    display: grid;
    grid-template: 50% 50% / 100%;
    padding: 0 5%;
  }
  header .lang {
    grid-area: 1/1/3/2;
    display: flex;
    flex-flow: row wrap;
    margin-bottom: auto;
    margin-top: auto;
  }
  .lang span, a {
    padding: 0 5px;
    font-family: 'Barlow', sans-serif;
    font-size: 0.7rem;
    cursor: pointer;
  }
  header .burger {
    grid-area: 1/1/3/2;
    height: 10px;
    margin-left: auto;
    margin-bottom: auto;
    margin-top: auto;
    z-index: 1;
    cursor: pointer;
  }
  header .burger:active {
    transform: translateY(5px);
    transition: transform 0.5s ease-in-out;
  }
  header .logo {
    grid-area: 1/1/3/2;
    height: 75px;
    margin: auto;
    padding-top: 7.5px;
    z-index: 1;
  }
  main {
    width: inherit;
    background: transparent;
    min-height: 100vh;
    margin: 0 2% 5% 2%;
    transition: all 0.5s ease-in-out;
  }
  .active {
    transform: translateY(calc(40vh + 75px));
  }

  @media screen and (min-width: 468px) {
    header .logo {
      height: 125px;
    }
  }
</style>
