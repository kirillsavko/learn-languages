export type UserForAuth = {
  passwordRaw: string
  username: string
}

export type UserForRegistration = UserForAuth & {
  passwordRawRepeated: string
}

export type UserRegistered = {
  id: string
  username: string
  password_hash: string
}
