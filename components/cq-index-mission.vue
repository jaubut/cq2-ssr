<template>
  <Bloc class="height-normal photo">
    <Texte link="apropos"> 
      <h2 v-html="$t('mission.mission-1')"></h2>
      <p v-html="$t('mission.mission-2')"></p>
    </Texte>
  </Bloc>
</template>
<script>
export default {
  name: 'Trois'
}
</script>
<style scoped>
  .photo {
  	background-image: url(../static/lechanvre/bb2.jpg) !important;
  }
</style>