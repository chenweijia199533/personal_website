export default {
  namespaced: true,
  state: {
    userinfo: {
      user: "",
      token: null,
    },
    Songinfo: {},
  },
  mutations: {
    setUser(state, payload) {
      state.userinfo = payload;
    },
    getSonginfo(state, payload) {
      state.Songinfo = payload;
    },
    clearUser(state) {
      state.userinfo = {
        user: "",
        token: null,
      };
    },
  },
  actions: {},
  modules: {},
};
