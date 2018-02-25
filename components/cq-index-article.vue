<template>
  <Bloc class="beige article-back span-v">
    <div v-for="post in posts.slice(0, 1)" :key="post.fields.id" class="grid-article">
      <div class="article-date"><p>{{ ( new Date(post.fields.publishDate)).getDate() }} {{ monthNames[( new Date(post.fields.publishDate)).getMonth()] }}</p></div>
      <div class="article-number">
        <p>0{{ post.fields.id }}</p>
      </div>
      <div v-for="author in post.fields.author" :key="author.fields.name" class="info-user">
        <a href="#">
          <img :src="author.fields.image.fields.file.url" :alt="author.fields.name">
          <p>{{ author.fields.name }}</p>
        </a>
      </div>
      <div class="article-tag">
        <p v-for="tag in (post.fields.tags).slice(0, 2)" :key="tag">{{ tag }}/</p>
      </div>
      <router-link :to="{ name: 'Blog' }" class="journal-chanvre">
        <div class="journal-chanvre">
          <img src="../assets/logo-journalchanvre.svg" alt="logo journal du chanvre">
        </div>
      </router-link>
      <router-link class="article-photo" :to="'/blog/'+post.fields.tags[0]+'/'+post.fields.slug">
        <div class="article-photo" :style="{'background-image': 'url(' + post.fields.heroImage.fields.file.url + ')' }">
        </div>
      </router-link>
      <div class="article-title">
        <h3>{{ post.fields.title }}</h3>
        <p>{{ truncate(post.fields.description) }}</p>
      </div>
    </div>
  </Bloc>
</template>
<script>
import {createClient} from '@/plugins/contentful'

const client = createClient()

var stop = 100
export default {
  name: 'Sept',
  data () {
    return {
      posts: [],
      monthNames: ['janvier', 'février', 'mars', 'avril', 'may', 'juin', 'juillet', 'aout', 'septembre', 'octobre', 'novembre', 'décembre']
    }
  },
  created () {
    this.fetchData()
  },
  methods: {
    fetchData () {
      client.getEntries({
        'content_type': 'blogPost',
        order: '-sys.createdAt'
      })
        .then(response => {
          this.posts = response.items
          return response
        })
    },
    truncate (text, clamp) {
      return text.slice(0, stop) + (stop < text.length ? clamp || '...' : '')
    }
  }
}
</script>
<style scoped>
  .grid-article {
    display: grid;
    grid-template: 10% 20% 35% 20% 10% 5% / 50% 50%;
    grid-gap: 5px;
    height: 100%;
    width: 100%;
  }
  .article-date {
    grid-area: 1/1/2/3;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
  }
  .article-date p {
    line-height: 0.5rem;
  }
  .article-number {
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
    grid-area: 1/2/2/3
  }
  .article-number p {
    line-height: 0.5rem; 
  }
  .info-user, a {
    grid-area: 5/1/7/3;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .info-user p {
    font-size: 0.9rem;
    color: black;
    margin: 0 !important;
    padding-left: 15px;
  }
  .info-user img {
    height: 35px;
    width: 35px !important;
    border-radius: 100%;
    margin-top: 0 !important;
  }
  .article-tag {
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-end;
    align-items: center;
    grid-area: 5/1/7/3;
  }
  .article-tag p {
    font-size: 0.8rem;
  }
  .journal-chanvre {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    grid-area: 1/1/3/3;
    z-index: 2;
    opacity: 1 !important;
  }
  .journal-chanvre img {
    margin-top: 0;
    max-width: 30vw;
  }
  .article-photo {
    grid-area: 2/1/4/3;
    height: 100%;
    width: 100%;
    background-position: center center;
    background-size: cover;
  }
  .article-title {
    grid-area: 4/1/5/3;
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: center;
    height: 100%;
    transition: all ease-in-out .5s;
  }
  .article-title h3 {
    font-size: 3vw;
  }
  .article-title p {
    text-overflow: auto;
    margin: 0;
  }
  .article-back {
    background-image: url(../static/index/back-article.png) !important;
  }
  .white {
    color: white !important;
    text-shadow: 1px 5px 15px -7px rgba(black, 0.75);
  }
  @media screen and (max-width: 468px) {
    .journal-chanvre img {
      margin-top: 0;
      max-height: 75%;
    }
  }
</style>
