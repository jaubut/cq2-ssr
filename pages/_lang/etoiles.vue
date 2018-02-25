<template>
  <div id="etoiles">
    <Bloc class="span-3 beige">
      <Texte>
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
      etoiles: []
    }
  },
  created () {
    this.fetchData()
  },
  watch: {
    'lang': 'fetchData'
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
    }
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