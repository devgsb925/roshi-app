import axios, { HttpStatusCode } from 'axios'
import { authService } from './auth.service'
import router from '@/router'

const baseAPI = import.meta.env.VITE_API_URL
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
  prediction: 'predictions',
  uploadFile: 'upload-file'
}

api.interceptors.request.use(function (config) {
  if (config.url !== API_URIs.SignIn) {
    const token = authService.getToken()
    config.headers['Authorization'] = `Bearer ${token}`
  }

  return config
})
api.interceptors.response.use(
  (response) => {
    return response
  },
  async function (error) {
    const originalRequest = error.config
    if (
      error.response.status === HttpStatusCode.Unauthorized &&
      originalRequest.url !== API_URIs.SignIn
    ) {
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
