<template>
  <div class="main-header">
    <div id="header-nav">
      <div class="header-logo">
        <sui-image :src="imgUrl" />
      </div>
      <div class="header-title">
        <h1>Aliança Rebelde</h1>
      </div>
      <!-- Ou inserir um campo de busca no lugar das barras e colocar o menu flutuante na página de busca -->
      <!-- Ao clicar no campo de busca alterar o valor do callback em <app-search/> -->
      <div class="header-menu">
        <sui-button icon="bars"/>
      </div>
    </div>
    <app-search
      id="app-search"
      class="top-seaarch box-search"
      place="Pesquisar Gif's e Figurinhas"
      icon="search"
      :callback=showSearch
    />
  </div>
</template>

<script>
import AppSearch from './_base/AppSearch'

export default {
  name: 'header-nav',
  props: ['imgUrl'],
  components: {
    AppSearch
  },
  data() {
    return {
      showSearch: true
    }
  }
}
</script>

<style>
@media screen and (min-width: 320px) {
  #app-search {
    background: #616161;    
  }
  #app-search .input {
    width: 100%;
    margin-bottom: 6px;
    margin-top: 5.5px;
    height: 40px;
    font-size: 1.2em;
  }  
  .main-header {
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    position: fixed;
    z-index: 1;
    background: #313131;
    top: 0;    
  }
  .header-logo {
    width: 35px;
    display: table-cell;
    vertical-align: middle;
  }
  .header-title h1 {
    font-size: 1.2em;
    color: #ffffff;
    text-transform: uppercase;
    padding-left: 5px;
  }
  .header-title {
    display: table-cell;
    vertical-align: middle;
    text-align: left;
  }
  #header-nav {
    display: table;
    width: 100%;
    padding: 10px;
  }
  .header-menu {
    display: table-cell;
    vertical-align: middle;
    width: 10px;
  }
  .header-menu .ui.icon.button {
    background: transparent;
  }  
  .header-menu .ui.icon.button i:before {
    font-size: 1.9em;
    color: #9ed4ff;
  }
}
</style>