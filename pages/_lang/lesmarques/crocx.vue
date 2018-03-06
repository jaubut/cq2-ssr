<template>
  <div id="Crocx">
    <Bloc class="height-normal span-2 photo-un">
      <Texte link="#" class="align-left">
        <h2 v-html="$t('crocx.crocx-1')"></h2>
      </Texte>
      <CqButton href="https://www.crocx.co">{{ $t('crocx.crocx-2') }}</CqButton>
    </Bloc>
    <Bloc class="height-normal">
      <Texte link="#">
        <h2 v-html="$t('crocx.crocx-3')"></h2>
        <p v-html="$t('crocx.crocx-4')"></p>
      </Texte>
    </Bloc >
    <Bloc class="height-normal photo-deux"></Bloc>
    <Bloc class="height-normal photo-trois"></Bloc>
    <Bloc class="height-normal">
      <Texte link="#" class="align-right">
        <h2 v-html="$t('crocx.crocx-5')"></h2>
        <p v-html="$t('crocx.crocx-6')"></p>
      </Texte>
    </Bloc>
    <Bloc class="height-normal">
      <Texte link="#" class="align-right">
        <h2 v-html="$t('crocx.crocx-7')"></h2>
        <p v-html="$t('crocx.crocx-8')"></p>
      </Texte>
    </Bloc>
    <Bloc class="height-normal photo-quattre"></Bloc>
    <Bloc class="height-normal photo-cinq"></Bloc>
    <Bloc class="height-normal">
      <Texte link="#" class="align-right">
        <h2 v-html="$t('crocx.crocx-9')"></h2>
        <p v-html="$t('crocx.crocx-10')"></p>
      </Texte>
    </Bloc>
    <Bloc class="span-2 align-left overflow-yes whitebg">
      <BigTexte>
        <span></span>
        <router-link to="#">{{ $t('crocx.crocx-11') }}</router-link>
      </BigTexte>
    </Bloc>
    <Bloc class="height-normal">
      <Texte link="#">
        <h2 v-html="$t('crocx.crocx-12')"></h2>
        <p class="justify" v-html="$t('crocx.crocx-13')"></p>
      </Texte>
    </Bloc>
    <Bloc class="height-normal photo-six"></Bloc>
    <Bloc class="height-normal photo-sept"></Bloc>
    <Bloc class="height-normal beige">
      <Texte link="#" class="align-left">
        <h2 v-html="$t('crocx.crocx-14')"></h2>
        <p class="justify" v-html="$t('crocx.crocx-15')"></p>
      </Texte>
    </Bloc>
    <Bloc class="height-normal">
      <Texte link="#">
        <h2 v-html="$t('crocx.crocx-16')"></h2>
        <p v-html="$t('crocx.crocx-17')"></p>
      </Texte>
    </Bloc>
    <Bloc class="height-normal photo-huit"></Bloc>
    <Bloc class="span-2 align-left overflow-yes whitebg">
      <BigTexte>
        <span></span>
        <router-link to="#">{{ $t('crocx.crocx-18') }}</router-link>
      </BigTexte>
    </Bloc>
    <Bloc class="height-normal beige">
      <Texte link="#">
        <h2 v-html="$t('crocx.crocx-19')"></h2>
        <p v-html="$t('crocx.crocx-20')"></p>
      </Texte>
    </Bloc>
    <Bloc class="height-normal">
      <Texte link="#">
        <h2 v-html="$t('crocx.crocx-21')"></h2>
      </Texte>
      <CqOutButton href="https://www.crocx.co">{{ $t('crocx.crocx-22') }}</CqOutButton>
    </Bloc>
  </div>
</template>
<script>
export default {
  name: 'Crocx',
  data () {
    return {
      description: 'Crocx offre des produits pour animaux spécialisés. Une nourriture optimale pour vos animaux.',
      title: 'Crocx'
    }
  },
  head () {
    return {
      title: this.title,
      meta: [
        { hid: 'description', name: 'description', content: this.description },
        { hid: 'og:image', property: 'og:image', content: '/crocx/background2.png' },
        { hid: 'og:description', property: 'og:description', content: this.description },
        { hid: 'og:title', property: 'og:title', content: this.title }
      ]
    }
  }
}
</script>
<style scoped>
  #Crocx {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: auto;
    grid-gap: 10px;
    width: 100%;
  }
  .photo-un {
    background-image: url(~/static/crocx/background2.png);
  }
  .photo-deux {
    background-image: url(~/static/crocx/bethy.png);
  }
  .photo-trois {
    background-image: url(~/static/crocx/top2.png);
  }
  .photo-quattre {
    background-image: url(~/static/crocx/plaisirindompte.png);
  }
  .photo-cinq {
    background-image: url(~/static/crocx/produitchanvre.png);
  }
  .photo-six {
    background-image: url(~/static/crocx/monsieur.jpg);
  }
  .photo-sept {
    background-image: url(~/static/crocx/laissecrocx.jpg);
  }
  .photo-huit {
    background-image: url(~/static/crocx/monsieurvert.jpg);
  }
</style>
