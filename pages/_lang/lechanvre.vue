<template>
  <div id="LeChanvre">
    <Bloc class="beige span-2">
      <Texte link="#" class="align-left">
        <h2 v-html="$t('lechanvre.lechanvre-1')"></h2>
      </Texte>
    </Bloc>
    <Bloc class="height-normal">
      <Texte link="#">
        <h2 v-html="$t('lechanvre.lechanvre-2')"></h2>
        <p v-html="$t('lechanvre.lechanvre-3')"></p>
      </Texte>
    </Bloc>
    <Bloc class="height-normal photo-un"></Bloc>
    <Bloc class="height-normal photo-deux"></Bloc>
    <Bloc class="height-normal">
      <Texte link="#" class="align-right">
        <h2 v-html="$t('lechanvre.lechanvre-4')"></h2>
        <p v-html="$t('lechanvre.lechanvre-5')"></p>
      </Texte>
    </Bloc>
    <Bloc class="height-normal">
      <Texte link="#" class="align-right">
        <h2 v-html="$t('lechanvre.lechanvre-6')"></h2>
        <p v-html="$t('lechanvre.lechanvre-7')"></p>
      </Texte>
    </Bloc>
    <Bloc class="height-normal photo-trois"></Bloc>
    <Bloc class="beige span-2">
      <Texte link="#">
        <h2 v-html="$t('lechanvre.lechanvre-8')"></h2>
        <p v-html="$t('lechanvre.lechanvre-9')"></p>
      </Texte>
    </Bloc>
    <Bloc class="height-normal">
      <Texte link="#">
        <h2 v-html="$t('lechanvre.lechanvre-10')"></h2>
        <p class="justify" v-html="$t('lechanvre.lechanvre-11')"></p>
      </Texte>
    </Bloc>
    <Bloc class="height-normal photo-quattre"></Bloc>
    <Bloc class="height-normal photo-cinq"></Bloc>
    <Bloc class="height-normal beige">
      <Texte link="#" class="align-left">
        <h2 v-html="$t('lechanvre.lechanvre-12')"></h2>
        <p class="justify" v-html="$t('lechanvre.lechanvre-13')"></p>
      </Texte>
    </Bloc>
  </div>
</template>
<script>
export default {
  name: 'LeChanvre',
  data () {
    return {
      description: 'Découvrez les informations pertinentes sur le chanvre industriel : biologie, statut légal, utilisations et productions locales.',
      title: 'Le chanvre'
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
        { hid: 'og:image', property: 'og:image', content: '/lechanvre/bb2.jpg' },
        { hid: 'og:description', property: 'og:description', content: this.description },
        { hid: 'og:title', property: 'og:title', content: this.title }
      ]
    }
  }
}
</script>
<style scoped>
  #LeChanvre {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: auto;
    grid-gap: 10px;
    width: 100%;
  }
  .photo-un {
    background-image: url(~/static/lechanvre/plante.png);
  }
  .photo-deux {
    background-image: url(~/static/lechanvre/champ2.jpg);
  }
  .photo-trois {
    background-image: url(~/static/lechanvre/tige.png);
  }
  .photo-quattre {
    background-image: url(~/static/lechanvre/paul.jpg);
  }
  .photo-cinq {
    background-image: url(~/static/lechanvre/chanvrons.jpg);
  }
</style>
