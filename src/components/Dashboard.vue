<template>
  <div id="DashboardLayout">
    <sui-container fluid>
      <card-list/>
    </sui-container>
  </div>
</template>

<script>
// import cardSearch from './_base/cardSearch'
import cardList from './_base/cardList'

export default {
  name: 'DashboardLayout',
  data () {
    return {}
  },
  components: {
    // cardSearch,
    cardList
  }
}
</script>

<style scoped>
@media screen and (max-width: 767px) {
  #DashboardLayout {
    margin-top: 140px;
  }
  #DashboardLayout .ui.container {
    margin-left: 2em!important;
    margin-right: 2em!important;    
  }
}
</style>