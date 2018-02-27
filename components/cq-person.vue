<template>
  <div id="person">
    <img :src="person.fields.author[0].fields.image.fields.file.url" :alt="person.fields.author[0].fields.name">
    <h3>{{ person.fields.author[0].fields.name }}</h3>
    <p style="text-align: center;">{{ person.fields.author[0].fields.shortBio }}</p>
    <p v-if="person.fields.twitter != undefined" class="follow-social">vous pouvez suivre {{ person.fields.author[0].fields.name }} sur <span><a target="_blank" :href="'https://twitter.com/'+person.fields.author[0].fields.twitter"><i class="fab fa-twitter"></i></a></span></p>
  </div>
</template>
<script>
export default {
  name: 'person',
  props: ['person']
}
</script>
<style scoped>
  #person {
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
  }
  #person img {
    height: 65px;
    width: auto;
    border-radius: 100%;
  }
  .follow-social {
    font-size: 0.9rem;
  }
  .fa-twitter {
    color: #1ea1f2;
  }
</style>
