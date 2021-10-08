import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersistence from 'vuex-persist';

Vue.use(Vuex);

// VuexPersistence garde les element suivant dans le store après un refresh de la page
const vuexLocal = new VuexPersistence({
  key: 'Store',
  storage: window.sessionStorage,
  reducer: (state) => ({
    acceptCGU: state.acceptCGU,
    moreInfo: state.moreInfo,
    notifs: state.notifs,
    contactChat: state.contactChat,
    choosenSmiley: state.choosenSmiley,
  }),
});

/**
 * Main Vuex Store
 */
const store = new Vuex.Store({
  plugins: [vuexLocal.plugin],
  state: {
    acceptCGU: false,
    moreInfo: false,
    notifs: false,
    contactChat: false,
    choosenSmiley: null,
  },
  mutations: {
    update_userConnected(state, userConnected) {
      state.userConnected = userConnected;
    },
    update_acceptCGU(state, acceptCGU) {
      state.acceptCGU = acceptCGU;
    },
    update_notifs(state, notifs) {
      state.notifs = notifs;
    },
    update_moreInfo(state, moreInfo) {
      state.moreInfo = moreInfo;
    },
    update_contactChat(state, contactChat) {
      state.contactChat = contactChat;
    },
    update_choosenSmiley(state, choosenSmiley) {
      state.choosenSmiley = choosenSmiley;
    },
  },
  getters: {
    version: (state) => state.version,
    acceptCGU: (state) => state.acceptCGU,
    moreInfo: (state) => state.moreInfo,
    notifs: (state) => state.notifs,
    contactChat: (state) => state.contactChat,
    choosenSmiley: (state) => state.choosenSmiley,
  },
});

export default store;
