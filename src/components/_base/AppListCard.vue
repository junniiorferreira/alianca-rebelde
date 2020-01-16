<template>
  <sui-card @dblclick="setAsFavorite">  
    <sui-image v-show="this.favorite" class="img-favorite" src="static/images/favorite.png" />
    <sui-image :src=this.imgUrl />
  </sui-card>
</template>

<script>
  export default {
    name: 'AppListCard',
    props: ['imgUrl', 'data', 'isFavorite'],
    data () {
      return {
        favorite: false
      }
    },
    methods: {
      async setAsFavorite(event) {
        if (this.isFavorite) {
          console.log('é favorito')
        } else {
          const clicked = await this.data
          if (this.favorite === false) {
            this.$store.dispatch('pushToFav',clicked)
            .then(() => {
              this.favorite = true
            })
          }          
        }
      }
    }
  }
</script>

<style scoped>
  img.img-favorite.ui.image {
    position: absolute!important;
    z-index: 100;
    width: 30px;
    height: 30px;
    right: 0;
  }
  .ui.card img {
    width: 100%;
    height: 200px;
  }  
  @media screen and (max-width: 439px) {
    .ui.stackable.cards>.card {
      display: block!important;
      width: calc(100% - 2em)!important
    }
    .ui.card img {
      height: 220px;
    }
  }
  @media screen and (min-width: 480px) and (max-width: 639px) {
    .ui.card img {
      height: 180px;
    }    
    .ui.stackable.cards>.card {
      display: inline-block!important;
      width: calc(50% - 2em)!important;
    }    
  }    
  @media screen and (min-width: 640px) and (max-width: 767px) {
    .ui.card img {
      height: 150px;
    }    
    .ui.stackable.cards>.card {
      display: inline-block!important;
      width: calc(28% - 0em)!important;
    }    
  }   
</style>