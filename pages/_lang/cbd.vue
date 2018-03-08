<template>
  <div id="soins">
    <Bloc class="beige span-2">
      <Texte link="#">
        <h2 v-html="$t('cbd.cbd-1')"></h2>
        <p v-html="$t('cbd.cbd-2')"></p>
      </Texte>
    </Bloc>
    <Bloc class="height-normal">
      <Texte link="#">
        <h2 v-html="$t('cbd.cbd-3')"></h2>
        <p v-html="$t('cbd.cbd-4')"></p>
      </Texte>
    </Bloc>
    <Bloc class="height-normal photo-un"></Bloc>
    <Bloc class="height-normal photo-deux"></Bloc>
    <Bloc class="height-normal">
      <Texte link="#">
        <h2 v-html="$t('cbd.cbd-5')"></h2>
        <p v-html="$t('cbd.cbd-6')"></p>
      </Texte>
    </Bloc>
    <Bloc class="span-2 align-left overflow-yes whitebg">
      <BigTexte>
          <h4 v-html="$t('cbd.cbd-7')"></h4>
      </BigTexte>
    </Bloc>
    <Bloc class="height-normal beige">
      <Texte link="#">
        <h2 v-html="$t('cbd.cbd-8')"></h2>
        <p v-html="$t('cbd.cbd-9')"></p>
      </Texte>
    </Bloc>
    <Bloc class="height-normal photo-trois"></Bloc>
    <Bloc class="height-normal">
      <Texte link="#">
        <h2 v-html="$t('cbd.cbd-10')"></h2>
        <p v-html="$t('cbd.cbd-11')"></p>
      </Texte>
    </Bloc>
    <Bloc class="height-normal">
      <Texte link="#">
        <h2 v-html="$t('cbd.cbd-12')"></h2>
        <p v-html="$t('cbd.cbd-13')"></p>
      </Texte>
    </Bloc>
    <Bloc class="height-normal photo-quattre"></Bloc>
    <Bloc class="height-normal">
      <Texte link="#">
        <h2 v-html="$t('cbd.cbd-14')"></h2>
        <p v-html="$t('cbd.cbd-15')"></p>
      </Texte>
    </Bloc>
    <Bloc class="height-normal span-2 beige">
      <Texte link="#">
        <h2 v-html="$t('cbd.cbd-16')"></h2>
        <p v-html="$t('cbd.cbd-17')"></p>
      </Texte>
    </Bloc>
    <Bloc class="height-normal span-2">
      <Texte link="#">
        <h2 v-html="$t('cbd.cbd-18')"></h2>
      </Texte>
      <a href="https://www.nature.com/articles/npp201693"><p>{{ $t('cbd.cbd-19') }}</p></a> 
      <a href="https://www.nature.com/articles/nri1602"><p>{{ $t('cbd.cbd-20') }}</p></a>
    </Bloc>
  </div>
</template>
<script>
export default {
  name: 'CBD',
  data () {
    return {
      description: 'Obtenez un service qui vous aide à trouver des informations pertinentes sur le CBD contenu dans le chanvre tout en vous connectant aux entreprises québécoises du domaine. Il y a des articles de blogs, des sections d’informations et des profils d’entreprises.',
      title: 'CBD'
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
  #soins {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: auto;
    grid-gap: 10px;
    width: 100%;
  }
  .photo-un {
    background-image: url(~/static/cbd/body.png);
  }
  .photo-deux {
    background-image: url(~/static/cbd/cbd3d.png);
  }
  .photo-trois {
    background-image: url(~/static/cbd/meditation.jpg);
  }
  .photo-quattre {
    background-image: url(~/static/cbd/athlete.jpg);
  }
</style>