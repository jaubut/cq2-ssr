<template>
  <div id="cqFooter">
    <div class="logo">
      <nuxt-link to="/">
        <img src="~/assets/logo-round.svg" alt="Chanvre Québec Logo">
      </nuxt-link>
    </div>
    <div class="container">
      <div class="text">
        <div class="expand-link" @click="essentiels = !essentiels">
          <h3>Nos essentiels</h3><i class="fas fa-plus"></i>
        </div>
        <transition name="fade">
          <div v-show="essentiels">
            <nuxt-link to="/">
              <p><strong>Le chanvre c'est quoi ?</strong></p>
            </nuxt-link>
            <nuxt-link to="/">
              <p>Alimentation</p>
            </nuxt-link>
            <nuxt-link to="/">
              <p>Construction</p>
            </nuxt-link>
            <nuxt-link to="/">
              <p>Textile</p>
            </nuxt-link>
            <nuxt-link to="/">
              <p>Soins corporels</p>
            </nuxt-link>
            <nuxt-link to="/">
              <p>CBD</p>
            </nuxt-link>
          </div>
        </transition>
      </div>
      <div class="text">
        <div class="expand-link" @click="contacter = !contacter">
          <h3>À propos</h3><i class="fas fa-plus"></i>
        </div>
        <transition name="fade">
          <div v-show="contacter">
            <nuxt-link to="/">
              <p>L'équipe</p>
            </nuxt-link>
            <a href="mailto:allo@chanvrequebec.com">
              <p>allo@chanvrequebec.com</p>
            </a>
            <p>Heure d'ouverture: <span>9h - 17h</span></p>
          </div>
        </transition>
      </div>
      <div class="text">
        <div class="expand-link" @click="chanvreici = !chanvreici">
          <h3>Découvrir le chanvre d'ici</h3><i class="fas fa-plus"></i><span class="button beta">beta</span>
        </div>
        <transition name="fade">
          <div v-show="chanvreici">
            <nuxt-link to="/">
              <p>Voir tous les marques d'ici</p>
            </nuxt-link>
            <p>Si vous voulez vous aussi être affiché, <br /><a href="mailto:allo@chanvrequebec.com"><span>écrivez-nous ici.</span></a></p>
          </div>
        </transition>
      </div>
      <div class="text">
        <div class="expand-link" @click="blog = !blog">
          <h3>Le blog</h3><i class="fas fa-plus"></i>
        </div>
        <transition name="fade">
          <div v-show="blog">
            <nuxt-link to="/">
              <p>Voir tous les articles</p>
            </nuxt-link>
          </div>
        </transition>
      </div>
    </div>
    <div class="buy-me-coffee">
      <link href="https://fonts.googleapis.com/css?family=Cookie" rel="stylesheet"><a class="bmc-button" target="_blank" href="https://www.buymeacoffee.com/chanvreduquebec"><img src="https://www.buymeacoffee.com/assets/img/BMC-btn-logo.svg" alt=""><span style="margin-left: 5px">Encouragez-nous avec un café</span></a>
    </div>
    <div class="base-footer">
      <p class="text-base">2018-2019 Open source under the MIT License ©</p>
      <div class="social" style="font-size: 1em; color: #4F5D56;">
        <a href="https://www.twitter.com/chanvrequebec" target="_blank">
          <i class="fab fa-twitter"></i>
        </a>
        <a href="https://www.facebook.com/jechanvre" target="_blank">
          <i class="fab fa-facebook-f"></i>
        </a>
        <a href="https://www.instagram.com/chanvrequebec" target="_blank">
          <i class="fab fa-instagram"></i>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      essentiels: false,
      contacter: false,
      chanvreici: false,
      blog: false
    }
  }
}
</script>

<style scoped>
#cqFooter {
  display: grid;
  grid-template: 10% 70% 10% 10%/10% 80% 10%;
  width: 100%;
  font-family: "Barlow", sans-serif;
}
#cqFooter p {
  font-size: 0.8rem;
  padding: 10px 0;
  cursor: pointer;
  transition: all ease-in-out 0.5s;
}
#cqFooter p:hover {
  transform: translateX(5px);
}
#cqFooter p h3 {
  font-size: 5vw !important;
  font-weight: 600;
}
@media(min-width: 468px) {
  #cqFooter p h3 {
    font-size: 2vw !important;
  }
}
#cqFooter .container {
  grid-area: 2/2/3/3;
  display: flex;
  flex-flow: column wrap;
  justify-content: space-between;
  align-items: flex-start;
  padding: 5% 5% 10% 5%;
}
@media (min-width: 468px) {
  #cqFooter .container {
    grid-area: 1/2/3/3;
    flex-flow: row wrap;
    justify-content: flex-start;
  }
}
#cqFooter .border-right {
  grid-area: 1/3/3/4;
  margin-bottom: 50px;
  border-left: 1px solid black;
}
#cqFooter .text {
  display: flex;
  flex-flow: column wrap;
  justify-content: space-between;
  align-items: flex-start;
  margin-right: auto;
}
@media (min-width: 468px) {
  #cqFooter .text {
    padding-top: 0;
  }
}
#cqFooter .logo {
  grid-area: 1/1/1/3;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 5%;
  margin-top: -50px;
}
#cqFooter .logo img {
  height: 100px;
}
#cqFooter .base-footer {
  grid-area: 4/1/5/4;
  display: flex;
  flex-flow: row wrap;
  background: rgba(0, 0, 0, 0.2);
  padding: 10% 0;
  justify-content: center;
  align-items: center;
}
#cqFooter .expand-link {
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  opacity: 0.6;
}
#cqFooter .expand-link:hover {
  opacity: 1;
}
#cqFooter .expand-link:hover .fa-plus {
  transform: rotate(45deg);
}
#cqFooter .expand-link .fa-plus {
  transition: all ease-in-out 0.5s;
  margin: 0 5px;
}
@media (min-width: 468px) {
  #cqFooter .base-footer {
    justify-content: flex-end;
    padding: 0;
  }
}
#cqFooter .buy-me-coffee {
  grid-area: 3/2/4/3;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5%;
}
#cqFooter .social {
  display: flex;
  flex-flow: row wrap;
  padding: 0 10%;
}
#cqFooter .social a {
  cursor: pointer;
  padding: 0 10px;
  transition: all ease-in-out 0.5s;
}
#cqFooter .social a:hover {
  transform: scale(1.5);
}
#cqFooter .text-base {
  display: flex;
  font-size: 0.8rem;
  color: #4F5D56;
  align-self: center;
  margin-right: auto;
  margin-left: 10%;
}
</style>