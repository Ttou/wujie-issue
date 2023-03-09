import { createRouter, createWebHashHistory } from 'vue-router'

export default createRouter({
  history: createWebHashHistory(''),
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
    },
    {
      path: '/state',
      name: 'State',
      component: () => import('@/views/state')
    }
  ]
})
