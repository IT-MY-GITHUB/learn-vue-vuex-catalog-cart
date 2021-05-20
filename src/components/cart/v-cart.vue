<template>
  <div class="v-cart">
    <router-link :to="{ name: 'catalog' }">
      <div class="v-cart__link_to_catalog">Back to Catalog</div>
    </router-link>
    <h4>Cart</h4>
    <v-cart-item
      v-for="(item, index) in cartData"
      :key="item.article"
      :cartItemData="item"
      @deleteItemFromCart="deleteItemFromCart(index)"
      @increment="increment(index)"
      @decrement="decrement(index)"
    />
    <span class="v-cart__span" v-if="!cartData.length">Cart is empty</span>
    <div class="v-cart__total">
      <p class="total__name">Total:</p>
      <p>{{ cartTotalCost | toFix | priceFormatted }}</p>
    </div>
  </div>
</template>
<script>
import vCartItem from './v-cart-item.vue';
import { mapActions } from 'vuex';
import toFix from '../../filters/toFix';
import priceFormatted from '../../filters/priceFormat';

export default {
  components: { vCartItem },
  name: 'v-cart',
  props: {
    cartData: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {};
  },
  filters: {
    toFix,
    priceFormatted,
  },
  computed: {
    cartTotalCost() {
     
      let result = 0;
      if (this.cartData.length) {
        this.cartData.map(item => {
          return (result += item.price * item.quantity);
        });
        return result;
      } else {
        return 0;
      }
    },
  },
  methods: {
    ...mapActions([
      'DELETE_FROM_CART',
      'INCREMENT_CART_ITEM',
      'DECREMENT_CART_ITEM',
    ]),
    increment(index) {
      this.INCREMENT_CART_ITEM(index);
    },
    decrement(index) {
      this.DECREMENT_CART_ITEM(index);
    },
    deleteItemFromCart(index) {
      this.DELETE_FROM_CART(index);
    },
  },
};
</script>
<style lang="scss">
.v-cart {
  margin-top: 90px;
  margin-bottom: 100px;
  &__link_to_catalog {
    position: absolute;
    top: 10px;
    right: 10px;
    padding: $padding * 1.5;
    border: 1px solid;
  }
  &__span {
    font-size: 18px;
    color: rgb(209, 81, 81);
  }
  &__total {
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    padding: $padding * 2 $padding * 3;
    display: flex;
    justify-content: center;
    background: $green-bg;
    color: #fff;
    font-size: 20px;
  }
  .total__name {
    margin-right: $margin * 2;
  }
}
</style>
