<template>
  <div id="cqFooter">
    <div class="logo">
      <nuxt-link :to="$i18n.path('index')">
        <img src="~/assets/logo-round.svg" alt="Chanvre Québec Logo">
      </nuxt-link>
    </div>
    <div class="container">
      <div class="text">
        <div class="expand-link" @click="essentiels = !essentiels">
          <h3>{{ $t('footer.footer-1') }}</h3><i class="fas fa-plus"></i>
        </div>
        <transition name="fade">
          <div v-show="essentiels">
            <nuxt-link :to="$i18n.path('lechanvre')">
              <p><strong>{{ $t('footer.footer-2') }}</strong></p>
            </nuxt-link>
            <nuxt-link :to="$i18n.path('alimentation')">
              <p v-html="$t('footer.footer-3')"></p>
            </nuxt-link>
            <nuxt-link :to="$i18n.path('construction')">
              <p v-html="$t('footer.footer-4')"></p>
            </nuxt-link>
            <nuxt-link :to="$i18n.path('textile')">
              <p v-html="$t('footer.footer-5')"></p>
            </nuxt-link>
            <nuxt-link :to="$i18n.path('soinscorporels')">
              <p v-html="$t('footer.footer-6')"></p>
            </nuxt-link>
            <nuxt-link :to="$i18n.path('cbd')">
              <p v-html="$t('footer.footer-7')"></p>
            </nuxt-link>
          </div>
        </transition>
      </div>
      <div class="text">
        <div class="expand-link" @click="contacter = !contacter">
          <h3>{{ $t('footer.footer-8') }}</h3><i class="fas fa-plus"></i>
        </div>
        <transition name="fade">
          <div v-show="contacter">
            <nuxt-link :to="$i18n.path('apropos')">
              <p v-html="$t('footer.footer-9')"></p>
            </nuxt-link>
            <a href="mailto:allo@chanvrequebec.com">
              <p>allo@chanvrequebec.com</p>
            </a>
            <p v-html="$t('footer.footer-10')"></p>
          </div>
        </transition>
      </div>
      <div class="text">
        <div class="expand-link" @click="chanvreici = !chanvreici">
          <h3>{{ $t('footer.footer-11') }}</h3><i class="fas fa-plus"></i><span class="button beta">beta</span>
        </div>
        <transition name="fade">
          <div v-show="chanvreici">
            <nuxt-link :to="$i18n.path('lesmarques')">
              <p v-html="$t('footer.footer-12')"></p>
            </nuxt-link>
            <p v-html="$t('footer.footer-13')"></p>
          </div>
        </transition>
      </div>
      <div class="text">
        <div class="expand-link" @click="blog = !blog">
          <h3>{{ $t('footer.footer-14') }}</h3><i class="fas fa-plus"></i>
        </div>
        <transition name="fade">
          <div v-show="blog">
            <nuxt-link :to="$i18n.path('blog')">
              <p v-html="$t('footer.footer-15')"></p>
            </nuxt-link>
          </div>
        </transition>
      </div>
    </div>
    <div id="formshit" class="buy-me-coffee">
      <link href="https://fonts.googleapis.com/css?family=Cookie" rel="stylesheet"><a class="bmc-button" target="_blank" href="https://www.buymeacoffee.com/chanvreduquebec"><img src="https://www.buymeacoffee.com/assets/img/BMC-btn-logo.svg" alt=""><span style="margin-left: 5px">{{ $t('footer.footer-16') }}</span></a>
    </div>
    <form v-if="$i18n.locale === 'fr'" class="newsletter" action="https://chanvrequebec.us14.list-manage.com/subscribe/post?u=9572de6ab8b677f9efe10c408&amp;id=d088a85c93" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" target="_blank" novalidate>
      <input type="email" value="email" name="EMAIL" class="required email" id="mce-EMAIL">
      <input type="text" value="prénom" name="FNAME" class="" id="mce-FNAME">
      <input class="submit" type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe">
    </form>
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
#cqFooter .newsletter {
  grid-area: 3/2/4/3;
  text-align: center;
  padding-bottom: 150px;
}
#cqFooter input {
  text-align: center;
  height: 25px;
  border: none;
  background: rgba(0, 0, 0, .2);
  margin: 15px;
  border-radius: 5px;
  font-family: "Barlow", sans-serif;
}
label {
  font-family: "Barlow", sans-serif;
  font-size: 0.9rem;
}
.submit {
  width: 100px;
  height: 25px;
  border-radius: 5px;
  background: #4F5D56 !important;
  color: white;
  margin: 15px;
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