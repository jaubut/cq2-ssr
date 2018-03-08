<template>
  <div id="alimentation">
    <Bloc class="span-2">
      <Texte link="#">
        <h2 v-html="$t('alimentation.title')"></h2>
        <p v-html="$t('alimentation.description')"></p>
      </Texte>
    </Bloc>
    <Bloc class="height-normal">
      <Texte link="#">
        <h2 v-html="$t('alimentation.graine-1')"></h2>
        <p v-html="$t('alimentation.graine-2')"></p>
      </Texte>
    </Bloc>
    <Bloc class="height-normal photo-deux"></Bloc>
    <Bloc class="height-normal photo-trois"></Bloc>
    <Bloc class="height-normal">
      <Texte link="#">
        <h2 v-html="$t('alimentation.graine-3')"></h2>
        <p v-html="$t('alimentation.graine-4')"></p>
      </Texte>
    </Bloc>
  <Bloc class="span-2 align-left overflow-yes whitebg">
    <BigTexte>
      <span>4</span>
        <h4 v-html="$t('alimentation.utilisation-1')"></h4>
    </BigTexte>
  </Bloc>
    <Bloc class="height-normal">
      <Texte link="#">
        <h2 v-html="$t('alimentation.utilisation-2')"></h2>
        <p v-html="$t('alimentation.utilisation-3')"></p>
      </Texte>
    </Bloc>
    <Bloc class="height-normal photo-quattre"></Bloc>
    <Bloc class="height-normal photo-cinq"></Bloc>
    <Bloc class="height-normal">
      <Texte link="#">
        <h2 v-html="$t('alimentation.utilisation-4')"></h2>
        <p v-html="$t('alimentation.utilisation-5')"></p>
      </Texte>
    </Bloc>
    <Bloc class="height-normal">
      <Texte link="#">
        <h2 v-html="$t('alimentation.utilisation-6')"></h2>
        <p v-html="$t('alimentation.utilisation-7')"></p>
      </Texte>
    </Bloc>
    <Bloc class="height-normal photo-six"></Bloc>
    <Bloc class="height-normal photo-sept"></Bloc>
    <Bloc class="height-normal">
      <Texte link="#">
        <h2 v-html="$t('alimentation.utilisation-8')"></h2>
        <p v-html="$t('alimentation.utilisation-9')"></p>
      </Texte>
    </Bloc>
  </div>
</template>
<script>
export default {
  name: 'alimentation',
  data () {
    return {
      description: 'Obtenez un service qui vous aide à trouver des informations pertinentes sur le chanvre en alimentation tout en vous connectant aux entreprises québécoises du domaine. Il y a des articles de blogs, des sections d’informations et des profils d’entreprises.',
      title: 'Alimentation'
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
        { hid: 'og:image', property: 'og:image', content: 'https://cq2.imgix.net/img/background-social-media.png?w=320&h=320&' },
        { hid: 'og:description', property: 'og:description', content: this.description },
        { hid: 'og:title', property: 'og:title', content: this.title }
      ]
    }
  }
}
</script>
<style scoped>
#alimentation {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: auto;
  grid-gap: 10px;
  width: 100%;
}
.photo-deux {
  background-image: url(~/static/alimentation/grainestok.png);
}
.photo-trois {
  background-image: url(~/static/alimentation/graineentiere.png);
}
.photo-quattre {
  background-image: url(~/static/alimentation/hempflour2.png);
}
.photo-cinq {
  background-image: url(~/static/alimentation/graine_2.jpg);
}
.photo-six {
  background-image: url(~/static/alimentation/oilspoon.jpg);
}
.photo-sept {
  background-image: url(~/static/alimentation/energy.png);
}
</style>
