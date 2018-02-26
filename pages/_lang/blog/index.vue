<template>
  <div id="Index">
    <Bloc class="span-2">
      <Texte>
        <h2>bienvenue sur le blog</h2>
        <p>Le meilleur contenu sur le chanvre au Québec.</p>
        <div class="tag-list">
          <span @click="filter = null">Tout</span>
          <span @click="filter = 'general'">Général</span>
          <span @click="filter = 'alimentation'">Alimentation</span>
          <span @click="filter = 'construction'">Construction</span>
          <span @click="filter = 'soinscorporels'">Soins Corporels</span>
          <span @click="filter = 'textile'">Textile</span>
          <span @click="filter = 'cbd'">CBD</span>
        </div>
      </Texte>
    </Bloc>
    <BlocPost v-for="post in posts" :key="post.fields.title" :post="post">
    </BlocPost>
  </div>
</template>

<script>
import {createClient} from '@/plugins/contentful'
import BlocPost from '@/components/cq-blog-post'

const client = createClient()

export default {
  name: 'Index',
  components: {
    BlocPost
  },
  data () {
    return {
      filter: null
    }
  },
  asyncData ({ env, params }) {
    return client.getEntries({
      'content_type': 'blogPost',
      order: '-sys.createdAt'
    }).then(entries => {
      return {
        posts: entries.items
      }
    })
  }
}
</script>
<style scoped>
  #Index {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: calc(100vh/1.7);
    grid-gap: 10px;
    width: 100%;
  }
  .tag-list {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    align-items: center;
  }
  span {
    padding: 0 5px;
    color: rgba(#4F5D56, 0.6);
  }
  span:hover {
    color: rgba(#4F5D56, 1);
  }
  @media screen and (max-width: 468px) {
    #Index {
      grid-auto-rows: minmax(calc(100vh/1.7), auto);
    }
  }
</style>
