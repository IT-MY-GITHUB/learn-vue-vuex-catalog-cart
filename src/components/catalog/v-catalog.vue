<template>
  <div class="v-catalog">
    <router-link :to="{ name: 'cart', params: { cartData: CART } }">
      <div class="v-catalog__link_to_cart">Cart items: {{ CART.length }}</div>
    </router-link>
    <h2>Catalog</h2>
    <div class="filters">
      <v-select
        :selected="selected"
        :options="categories"
        @select="sortByCategories"
        :isExpended="IS_DESKTOP"
      />
      <div class="range-slider">
        <input
          type="range"
          min="0"
          max="9000"
          step="100"
          v-model.number="minPrice"
          @change="setRangeSlider"
        />
        <input
          type="range"
          min="0"
          max="9000"
          step="100"
          v-model.number="maxPrice"
          @change="setRangeSlider"
        />
      </div>
      <div class="range-values">
        <p>Min: {{ minPrice }}</p>
        <p>Max: {{ maxPrice }}</p>
      </div>
    </div>

    <div class="v-catalog__list">
      <v-catalog-item
        v-for="product in filteredProducts"
        :key="product.article"
        :productData="product"
        @addToCart="addToCart"
      />
    </div>
  </div>
</template>
<script>
import vCatalogItem from './v-catalog-item';
import { mapActions, mapGetters } from 'vuex';
import vSelect from '../v-select.vue';
export default {
  components: { vCatalogItem, vSelect },
  name: 'v-catalog',
  data() {
    return {
      categories: [
        { name: 'Все', value: 'All' },
        { name: 'Мужские', value: 'м' },
        { name: 'Женские', value: 'ж' },
      ],
      selected: 'Все',
      sortedProducts: [],
      minPrice: 0,
      maxPrice: 9000,
    };
  },
  computed: {
    ...mapGetters([
      'PRODUCTS',
      'CART',
      'IS_MOBILE',
      'IS_DESKTOP',
      'SEARCH_VALUE',
    ]),
    filteredProducts() {
      if (this.sortedProducts.length) {
        return this.sortedProducts;
      } else {
        return this.PRODUCTS;
      }
    },
  },
  methods: {
    ...mapActions(['GET_PRODUCTS_FROM_API', 'ADD_TO_CART']),
    addToCart(data) {
      this.ADD_TO_CART(data);
    },
    sortByCategories(category) {
      let that = this;
      this.sortedProducts = [...this.PRODUCTS];
      this.sortedProducts = this.sortedProducts.filter(item => {
        return item.price >= that.minPrice && item.price <= that.maxPrice;
      });
      if (category) {
        this.sortedProducts = this.sortedProducts.filter(e => {
          return e.category === category.name;
        });
        that.selected = category.name;
      }
    },
    setRangeSlider() {
      if (this.minPrice > this.maxPrice) {
        [this.maxPrice, this.minPrice] = [this.minPrice, this.maxPrice];
      }
      this.sortByCategories();
    },
    sortedProductsBySarchValue(value) {
      this.sortedProducts = [...this.PRODUCTS];
      if (value) {
        this.sortedProducts = this.sortedProducts.filter(product => {
          return product.name.toLowerCase().includes(value.toLowerCase());
        });
      } else this.sortedProducts = this.PRODUCTS;
    },
  },
  watch: {
    SEARCH_VALUE() {
      this.sortedProductsBySarchValue(this.SEARCH_VALUE);
    },
  },
  mounted() {
    this.GET_PRODUCTS_FROM_API().then(res => {
      if (res.data) {
        console.log('Data arrived');
        this.sortByCategories();
        this.sortedProductsBySarchValue(this.SEARCH_VALUE);
      }
    });
  },
};
</script>
<style lang="scss">
.v-catalog {
  padding: 0 10px;
  margin-top: 80px;
  &__list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
  }
  &__link_to_cart {
    position: absolute;
    top: 90px;
    right: 10px;
    padding: $padding * 1.5;
    border: 1px solid;
  }
}

.range-slider {
  width: 200px;
  margin: auto 16px;
  text-align: center;
  position: relative;
  & svg,
  & input[type='range'] {
    position: absolute;
    left: 0;
    bottom: 0;
  }
}

.filters {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

input[type='range']::-webkit-slider-thumb {
  z-index: 2;
  position: relative;
  top: 2px;
  margin-top: -7px;
}
</style>
