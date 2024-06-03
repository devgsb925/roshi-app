import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('@/components/pages/layouts/DefaultLayout.vue'),
      children: [
        {
          path: '/',
          name: 'main.page',
          component: () => import('@/components/pages/PredictionPage.vue')
        }
      ]
    }
  ]
})

export default router
