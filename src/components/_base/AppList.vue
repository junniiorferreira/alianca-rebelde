<template>
    <div id="app-list">
      <sui-card-group :items-per-row="4" stackable>
        <app-list-card 
          v-for="card in $store.getters.gifList" 
          v-bind:key="card.id"
          :imgUrl="card.images.downsized.url"/>
      </sui-card-group>
    </div>
</template>

<script>
import AppListCard from './AppListCard'

export default {
  name: 'AppList',
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