import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const helperService = () => {
  return new Promise((resolve, reject) => {
    fetch("https://randomuser.me/api/")
      .then((res) => res.json())
      .then((user) => {
        resolve(user);
      })
      .catch(() => {
        reject("something bad has happened :/ ");
      });
  });
};

const emptyUser = "sorry, it's empty 😔 ";

export default new Vuex.Store({
  state: {
    unsmartUserData: {} as any,
    userData: {} as any,
  },
  getters: {
    unsmartUserName(state) {
      return state.unsmartUserData?.results?.[0]?.name?.first || emptyUser;
    },

    userName(state) {
      return state.userData?.results?.[0]?.name?.first || emptyUser;
    },
  },
  mutations: {
    setUserDataUnsmatly(state, user) {
      state.unsmartUserData = user;
    },

    setUserData(state, user) {
      state.userData = user;
    },
  },
  actions: {
    async getUserDataUnsmatly({ commit }) {
      try {
        const data = await helperService();
        commit("setUserDataUnsmatly", data);
      } catch (error) {
        console.error(error);
      }
    },

    async getUserData({ commit }) {
      try {
        const data = await helperService();
        commit("setUserData", data);
      } catch (error) {
        console.error(error);
      }
    },
  },
});
