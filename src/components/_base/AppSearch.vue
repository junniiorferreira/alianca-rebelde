<template>
  <div :id=idSearch :class=searchClass v-show="inputShow">
    <sui-input :placeholder=place :icon=icon @input="changed" name="flavor" />
  </div>
</template>

<script>
import SearchResult from './AppSearchResult'

export default {
  name: 'AppSearch',
  props: ['place','idSearch','searchClass','icon','callback'],
  components: {
    SearchResult
  },
  data() {
    return {
      inputShow: this.callback
    }
  },
  methods: {
    changed: function(event) {
      this.$store.dispatch({
        type: 'changeAsync',
        eventos: event
      })
    }
  }
}
</script>

<style>
@media screen and (min-width: 320px) {}
  .ui.input>input {
    color: rgb(170, 170, 170);
    border-radius: 0;
  }
  .ui.input>input:active {
    color: rgb(170, 170, 170);
  }
  .ui.input>input:focus {
    color: rgb(170, 170, 170);
  }
  .ui.icon.input>i.icon {
    color: rgb(242, 242, 242);
    background: #e31f21;
    border-radius: 0px;
    width: 30px;
  }
  .ui.icon.input>i.icon:focus {
    color: rgb(242, 242, 242);
  } 
</style>