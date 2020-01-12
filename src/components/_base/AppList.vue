<template>
    <div id="app-list">
      <sui-card-group :items-per-row="4" stackable>
        <app-list-card 
          v-for="card in cards" 
          v-bind:key="card.id"
          :imgUrl="card.url"/>
      </sui-card-group>
    </div>
</template>

<script>
import AppListCard from './AppListCard'

export default {
  name: 'AppList',
  data () {
    return {
        // Depois buscar essa lista através do axios, 
        // e reposicionar todos os cards na lista através de um get
        cards: [
            { id:0, url : 'static/images/avatar/large/elliot.jpg' },
            { id:1, url : 'static/images/avatar/large/helen.jpg' },
            { id:2, url : 'static/images/avatar/large/jenny.jpg' },
            { id:3, url : 'static/images/avatar/large/veronika.jpg' },
            { id:4, url : 'static/images/avatar/large/stevie.jpg' },
            { id:5, url : 'static/images/avatar/large/elliot.jpg' },
            { id:6, url : 'static/images/avatar/large/helen.jpg' },
            { id:7, url : 'static/images/avatar/large/jenny.jpg' },
            { id:8, url : 'static/images/avatar/large/veronika.jpg' },
            { id:9, url : 'static/images/avatar/large/stevie.jpg' }            
        ]
    }
  },
  components: {
    AppListCard
  }
}
</script>

<style>
@media screen and (max-width: 767px) {
  #app-list {
    margin-top: 15px
  }
}
</style>