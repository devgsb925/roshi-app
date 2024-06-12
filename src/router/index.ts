import { createRouter, createWebHistory } from 'vue-router'
import {
  authMiddleware,
  managerMiddleware,
  type RouterContextMiddlewareType
} from './middlewares/auth.middleware'
import { authService } from '@/shared/services/api/auth.service'

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
      meta: {
        middlewares: [managerMiddleware]
      },
      component: () => import('@/components/pages/LoginPage.vue')
    },
    {
      path: '/manager',
      component: () => import('@/components/pages/layouts/ManagerLayout.vue'),
      meta: {
        middlewares: [authMiddleware]
      },
      children: [
        {
          path: 'prediction',
          name: 'prediction.page',
          component: () => import('@/components/pages/PredictionListPage.vue')
        },
        {
          path: 'prediction/create',
          name: 'prediction.create',
          component: () => import('@/components/pages/PredictionManagePage.vue')
        },
        {
          path: 'prediction/update/:id',
          name: 'prediction.update',
          component: () => import('@/components/pages/PredictionManagePage.vue')
        }
      ]
    }
  ]
})

async function executeMiddlewares(
  context: RouterContextMiddlewareType,
  middlewares: Function[]
): Promise<{
  name: string
  next: boolean
}> {
  const result = {
    name: '',
    next: true
  }
  // executes middleware
  for (const middleware of middlewares) {
    const value = await middleware({ ...context })
    if (!value.next) {
      result.next = value.next
      result.name = value.name
      break
    }
  }
  return result
}

router.beforeEach(async (to, from, next) => {
  if (from.name !== 'login.page' && to.meta?.middlewares) {
    const middlewares = to.meta.middlewares as Function[]
    const token = authService.getToken()
    const context: RouterContextMiddlewareType = {
      from,
      to,
      token: !!token
    }

    const result = await executeMiddlewares(context, middlewares)
    if (!result.next) {
      return next(result.name)
    }
  }
  return next()
})

export default router
