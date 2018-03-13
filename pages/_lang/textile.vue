<template>
  <div id="textile">
    <Bloc class="span-2 beige" >
      <Texte link="#">
        <h2 v-html="$t('textile.textile-1')"></h2>
        <p v-html="$t('textile.textile-2')"></p>
      </Texte>
    </Bloc>
    <Bloc class="height-normal">
      <Texte link="#">
        <h2 v-html="$t('textile.textile-3')"></h2>
        <p v-html="$t('textile.textile-4')"></p>
      </Texte>
    </Bloc>
    <Bloc class="height-normal photo-un"></Bloc>
    <Bloc class="height-normal photo-deux"></Bloc>
    <Bloc class="height-normal beige">
      <Texte link="#">
        <h2 v-html="$t('textile.textile-5')"></h2>
        <p v-html="$t('textile.textile-6')"></p>
      </Texte>
    </Bloc>
    <Bloc class="height-normal">
      <Texte link="#">
        <h2 v-html="$t('textile.textile-7')"></h2>
        <p v-html="$t('textile.textile-8')"></p>
      </Texte>
      <CqButton href="https://www.jechanvre.io">{{ $t('textile.textile-9') }}</CqButton>
    </Bloc>
    <Bloc class="height-normal photo-trois"></Bloc>
    <Bloc class="span-2 align-left overflow-yes whitebg">
      <BigTexte>
        <span>4</span>
          <h4 v-html="$t('textile.textile-10')"></h4>
      </BigTexte>
    </Bloc>
    <Bloc class="height-normal photo-quattre"></Bloc>
    <Bloc class="height-normal">
      <Texte link="#">
        <h2 v-html="$t('textile.textile-11')"></h2>
        <p v-html="$t('textile.textile-12')"></p>
      </Texte>
    </Bloc>
    <Bloc class="height-normal">
      <Texte link="#">
        <h2 v-html="$t('textile.textile-13')"></h2>
        <p v-html="$t('textile.textile-14')"></p>
      </Texte>
    </Bloc>
    <Bloc class="height-normal beige">
      <Texte link="#">
        <h2 v-html="$t('textile.textile-15')"></h2>
        <p v-html="$t('textile.textile-16')"></p>
      </Texte>
    </Bloc>
    <Bloc class="height-normal">
      <Texte link="#">
        <h2 v-html="$t('textile.textile-17')"></h2>
        <p v-html="$t('textile.textile-18')"></p>
      </Texte>
      <router-link class='hyperlien' to='/blog/textile/pourquoi-se-vetir-en-chanvre'><p v-html="$t('textile.textile-19')"></p></router-link>
    </Bloc>
    <Bloc class="height-normal photo-cinq"></Bloc>
    <Bloc class="span-2 align-left overflow-yes whitebg">
      <BigTexte>
          <h4 v-html="$t('textile.textile-20')"></h4>
      </BigTexte>
    </Bloc>
    <Bloc class="height-normal">
      <Texte link="#">
        <p v-html="$t('textile.textile-21')"></p>
      </Texte>
    </Bloc>
    <Bloc class="height-normal photo-six"></Bloc>
    <Bloc class="height-normal photo-sept"></Bloc>
    <Bloc class="height-normal">
      <Texte link="#">
        <p v-html="$t('textile.textile-22')"></p>
      </Texte>
    </Bloc>
  </div>
</template>
<script>
export default {
  name: 'textile',
  data () {
    return {
      description: 'Obtenez un service qui vous aide à trouver des informations pertinentes sur le chanvre en textile tout en vous connectant aux entreprises québécoises du domaine. Il y a des articles de blogs, des sections d’informations et des profils d’entreprises.',
      title: 'Textile'
    }
  },
  mounted () {
    this.$initFbSDK()
  },
  head () {
    return {
      title: this.title,
      meta: [
        { hid: 'keywords', name: 'keywords', content: 'chanvre, textile, chanvre textile, hemp, hemp textile, tissus, tissus résistant, tissus naturel' },
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
  #textile {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: auto;
    grid-gap: 10px;
    width: 100%;
  }
  .photo-un {
    background-image: url(~/static/textile/samjeremycropped.jpg);
  }
  .photo-deux {
    background-image: url(~/static/textile/textile.jpg);
  }
  .photo-trois {
    background-image: url(~/static/textile/felix2.jpg);
  }
  .photo-quattre {
    background-image: url(~/static/textile/christian.jpg);
  }
  .photo-cinq {
    background-image: url(~/static/textile/corde.jpg);
  }
  .photo-six {
    background-image: url(~/static/textile/shinto.jpg);
  }
  .photo-sept {
    background-image: url(~/static/textile/adidas.jpg);
  }
</style>
