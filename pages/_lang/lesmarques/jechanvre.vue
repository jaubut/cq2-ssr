<template>
  <div id="jechanvre">
    <Bloc class="height-normal span-2 photo-un">
    </Bloc>
    <Bloc class="height-normal photo-deux"></Bloc>
    <Bloc class="height-normal">
      <Texte link="#" class="align-right">
        <h2 v-html="$t('jechanvre.jechanvre-1')"></h2>
        <p v-html="$t('jechanvre.jechanvre-2')"></p>
      </Texte>
     </Bloc>
     <Bloc class="height-normal">
      <Texte link="#">
        <h2 v-html="$t('jechanvre.jechanvre-3')"></h2>
        <p v-html="$t('jechanvre.jechanvre-4')"></p>
      </Texte>
    </Bloc>
    <Bloc class="height-normal photo-trois">
      <CqOutButton href="https://www.jechanvre.io">{{ $t('jechanvre.jechanvre-5') }}</CqOutButton>
    </Bloc>
    <Bloc class="span-2 align-left overflow-yes whitebg no-padding">
      <BigTexte>
        <span>3</span>
        <router-link to="#">{{ $t('jechanvre.jechanvre-6') }}</router-link>
      </BigTexte>
    </Bloc>
    <Bloc class="height-normal">
      <Texte link="#">
        <h2 v-html="$t('jechanvre.jechanvre-7')"></h2>
        <p class="justify" v-html="$t('jechanvre.jechanvre-8')"></p>
      </Texte>
    </Bloc>
    <Bloc class="height-normal photo-quattre"></Bloc>
    <Bloc class="height-normal photo-cinq"></Bloc>
    <Bloc class="height-normal photo-six"></Bloc>
    <Bloc class="span-2 align-left overflow-yes whitebg no-padding">
      <BigTexte>
        <span></span>
        <router-link to="#">{{ $t('jechanvre.jechanvre-9') }}</router-link>
      </BigTexte>
    </Bloc>
    <Bloc class="height-normal beige">
      <Texte link="#">
        <h2 v-html="$t('jechanvre.jechanvre-10')"></h2>
        <p v-html="$t('jechanvre.jechanvre-11')"></p>
      </Texte>
    </Bloc>
    <Bloc class="height-normal photo-sept">
      <Texte link="#">
        <h2 v-html="$t('jechanvre.jechanvre-12')"></h2>
      </Texte>
      <CqOutButton href="https://www.jechanvre.io">{{ $t('jechanvre.jechanvre-13') }}</CqOutButton>
    </Bloc>
  </div>
</template>
<script>
export default {
  name: 'jeChanvre',
  data () {
    return {
      description: 'Je chanvre est notre initiative pour mener au monde des innovations en chanvre.',
      title: 'Je chanvre'
    }
  },
  head () {
    return {
      title: this.title,
      meta: [
        { hid: 'description', name: 'description', content: this.description },
        { hid: 'og:image', property: 'og:image', content: '/textile/samjeremycropped.jpg' },
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
    background-image: url(~/static/jechanvre/banner.jpg);
  }
  .photo-deux {
    background-image: url(~/static/textile/felix2.jpg);
  }
  .photo-trois {
    background-image: url(~/static/jechanvre/equipe2.jpg);
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
  .photo-sept {
    background-image: url(~/static/textile/samjeremycropped.jpg);
  }
</style>
