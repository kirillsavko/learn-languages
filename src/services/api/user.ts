import { sendRequest } from '@/services/api/index'
import { UserForAuth, UserRegistered } from '@/types/user'

type LoginResponse = {
  message: string
  user: UserRegistered
}

export function login(user: UserForAuth): Promise<LoginResponse> {
  return sendRequest('/auth/login', 'POST', user)
    .then(res => res.json())
}

type LogoutResponse = {
  message: string
}

export function logout(): Promise<LogoutResponse> {
  return sendRequest('/auth/logout', 'POST')
    .then(res => res.json())
}
