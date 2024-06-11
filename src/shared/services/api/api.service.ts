import axios, { HttpStatusCode } from 'axios'
import { authService } from './auth.service'
import router from '@/router'

const baseAPI = 'http://127.0.0.1:3000'
const headerDefault = {
  'Content-Type': 'application/json',
  'Accept-Language': 'lo'
}
export const api = axios.create({
  baseURL: baseAPI,
  headers: headerDefault
})

// Add a request interceptor

export interface IServiceResult {
  message: string
  error: boolean
}
export interface IServiceResultData<T> extends IServiceResult {
  data: T
}
export const API_URIs = {
  SignIn: '/auth/sign-in',
  team: 'teams',
  prediction: 'predictions'
}

api.interceptors.request.use(
  function (config) {
    if (config.url !== API_URIs.SignIn) {
      const token = authService.getToken()
      console.log('🚀 ~ token:', token)
      config.headers['Authorization'] = `Bearer ${token}`
    }

    return config
  },
  async function (error) {
    const originalRequest = error.config
    if (error.response.status === 401 && originalRequest.url !== API_URIs.SignIn) {
      router.push({ name: 'login.page' })
      authService.clearToken()
      return Promise.reject(error)
    }
    // if refresh token not failed
    return Promise.reject(error)
  }
)

// handle error
export const axiosErrorMsg = (error: unknown) => {
  if (axios.isAxiosError(error)) {
    return error.response?.data.message
  }
  return ''
}
