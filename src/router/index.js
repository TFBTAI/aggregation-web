import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/',redirect:'/index'},
    {
      path: '/index',
      name: 'index',
      component: () =>import('../views/index')
    },
    {
      path: '/news',
      name: 'news',
      component: () =>import('../views/news')
    },
    {
      path: '/community',
      name: 'community',
      component: () =>import('../views/community')
    },
    {
      path: '/developer',
      name: 'developer',
      component: () =>import('../views/developer')
    },
    {
      path: '/ent',
      name: 'ent',
      component: () =>import('../views/ent')
    },
    {
      path: '/finance',
      name: 'finance',
      component: () =>import('../views/finance')
    },
    {
      path: '/tech',
      name: 'tech',
      component: () =>import('../views/tech')
    },
    {
      path: '/registered',
      name: 'registered',
      component: () =>import('../views/registered')
    },
    {
      path: '/login',
      name: 'login',
      component: () =>import('../views/login')
    },
    {
      path: '/admin',
      name: 'admin',
      component: () => import('../views/admin')
    }
  ]
})
