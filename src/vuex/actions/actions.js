export default {
  ADD_TO_CART({ commit }, product) {
    commit('SET_CART', product);
  },
  DELETE_FROM_CART({ commit }, index) {
    commit('DELETE_CART', index);
  },
  INCREMENT_CART_ITEM({ commit }, index) {
    commit('INCREMENT_ITEM', index);
  },
  DECREMENT_CART_ITEM({ commit }, index) {
    commit('DECREMENT_ITEM', index);
  },
  SET_MOBILE({ commit }) {
    commit('SET_MOBILE_VIEWPORT');
  },
  SET_DESKTOP({ commit }) {
    commit('SET_DESKTOP_VIEWPORT');
  },
  GET_SEARCH_VALUE({ commit }, value) {
    commit('SET_SEARCH_VALUE', value);
  },
};
