<template>
  <div id="app">
    <houseCharacters/>
  </div>
</template>

<script>

import API from '@/services/index.js';
import houseCharacters from '@/components/houseCharacters/index.vue'

export default {
  name: 'App',
  components: {
    houseCharacters,
  },
  created() {
    API.SET_AXIOS_BASE_URL();
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
body {
  margin: 0;
}
</style>
