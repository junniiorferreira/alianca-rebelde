<template>
  <div :id=idSearch :class=searchClass>
    <sui-input :placeholder=place :icon=icon />
  </div>
</template>

<script>
export default {
  name: 'cardSearch',
  props: ['place','idSearch','searchClass','icon']
}
</script>

<style>
@media screen and (max-width: 767px) {
  #card-search {
    background: #616161;    
  }
  #card-search .input {
    width: 100%;
    margin-bottom: 6px;
    margin-top: 5.5px;
    height: 40px;
    font-size: 1.2em;
  }
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
  }
  .ui.icon.input>i.icon:focus {
    color: rgb(242, 242, 242);
  }  
}
</style>