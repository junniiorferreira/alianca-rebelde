<template>
  <sui-card>
    <sui-image :src=imgUrl />
  </sui-card>
</template>

<script>
  export default {
    name: 'AppListCard',
    props: ['imgUrl']
  }
</script>

<style scoped>
  .ui.card img {
    width: 100%;
    height: 180px;
  }
</style>