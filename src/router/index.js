import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/auth/Login'
import Register from '@/pages/auth/Register'
import Home from '@/pages/home/Home.vue'
import JuniorEnterpriseIndex from '@/pages/juniorenterprise/JuniorEnterpriseIndex'
import JuniorEnterpriseAdd from '@/pages/juniorenterprise/JuniorEnterpriseAdd'
import JuniorEnterpriseDetail from '@/pages/juniorenterprise/JuniorEnterpriseDetail'
import JuniorEnterpriseEdit from '@/pages/juniorenterprise/JuniorEnterpriseEdit'
import JuniorEnterpriseResults from '@/components/juniorenterprises/JuniorEnterpriseResults'
import CoreAdd from '@/pages/core/CoreAdd'
import CoreIndex from '@/pages/core/CoreIndex'
import CoreDetails from '@/pages/core/CoreDetails'

import ProjectAdd from '@/pages/project/ProjectAdd'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/empresas-juniores',
      name: 'JuniorEnterpriseIndex',
      component: JuniorEnterpriseIndex
    },
    {
      path: '/empresas-juniores/add',
      name: 'JuniorEnterpriseAdd',
      component: JuniorEnterpriseAdd
    },
    {
      path: '/empresa-junior/:id/meta/:year/',
      name: 'JuniorEnterpriseDetail',
      component: JuniorEnterpriseDetail
    },
    {
      path: '/empresa-junior/edit/:id',
      name: 'JuniorEnterpriseEdit',
      component: JuniorEnterpriseEdit
    },
    {
      path: '/empresa-junior/:id/year/:year/projetos/add',
      name: 'ProjectAdd',
      component: ProjectAdd
    },
    {
      path: '/resultados/empresa-junior/:id/year/:year/',
      name: 'JuniorEnterpriseResults',
      component: JuniorEnterpriseResults
    },
    {
      path: '/nucleos',
      name: 'CoreIndex',
      component: CoreIndex
    },
    {
      path: '/nucleos/add',
      name: 'CoreAdd',
      component: CoreAdd
    },
    {
      path: '/nucleo/:id/resultados',
      name: 'CoreDetails',
      component: CoreDetails
    }
  ]
})
