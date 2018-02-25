<template>
  <div id="photos">
    <BlocPhoto v-for="photo in photos" :key="photo.id" :photo="photo"></BlocPhoto>
    <Bloc>
      <Texte>
        <h2>En voir d'autres</h2>
      </Texte>
      <button @click="fetchData"><p>Voir +</p></button> 
    </Bloc>
  </div>
</template>

<script>
import axios from 'axios'
import BlocPhoto from '@/components/cq-bloc-photos'

const url = 'https://api.unsplash.com/photos/random'

export default {
  components: {
    BlocPhoto
  },
  data () {
    return {
      photos: [],
      perPage: 24,
      query: 'chanvre',
      collection: 1656484
    }
  },
  methods: {
    fetchData () {
      const config = {
        params: {
          client_id: 'd6b82f23cda09babcf74c2b38e342b3f246be679e7b5a55f642b552ff55d9bdf',
          per_page: this.perPage,
          order_by: 'popular',
          collections: this.collection,
          count: 30
        }
      }
      axios.get(url, config)
        .then(response => {
          this.photos = response.data
        })
        .catch(error => {
          console.log(error)
        })
    },
    chanvre () {
      this.query = 'hemp'
    }
  },
  created () {
    this.fetchData()
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