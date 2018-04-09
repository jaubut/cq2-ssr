<template>
  <div id="jechanvre">
    <Bloc class="height-normal span-2 photo-un">
      <Texte link="#" class="white">
        <h1>Hemprove</h1>
      </Texte>
    </Bloc>
    <Bloc class="height-normal photo-deux"></Bloc>
    <Bloc class="height-normal">
      <Texte link="#" class="align-right">
        <h2 v-html="$t('hemprove.hemprove-1')"></h2>
        <p v-html="$t('hemprove.hemprove-2')"></p>
      </Texte>
     </Bloc>
     <Bloc class="height-normal">
      <Texte link="#">
        <h2 v-html="$t('hemprove.hemprove-3')"></h2>
        <p v-html="$t('hemprove.hemprove-4')"></p>
      </Texte>
    </Bloc>
    <Bloc class="height-normal photo-trois">
    </Bloc>
    <Bloc class="span-2 no-padding height-normal">
      <iframe width="100%" height="100%" src="https://www.youtube.com/embed/yspSKtVvOdA?rel=0&amp;controls=0&amp;showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
    </Bloc>
    <Bloc class="span-2 align-left overflow-yes whitebg no-padding">
      <BigTexte>
        <span></span>
        <router-link to="#">{{ $t('jechanvre.jechanvre-9') }}</router-link>
      </BigTexte>
    </Bloc>
    <Bloc class="height-normal beige">
      <Texte link="#">
        <h2 v-html="$t('hemprove.hemprove-5')"></h2>
        <p v-html="$t('hemprove.hemprove-6')"></p>
      </Texte>
    </Bloc>
    <Bloc class="height-normal green-hemprove">
      <Texte link="#" class="white">
        <h2 v-html="$t('hemprove.hemprove-7')"></h2>
      </Texte>
      <img src="~/static/hemprove/hemprove5.png" alt="cbd molecule">
      <CqOutButton href="https://hemprove.ca/" caca="green-hemprove">{{ $t('hemprove.hemprove-8') }}</CqOutButton>
    </Bloc>
  </div>
</template>
<script>
export default {
  name: 'jeChanvre',
  data () {
    return {
      description: 'Hemprove est un mouvement qui a vu le jour grâce à William Fiset. Le projet est né d’un questionnement sur les produits et les traitements pharmaceutiques employés pour soigner les problèmes de peau. La jeune entreprise compte démocratiser les bienfaits du CBD pour la santé !',
      title: 'Hemprove'
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
        { hid: 'og:image', property: 'og:image', content: '/hemprove/hemprove1.png' },
        { hid: 'og:description', property: 'og:description', content: this.description },
        { hid: 'og:title', property: 'og:title', content: this.title }
      ]
    }
  }
}
</script>
<style scoped>
  #jechanvre {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: auto;
    grid-gap: 10px;
    width: 100%;
  }
  .photo-un {
    background-image: url(~/static/hemprove/hemprove1.png);
  }
  .photo-deux {
    background-image: url(~/static/hemprove/hemprove2.jpg);
  }
  .photo-trois {
    background-image: url(~/static/hemprove/hemprove4.jpg);
  }
  .photo-quattre {
    background-image: url(~/static/jechanvre/cantin.jpg);
  }
  .photo-cinq {
    background-image: url(~/static/textile/samuelboulay.jpg);
  }
  .photo-six {
    background-image: url(~/static/jechanvre/cantin2.jpg);
  }
  .green-hemprove {
    background: #009042 !important;
  }
</style>
