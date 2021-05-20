import Vue from 'vue';
import Vuex from 'vuex';

import commonActions from './actions/actions';
import apiRequests from './actions/api-requests';
import mutations from './mutations/mutations';
import getters from './getters/getters';

const actions = { ...commonActions, ...apiRequests };

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    products: [],
    cart: [],
    isMobile: false,
    isDesktop: true,
    searchValue: '',
  },
  getters,
  mutations,
  actions,
});

export default store;
