<template>
  <app-horizon-menu/>
</template>

<script>
import AppHorizonMenu from './_base/AppHorizonMenu'

export default {
    name: 'AppFooter',
    components: {
        AppHorizonMenu
    },
    data() {
        return {}
    }
}
</script>

<style>
    #footer {
        position: fixed;
        bottom: 0;
        background: #fff;
        width: 100%;
        z-index: 200;
    }
</style>