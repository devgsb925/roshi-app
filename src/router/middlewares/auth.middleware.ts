import type { RouteLocationNormalized } from 'vue-router'
import { authService } from '@/shared/services/api/auth.service'

export type RouterContextMiddlewareType = {
  to: RouteLocationNormalized
  from: RouteLocationNormalized
  next?: Function
  token?: boolean
}
export async function authMiddleware({ token }: RouterContextMiddlewareType) {
  if (!token) {
    authService.clearToken()
    return {
      next: false,
      name: '/'
    }
  }
  return {
    next: true
  }
}

export async function managerMiddleware({ token }: RouterContextMiddlewareType) {
  if (token) {
    return {
      next: false,
      name: '/manager/prediction'
    }
  }
  return {
    next: true
  }
}
