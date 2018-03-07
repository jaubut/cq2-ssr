<template>
  <div id="Texte">
    <nuxt-link :to="link">
      <slot></slot>
    </nuxt-link>
  </div>
</template>
<script>
export default {
  name: 'cqTexte',
  props: ['link']
}
</script>
<style scoped>
  #Texte {
    z-index: 2;
    padding: 5% 2%;
    text-align: center;
  }
  .white {
    color: white !important;
  }
  .burgandy {
    color: #CB5A44;
  }
  .center {
    text-align: center;
  }
  .justify {
    text-align: justify !important;
  }
  .left {
    text-align: left;
  }
  .right {
    text-align: right;
  }
  .article {
    background: rgba(0,0,0,0.6);
    padding: 100%;
  }
  a:hover {
    color: inherit;
  }
</style>
