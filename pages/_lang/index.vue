<template>
  <div id="cqIndex">
    <Intro/>
    <Cq/>
    <Mission/>
    <Bloc class="span-2 align-left overflow-yes whitebg no-padding">
      <BigTexte>
        <span>5</span>
        <h4>Les essentiels</h4>
      </BigTexte>
    </Bloc>
    <Construction/>
    <Textile/>
    <Soins/>
    <Alimentation/>
    <Bloc class="span-2 align-left overflow-yes whitebg">
      <BigTexte>
        <span>4</span>
        <router-link to="/marques">Les marques d'ici</router-link>
      </BigTexte>
    </Bloc>
    <Chanv/>
    <ArtduChanvre/>
    <Bloc class="span-2 align-left overflow-yes whitebg">
      <BigTexte>
        <span>2</span>
        <h4>L'actualité</h4>
      </BigTexte>
    </Bloc>
    <Article/>
    <Acteur v-for="etoile in etoiles.slice(0, 1)" :key="etoile.fields.name" :etoile="etoile"></Acteur>
    <NewsLetter/>
    <Bloc class="span-2 align-left overflow-yes whitebg">
      <BigTexte>
        <span></span>
        <h4>Médias</h4>
      </BigTexte>
    </Bloc>
    <Facebook/>
    <BlocPhoto class="height-normal" v-for="photo in photos" :key="photo.id" :photo="photo">
      <Texte class="white" link="Photos">
        <h2>Nos photos préférées</h2>
        <p>Toutes ces magnifiques photos sont hébergés sur unsplash.com <br>et libre de droit.</p>
        <div class="collab">
          <span class="button alert-white">Unplash</span>
          <span>X</span>
          <span class="button alert-white">Chanvre Québec</span>
        </div>
      </Texte>
    </BlocPhoto>
  </div>
</template>

<script>
import Facebook from '@/components/cq-facebook'
import Intro from '@/components/cq-index-intro'
import Cq from '@/components/cq-index-cq'
import Mission from '@/components/cq-index-mission'
import Textile from '@/components/cq-index-textile'
import Alimentation from '@/components/cq-index-alimentation'
import Soins from '@/components/cq-index-soins'
import NewsLetter from '@/components/cq-index-newsletter'
import Construction from '@/components/cq-index-construction'
import Chanv from '@/components/cq-index-chanv'
import ArtduChanvre from '@/components/cq-index-artchanvre'
import Acteur from '@/components/cq-index-artisans'
import Article from '@/components/cq-index-article'

import axios from 'axios'
import BlocPhoto from '@/components/cq-bloc-photos'
import {createClient} from '@/plugins/contentful'

const client = createClient()
const url = 'https://api.unsplash.com/photos/random'

export default {
  components: {
    Facebook,
    Intro,
    Cq,
    Mission,
    Textile,
    Alimentation,
    Soins,
    NewsLetter,
    Construction,
    Chanv,
    ArtduChanvre,
    BlocPhoto,
    Acteur,
    Article
  },
  head() {
    return { title: this.$t('index.title') }
  },
  created () {
    this.fetchData()
  },
  data () {
    return {
      photos: [],
      etoiles: []
    }
  },
  methods: {
    fetchData () {
      return client.getEntries({
        'content_type': 'etoile',
        order: '-sys.createdAt'
      })
        .then(response => {
          this.etoiles = response.items
          return response
        })
      const config = {
        params: {
          client_id: 'd6b82f23cda09babcf74c2b38e342b3f246be679e7b5a55f642b552ff55d9bdf',
          per_page: 1,
          order_by: 'popular',
          query: 'chanvre',
          count: 1
        }
      }
      axios.get(url, config)
        .then(response => {
          this.photos = response.data
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}
</script>

<style scoped>
  #cqIndex {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: auto;
    grid-gap: 10px;
    width: 100%;
  }
</style>
