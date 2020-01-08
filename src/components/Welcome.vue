<template>
  <div class="welcome">
    <img class="side-logo" src="../assets/rebels.png">
  </div>
</template>

<script>
export default {
  name: 'WelcomeLayout',
  data () {
    return {
      msg: 'A resistência precisa de você!'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-weight: normal;
}
.side-logo {
  width: 200px;
}
</style>