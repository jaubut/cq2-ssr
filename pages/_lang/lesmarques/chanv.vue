<template>
  <div id="ChanvCo">
    <Bloc class="height-normal span-2 photo-back">
      <Texte link="#" class="align-left">
        <h2 v-html="$t('chanv.chanv-1')"></h2>
      </Texte>
    </Bloc>
    <Bloc class="height-normal">
      <Texte link="#">
        <h2 v-html="$t('chanv.chanv-2')"></h2>
        <p v-html="$t('chanv.chanv-3')"></p>
      </Texte>
    </Bloc>
    <Bloc class="height-normal photo-deux"></Bloc>
    <Bloc class="beige height-normal">
      <Texte link="#" class="align-right">
        <h2 v-html="$t('chanv.chanv-4')"></h2>
        <p v-html="$t('chanv.chanv-5')"></p>
      </Texte>
    </Bloc>
    <Bloc class="height-normal">
      <Texte link="#" class="align-right">
        <h2 v-html="$t('chanv.chanv-6')"></h2>
        <p v-html="$t('chanv.chanv-7')"></p>
      </Texte>
    </Bloc>
    <Bloc class="height-normal span-2" style="padding: 0;">
      <video autoplay loop muted poster="">
        <source src="../../../assets/video/facebook-chanv.mp4" type="video/mp4">
        <source src="../../../assets/video/facebook-chanv.webm" type="video/webm">
      </video>
    </Bloc>
    <Bloc class="span-2 align-left overflow-yes whitebg">
      <BigTexte>
        <span></span>
        <router-link to="#">{{ $t('chanv.chanv-8') }}</router-link>
      </BigTexte>
    </Bloc>
    <Bloc class="height-normal beige">
      <Texte link="#">
        <h2 v-html="$t('chanv.chanv-9')"></h2>
        <p class="justify" v-html="$t('chanv.chanv-10')"></p>
      </Texte>
    </Bloc>
    <Bloc class="height-normal photo-trois"></Bloc>
    <Bloc class="height-normal photo-quattre"></Bloc>
    <Bloc class="height-normal beige">
      <Texte link="#" class="align-left">
        <h2 v-html="$t('chanv.chanv-11')"></h2>
        <p class="justify" v-html="$t('chanv.chanv-12')"></p>
      </Texte>
    </Bloc>
    <Bloc class="height-normal beige">
      <Texte link="#">
        <h2 v-html="$t('chanv.chanv-13')"></h2>
        <p v-html="$t('chanv.chanv-14')"></p>
      </Texte>
    </Bloc>
    <Bloc class="height-normal photo-cinq"></Bloc>
    <Bloc class="span-2 align-left overflow-yes whitebg">
      <BigTexte>
        <span></span>
        <router-link to="#">{{ $t('chanv.chanv-15') }}</router-link>
      </BigTexte>
    </Bloc>
    <Bloc class="height-normal">
      <Texte link="#">
        <h2 v-html="$t('chanv.chanv-16')"></h2>
        <p v-html="$t('chanv.chanv-17')"></p>
      </Texte>
    </Bloc>
    <Bloc class="height-normal beige">
      <Texte link="#">
        <h2 v-html="$t('chanv.chanv-18')"></h2>
      </Texte>
      <CqOutButton href="https://www.chanv.co">{{ $t('chanv.chanv-19') }}</CqOutButton>
    </Bloc>
  </div>
</template>
<script>
export default {
  name: 'ChanvCo',
  data () {
    return {
      description: 'Chanv est une entreprise qui opère dans le domaine des soins corporels depuis 2004. Elle est l\'experte des produits pour la peau.',
      title: 'Chanv'
    }
  },
  head () {
    return {
      title: this.title,
      meta: [
        { hid: 'description', name: 'description', content: this.description },
        { hid: 'og:image', property: 'og:image', content: '/onepagechanv/header.png' },
        { hid: 'og:description', property: 'og:description', content: this.description },
        { hid: 'og:title', property: 'og:title', content: this.title }
      ]
    }
  }
}
</script>
<style scoped>
  #ChanvCo {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: auto;
    grid-gap: 10px;
    width: 100%;
  }
  .photo-back {
    background-image: url(~/static/onepagechanv/header.png);
  }
  .photo-deux {
    background-image: url(~/static/onepagechanv/manon.jpg);
  }
  .photo-trois {
    background-image: url(~/static/onepagechanv/cremepeau.jpg);
  }
  .photo-quattre {
    background-image: url(~/static/onepagechanv/serum2.png);
  }
  .photo-cinq {
    background-image: url(~/static/onepagechanv/huile.png);
  }
</style>
