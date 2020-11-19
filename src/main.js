import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import VueCryptojs from 'vue-cryptojs';
import VueAnalytics from 'vue-analytics';

// axios.defaults.baseURL = process.env.NODE_ENV === "development" ? "http://localhost:3000" : "/";

axios.defaults.baseURL = process.env.NODE_ENV === "production" ? "https://stormy-beyond-65642.herokuapp.com" : "/";

Vue.config.productionTip = false;

Vue.use(VueCryptojs);

Vue.use(VueAnalytics, {
  id: `${process.env.VUE_APP_GA_KEY}`
});


// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);

// We listen to the resize event
window.addEventListener('resize', () => {
  // We execute the same script as before
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");