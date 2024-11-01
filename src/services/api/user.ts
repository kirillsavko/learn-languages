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

type RegisterResponse = {
  message: string
  user: UserRegistered
}

export function register(user: UserForAuth): Promise<RegisterResponse> {
  return sendRequest('/auth/register', 'POST', user)
    .then(res => res.json())
}

type LogoutResponse = {
  message: string
}

export function logout(): Promise<LogoutResponse> {
  return sendRequest('/auth/logout', 'POST')
    .then(res => res.json())
}

type GetUserResponse = {
  message: string
  user: UserRegistered
}

export function getUser(): Promise<GetUserResponse> {
  return sendRequest('/user')
    .then(res => res.json())
}
