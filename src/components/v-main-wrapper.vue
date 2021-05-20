<template>
  <div class="v-main-wrapper">
    <v-header />
    <keep-alive> <router-view> </router-view></keep-alive>
  </div>
</template>

<script>
import vHeader from './layouts/v-header.vue';
export default {
  components: { vHeader },
  name: 'v-main-wrapper',
  props: {},
  data() {
    return {};
  },
  computed: {},
  methods: {},
  watch: {},
  mounted() {},
};
</script>

<style lang="scss" scoped>
.v-main-wrapper {
  margin: 0 auto;
}
</style>
