import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('../pages/layouts/DefaultLayout.vue'),
      children: [
        {
          path: '/',
          name: 'main.page',
          component: () => import('../pages/MainPage.vue')
        }
      ]
    }
  ]
})

export default router
