<template>
  <Bloc class="green height-normal">
    <Texte link="">
      <h2 v-html="$t('lettre.lettre-1')"></h2>
      <p class="center" v-html="$t('lettre.lettre-2')"></p>
    </Texte>
    <CqButton caca="color-beige" href="/#formshit">{{ $t('lettre.lettre-3') }}</CqButton>
  </Bloc>
</template>
<script>
export default {

}
</script>
<style scoped>
</style>