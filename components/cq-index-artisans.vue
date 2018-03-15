<template>
  <Bloc class="height-normal photo-artiste">
    <nuxt-link class="texte-artiste" to="/etoiles">
      <div class="text-container">
        <h3 v-html="$t('acteur.acteur-1')"></h3>
        <h2>{{ etoile.fields.name }}</h2>
        <p>{{ etoile.fields.compagny }}</p>
      </div>
      <div class="photo-mois" :style="{ 'background-image': 'url(' + etoile.fields.photo.fields.file.url + ')' }"></div>
      <p class="little">{{ etoile.fields.date }}</p>
    </nuxt-link>
  </Bloc>
</template>

<script>
export default {
  props: ['etoile']
}
</script>
<style scoped>
  .photo-mois {
    grid-area: 1/1/3/2;
    margin: 20% 10% 20% 0;
    height: 100%;
    background-size: cover;
    background-position: top;
    box-shadow: 5px 4px 15px 5px rgba(0, 0, 0, .5);
  }
  .photo-artiste {
    background-size: 150%;
    background-image: url(../assets/img/artiste-back.jpg);
  }
  .texte-artiste {
    display: grid;
    grid-template: 30% 60% 10% / 60% 40%;
    height: 100%;
    width: 100% !important;
    width: var(--sz);
    color: white;
    z-index: 2;
  }
  h3 {
    font-size: 2.5rem;
  }
  h2 {
    font-size: 1.7rem !important;
    line-height: 1.7rem !important;
    margin-bottom: 5px;
  }
  .text-container {
    grid-area: 1/1/2/3;
    text-align: right !important;
  }
  .little {
    grid-area: 3/1/4/3;
    font-size: 0.9rem;
    color: var(--grey);
    text-align: right;
  }
  .text-container p {
    font-size: 0.9rem;
    line-height: 0.9rem;
    margin: 0;
  }
  @media screen and (max-width: 840px) {
    .photo-mois {
      grid-area: 2/1/3/2;
      margin: 0 10% 20% 10%;
    }
  }
  @media screen and (max-width: 468px) {
    .texte-artiste {
      width: 100%;
    }
    .photo-mois {
      grid-area: 2/1/3/2;
    }
  }
</style>
