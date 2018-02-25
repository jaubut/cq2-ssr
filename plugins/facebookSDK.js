import Vue from 'vue'

Vue.prototype.$initFbSDK = () => {
  FB.init({
    appId            : '1515670032095765',
    autoLogAppEvents : true,
    xfbml            : true,
    version          : 'v2.12'
  })
}