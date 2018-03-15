<template>
  <Bloc class="green height-normal">
    <Texte link="apropos">
      <h2 v-html="$t('cq.cq-1')"></h2>
      <p class="center" v-html="$t('cq.cq-2')"></p>
    </Texte>
    <CqButton caca="color-beige" href="/apropos">{{ $t('cq.cq-3') }}</CqButton>
  </Bloc>
</template>
<script>
export default {
  name: 'index-cq'
}
</script>
<style scoped>
</style>
