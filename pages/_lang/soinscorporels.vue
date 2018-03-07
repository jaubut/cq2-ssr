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
        <h2 v-html="$t('soins.soins-5')"></h2>
        <p v-html="$t('soins.soins-6')"></p>
      </Texte>
    </Bloc>
    <Bloc class="height-normal beige">
      <Texte link="#">
        <h2 v-html="$t('soins.soins-7')"></h2>
        <p v-html="$t('soins.soins-8')"></p>
      </Texte>
    </Bloc>
    <Bloc class="height-normal photo-trois"></Bloc>
    <Bloc class="height-normal photo-quattre"></Bloc>
    <Bloc class="height-normal">
      <Texte link="#">
        <h2 v-html="$t('soins.soins-9')"></h2>
        <p v-html="$t('soins.soins-10')"></p>
      </Texte>
    </Bloc>
    <Bloc class="height-normal">
      <Texte link="#">
        <h2 v-html="$t('soins.soins-11')"></h2>
        <p v-html="$t('soins.soins-12')"></p>
      </Texte>
    </Bloc>
    <Bloc class="height-normal photo-cinq"></Bloc>
    <Bloc class="span-2 beige">
      <Texte link="#">
        <h2 v-html="$t('soins.soins-13')"></h2>
        <p v-html="$t('soins.soins-14')"></p>
      </Texte>
      <CqButton href="/lesmarques/chanv"></CqButton>
    </Bloc>
  </div>
</template>
<script>
export default {
  name: 'soinscorporels',
  data () {
    return {
      description: 'Obtenez un service qui vous aide à trouver des informations pertinentes sur le chanvre en soins corporels tout en vous connectant aux entreprises québécoises du domaine. Il y a des articles de blogs, des sections d’informations et des profils d’entreprises.',
      title: 'Soins Corporels'
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
