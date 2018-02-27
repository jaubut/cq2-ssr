<template>
  <div id="Apropos">
    <Bloc class="span-2">
      <Texte link="#">
        <h2>Chanvre Québec</h2>
        <p>“Seuls ceux qui sont assez fous pour penser qu'ils peuvent changer le monde y parviennent” - <strong>Steve Jobs.</strong></p>
      </Texte>
    </Bloc>
    <Bloc class="height-normal beige">
      <Texte link="#">
        <h2>Notre mission</h2>
        <p>Faire découvrir le chanvre d'ici et d'ailleurs.</p>
      </Texte>
    </Bloc>
    <Bloc class="height-normal photo-ame"></Bloc>
    <Bloc class="height-normal">
      <Texte link="#">
        <h2>Qui sommes-nous?</h2>
        <p>Un organisme à but non-lucratif, fondé par de jeunes visionnaires, qui a pour objectif d'offrir des solutions saines et durables aux défis d’aujourd’hui. Par-dessus tout, nous sommes passionnés par notre mission de promouvoir une plante qui nous permet de reconnecter avec notre environnement.</p>
      </Texte>
    </Bloc>
    <Bloc class="height-normal">
      <Texte link="#">
        <h2>Notre engagement</h2>
        <ul> 
        <li> Être la référence en informations </li> 
        <li> Propulser des marques locales </li>
        <li> Populariser la plante et ses bienfaits </li> </ul>
      </Texte>
    </Bloc>
    <Bloc class="span-2 align-left overflow-yes whitebg no-padding">
      <BigTexte>
        <span>2</span>
        <h4>L'équipe</h4>
      </BigTexte>
    </Bloc>
    <template v-for="person in persons">
      <Bloc :key="person.title" class="height-normal">
        <Texte link="#">
          <h2>{{ person.fields.name }}</h2>
          <p>{{ person.fields.title }}</p>   
          <p>{{ person.fields.shortBio }}</p>
          <p v-if="person.fields.twitter != undefined" class="follow-social">vous pouvez suivre {{ person.fields.name }} sur <span><a target="_blank" :href="'https://twitter.com/'+person.fields.twitter"><i class="fab fa-twitter"></i></a></span></p>
        </Texte>
      </Bloc>
      <Bloc class="height-normal" :key="person.title" :style="{'background-image': 'url(' + person.fields.image.fields.file.url + ')'}"></Bloc>
    </template>
    <Bloc class="span-2 align-left overflow-yes whitebg no-padding">
      <BigTexte>
        <span>1</span>
        <h4>Expert</h4>
      </BigTexte>
    </Bloc>
    <template v-for="expert in experts">
      <Bloc :key="expert.title" class="height-normal">
        <Texte link="#">
          <h2>{{ expert.fields.name }}</h2>
          <p>{{ expert.fields.shortBio }}</p>
          <p v-if="expert.fields.twitter != undefined" class="follow-social">you can follow {{ expert.fields.name }} on <span><a target="_blank" :href="'https://twitter.com/'+expert.fields.twitter"><i class="fab fa-twitter"></i></a></span></p>
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
