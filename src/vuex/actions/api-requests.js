import axios from 'axios';
export default {
  GET_PRODUCTS_FROM_API({ commit }) {
    return axios('http://localhost:3000/products', {
      method: 'GET',
    })
      .then(response => {
        commit('SET_PRODUCTS_TO_STATE', response.data);
        return response;
      })
      .catch(error => {
        console.log(error);
        return error;
      });
  },
};
