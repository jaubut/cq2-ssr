<template>
  <div id="soins">
    <Bloc class="span-2 beige">
      <Texte link="#">
        <h2 v-html="$t('soins.soins-1')"></h2>
        <p v-html="$t('soins.soins-2')"></p>
      </Texte>
    </Bloc>
    <Bloc class="span-2 align-left overflow-yes whitebg">
      <BigTexte>
          <h4 v-html="$t('soins.soins-3')"></h4>
      </BigTexte>
    </Bloc>
    <Bloc class="height-normal beige">
      <Texte link="#">
        <h2 v-html="$t('soins.soins-4')"></h2>
        <p v-html="$t('soins.soins-5')"></p>
      </Texte>
    </Bloc>
    <Bloc class="height-normal photo-un"></Bloc>
    <Bloc class="height-normal photo-deux"></Bloc>
    <Bloc class="height-normal">
      <Texte link="#">
        <h2 v-html="$t('soins.soins-6')"></h2>
        <p v-html="$t('soins.soins-7')"></p>
      </Texte>
    </Bloc>
    <Bloc class="height-normal beige">
      <Texte link="#">
        <h2 v-html="$t('soins.soins-8')"></h2>
        <p v-html="$t('soins.soins-9')"></p>
      </Texte>
    </Bloc>
    <Bloc class="height-normal photo-trois"></Bloc>
    <Bloc class="height-normal photo-quattre"></Bloc>
    <Bloc class="height-normal">
      <Texte link="#">
        <h2 v-html="$t('soins.soins-10')"></h2>
        <p v-html="$t('soins.soins-11')"></p>
      </Texte>
    </Bloc>
    <Bloc class="height-normal">
      <Texte link="#">
        <h2 v-html="$t('soins.soins-12')"></h2>
        <p v-html="$t('soins.soins-13')"></p>
      </Texte>
      <router-link class='hyperlien' to='/blog/general/dossier-huiledechanvre'><p>{{ $t('soins.soins-14') }}</p></router-link>
    </Bloc>
    <Bloc class="height-normal photo-cinq"></Bloc>
    <Bloc class="span-2 beige">
      <Texte link="#">
        <h2 v-html="$t('soins.soins-15')"></h2>
        <p v-html="$t('soins.soins-16')"></p>
      </Texte>
      <CqButton href="/lesmarques/chanv">{{ $t('soins.soins-17') }}</CqButton>
    </Bloc>
  </div>
</template>
<script>
export default {
  name: 'soinscorporels',
  data () {
    return {
      description: 'Découvrez l’huile de chanvre, la plus complète et la plus efficace des huiles naturelles utilisées en soins corporels. C’est une huile sèche à pénétration rapide qui convient à tous les types de peau.',
      title: 'Soins Corporels'
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
        { hid: 'og:image', property: 'og:image', content: '/soinscorporel/coline.jpg' },
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
    background-image: url(~/static/soinscorporel/hydratant.png);
  }
  .photo-deux {
    background-image: url(~/static/soinscorporel/coline.jpg);
  }
  .photo-trois {
    background-image: url(~/static/soinscorporel/jeunesse.jpg);
  }
  .photo-quattre {
    background-image: url(~/static/soinscorporel/nourrit.jpg);
  }
  .photo-cinq {
    background-image: url(~/static/soinscorporel/antiinflammatoire.jpg);
  }
</style>
