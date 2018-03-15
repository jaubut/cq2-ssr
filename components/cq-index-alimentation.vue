<template>
  <Bloc class="height-normal">
    <Texte link="alimentation">
      <h2 v-html="$t('ali.ali-1')"></h2>
      <p class="center" v-html="$t('ali.ali-2')"></p>
    </Texte>
    <img class="img-index-quattre" src="~/static/index/photo-alimentation.png" alt="">
  </Bloc>
</template>
<script>
export default {
  name: 'Huit'
}
</script>
<style scoped>
</style>
