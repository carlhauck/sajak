import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import VueCryptojs from 'vue-cryptojs';
import VueAnalytics from 'vue-analytics';

axios.defaults.baseURL = process.env.NODE_ENV === "development" ? "http://localhost:3000" : "/";

Vue.config.productionTip = false;

Vue.use(VueCryptojs);

Vue.use(VueAnalytics, {
  id: `${process.env.VUE_APP_GA_KEY}`
});

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");