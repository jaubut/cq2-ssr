<template>
  <a :to="{ name: href }" target="_blank">
    <button :class="caca">
      <p><slot></slot></p>
    </button>
  </a>
</template>
<script>
export default {
  props: ['href', 'caca']
}
</script>
<style scoped>
</style>
