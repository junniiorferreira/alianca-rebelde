<template>
  <div :id=idSearch :class=searchClass>
    <sui-input :placeholder=place :icon=icon />
  </div>
</template>

<script>
// Criar um script que ao scrollar a tela esconde a barra de pesquisa do topo
// E exibe um novo componente de barra de pesquisa, agora no rodapé.
// Se possível, recuperar o valor do placeholder na mesma pesquisa
export default {
  name: 'cardSearch',
  props: ['place','idSearch','searchClass','icon'],
  data () {
    return {
      // thePlaceHolder: "Pesquisar Gif's e Figurinhas"
    }
  },
}
</script>

<style>
@media screen and (max-width: 425px) {
  #card-search .input {
    width: 100%;
    margin-bottom: 5px;
    margin-top: 10px;
    height: 40px;
    font-size: 1.2em;
  }
}
</style>