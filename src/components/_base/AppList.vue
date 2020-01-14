<template>
    <div id="app-list">
      <sui-card-group :items-per-row="4" stackable>
        <app-list-card 
          v-for="card in $store.getters.gifList" 
          v-bind:key="card.id"
          :imgUrl="card.images.preview_gif.url"/>
      </sui-card-group>
    </div>
</template>

<script>
import AppListCard from './AppListCard'
import axios from 'axios';

export default {
  name: 'AppList',
  props: ['setup'],
  components: {
    AppListCard
  },
  data() {
    return {
      error: []
    }
  }
}
</script>

<style>
@media screen and (min-width: 320px) {
  #app-list {
    margin-top: 15px
  }
}
</style>