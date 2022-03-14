import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./plugins/element.js";
import "@/assets/css/reset.css";
import api from "@/api/index";
import "@/router/premission";
import moment from "moment";

Vue.prototype.$api = api;
Vue.prototype.$moment = moment;
Vue.config.productionTip = false;

let userinfo = localStorage.getItem("userinfo");
if (userinfo) {
  userinfo = JSON.parse(userinfo);
  store.commit("LoginModle/setUser", userinfo);
}
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
