<template>
  <div id="Artisans">
    <Bloc class="span-2 beige">
      <Texte>
        <h2>Les marques d'ici</h2>
        <p>Voici le chanvre du Québec.</p>
      </Texte>
      <div class="filter-list">
        <span class="target" @click="filter = null">All</span>
        <span class="target" @click="filter = 'FeedStock'">Animal</span>
        <span class="target" @click="filter = 'Soins'">Soins-corporel</span>
        <span class="target" @click="filter = 'Alimentation'">Alimentation</span>
        <span class="target" @click="filter = 'Construction'">Construction</span>
        <span class="target" @click="filter = 'Textile'">Textile</span>
      </div>
    </Bloc>
    <Bloc class="height-normal" :class="{ beige: artisan.bgColor  }" v-for="artisan in orderArtisans" :key="artisan.title">
      <Texte :link="artisan.routerName">
        <h2>{{ artisan.title }}</h2>
        <p>{{ artisan.description }}</p>
      </Texte>
      <img :src="artisan.img" alt="">
    </Bloc>
  </div>
</template>
<script>
var _ = require('lodash')

export default {
  name: 'Artisans',
  data () {
    return {
      filter: null
    }
  },
  computed: {
    artisans () {
      return this.$store.state.artisans.artisans
    },
    orderArtisans: function () {
      if (this.filter === null) {
        return this.artisans
      } else {
        return _.filter(this.artisans, { 'group': this.filter })
      }
    }
  }
}
</script>
<style scoped>
  #Artisans {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: auto;
    grid-gap: 10px;
    width: 100%;
  }
  .filter-list {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
  }
  .filter-list span {
    font-size: 0.9rem;
    height: 20px;
    width: auto;
    padding: 0 5px;
    border: 1px solid rgba(79, 93, 86, 0.6);
    color: rgba(79, 93, 86, 0.6);
    border-radius: 5px;
    margin: 10px;
    cursor: pointer;
    transition: all ease-in-out .5s;
  }
  .filter-list span:hover {
    transform: translateY(5px);
  }
  :target {
    border: 1px solid rgba(79, 93, 86, 0.9) !important;
    color: rgba(79, 93, 86, 0.9) !important;
  }
</style>
