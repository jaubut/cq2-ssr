<template>
  <Bloc class="photo" :style="{ 'background-image': 'url(' + etoile.fields.photo.fields.file.url + ')' }"> 
    <div @click="modal = !modal" v-on-click-outside="closeModal" @mouseover="openHover" @mouseleave="closeHover" class="grid-photo">
      <transition name="fade">
        <div v-if="modal" class="slot">
          <h2>{{ etoile.fields.name }}</h2>
          <p>{{ etoile.fields.text }}</p>
          <i class="far fa-times-circle"></i>
        </div>
      </transition>
      <a class="link-download"></a>
      <transition name="fade">
        <div v-if="hover" class="info-user">
          <p>{{ etoile.fields.name }}</p>
        </div>
      </transition>
      <transition name="fade">
        <div v-if="hover" class="views">
          <span>{{ etoile.fields.date }}</span>
        </div>
      </transition>
    </div>
  </Bloc>
</template>

<script>
import { mixin as onClickOutside } from 'vue-on-click-outside'

export default {
  mixins: [onClickOutside],
  props: ['etoile'],
  data () {
    return {
      modal: false,
      hover: false
    }
  },
  methods: {
    openHover () {
      this.hover = true
    },
    closeHover () {
      this.hover = false
    },
    closeModal () {
      this.modal = false
    }
  }
}
</script>

<style scoped>
  .photo {
    filter: grayscale(1);
    transition: filter ease-in-out .5s;
  }
  .photo:hover {
    filter: none;
  }
  .grid-photo {
    display: grid;
    grid-template: 5% auto 35px / 50% 50%;
    height: 100%;
    width: 100%;
    cursor: pointer;
  }
  .slot {
    position: absolute;
    left: 0;
    margin: 0 5%;
    display: flex;
    flex-flow: column wrap;
    text-align: center;
    padding: 5%;
    justify-content: flex-start;
    align-items: center;
    overflow: scroll;
    z-index: 2;
    background: #f8f3eb;
  }
  .slot p {
    line-height: 2.5rem;
    font-size: 1rem;
    padding: 0 5%;
  }
  .fa-times-circle {
    transition: all ease-in-out .5s;
    margin-top: 25px;
    height: 35px;
    width: auto;
    cursor: pointer;
  }
  .fa-times-circle:hover {
    transform: scale(1.5);
  }
  .link-download {
    grid-area: 1/1/3/3;
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