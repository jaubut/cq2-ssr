<template>
  <Bloc :style="{'background-image': 'url(' + photo.urls.regular + '?utm_source=d6b82f23cda09babcf74c2b38e342b3f246be679e7b5a55f642b552ff55d9bdf&utm_medium=referral)' }">
    <div @mouseover="openHover" @mouseleave="closeHover" class="grid-photo">
      <div v-if="$route.path === '/'" class="slot"><slot></slot></div>
      <a target="_blank" class="link-download" :href="photo.links.download_location + '?utm_source=@chanvrequebec&utm_medium=referral'"></a>
      <transition name="fade">
        <div v-if="hover" class="info-user">
          <a target="_blank" :href="photo.user.links.html + '?utm_source=@chanvrequebec&utm_medium=referral'">
            <img :src="photo.user.profile_image.small + '?utm_source=@chanvrequebec&utm_medium=referral'" alt="">
            <p>{{ photo.user.name }}</p>
          </a>
        </div>
      </transition>
      <transition name="fade">
        <div v-if="hover" class="views">
          <span>vues {{ photo.views }} fois</span>
        </div>
      </transition>
    </div>
  </Bloc>   
</template>

<script>
  export default {
    props: ['photo'],
    data () {
      return {
        hover: false
      }
    },
    methods: {
      openHover () {
        this.hover = true
      },
      closeHover () {
        this.hover = false
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
  }
  .slot {
    grid-area: 1/1/3/3;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;
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