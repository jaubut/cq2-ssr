<template>
  <div id="cqIndex">
    <Intro/>
    <Cq/>
    <Mission/>
    <Bloc class="span-2 align-left overflow-yes whitebg no-padding">
      <BigTexte>
        <span>5</span>
        <h4 v-html="$t('index.index-1')"></h4>
      </BigTexte>
    </Bloc>
    <Construction/>
    <Textile/>
    <Soins/>
    <Alimentation/>
    <Bloc class="span-2 align-left overflow-yes whitebg">
      <BigTexte>
        <span>4</span>
        <router-link :to="$i18n.path('lesmarques')">{{ $t('index.index-2') }}</router-link>
      </BigTexte>
    </Bloc>
    <Bonvivant/>
    <ArtduChanvre/>
    <Bloc v-if="$i18n.locale === 'fr'" class="span-2 align-left overflow-yes whitebg">
      <BigTexte>
        <span>2</span>
        <h4 v-html="$t('index.index-3')"></h4>
      </BigTexte>
    </Bloc>
    <Article v-if="$i18n.locale === 'fr'" :post="post" />
    <Acteur v-if="$i18n.locale === 'fr'" :etoile="etoile"></Acteur>
    <Bloc class="span-2 align-left overflow-yes whitebg">
      <BigTexte>
        <span></span>
        <h4 v-html="$t('index.index-4')"></h4>
      </BigTexte>
    </Bloc>
    <Facebook/>
    <BlocPhoto class="height-normal" v-for="photo in photos" :key="photo.id" :photo="photo">
      <Texte class="white" link="photos">
        <h2 v-html="$t('index.index-5')"></h2>
        <p v-html="$t('index.index-6')"></p>
        <div class="collab">
          <span class="button alert-white">Unplash</span>
          <span>X</span>
          <span class="button alert-white" v-html="$t('index.index-7')"></span>
        </div>
      </Texte>
    </BlocPhoto>
    <News v-for="(article, index) in articles" :key="index" :article="article"/>
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
import Bonvivant from '@/components/cq-index-bonvivant'
import ArtduChanvre from '@/components/cq-index-artchanvre'
import Acteur from '@/components/cq-index-artisans'
import Article from '@/components/cq-index-article'
import News from '@/components/cq-index-news'

import axios from 'axios'
import BlocPhoto from '@/components/cq-bloc-photos'
import {createClient} from '@/plugins/contentful'

const client = createClient()
const url = 'https://api.unsplash.com/photos/random'
const url_air = 'https://api.airtable.com/v0/app0yxn9b11rdmbd8'

const config = {
  params: {
    client_id: 'd6b82f23cda09babcf74c2b38e342b3f246be679e7b5a55f642b552ff55d9bdf',
    per_page: 1,
    order_by: 'popular',
    collections: 1656484,
    count: 1
  }
}

const configAir = {
  headers: {
    'Authorization': 'Bearer keyYpAgTFas9oMW80'
  }
}

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
    Bonvivant,
    ArtduChanvre,
    BlocPhoto,
    Acteur,
    Article,
    News
  },
  methods: {
    loadItems: function() {
      // Init variables
      var self = this
      var app_id = "appIYyKKaH2wBjn9U";
      var app_key = "keyYpAgTFas9oMW80"; // Read Only Key! :D
      this.items = []
      axios.get(
        "https://api.airtable.com/v0/" + app_id + "/Table%201", {
          headers: {
            Authorization: "Bearer " + app_key
          }
        }
      ).then(function(response) {
        self.items = response.data.records
      }).catch(function(error) {
        console.log(error)
      })
    }
  },
  data () {
    return {
      items: [],
      description: 'Obtenez l’information pertinente entourant le chanvre du Québec. Consultez nos sections d’informations, photos et vidéos exclusives, marques locales, entrevues et bien plus!',
      title: 'Accueil',
      articles: []
    }
  },
  head () {
    return {
      title: this.title,
      meta: [
        { hid: 'description', name: 'description', content: this.description },
        { hid: 'og:image', property: 'og:image', content: '/img/background-social-media.png' },
        { hid: 'og:description', property: 'og:description', content: this.description },
        { hid: 'og:title', property: 'og:title', content: this.title }
      ]
    }
  },
  mounted () {
    this.$initFbSDK()
    this.loadItems()
    axios.get("https://newsapi.org/v2/everything?q=chanvre OR hemp&apiKey=aff02644459c44a98afdbf102c19e89d")
      .then(response => {this.articles = response.data.articles})
  },
  asyncData ({ env, params }) {
    return Promise.all([
      client.getEntries({
        'content_type': 'etoile',
        order: '-sys.createdAt'
      }),
      client.getEntries({
        'content_type': 'blogPost',
        order: '-sys.createdAt'
      }),
      axios.get(url, config)
    ]).then(([entries, posts, res]) => {
      return {
        etoile: entries.items[0],
        post: posts.items[0],
        photos: res.data
      }
    })
    .catch(console.error)
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
  .collab {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  #curator-feed {
    width: 100%;
  }
</style>
