export default {
  SET_PRODUCTS_TO_STATE: (state, products) => {
    state.products = products;
  },
  SET_CART: (state, product) => {
    if (state.cart.length) {
      let isProductExists = false;
      state.cart.map(item => {
        if (item.article === product.article) {
          isProductExists = true;
          item.quantity++;
        }
      });
      if (!isProductExists) {
        state.cart.push(product);
      }
    } else {
      state.cart.push(product);
    }
  },
  DELETE_CART: (state, index) => {
    state.cart.splice(index, 1);
  },
  INCREMENT_ITEM: (state, index) => {
    state.cart[index].quantity++;
  },
  DECREMENT_ITEM: (state, index) => {
    if (state.cart[index].quantity > 1) {
      state.cart[index].quantity--;
    }
  },
  SET_MOBILE_VIEWPORT: state => {
    state.isMobile = true;
    state.isDesktop = false;
  },
  SET_DESKTOP_VIEWPORT: state => {
    state.isDesktop = true;
    state.isMobile = false;
  },
  SET_SEARCH_VALUE: (state, value) => {
    state.searchValue = value;
  },
};
