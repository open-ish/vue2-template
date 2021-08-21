import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userData: null,
  },
  getters: {
    user(state) {
      return state.userData;
    },
  },
  mutations: {
    setUserData(state, user) {
      state.userData = user;
    },
  },
  actions: {
    async getUserData({ commit }) {
      return new Promise((resolve, reject) => {
        fetch("https://randomuser.me/api/")
          .then((res) => res.json())
          .then((user) => {
            resolve(commit("setUserData", user));
          })
          .catch(() => {
            reject(console.error("something bad has happened :/ "));
          });
      });
    },
  },
});
