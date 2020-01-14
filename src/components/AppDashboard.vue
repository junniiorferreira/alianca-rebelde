<template>
  <div id="app-dashboard">
    <sui-container fluid>
      <sui-card-group :items-per-row="4" stackable>
        <app-list-card 
          v-for="item in items" 
          v-bind:key="item.id"
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
      total_count: 1000,
      count: 12,
      offset: 0,
      items: []
    }
  },  
  created() {
    // this.$store.dispatch('loadGifs')
  },
  components: {
    AppListCard,
    Observer
  },
  methods: {
    async intersected() {
      const res = await fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${this.apiKey}&limit=${this.count}&rating=G&offset=${this.offset}`)
      const items = await res.json()
      this.items = [...this.items , ...items.data]
      this.offset = (this.count + this.offset)
    }
  }
}
</script>

<style scoped>
@media screen and (min-width: 320px) {
  #app-dashboard {
    margin-top: 140px;
    padding-left: 1vw;
    padding-right: 1vw;
  }
}
</style>