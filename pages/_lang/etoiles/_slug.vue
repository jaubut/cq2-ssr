<template>
  <div id="etoiles">
    <Bloc class="span-2" :style="{ 'background-image': 'url(' + etoile.fields.photo.fields.file.url + ')' }">
      <div class="fb-share-button" 
        :data-href="'https://chanvrequebec.com' + $route.path"
        data-layout="button_count"
        data-size="small" 
        data-mobile-iframe="true">
      </div>
    </Bloc>
    <Bloc class="span-2">
      <Texte link="#">
        <h2>{{ etoile.fields.name }}</h2>
        <p>{{ etoile.fields.text }}</p>
      </Texte>
      <p @click="nextEtoile">next</p>
    </Bloc>
  </div>
</template>

<script>
import {createClient} from '@/plugins/contentful'

const client = createClient()

export default {
  head () {
    return {
      title: this.etoile.fields.name,
      meta: [
        { hid: 'description', name: 'description', content: this.etoile.fields.text },
        { hid: 'og:image', property: 'og:image', content: this.etoile.fields.photo.fields.file.url },
        { hid: 'og:description', property: 'og:description', content: this.etoile.fields.text },
        { hid: 'og:title', property: 'og:title', content: this.etoile.fields.name }
      ]
    }
  },
  mounted () {
    this.$initFbSDK()
  },
  asyncData ({ env, params }) {
    return client.getEntries({
      'content_type': 'etoile',
      'fields.slug': params.slug
    }).then(entries => {
      return {
        etoile: entries.items[0]
      }
    })
    .catch(console.error)
  }
}
</script>

<style scoped>
  #etoiles {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: calc(100vh/2);
    grid-gap: 10px;
    width: 100%;
  }
  .fb-share-button {
    position: absolute;
    top: 50vh;
  }
  @media screen and (max-width: 468px) {
    #etoiles {
      grid-auto-rows: minmax(calc(100vh/2), auto);
    }
  }
</style>