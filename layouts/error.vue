<template>
  <div id="notfound">
    <h1>404</h1>
    <h2>Ce lien n'existe pas.</h2>
    <p>Retourner à <router-link class="hyperlien" to="/">l'accueil.</router-link></p>
  </div>
</template>

<script>
  export default {
    name: 'error',
    data () {
    return {
      description: 'Obtenez un service qui vous aide à trouver des informations pertinentes sur le chanvre tout en vous connectant aux entreprises québécoises du domaine. Il y a des articles de blogs, des sections d’informations et des profils d’entreprises.',
      title: '404'
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
  }
  }
</script>

<style scoped>
  #notfound {
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
    height: 70vh;
    width: 100%;
    font-family: 'Barlow', sans-serif;
  }
  #notfound h1 {
    font-size: 10vw;
  }
</style>