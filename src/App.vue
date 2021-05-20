<template>
  <div id="app">
    <v-main-wrapper />
  </div>
</template>

<script>
import vMainWrapper from './components/v-main-wrapper.vue';
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'App',
  components: { vMainWrapper },
  data() {
    return {};
  },
  methods: {
    ...mapActions(['SET_MOBILE', 'SET_DESKTOP']),
  },
  computed: {
    ...mapGetters(['IS_MOBILE', 'IS_DESKTOP']),
  },
  mounted() {
    let that = this;
    window.addEventListener('resize', () => {
      if (window.innerWidth > 767) {
        that.SET_DESKTOP();
      } else {
        that.SET_MOBILE();
      }
    });
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
