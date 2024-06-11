import type { AuthBodyRequest, AuthLoginResponse } from '@/model/auth.type'
import { api, API_URIs, axiosErrorMsg, type IServiceResultData } from './api.service'
import { storage, StoreKeys } from '../storage.service'

class AuthService {
  async login(body: AuthBodyRequest) {
    const res: IServiceResultData<AuthLoginResponse> = {
      data: {
        accessToken: ''
      },
      message: '',
      error: false
    }
    try {
      const authRes = await api.post(API_URIs.SignIn, body)
      res.data.accessToken = authRes.data.data.accessToken
      storage.set(StoreKeys.User, res.data.accessToken)
    } catch (error) {
      res.message = axiosErrorMsg(error)
      res.error = true
    }
    return res
  }
  getToken() {
    return storage.get<string>(StoreKeys.User)
  }
  clearToken() {
    return storage.remove(StoreKeys.User)
  }
}

export const authService = new AuthService()
