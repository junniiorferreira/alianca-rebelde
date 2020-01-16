<template>
    <div id="footer">
        <ul class="ui secondary pointing menu">
            <li class="item">
                <router-link to="/" replace>Início</router-link>
            </li>
            <li class="item">
                <router-link to="/favoritos" replace>Favoritos</router-link>
            </li>
            <ul class="right menu">
                <li class="ui item">
                <router-link to="/logout" replace>Sair</router-link>
                </li>
            </ul>
        </ul>
    </div>
</template>

<script>
// Não está nas melhores práticas inserir menu manualmente. 
// deveria tratar as props dentro de um método antes e concluir 
// fazendo um push para um array ou obj e exibir este dentro do layout.
// ... Mas estamos com preça

export default {
    name: 'AppVerticalMenu',
    methods: {}
}
</script>

<style>

</style>