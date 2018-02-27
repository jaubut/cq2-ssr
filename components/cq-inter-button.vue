<template>
  <nuxt-link :to="href">
    <button>
      <slot></slot>
    </button>
  </nuxt-link>
</template>
<script>
export default {
  name: 'interButton',
  props: ['href']
}
</script>
<style scoped>
  button {
    margin-top: 15px;
    height: 25px;
    width: 100px;
    background: #F8F3EB;
    color: black;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    transition: all ease-in-out .5s;
    box-shadow: 0px 7px 15px -6px rgba(0, 0, 0, 0.5);
  }
  button:hover {
    transform: scale(1.1);
  }
</style>
