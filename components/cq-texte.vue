<template>
  <div id="Texte">
    <nuxt-link :to="$i18n.path(link)" v-if="link !== '#'">
      <slot></slot>
    </nuxt-link>
    <slot v-else></slot>
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
  h1 {
    font-size: 4rem;
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
  @media screen and (max-width: 468px) {
    h1 {
      font-size: x-large; 
    }   
  }
</style>
