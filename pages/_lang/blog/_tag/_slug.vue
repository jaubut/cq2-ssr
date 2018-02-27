<template>
  <div id="Slug">
    <Bloc class="bloc span-2 no-padding" :style="{'background-image': 'url(' + post.fields.heroImage.fields.file.url + ')'}">
      <Texte class="white">
        <h1>{{ post.fields.title }}</h1>
        <p>{{ ( new Date(post.fields.publishDate)).getDate() }} {{ monthNames[( new Date(post.fields.publishDate)).getMonth()] }}</p>
        <div class="fb-share-button" :data-href="'https://chanvreduquebec.org' + $route.path" data-layout="button_count" data-size="small" data-mobile-iframe="true"><a class="fb-xfbml-parse-ignore" target="_blank" href="">Partager</a></div>
      </Texte>
    </Bloc>
    <div class="body">
      <h3 style="text-align: justify;">{{ post.fields.description }}</h3>
      <VueMarkdown class="post-single">{{ post.fields.body }}</VueMarkdown>
    </div>
    <Bloc class="bloc hash">
      <div v-for="tag in post.fields.tags" :key="tag" class="tag">
        <router-link :to="'../../tags/'+ tag"><button class="hastag"><h3>{{ tag }}</h3></button></router-link>
      </div>
    </Bloc>
    <Bloc class="bloc">
      <Person :person="post"></Person>
    </Bloc>
  </div>
</template>
<script>
import VueMarkdown from 'vue-markdown'
import {createClient} from '@/plugins/contentful'

import Person from '@/components/cq-person'

const client = createClient()

export default {
  name: 'Slug',
  scrollToTop: true,
  components: {
    Person,
    VueMarkdown
  },
  data () {
    return {
      monthNames: ['janvier', 'février', 'mars', 'avril', 'may', 'juin', 'juillet', 'aout', 'septembre', 'octobre', 'novembre', 'décembre']
    }
  },
  head () {
    return {
      title: this.post.fields.title,
      meta: [
        { hid: 'description', name: 'description', content: this.post.fields.description },
        { hid: 'og:image', property: 'og:image', content: this.post.fields.heroImage.fields.file.url },
        { hid: 'og:description', property: 'og:description', content: this.post.fields.description },
        { hid: 'og:title', property: 'og:title', content: this.post.fields.title, }
      ]
    }
  },
  asyncData ({ env, params }) {
    return client.getEntries({
      'content_type': 'blogPost',
      'fields.slug': params.slug
    }).then(entries => {
      return {
        post: entries.items[0]
      }
    })
    .catch(console.error)
  }
}
</script>
<style scoped>
#Slug {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
  width: 100%;
}
#Slug .bloc {
  height: calc(100vh/1.7);
}
@media screen and (max-width: 468px) {
  #Slug .bloc {
    height: minmax(calc(100vh/1.7), auto);
  }
}
#Slug .body {
  display: flex;
  flex-flow: column wrap;
  justify-content: space-evenly;
  grid-column: span 2;
  align-items: center;
  background-color: #f6f6f6;
  overflow: hidden;
  padding: 5% 10%;
  line-height: 1.8rem;
  font-weight: 300;
  font-family: "Barlow", sans-serif;
  font-size: 1rem;
}
@media (max-width: 468px) {
  #Slug .body {
    padding: 5% 3%;
  }
}
#Slug .body h3 {
  padding-bottom: 50px;
  text-align: center;
  color: #4F5D56;
  font-size: 2rem;
  font-weight: 400;
  line-height: 2.1rem;
}
#Slug img {
  width: 80%;
  height: auto;
}
#Slug .post-single {
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  text-align: justify;
  padding: 0 5%;
}
#Slug .hastag {
  border: 2px white solid;
  border-radius: 5px;
  height: 40px;
  width: 100%;
  background: rgba(79, 93, 86, 0.6);
  color: white;
  transition: all ease-in-out 0.5s;
}
#Slug .hastag:hover {
  background: #4f5d56;
  transform: translateY(3px);
  cursor: pointer;
}
#Slug .hastag h3 {
  font-size: 1.5vw !important;
}
@media screen and (max-width: 468px) {
  #Slug .hastag h3 {
    font-size: 3vw !important;
  }
}
#Slug .hash {
  flex-flow: row wrap !important;
}
@media screen and (max-width: 468px) {
  #Slug .hash {
    flex-flow: column wrap !important;
  }
}
</style>
