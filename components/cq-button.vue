<template>
  <nuxt-link :to="href">
    <button :class="caca">
      <p><slot></slot></p>
    </button>
  </nuxt-link>
</template>
<script>
export default {
  props: ['href', 'caca']
}
</script>
<style scoped>
</style>
