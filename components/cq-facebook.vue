<template>
  <Bloc class="height-normal blue dark">
    <Texte link="#">
      <h2>Facebook</h2>
      <p class="center">Suivez-nous !</p>
    </Texte>
    <div class="fb-like" data-href="https://facebook.com/chanvreduquebec/" data-layout="button_count" data-action="like" data-size="large" data-show-faces="true" data-share="false"></div>
  </Bloc>
</template>
<script>
export default {
  mounted () {
    this.$initFbSDK()
  }
}
</script>