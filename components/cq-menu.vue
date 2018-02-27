<template>
  <div id="cqMenu">
    <button @mouseover="autoScroll" class="next"><i class="fas fa-fast-forward"></i></button> 
    <nuxt-link to="/apropos">
      <h2>À propos</h2>
      <p>L'équipe et sa mission</p>
    </nuxt-link>
    <nuxt-link to="/lechanvre">
      <h2>Le chanvre</h2>
      <p>information sur la plante</p>
    </nuxt-link>
    <nuxt-link to="/lesmarques">
      <h2>Les marques d'ici</h2>
      <p>Les entreprises du chanvre</p>
    </nuxt-link>
    <nuxt-link to="blog">
      <h2>Le blogue</h2>
      <p>Information & opinion</p>
    </nuxt-link>    
    <nuxt-link to="/construction">
      <h2>Construction</h2>
      <p>Maison en chanvre</p>
    </nuxt-link>
    <nuxt-link to="textile">
      <h2>Textile</h2>
      <p>Tissus en chanvre</p>
    </nuxt-link>
    <nuxt-link to="/soinscorporels">
      <h2>Soins corporels</h2>
      <p>Huile de chanvre</p>
    </nuxt-link>
     <nuxt-link to="/alimentation">
      <h2>Alimentation</h2>
      <p>Section alimentation</p>
    </nuxt-link>
     <nuxt-link to="/cbd">
      <h2>Médecine</h2>
      <p>Informations sur le CBD</p>
    </nuxt-link>
    <nuxt-link to="/photos">
      <h2>Photos</h2>
      <p>La gallerie du chanvre</p>
    </nuxt-link>
    <nuxt-link to="/etoiles">
      <h2>Étoiles</h2>
      <p>Le temple de la renommé</p>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  methods: {
    autoScroll () {
      document.getElementById('cqMenu').scrollBy(10, 0)
    }
  }
}
</script>

<style>
#cqMenu {
  position: absolute;
  display: flex;
  flex-flow: column wrap;
  justify-content: flex-start;
  align-items: flex-start;
  background: rgba(255, 255, 255, 0.4);
  margin: 2%;
  padding: 2% 2%;
  height: 40vh;
  width: 92%;
  border-radius: 5px;
  overflow: scroll;
  transition: all ease-in-out 0.5s;
}
#cqMenu h2 {
  font-family: "Barlow", sans-serif;
  font-size: 2rem;
}
#cqMenu p {
  font-family: "Barlow", sans-serif;
  font-size: 1rem;
  font-weight: 100;
  color: rgba(0, 0, 0, 0.7);
  width: inherit;
  margin: 0;
  margin-top: -5px;
}
#cqMenu a {
  padding: 15px 5px;
  width: auto !important;
  height: auto !important;
}
#cqMenu a:hover {
  transform: translateX(5px);
  transition: transform 0.5s ease-in-out;
}
#cqMenu .next {
  position: fixed;
  margin-top: auto;
  top: 155px;
  right: -40px;
  z-index: 2;
  cursor: pointer;
  opacity: 0;
}
#cqMenu .fa-fast-forward {
  width: 40px;
  height: 40px;
  color: #cb5a44;
  animation: bounce-arrow 2s infinite;
}
@media(max-width:468px) {
  #cqMenu h2 {
    font-size: x-large;
  }
  #cqMenu p {
    font-size: smaller;
  }
  #cqMenu .next {
    opacity: 1;
  }
}
</style>