<template>
  <div id="app-dashboard">
    <sui-container fluid>
      <app-list/>
    </sui-container>
  </div>
</template>

<script>
import AppList from './_base/AppList'

export default {
  name: 'AppDashboard',
  data () {
    return {}
  },
  components: {
    AppList
  }
}
</script>

<style scoped>
@media screen and (max-width: 767px) {
  #app-dashboard {
    margin-top: 140px;
  }
}
</style>