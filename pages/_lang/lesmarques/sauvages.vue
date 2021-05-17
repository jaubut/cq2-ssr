<template>
  <div id="SauvageCo">
    <Bloc class="height-normal span-2 photo-back"> 
      <Texte link="#" class="align-left">
        <h2 v-html="$t('sauvage.sauvage-1')"></h2>
      </Texte>
    </Bloc>
    <Bloc class="span-2 beige">
      <Texte link="#">
        <h2 v-html="$t('sauvage.sauvage-2')"></h2>
      </Texte>
    </Bloc>
    <Bloc class="height-normal photo-six"></Bloc>
    <Bloc class="height-normal photo-deux"></Bloc>
    <Bloc class="beige height-normal">
      <Texte link="#" class="align-right">
        <h2 v-html="$t('sauvage.sauvage-3')"></h2>
        <p v-html="$t('sauvage.sauvage-4')"></p>
      </Texte>
    </Bloc>
    <Bloc class="height-normal">
      <Texte link="#" class="align-right">
        <p v-html="$t('sauvage.sauvage-5')"></p>
      </Texte>
    </Bloc>
    <Bloc class="height-normal span-2 photo-trois" style="padding: 0;">
    </Bloc>
    <Bloc class="span-2 align-left overflow-yes whitebg">
      <BigTexte>
        <span></span>
        <router-link to="#">{{ $t('sauvage.sauvage-10') }}</router-link>
      </BigTexte>
    </Bloc>
    <Bloc class="height-normal beige">
      <Texte link="#">
        <h2 v-html="$t('sauvage.sauvage-8')"></h2>
        <p class="justify" v-html="$t('sauvage.sauvage-9')"></p>
      </Texte>
    </Bloc>
    <Bloc class="height-normal photo-cinq"></Bloc>
    <Bloc class="height-normal photo-quattre"></Bloc>
    <Bloc class="height-normal beige">
      <Texte link="#" class="align-left">
        <h2 v-html="$t('sauvage.sauvage-11')"></h2>
      </Texte>
      <CqOutButton href="https://www.sauvage.clothing">{{ $t('sauvage.sauvage-12') }}</CqOutButton>
    </Bloc>
  </div>
</template>
<script>
export default {
  name: 'SauvageCo',
  data () {
    return {
      description: 'Le chanvre et le bambou sont deux plantes dites sauvages, qui peuvent pousser librement dans la nature. Le sauvage, lui, est un être qui vit en liberté dans la nature.',
      title: 'Sauvage'
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
        { hid: 'og:image', property: 'og:image', content: '/sauvage/sauvage-1.jpg' },
        { hid: 'og:description', property: 'og:description', content: this.description },
        { hid: 'og:title', property: 'og:title', content: this.title }
      ]
    }
  }
}
</script>
<style scoped>
  #SauvageCo {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: auto;
    grid-gap: 10px;
    width: 100%;
  }
  #logo {
    width: 75px !important;
    height: 75px; 
  }
  .photo-back {
    background-image: url(~/static/sauvage/sauvage-3.jpg);
    color: white;
  }
  .photo-deux {
    background-image: url(~/static/sauvage/sauvage-4.jpg);
  }
  .photo-trois {
    background-image: url(~/static/sauvage/sauvage-5.jpg);
  }
  .photo-quattre {
    background-image: url(~/static/sauvage/sauvage-9.jpg);
  }
  .photo-cinq {
    background-image: url(~/static/sauvage/sauvage-6.jpg);
  }
  .photo-six {
    background-image: url(~/static/sauvage/sauvage-7.jpg);
  }
</style>
