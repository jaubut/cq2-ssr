<template>
  <Bloc class="height-normal span-2">
    <Texte link="lechanvre">
      <h2 v-html="$t('intro.intro-1')"></h2>
      <p v-html="$t('intro.intro-2')"></p>
    </Texte>
  </Bloc>
</template>
<script>
export default {
}
</script>
<style scoped>
  h2 {
	font-size: 48px !important;
  }
</style>
