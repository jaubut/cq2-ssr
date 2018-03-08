<template>
  <div id="Apropos">
    <Bloc class="span-2">
      <Texte link="#">
        <h2 v-html="$t('apropos.apropos-1')"></h2>
        <p v-html="$t('apropos.apropos-2')"></p>
      </Texte>
    </Bloc>
    <Bloc class="height-normal beige">
      <Texte link="#">
        <h2 v-html="$t('apropos.apropos-3')"></h2>
        <p v-html="$t('apropos.apropos-4')"></p>
      </Texte>
    </Bloc>
    <Bloc class="height-normal photo-ame"></Bloc>
    <Bloc class="height-normal">
      <Texte link="#">
        <h2 v-html="$t('apropos.apropos-5')"></h2>
        <p v-html="$t('apropos.apropos-6')"></p>
      </Texte>
    </Bloc>
    <Bloc class="height-normal">
      <Texte link="#">
        <h2 v-html="$t('apropos.apropos-7')"></h2>
        <ul> 
          <li v-html="$t('apropos.apropos-8')"></li> 
          <li v-html="$t('apropos.apropos-9')"></li>
          <li v-html="$t('apropos.apropos-10')"></li> 
        </ul>
      </Texte>
    </Bloc>
    <Bloc class="span-2 align-left overflow-yes whitebg no-padding">
      <BigTexte>
        <span>2</span>
        <h4 v-html="$t('apropos.apropos-11')"></h4>
      </BigTexte>
    </Bloc>
    <template v-for="person in persons">
      <Bloc :key="person.title" class="height-normal">
        <Texte link="#">
          <h2>{{ person.fields.name }}</h2>
          <p>{{ person.fields.title }}</p>   
          <p>{{ person.fields.shortBio }}</p>
          <p v-if="person.fields.twitter != undefined" class="follow-social"> {{ $t('apropos.apropos-12') }} {{ person.fields.name }} {{ $t('apropos.apropos-13') }}  <span><a target="_blank" :href="'https://twitter.com/'+person.fields.twitter"><i class="fab fa-twitter"></i></a></span></p>
        </Texte>
      </Bloc>
      <Bloc class="height-normal" :key="person.title" :style="{'background-image': 'url(' + person.fields.image.fields.file.url + ')'}"></Bloc>
    </template>
    <Bloc class="span-2 align-left overflow-yes whitebg no-padding">
      <BigTexte>
        <span>1</span>
        <h4 v-html="$t('apropos.apropos-14')"></h4>
      </BigTexte>
    </Bloc>
    <template v-for="expert in experts">
      <Bloc :key="expert.title" class="height-normal">
        <Texte link="#">
          <h2>{{ expert.fields.name }}</h2>
          <p>{{ expert.fields.shortBio }}</p>
          <p v-if="expert.fields.twitter != undefined" class="follow-social"> {{ $t('apropos.apropos-12') }} {{ expert.fields.name }} {{ $t('apropos.apropos-13') }} <span><a target="_blank" :href="'https://twitter.com/'+expert.fields.twitter"><i class="fab fa-twitter"></i></a></span></p>
        </Texte>
      </Bloc>
      <Bloc class="height-normal" :key="expert.title" :style="{'background-image': 'url(' + expert.fields.image.fields.file.url + ')'}"></Bloc>
    </template>
  </div>
</template>
<script>
import {createClient} from '@/plugins/contentful'

const client = createClient()

export default {
  name: 'apropos',
  data () {
    return {
      description: 'Obtenez un service qui vous aide à trouver des informations pertinentes sur l\'organisation du chanvre au québec tout en vous connectant aux entreprises québécoises du domaine. Il y a des articles de blogs, des sections d’informations et des profils d’entreprises.',
      title: 'Apropos'
    }
  },
  head () {
    return {
      title: this.title,
      meta: [
        { hid: 'description', name: 'description', content: this.description },
        { hid: 'og:image', property: 'og:image', content: 'https://cq2.imgix.net/img/background-social-media.png?w=320&h=320&' },
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
        'content_type': 'author',
        order: '-sys.createdAt'
      }),
      client.getEntries({
        'content_type': 'expert',
        order: '-sys.createdAt'
      })
    ]).then(([entries, experts]) => {
      return {
        persons: entries.items,
        experts: experts.items
      }
    })
    .catch(console.error)
  }
}
</script>
<style scoped>
  #Apropos {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: auto;
    grid-gap: 10px;
    width: 100%;
  }
  .follow-social {
    font-size: 0.9rem;
  }
  .fa-twitter {
    color: #1ea1f2;
  }
  .photo-ame {
    background-image: url(../../static/jechanvre/amelie.jpg) !important;
  }
</style>
