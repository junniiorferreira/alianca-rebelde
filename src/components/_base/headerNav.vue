<template>
  <div class="mainHeader">
    <div id="headerNav">
      <div class="headerLogo">
        <sui-image src="static/images/logo/rebels.png" />
      </div>
      <div class="headerTitle">
        <h1>Aliança Rebelde</h1>
      </div>
      <div class="btnHeaderMenu">
        <sui-button icon="bars" />
      </div>
    </div>
    <card-search
      id="card-search"
      class="top-seaarch box-search"
      place="Pesquisar Gif's e Figurinhas"
      icon="search"
    />    
  </div>
</template>

<script>
import cardSearch from './cardSearch'

export default {
  name: 'headerNav',
  props: ['imgUrl'],
  components: {
    cardSearch
  }  
}
</script>

<style>
@media screen and (max-width: 767px) {
  .mainHeader {
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    position: fixed;
    z-index: 1;
    background: #313131;
    top: 0;    
  }
  .headerLogo {
    width: 35px;
    display: table-cell;
    vertical-align: middle;
  }
  .headerTitle h1 {
    font-size: 1.2em;
    color: #ffffff;
    text-transform: uppercase;
    padding-left: 5px;
  }
  .headerTitle {
    display: table-cell;
    vertical-align: middle;
    text-align: left;
  }
  #headerNav {
    display: table;
    width: 100%;
    padding: 10px;
  }
  .btnHeaderMenu {
    display: table-cell;
    vertical-align: middle;
    width: 10px;
  }
  .btnHeaderMenu .ui.icon.button {
    background: transparent;
  }  
  .btnHeaderMenu .ui.icon.button i:before {
    font-size: 1.9em;
    color: #9ed4ff;
  }
}
</style>