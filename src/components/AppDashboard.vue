<template>
  <div id="app-dashboard">
    <sui-container fluid>
      <sui-card-group :items-per-row="4" stackable>
        <app-list-card 
          v-for="item in fetchList" 
          v-bind:key="item.id"
          :data="item"
          :imgUrl="item.images.preview_gif.url"/>        
      </sui-card-group>
      <observer
        v-on:intersect="intersected"
      />
    </sui-container>
  </div>
</template>

<script>
import AppListCard from './_base/AppListCard'
import Observer from './_base/Observer'

export default {
  name: 'AppDashboard',
  data () {
    return {
      apiKey: 'g3RfbcwNKlj0o9UQ1HZEN5ml8J8GkeZS',
      total_count: 10000,
      count: 20,
      offset: 0,
      items: [],
    }
  },  
  components: {
    AppListCard,
    Observer
  },
  computed: {
    fetchList() {
      return this.$store.state.gifList
    }    
  },  
  methods: {
    async intersected() {

      let horizon = {
        conf: {
          count: this.count,
          offset: this.offset          
        }
      }    

      const res = await fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${this.apiKey}&limit=${this.count}&rating=G&offset=${this.offset}`)
      const items = await res.json()
        
      this.$store.dispatch('pushToGifs', items)
      this.offset = (this.count + this.offset)
    }
  }
}
</script>

<style scoped>
  #app-dashboard {
    margin-top: 70px;
    padding-left: 1vw;
    padding-right: 1vw;
  }  
  @media screen and (max-width: 639px) {
    #app-dashboard {
      margin-top: 100px;
    }
  }
</style>