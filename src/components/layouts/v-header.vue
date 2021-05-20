<template>
  <div class="v-header">
    <router-link :to="{ name: 'mainPage' }">
      <img src="../../assets/logo.png" alt="" />
    </router-link>

    <router-link :to="{ name: 'catalog' }">
      <h3 class="catalog_link">Catalog</h3>
    </router-link>
    <div class="search-field">
      <input class="search-input" type="text" v-model="searchValue" />
      <button class="search_btn" @click="search(searchValue)">
        <i class="material-icons">search</i>
      </button>
    </div>
  </div>
</template>
<script>
import { mapActions } from 'vuex';

export default {
  name: 'v-header',
  props: {},
  data() {
    return {
      searchValue: '',
    };
  },
  computed: {},
  methods: {
    ...mapActions(['GET_SEARCH_VALUE']),
    search(value) {
      this.searchValue = '';
      this.GET_SEARCH_VALUE(value);

      if (this.$router.currentRoute.name !== 'catalog') {
        this.$router.push('/catalog');
      }
    },
  },
};
</script>
<style lang="scss">
.v-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: $green-bg;
  padding: 14px;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 11;
  img {
    width: 50px;
  }
  .catalog_link {
    margin: 0;
    padding: 0;
    text-transform: uppercase;
  }
  a {
    text-decoration: none;
  }
  .search-field {
    display: flex;
    margin-right: 20px;
    align-items: center;
  }
  .search-input {
    margin-right: 7px;
    padding: 7px;
    color: #000;
    background: #e7e7e7;
  }
  .search_btn {
    background: transparent;
    border: none;
    &:hover {
      cursor: pointer;
    }
  }
}
</style>
