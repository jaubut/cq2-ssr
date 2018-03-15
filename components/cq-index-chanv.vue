<template>
  <Bloc class="height-normal dark photo">
    <Texte link="lesmarques/chanv">
      <h2>Chanv</h2>
      <p class="center"> <strong>{{ $t('chan.chan-1') }}</strong></p>
    </Texte>
  </Bloc>
</template>
<script>
export default {
  name: 'Six'
}
</script>
<style scoped>
  .photo {
    background-image: url(~/static/onepagechanv/exfoliant.png)!important;
  }
</style>
