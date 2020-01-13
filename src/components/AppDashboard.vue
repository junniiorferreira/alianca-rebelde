<template>
  <div id="app-dashboard">
    <sui-container fluid>
      <app-list/>
    </sui-container>
  </div>
</template>

<script>
import AppList from './_base/AppList'
import axios from 'axios';

export default {
  name: 'AppDashboard',
  data () {
    return {
      error: []
    }
  },  
  created() {
    axios.get(`https://api.giphy.com/v1/gifs/trending?api_key=g3RfbcwNKlj0o9UQ1HZEN5ml8J8GkeZS&limit=20&rating=G&offset=20`)
    .then(response => {
      this.posts = response
      this.$store.dispatch({
        type: 'initFetch',
        trendings: response
      })
    })
    .catch(e => {
      this.error.push(e)
    })
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