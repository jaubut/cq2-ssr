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
    <Chanv/>
    <ArtduChanvre/>
    <Bloc v-if="$i18n.locale === 'fr'" class="span-2 align-left overflow-yes whitebg">
      <BigTexte>
        <span>2</span>
        <h4 v-html="$t('index.index-3')"></h4>
      </BigTexte>
    </Bloc>
    <Article v-if="$i18n.locale === 'fr'" :post="post" />
    <Acteur v-if="$i18n.locale === 'fr'" :etoile="etoile"></Acteur>
    <NewsLetter v-if="$i18n.locale === 'fr'"/>
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
    Chanv,
    ArtduChanvre,
    BlocPhoto,
    Acteur,
    Article
  },
  data () {
    return {
      description: 'Obtenez un service qui vous aide à trouver des informations pertinentes sur le chanvre tout en vous connectant aux entreprises québécoises du domaine. Il y a des articles de blogs, des sections d’informations et des profils d’entreprises.',
      title: 'Accueil'
    }
  },
  head () {
    return {
      title: this.title,
      meta: [
        { hid: 'description', name: 'description', content: this.description },
        { hid: 'og:image', property: 'og:image', content: 'https://chanvrequebec.com/img/background-social-media.png' },
        { hid: 'og:description', property: 'og:description', content: this.description },
        { hid: 'og:title', property: 'og:title', content: this.title }
      ]
    }
  },
  mounted () {
    this.$initFbSDK()
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
</style>
