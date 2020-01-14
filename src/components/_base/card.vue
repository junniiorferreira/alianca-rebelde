<template>
  <div class="card">
      <h1>{{id}}</h1>
      <p>{{type}}</p>
      <br>
  </div>
</template>

<script>
export default {
  name: 'card',
  props: {
    type: String,
    id: String,
    preview_webp: String,
    slug: String,
    username: String,
    title: String
  }
}
</script>

<style>

</style>