<template>
  <div id="construction">
    <Bloc class="span-2 beige" >
      <Texte link="#" class="align-left">
        <h2 v-html="$t('construction.title')"></h2>
        <p v-html="$t('construction.description')"></p>
      </Texte>
    </Bloc>
    <Bloc class="height-normal photo-un"></Bloc>
    <Bloc class="height-normal">
      <Texte link="#" class="align-right">
        <h2 v-html="$t('construction.mur')"></h2>
        <p v-html="$t('construction.mur-desc')"></p>
      </Texte>
    </Bloc>
    <Bloc class="height-normal">
      <Texte link="#" class="align-right">
        <h2 v-html="$t('construction.finition')"></h2>
        <p v-html="$t('construction.finition-desc')"></p>
      </Texte>
    </Bloc>
    <Bloc class="height-normal photo-deux"></Bloc>
    <Bloc class="height-normal photo-trois"></Bloc>
    <Bloc class="height-normal">
      <Texte link="#">
        <blockquote v-html="$t('construction.blockquote-antho')"></blockquote>
        <p class="author" v-html="$t('construction.blockquote-name')"></p>
      </Texte>
      <InterButton class="dark" href="/lesmarques/artduchanvre">{{ $t('construction.artduchanvre') }}</InterButton>
    </Bloc>
    <Bloc class="height-normal span-2">
      <Texte link="#">
        <h2 v-html="$t('construction.avantage')"></h2>
        <p v-html="$t('construction.avantage-1')"></p>
      </Texte>
    </Bloc>
    <Bloc class="height-normal photo-quattre">
      <Texte link="#" class="align-left">
        <h2 v-html="$t('construction.avantage-2')"></h2>
        <p class="justify" v-html="$t('construction.avantage-3')"></p>
      </Texte>
    </Bloc>
    <Bloc class="height-normal photo-cinq">
      <Texte link="#">
        <h2 v-html="$t('construction.avantage-4')"></h2>
        <p class="justify" v-html="$t('construction.avantage-5')"></p>
      </Texte>
    </Bloc>
    <Bloc class="height-normal photo-six">
      <Texte link="#">
        <h2 v-html="$t('construction.avantage-6')"></h2>
        <p class="justify" v-html="$t('construction.avantage-7')"></p>
      </Texte>
    </Bloc>
    <Bloc class="height-normal photo-sept">
      <Texte link="#">
        <h2 v-html="$t('construction.avantage-8')"></h2>
        <p v-html="$t('construction.avantage-9')"></p>
      </Texte>
    </Bloc>
    <Bloc class="height-normal photo-huit">
      <Texte link="#">
        <h2 v-html="$t('construction.avantage-10')"></h2>
        <p v-html="$t('construction.avantage-11')"></p>
      </Texte>
    </Bloc>
    <Bloc class="height-normal photo-neuf">
      <Texte link="#">
        <h2 v-html="$t('construction.avantage-12')"></h2>
        <p v-html="$t('construction.avantage-13')"></p>
      </Texte>
    </Bloc>
    <Bloc class="height-normal">
      <Texte link="#">
        <h2>{{ $t('construction.avantage-14') }}</h2>
      </Texte>
    </Bloc>
    <Bloc class="height-normal">
      <Texte link="#">
        <h2 v-html="$t('construction.technique-1')"></h2>
        <p v-html="$t('construction.technique-2')"></p>
      </Texte>
    </Bloc>
    <Bloc class="height-normal">
      <Texte link="#">
        <h2 v-html="$t('construction.technique-3')"></h2>
        <p v-html="$t('construction.technique-4')"></p>
      </Texte>
    </Bloc>
    <Bloc class="height-normal">
      <Texte link="#">
        <h2 v-html="$t('construction.technique-5')"></h2>
        <p v-html="$t('construction.technique-6')"></p>
      </Texte>
      <router-link class="hyperlien" to="/blog/construction/comment-construire-en-chanvre">
        <p v-html="$t('construction.technique-7')"></p>
      </router-link>
    </Bloc>
    <Bloc class="height-normal span-2 photo-dix">
      <Texte link="#">
        <h2 v-html="$t('construction.credit-1')"></h2>
        <p v-html="$t('construction.credit-2')"></p>
      </Texte>
      <CqOutButton href="https://www.artduchanvre.com">{{ $t('construction.credit-3') }}</CqOutButton>
    </Bloc>
  </div>
</template>
<script>
export default {
  name: 'construction',
  data () {
    return {
      description: 'Découvrez l’habitation en chanvre : confortable, durable et adapté au climat québécois.  Obtenez toute l’information entourant les méthodes pour l’intégrer à votre maison !',
      title: 'Construction'
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
        { hid: 'og:image', property: 'og:image', content: '/artchanvre/finition.png' },
        { hid: 'og:description', property: 'og:description', content: this.description },
        { hid: 'og:title', property: 'og:title', content: this.title }
      ]
    }
  }
}
</script>
<style scoped>
  #construction {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: auto;
    grid-gap: 10px;
    width: 100%;
  }
  .hero-photo {
    background-image: url(~/assets/img/photo-3.jpg) !important;
  }
  .photo-un {
    background-image: url(~/static/artchanvre/interieur.png);
  }
  .photo-deux {
    background-image: url(~/static/artchanvre/finition.png);
  }
  .photo-trois {
    background-image: url(~/static/artchanvre/antho.png);
  }
  .photo-quattre {
    background-image: url(~/static/artchanvre/mur1.jpg);
  }
  .photo-cinq {
    background-image: url(~/static/artchanvre/mur2.jpg);
  }
  .photo-six {
    background-image: url(~/static/artchanvre/mur3.jpg);
  }
  .photo-sept {
    background-image: url(~/static/artchanvre/mur4.jpg);
  }
  .photo-huit {
    background-image: url(~/static/artchanvre/mur5.jpg);
  }
  .photo-neuf {
    background-image: url(~/static/artchanvre/mur6.jpg);
  }
  .photo-dix {
    background-image: url(~/static/artchanvre/antho.png);
  }
</style>
