export type AuthLoginResponse = {
  accessToken: string
}

export interface AuthBodyRequest {
  username: string
  password: string
}
