<template>
  <div class="v-cart-item">
    <img
      class="v-cart-item__image"
      :src="require('../../assets/images/' + cartItemData.image)"
      alt=""
    />
    <div class="v-cart-item__info">
      <p>{{ cartItemData.name }}</p>
      <p>{{ cartItemData.price | toFix | priceFormatted }}</p>
      <p>{{ cartItemData.article }}</p>
    </div>
    <div class="v-cart-item__quantity">
      <span class="item__quantity_btn" @click="incrementItem">+</span>
      <p>Qty: {{ cartItemData.quantity }}</p>
      <span class="item__quantity_btn" @click="decrementItem">-</span>
    </div>
    <button class="v-cart-item__del_btn" @click="deleteItemFromCart">
      Delete
    </button>
  </div>
</template>
<script>
import priceFormatted from '../../filters/priceFormat';
import toFix from '../../filters/toFix';

export default {
  name: 'v-cart-item',
  props: {
    cartItemData: {
      type: Object,
      default() {
        return {};
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
  computed: {},
  methods: {
    incrementItem() {
      this.$emit('increment');
    },
    decrementItem() {
      this.$emit('decrement');
    },
    deleteItemFromCart() {
      this.$emit('deleteItemFromCart');
    },
  },
  mounted() {
    this.$set(this.cartItemData, 'quantity', 1);
  },
};
</script>
<style lang="scss">
.v-cart-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
  box-shadow: 0 0 8px 0 #e0e0e0;
  padding: $padding * 2;
  margin-bottom: $margin * 2;
  &__image {
    max-width: 50px;
  }
  &__del_btn {
    margin: 0 5px;
  }
}
.item__quantity_btn {
  cursor: pointer;
  display: block;
  padding: 4px;
  background: #e3e3e3;
  border-radius: 3px;
  transition: all 0.3s ease;
  &:hover {
    background: #c3c3c3;
  }
}
</style>
