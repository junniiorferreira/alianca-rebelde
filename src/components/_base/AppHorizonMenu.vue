<template>
    <div id="footer">
        <div class="ui secondary pointing menu">
            <a class="item active">
                DashBoard
            </a>
            <a class="item">
                Favoritos
            </a>
            <div class="right menu">
                <a class="ui item">
                Sair
                </a>
            </div>
        </div>
    </div>
</template>

<script>
// Não está nas melhores práticas inserir menu manualmente. 
// deveria tratar as props dentro de um método antes e concluir 
// fazendo um push para um array ou obj e exibir este dentro do layout.
// ... Mas estamos com preça

export default {
    name: 'AppVerticalMenu',
}
</script>

<style>

</style>