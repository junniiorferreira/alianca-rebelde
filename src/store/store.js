import Vue from 'vue'
import Vuex from 'vuex'
import 'es6-promise/auto'

Vue.use(Vuex);

var apiKey = "g3RfbcwNKlj0o9UQ1HZEN5ml8J8GkeZS"
var baseUrl = ""

export const store = new Vuex.Store({
    state: {
        flavor: ''
    },
    mutations: {
        change(state, flav) {
            state.flavor = flav
        }
    },
    actions: {
        changeAsync ({ commit }, param) {
            setTimeout(() => {
                commit('change', param.eventos)
            }, 1000)
        }
    },
    getters: {
        flavor: state => state.flavor
    }
})