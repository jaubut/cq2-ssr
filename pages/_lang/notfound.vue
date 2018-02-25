<template>
  <div id="notfound">
    <h1>404</h1>
    <h2>Ce lien n'existe pas.</h2>
    <p>Retourner à <router-link class="hyperlien" to="/">l'accueil.</router-link></p>
  </div>
</template>

<script>
  export default {
    metaInfo: {
      title: 'Erreur 404'
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