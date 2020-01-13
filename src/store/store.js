import Vue from 'vue'
import Vuex from 'vuex'
import 'es6-promise/auto'

Vue.use(Vuex);

var apiKey = "g3RfbcwNKlj0o9UQ1HZEN5ml8J8GkeZS"
var baseUrl = ""

export const store = new Vuex.Store({
    state: {
        flavor: null,
        gifList: null
    },
    mutations: {
        change(state, flav) {
            state.flavor = flav
        },
        saveFetch(state, gifs) {
            state.gifList = gifs.trendings.data.data
        }
    },
    actions: {
        changeAsync ({ commit }, param) {
            setTimeout(() => {
                commit('change', param.eventos)
            }, 1000)
        },
        initFetch ({ commit }, params) {
            commit('saveFetch', params)
        }
    },
    getters: {
        flavor: state => state.flavor,
        gifList: state => state.gifList
    }
})