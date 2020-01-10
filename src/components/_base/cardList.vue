<template>
    <div id="cardList">
        <sui-card-group :items-per-row="4" stackable>
            <card-simple 
                v-for="card in rendCards" 
                v-bind:key="card.id"
                :imgUrl="card.url"/>
        </sui-card-group>
    </div>
</template>

<script>
import cardSimple from './cardSimple'

export default {
  name: 'cardList',
  data () {
    return {
        // Depois buscar essa lista através do axios, 
        // e reposicionar todos os cards na lista através de um get
        rendCards: [
            { id:0, url : 'static/images/avatar/large/elliot.jpg' },
            { id:1, url : 'static/images/avatar/large/helen.jpg' },
            { id:2, url : 'static/images/avatar/large/jenny.jpg' },
            { id:3, url : 'static/images/avatar/large/veronika.jpg' },
            { id:4, url : 'static/images/avatar/large/stevie.jpg' },
            { id:5, url : 'static/images/avatar/large/elliot.jpg' },
            { id:6, url : 'static/images/avatar/large/helen.jpg' },
            { id:7, url : 'static/images/avatar/large/jenny.jpg' },
            { id:8, url : 'static/images/avatar/large/veronika.jpg' },
            { id:9, url : 'static/images/avatar/large/stevie.jpg' }            
        ]
    }
  },
  components: {
    cardSimple
  }
}
</script>

<style>
@media screen and (max-width: 767px) {
  #cardList {
    margin-top: 15px
  }
}
</style>