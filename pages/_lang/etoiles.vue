<template>
  <div id="etoiles">
    <Bloc class="span-3 beige">
      <Texte link="#">
        <h2>Les étoiles</h2>
        <p>Le temple de la renommé du chanvre.</p>
      </Texte>
    </Bloc>
    <BlocEtoile v-for="etoile in etoiles" :key="etoile.name" :etoile="etoile"></BlocEtoile>
  </div>
</template>

<script>
import BlocEtoile from '@/components/cq-bloc-etoile'
import {createClient} from '@/plugins/contentful'

const client = createClient()

export default {
  components: {
    BlocEtoile
  },
  data () {
    return {
      description: 'Obtenez un service qui vous aide à trouver des informations pertinentes sur le chanvre et les gens qui y participent tout en vous connectant aux entreprises québécoises du domaine. Il y a des articles de blogs, des sections d’informations et des profils d’entreprises.',
      title: 'Étoiles'
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
    return client.getEntries({
      'content_type': 'etoile',
      order: '-sys.createdAt'
    }).then(entries => {
      return {
        etoiles: entries.items
      }
    })
    .catch(console.error)
  }
}
</script>

<style scoped>
  #etoiles {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: calc(100vh/2);
    grid-gap: 10px;
    width: 100%;
  }
  @media screen and (max-width: 468px) {
    #etoiles {
      grid-template-columns: repeat(2, 1fr);
      grid-auto-rows: minmax(calc(100vh/2), auto);
    }
  }
</style>