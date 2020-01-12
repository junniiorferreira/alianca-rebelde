import Vue from 'vue'
import Vuex from 'vuex'
import 'es6-promise/auto'

Vue.use(Vuex);

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
                commit('change', param)
            }, 1000)
        }
    },
    getters: {
        flavor: state => state.flavor
    }
})