<template>
  <div id="bonvivantCo">
    <Bloc class="height-normal span-2 photo-back"> 
      <Texte link="#" class="align-left">
        <h2 v-html="$t('bonvivant.bonvivant-1')"></h2>
      </Texte>
    </Bloc>
    <Bloc class="height-normal">
      <Texte link="#">
        <h2 v-html="$t('bonvivant.bonvivant-2')"></h2>
        <p v-html="$t('bonvivant.bonvivant-3')"></p>
      </Texte>
    </Bloc>
    <Bloc class="height-normal photo-deux"></Bloc>
    <Bloc class="beige height-normal">
      <Texte link="#" class="align-right">
        <h2 v-html="$t('bonvivant.bonvivant-4')"></h2>
        <p v-html="$t('bonvivant.bonvivant-5')"></p>
      </Texte>
    </Bloc>
    <Bloc class="height-normal">
      <Texte link="#" class="align-right">
        <h2 v-html="$t('bonvivant.bonvivant-6')"></h2>
        <p v-html="$t('bonvivant.bonvivant-7')"></p>
      </Texte>
    </Bloc>
    <Bloc class="height-normal span-2" style="padding: 0;">
      <video autoplay loop muted poster="">
        <source src="../../../assets/video/bonvivant-video.mp4" type="video/mp4">
      </video>
    </Bloc>
    <Bloc class="span-2 align-left overflow-yes whitebg">
      <BigTexte>
        <span></span>
        <router-link to="#">{{ $t('bonvivant.bonvivant-8') }}</router-link>
      </BigTexte>
    </Bloc>
    <Bloc class="height-normal beige">
      <Texte link="#">
        <h2 v-html="$t('bonvivant.bonvivant-9')"></h2>
        <p class="justify" v-html="$t('bonvivant.bonvivant-10')"></p>
      </Texte>
    </Bloc>
    <Bloc class="height-normal photo-trois"></Bloc>
    <Bloc class="height-normal photo-quattre"></Bloc>
    <Bloc class="height-normal beige">
      <Texte link="#" class="align-left">
        <h2 v-html="$t('bonvivant.bonvivant-11')"></h2>
        <p class="justify" v-html="$t('bonvivant.bonvivant-12')"></p>
      </Texte>
    </Bloc>
    <Bloc class="height-normal beige">
      <Texte link="#">
        <h2 v-html="$t('bonvivant.bonvivant-13')"></h2>
        <p v-html="$t('bonvivant.bonvivant-14')"></p>
      </Texte>
    </Bloc>
    <Bloc class="height-normal photo-cinq"></Bloc>
    <Bloc class="span-2 align-left overflow-yes whitebg">
      <BigTexte>
        <span></span>
        <router-link to="#">{{ $t('bonvivant.bonvivant-15') }}</router-link>
      </BigTexte>
    </Bloc>
    <Bloc class="height-normal">
      <Texte link="#">
        <h2 v-html="$t('bonvivant.bonvivant-16')"></h2>
        <p v-html="$t('bonvivant.bonvivant-17')"></p>
      </Texte>
    </Bloc>
    <Bloc class="height-normal beige">
      <Texte link="#">
        <h2 v-html="$t('bonvivant.bonvivant-18')"></h2>
      </Texte>
      <CqOutButton href="https://www.bonvivant.bio">{{ $t('bonvivant.bonvivant-19') }}</CqOutButton>
    </Bloc>
  </div>
</template>
<script>
export default {
  name: 'bonvivantCo',
  data () {
    return {
      description: 'Ce slogan est un symbole de rébellion. Pendant 60 ans, la culture du chanvre (hemp) fut injustement criminalisée, ici au Canada et aux États-Unis. On associait le chanvre à la marihuana afin d’en limiter le développement industriel (concurrence à l’industrie pétrochimique et autres). Il est grand temps de rattraper le temps perdu. Avec ce slogan, on se souvient, afin de redéfinir l’avenir.',
      title: 'Sauvage'
    }
  },
  mounted () {
    this.$initFbSDK()
  },
  head () {
    return {
      title: this.title,
      meta: [
        { hid: 'description', name: 'description', content: this.description },
        { hid: 'og:image', property: 'og:image', content: '/bonvivant/bonvivant_texture.png' },
        { hid: 'og:description', property: 'og:description', content: this.description },
        { hid: 'og:title', property: 'og:title', content: this.title }
      ]
    }
  }
}
</script>
<style scoped>
  #bonvivantCo {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: auto;
    grid-gap: 10px;
    width: 100%;
  }
  #logo {
    width: 75px !important;
    height: 75px; 
  }
  .photo-back {
    background-image: url(~/static/bonvivant/totebag_barres.jpg);
    color: white;
  }
  .photo-deux {
    background-image: url(~/static/bonvivant/boite_pc.jpg);
  }
  .photo-trois {
    background-image: url(~/static/bonvivant/barre_fond_vert.jpg);
  }
  .photo-quattre {
    background-image: url(~/static/bonvivant/boite_bc.jpg);
  }
  .photo-cinq {
    background-image: url(~/static/bonvivant/yoga_stretch.jpg);
  }
</style>
