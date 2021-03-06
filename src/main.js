// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import SuiVue from 'semantic-ui-vue';
import VAnimateCss from 'v-animate-css';
import { store } from './store/store'

import 'semantic-ui-css/semantic.min.css';

import App from './App'
import router from './router'

Vue.use(SuiVue, VAnimateCss);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  VAnimateCss,  
  SuiVue,
  components: { App },
  template: '<App/>'
})
