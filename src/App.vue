<template>
  <div id="app">
    <header-nav/>
    <router-view/>
  </div>
</template>

<script>
import headerNav from './components/_base/headerNav'

export default {
  name: 'App',
  components: {
    headerNav
  }
}
</script>

<style>
@media screen and (max-width: 767px) {
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    /* background: #000; */
    /* margin-top: 60px; */
  }
}
</style>
