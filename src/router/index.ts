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
    },
    {
      path: '/login',
      name: 'login.page',
      component: () => import('@/components/pages/LoginPage.vue')
    },
    {
      path: '/manager',
      component: () => import('@/components/pages/layouts/ManagerLayout.vue'),
      children: [
        {
          path: 'prediction',
          name: 'prediction.page',
          component: () => import('@/components/pages/PredictionManagePage.vue')
        },
        {
          path: 'prediction/create',
          name: 'prediction.create',
          component: () => import('@/components/pages/PredictionPage.vue')
        }
      ]
    }
  ]
})

export default router
