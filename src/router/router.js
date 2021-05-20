import Vue from 'vue';
import VueRouter from 'vue-router';
import vCatalog from '../components/catalog/v-catalog.vue';
import vCart from '../components/cart/v-cart.vue';
import vMainPage from '../components/main-page/v-main-page.vue';

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'mainPage',
      component: vMainPage,
    },
    {
      path: '/catalog',
      name: 'catalog',
      component: vCatalog,
    },
    {
      path: '/cart',
      name: 'cart',
      component: vCart,
      props: true,
    },
  ],
});

export default router;
