<template>
  <router-link :to="{ name: href }">
    <button :class="caca">
      <p><slot></slot></p>
    </button>
  </router-link>
</template>
<script>
export default {
  props: ['href', 'caca']
}
</script>
<style scoped>
</style>
