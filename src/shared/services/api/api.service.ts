import axios from 'axios'
import { storage, StoreKeys } from '../storage.service'
import type { AuthLoginResponse } from '@/model/auth.type'

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
  SignIn: '/auth/sign-in'
}

api.interceptors.request.use(
  function (config) {
    if (config.url !== API_URIs.SignIn) {
      const auth = storage.get<AuthLoginResponse>(StoreKeys.User)
      config.headers['Authorization'] = `Bearer ${auth?.accessToken}`
    }

    return config
  },
  function (error) {
    // Do something with request error
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
