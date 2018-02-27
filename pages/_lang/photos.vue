<template>
  <div id="photos">
    <BlocPhoto v-for="photo in photos" :key="photo.id" :photo="photo"></BlocPhoto>
    <Bloc>
      <Texte link="#">
        <h2>En voir d'autres sur <span><a href="https://unsplash.com">Unsplash</a></span></h2>
      </Texte>
      <CqOutButton href="https://unsplash.com"><p>Voir +</p></CqOutButton> 
    </Bloc>
  </div>
</template>

<script>
import axios from 'axios'
import BlocPhoto from '@/components/cq-bloc-photos'

const url = 'https://api.unsplash.com/photos/random'

const config = {
  params: {
    client_id: 'd6b82f23cda09babcf74c2b38e342b3f246be679e7b5a55f642b552ff55d9bdf',
    per_page: 24,
    order_by: 'popular',
    collections: 1656484,
    count: 30
  }
}
export default {
  components: {
    BlocPhoto
  },
  data () {
    return {
      description: 'Obtenez un service qui vous aide à trouver des informations pertinentes avec des photos de chanvre tout en vous connectant aux entreprises québécoises du domaine. Il y a des articles de blogs, des sections d’informations et des profils d’entreprises.',
      title: 'Photos'
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
  asyncData () {
    return axios.get(url, config)
    .then((res) => {
      return { photos: res.data }
    })
  }
}
</script>

<style scoped>
  #photos {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: calc(100vh/1.7);
    grid-gap: 10px;
    width: 100%;
  }
  button {
    height: 100px;
    width: 100px;
    color: white;
    border-radius: 100%;
    border: none;
    background: #cb5a4480;
    box-shadow: 0px 8px 18px -10px rgba(black,0.75);
    cursor: pointer;
    transition: all ease-in-out .5s;
    animation: pulse-shadow 2s infinite;
  }
  button p {
    font-size: 1rem;
    font-weight: bold;
  }
  button:hover {
    transform: scale(1.1);
    color: #822c17 !important;
    animation: none;
  }
  .color-beige {
    background: rgba(#F8F3EB,0.5) !important;
  }
  .color-beige:hover {
    color: #F8F3EB !important;
  }
</style>