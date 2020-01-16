<template>
  <div class="main-header">
    <div id="header-nav">
      <!-- Ou inserir um campo de busca no lugar das barras e colocar o menu flutuante na página de busca -->
      <!-- Ao clicar no campo de busca alterar o valor do callback em <app-search/> -->
      <div class="header-logo">
        <sui-image :src="imgUrl" />
      </div>
      <div class="header-title">
        <h1>Aliança Rebelde</h1>
      </div>
      <app-search
        id="app-search"
        class="top-seaarch box-search"
        place="Pesquisar Gif's e Figurinhas"
        icon="search"
        :callback=showSearch
      />
    </div>
    <app-search
      id="app-search"
      class="top-seaarch box-search mobile-search"
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
  @media screen and (max-width: 479px) {
    #header-nav {
      text-align: center;
    }
    .header-menu {
      display: inline-table!important;
      position: absolute;
      left: 0;      
    }        
    #app-search {
      background: #607789!important;
    }
    #app-search .input {
      margin-bottom: 3.5px!important;
      margin-top: 3px!important;
      height: 30px!important;
      font-size: 1.1em!important;
    }   
    .header-logo {
      width: 25px!important;
      display: inline-table!important
    }
    .header-title h1 {
      font-size: 16px!important; 
    }
    .header-title {
      display: inline-table!important;
      width: auto!important;
    }    
    #header-nav #app-search {
      display: none!important;
    }
    .ui.icon.button {
      font-size: 10px;
    }
    .mobile-search {
      display: inline!important;
    }        
  }
  @media screen and (min-width: 480px) and (max-width: 639px) {
    #header-nav #app-search {
      visibility: hidden;
    }
    .header-menu {
      display: inline-table!important;
      position: absolute;
      left: 0;
    }
    #header-nav {
      text-align: center;
      padding: 10px 0 10px 0px!important;
    }
    .header-menu {
      display: inline-table!important;
      position: absolute;
      left: 0;
      top: 6px;
    }
    #app-search {
      background: #607789!important;
    }
    #app-search .input {
      margin-bottom: 3.5px!important;
      margin-top: 3px!important;
      height: 30px!important;
      font-size: 1.1em!important;
    }        
    .header-menu .ui.icon.button {
      font-size: 13px;
    }    
    .header-logo {
      width: 25px!important;
      display: inline-table!important;
    }
    .header-title {
      display: inline-table!important;
      width: auto!important;
    }
    #header-nav #app-search {
      display: none!important;
    }
    .mobile-search {
      display: inline!important;
    }    
  }
  @media screen and (min-width: 640px) and (max-width: 767px) {
    .mobile-search {
      display: none;
    }    
    #header-nav #app-search {
      visibility: visible;
      display: block;
    }
    #app-search {
      display: none;
    }    
  }
  .mobile-search {
    display: none;
  }
  #app-search {
    background: #616161;    
  }
  #app-search .input {
    width: 100%;
    margin-bottom: 6px;
    margin-top: 5.5px;
    height: 25px;
    font-size: 1.2em;
  }  
  .main-header {
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    position: fixed;
    z-index: 99999;
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
    text-align: center;
    width: 170px;
  }
  #header-nav {
    display: table;
    width: 100%;
    padding: 5px 0 5px 0;
  }
  .header-menu {
    display: table-cell;
    vertical-align: middle;
    width: 13px;
    padding-left: 7px;
    padding-right: 10px;
  }
  .header-menu .ui.icon.button {
    background: transparent;
  }  
  .header-menu .ui.icon.button i:before {
    font-size: 1.9em;
    color: #9ed4ff;
  }
  #header-nav  #app-search {
    background: transparent;
    width: 320px;
    margin-left: auto;
    margin-right: 10px;
  }
</style>