import Vue from 'vue'
import Router from 'vue-router'
import WelcomeLayout from '@/components/Welcome'
import LoginLayout from '@/components/Login'
import DashboardLayout from '@/components/Dashboard'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'WelcomeLayout',
      component: WelcomeLayout
    },
    {
      path: '/register',
      name: 'LoginLayout',
      component: LoginLayout
    },
    {
      path: '/dashboard',
      name: 'DashboardLayout',
      component: DashboardLayout
    }
  ]
})
