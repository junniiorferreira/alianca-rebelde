import Vue from 'vue'
import Router from 'vue-router'
import AppDashboard from '@/components/AppDashboard'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'AppDashboard',
      component: AppDashboard
    }
  ]
})
