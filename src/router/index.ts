import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../views/Home/index.vue'),
    },
    {
      path: '/guide',
      name: 'Guide',
      component: () => import('../views/Guide/index.vue'),
    },
    {
      path: '/animation',
      name: 'Animation',
      component: () => import('../views/Animation/index.vue'),
    },
    {
      path: '/transition',
      name: 'Transition',
      component: () => import('../views/Transition/index.vue'),
    },
  ],
})

export default router
