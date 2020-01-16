<template>
  <div id="app-dashboard" class="lista-favoritos">
    <sui-container fluid>
      <sui-card-group :items-per-row="4" stackable>
        <app-list-card
          v-for="item in favList" 
          v-bind:key="item.id"
          isFavorite=true
          :data="item"
          :imgUrl="item.images.preview_gif.url"/>        
      </sui-card-group>
    </sui-container>
  </div>
</template>

<script>
import AppListCard from './_base/AppListCard'

export default {
    name: 'AppFavoritos',
    computed: {
        favList () {
            return this.$store.state.favList
        }
    },
    components: {
        AppListCard
    }    
}
</script>

<style>
    .lista-favoritos {
        margin-top: 70px;
        margin-bottom: 50px;
        padding-left: 1vw;
        padding-right: 1vw;
    }  
    @media screen and (max-width: 639px) {
        .lista-favoritos {
        margin-top: 100px;
        }
    }    
</style>