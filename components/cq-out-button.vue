<template>
  <a :href="href" target="_blank">
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
.green-hemprove {
  background: #04442191 !important;
}
</style>
