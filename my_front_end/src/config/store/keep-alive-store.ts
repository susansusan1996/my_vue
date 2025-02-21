import { Module } from 'vuex';

export const keepAliveStore: Module<any, any> = {
  state: {
    keepAlivePage: [],
  },
  getters: {
    keepAlivePage: state => state.keepAlivePage,
  },
  mutations: {
    addKeepAlivePage(state, name) {
      state.keepAlivePage = state.keepAlivePage.concat(name);
    },
    removeKeepAlivePage(state, name) {
      state.keepAlivePage = state.keepAlivePage.filter(page => page.toLowerCase() !== name.toLowerCase());
    },
  },
};
