<template>
  <div class="v-catalog-item">
    <v-popup
      v-if="isInfoPopupVisible"
      @closePopup="closePopup"
      rightBtnTitle="Add to Cart"
      :popupTitle="productData.name"
      @rightBtnAction="addToCart"
    >
      <img
        :src="require('../../assets/images/' + productData.image)"
        alt="img"
      />
      <h3 class="v-catalog-item__name">Name: {{ productData.name }}</h3>
      <p>Category: {{ productData.category }}</p>
      <p class="v-catalog-item__price">
        Price: {{ productData.price | toFix | priceFormatted }}
      </p>
    </v-popup>

    <img :src="require('../../assets/images/' + productData.image)" alt="img" />
    <h3 class="v-catalog-item__name">{{ productData.name }}</h3>
    <p class="v-catalog-item__price">
      Price: {{ productData.price | toFix | priceFormatted }}
    </p>
    <button class="v-catalog-item__show_info" @click="showPopupInfo">
      Show Info
    </button>
    <button class="v-catalog-item__add_btn btn" @click="addToCart">
      Add to Cart
    </button>
  </div>
</template>

<script>
import vPopup from '../popup/v-popup.vue';
import toFix from '../../filters/toFix';
import priceFormatted from '../../filters/priceFormat';

export default {
  components: { vPopup },
  name: 'v-catalog-item',
  props: {
    productData: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      isInfoPopupVisible: false,
    };
  },
  filters: {
    toFix,
    priceFormatted,
  },
  computed: {},
  methods: {
    addToCart() {
      this.$emit('addToCart', this.productData);
    },
    showPopupInfo() {
      this.isInfoPopupVisible = true;
    },
    closePopup() {
      this.isInfoPopupVisible = false;
    },
  },
};
</script>

<style lang="scss">
.v-catalog-item {
  flex-basis: 25%;
  box-shadow: 0 0 8px 0 #e0e0e0;
  padding: $padding * 0.5;
  margin-bottom: $margin * 1;
  & img {
    width: 80px;
    height: 80px;
  }
  &__add_btn {
    margin-left: 5px;
  }
}
</style>
