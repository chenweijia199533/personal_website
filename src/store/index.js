import Vue from "vue";
import Vuex from "vuex";
import LoginModle from "./modules/LoginModle";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    LoginModle,
  },
});
