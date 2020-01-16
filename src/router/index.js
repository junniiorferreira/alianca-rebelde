import Vue from 'vue'
import Router from 'vue-router'
import AppDashboard from '@/components/AppDashboard'
import AppFavoritos from '@/components/AppFavoritos'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'AppDashboard',
      component: AppDashboard
    },
    {
      path: '/favoritos',
      name: 'AppFavoritos',
      component: AppFavoritos
    }
  ]
})
