import Vue from 'vue'
import Vuex from 'vuex'
import 'es6-promise/auto'

import Axios from 'axios';

Vue.use(Vuex);

// var apiKey = "g3RfbcwNKlj0o9UQ1HZEN5ml8J8GkeZS"

export const store = new Vuex.Store({
    state: {
        gifList: null,
        favList: []
    },    
    mutations: {
        saveFetch(state, gifs) {
            state.gifList = gifs.data.data
            state.pagination = gifs.data.pagination
        },
        favSave(state, fav) {
            state.favList.push(fav)
            console.log(state.favList)
        }
    },
    actions: {
        loadGifs ({ commit }) {
            let promise = Axios.get("https://api.giphy.com/v1/gifs/trending?api_key=g3RfbcwNKlj0o9UQ1HZEN5ml8J8GkeZS&limit=12&rating=G&offset=0")
            promise
              .then(response => {
                commit('saveFetch', response)
            })            
        },
        pushToFav ({commit}, item) {
            commit('favSave',item)
        },
        removeToFav ({commit}, id) {
            console.log(id)
        }
    },
    getters: {
        gifList: state => state.gifList,
        favList: state => state.favList
    }        
})