<template>
  <Bloc class="height-normal" :style="{'background-image': 'url(' + post.fields.heroImage.fields.file.url + ')'}">
    <div v-if="w > 468" @mouseover="openHover" @mouseleave="closeHover" class="grid-photo">
      <router-link class="link-download" :to="'/blog/'+post.fields.tags[0]+'/'+post.fields.slug"></router-link>
      <transition name="fade">
        <div v-for="author in post.fields.author" :key="author.fields.name" v-if="hover" class="info-user">
          <a href="#">
            <img :src="author.fields.image.fields.file.url" :alt="author.fields.name">
            <p class="shadow-text">{{ author.fields.name }}</p>
          </a>
        </div>
      </transition>
      <transition name="fade">
        <div v-if="hover" class="views shadow-text">
          <span>{{ ( new Date(post.fields.publishDate)).getDate() }} {{ monthNames[( new Date(post.fields.publishDate)).getMonth()] }}</span>
        </div>
      </transition>
      <transition name="fade">
        <div v-if="hover" class="title shadow-text">
          <h1>{{ post.fields.title }}</h1>
        </div>
      </transition>
    </div>
    <div v-else class="grid-photo">
      <router-link class="link-download" :to="'/blog/'+post.fields.tags[0]+'/'+post.fields.slug"></router-link>
      <transition name="fade">
        <div v-for="author in post.fields.author" :key="author.fields.name" class="info-user">
          <a href="#">
            <img :src="author.fields.image.fields.file.url" :alt="author.fields.name">
            <p class="shadow-text">{{ author.fields.name }}</p>
          </a>
        </div>
      </transition>
      <transition name="fade">
        <div class="views shadow-text">
          <span>{{ ( new Date(post.fields.publishDate)).getDate() }} {{ monthNames[( new Date(post.fields.publishDate)).getMonth()] }}</span>
        </div>
      </transition>
      <transition name="fade">
        <div class="title shadow-text">
          <h1>{{ post.fields.title }}</h1>
        </div>
      </transition>
    </div>
  </Bloc>   
</template>

<script>
var stop = 40

export default {
  props: ['post'],
  data () {
    return {
      w: null,
      modal: false,
      hover: false,
      monthNames: ['janvier', 'février', 'mars', 'avril', 'may', 'juin', 'juillet', 'aout', 'septembre', 'octobre', 'novembre', 'décembre']
    }
  },
  mounted () {
    this.w = window.innerWidth
  },
  methods: {
    openHover () {
      this.hover = true
    },
    closeHover () {
      this.hover = false
    },
    truncate (text, clamp) {
      return text.slice(0, stop) + (stop < text.length ? clamp || '...' : '')
    }
  }
}
</script>

<style scoped>
  .grid-photo {
    display: grid;
    grid-template: 5% auto 35px / 50% 50%;
    height: 100%;
    width: 100%;
    cursor: pointer;
  }
  .title {
    grid-area: 2/1/3/3; 
    transition: all ease-in-out .5s;
  }
  .title h1 {
    color: white;
  }
  .link-download {
    grid-area: 1/1/3/3;
    z-index: 2;
  }
  .views {
    grid-area: 3/2/4/3;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  .views span {
    font-size: 0.8rem;
    color: white;
  }
  .shadow-text {
    text-shadow: 1px 1px 10px black;
  }
  .info-user, a {
    grid-area: 3/1/4/2;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .info-user p {
    font-size: 0.9rem;
    color: white;
    margin: 0 !important;
    padding-left: 15px;
  }
  .info-user img {
    height: 35px;
    width: 35px;
    border-radius: 100%;
    margin-top: 0 !important;
  }
</style>