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
  components: {
    BlocPost
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
