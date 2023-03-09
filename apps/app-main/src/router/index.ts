import { createRouter, createWebHistory } from 'vue-router'

export default createRouter({
  history: createWebHistory(''),
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('@/views/home')
    },
    {
      path: '/vue2',
      name: 'vue2',
      component: () => import('@/views/vue2')
    },
    {
      path: '/vue3',
      name: 'vue3',
      component: () => import('@/views/vue3')
    }
  ]
})
