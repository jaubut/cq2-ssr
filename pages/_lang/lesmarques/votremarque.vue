<template>
  <div id="ChanvCo">
    <Bloc class="height-normal span-2 beige">
      <Texte link="#" class="align-left">
        <h2 v-html="$t('votre.votre-1')"></h2>
      </Texte>
    </Bloc>
    <Bloc class="height-normal">
      <Texte link="#">
        <h2 v-html="$t('votre.votre-2')"></h2>
        <p v-html="$t('votre.votre-3')"></p>
      </Texte>
    </Bloc>
    <Bloc class="height-normal">
      <Texte link="#" class="align-right">
        <h2 v-html="$t('votre.votre-4')"></h2>
        <p v-html="$t('votre.votre-5')"></p>
      </Texte>
    </Bloc>
    <Bloc class="height-normal">
      <Texte link="#">
        <h2 v-html="$t('votre.votre-6')"></h2>
        <p v-html="$t('votre.votre-7')"></p>
      </Texte>
    </Bloc>
    <Bloc class="height-normal">
      <Texte link="#">
        <h2 v-html="$t('votre.votre-8')"></h2>
        <p v-html="$t('votre.votre-9')"></p>
      </Texte>
    </Bloc>
    <Bloc class="height-normal beige span-2">
      <Texte link="#">
        <h2 v-html="$t('votre.votre-10')"></h2>
      </Texte>
      <CqOutButton href="mailto:allo@chanvreduquebec.org">{{ $t('votre.votre-11') }}</CqOutButton>
    </Bloc>
  </div>
</template>
<script>
export default {
  name: 'ChanvCo',
  data () {
    return {
      description: 'Vous aussi, afficher votre marque sur chanvre du québec. Ensemble nous formons une famille.',
      title: 'Votre marque'
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
  #ChanvCo {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: auto;
    grid-gap: 10px;
    width: 100%;
  }
</style>
