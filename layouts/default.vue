<template>
  <div>
    <header>
      <router-link class="logo" to="/">
        <img class="logo" src="~/assets/logo-round.svg" alt="logo, chanvre quebec">
      </router-link>
      <img @click="trigger" class="burger" src="../assets/burger.svg" alt="burger">
      <div class="lang">
        <span>fr</span>
        <span>en</span>
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
  main .active {
    transform: translateY(calc(40vh + 75px));
  }

  @media screen and (min-width: 468px) {
    header .logo {
      height: 125px;
    }
    .active {
      transform: translateY(calc(40vh + 75px));
    }
  }
</style>
