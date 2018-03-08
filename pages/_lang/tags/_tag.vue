<template>
  <div id="Tag">
    <Bloc class="span-2">
      <Texte>
        <h2>{{ tag }}</h2>
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
  name: 'Tag',
  scrollToTop: true,
  components: {
    BlocPost
  },
  data () {
    return {
      description: 'Obtenez un service qui vous aide à trouver des informations pertinentes sur le chanvre avec nos tags tout en vous connectant aux entreprises québécoises du domaine. Il y a des articles de blogs, des sections d’informations et des profils d’entreprises.'
    }
  },
  mounted () {
    this.$initFbSDK()
  },
  head () {
    return {
      title: this.$route.params.tag,
      meta: [
        { hid: 'description', name: 'description', content: this.description },
        { hid: 'og:image', property: 'og:image', content: 'https://cq2.imgix.net/img/background-social-media.png?w=320&h=320&' },
        { hid: 'og:description', property: 'og:description', content: this.description },
        { hid: 'og:title', property: 'og:title', content: this.$route.params.tag }
      ]
    }
  },
  asyncData ({ env, params }) {
    return client.getEntries({
      'content_type': 'blogPost',
      'fields.tags[in]': params.tag,
      order: '-sys.createdAt'
    }).then(entries => {
      return {
        posts: entries.items,
        tag: params.tag
      }
    })
  }
}
</script>
<style scoped>
  #Tag {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: calc(100vh/1.7);
    grid-gap: 10px;
    width: 100%;
  }
</style>
