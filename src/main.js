import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import VueCryptojs from 'vue-cryptojs';


axios.defaults.baseURL = process.env.NODE_ENV === "development" ? "http://localhost:3000" : "/";

Vue.config.productionTip = false;
Vue.use(VueCryptojs);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");