<template>
  <div class="search-result">
    {{ $store.getters.flavor }}
  </div>
</template>

<script>
import AppListCard from './AppListCard'

export default {
    name: 'AppSearchResult',
    components: {
        AppListCard
    },
    data() {
        return {
            
        }
    }
}
</script>

<style>
  .search-result {
    width: 100%;
    background: rgba(0, 0, 0, 0.9);
    position: absolute;
    height: 100vh;
    color: #ffffff;
  }
</style>