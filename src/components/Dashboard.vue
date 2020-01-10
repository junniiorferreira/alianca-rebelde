<template>
  <div id="DashboardLayout">
    <sui-container fluid>
      <card-search
        id="card-search"
        class="top-seaarch box-search"
        place="Pesquisar Gif's e Figurinhas"
        icon="search"
      /> 
      <card-list/>
    </sui-container>
  </div>
</template>

<script>
import cardSearch from './_base/cardSearch'
import cardList from './_base/cardList'

export default {
  name: 'DashboardLayout',
  data () {
    return {}
  },
  components: {
    cardSearch,
    cardList
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
