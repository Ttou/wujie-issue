import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
  base: '',
  mode: 'hash',
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'Home',
      component: () => import('@/views/home')
    },
    {
      path: '/dialog',
      name: 'Dialog',
      component: () => import('@/views/dialog')
    },
    {
      path: '/location',
      name: 'Location',
      component: () => import('@/views/location')
    },
    {
      path: '/contact',
      name: 'Contact',
      component: () => import('@/views/contact')
    }
  ]
})
