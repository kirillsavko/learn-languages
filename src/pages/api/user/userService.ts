import { UserForAuth, UserRegistered } from '@/types/user'
import { userRepository } from '@/pages/api/user/userRepository'
import { comparePasswords } from '@/utils/password'
import jwt from 'jsonwebtoken'
import { envVars } from '@/utils/envVars'

const minimalPasswordLength = 6

export class UserAlreadyExistsException extends Error {
  constructor(username: string) {
    super(`User with username ${username} already exists`)
  }
}

export class UserNotExistsException extends Error {
  constructor() {
    super(`User with this username does not exists`)
  }
}

export class UsernameNotValidException extends Error {
  constructor(username: string) {
    super(`Username ${username} not valid`)
  }
}

export class PasswordEmptyException extends Error {
  constructor() {
    super('Empty password')
  }
}

export class PasswordShortException extends Error {
  constructor() {
    super('Short password')
  }
}

export class CredentialsWrongException extends Error {
  constructor() {
    super('Credentials wrong')
  }
}

export class JwtTokenNotExistException extends Error {
  constructor() {
    super('JWT token does not exist')
  }
}

class service {
  async registerUser(userToRegister: UserForAuth): Promise<UserRegistered> {
    const foundUser = await userRepository.getUserByUsername(userToRegister.username)
    if (foundUser) {
      throw new UserAlreadyExistsException(userToRegister.username)
    }

    const trimmedName = userToRegister.username.trim()
    if (trimmedName.length === 0) {
      throw new UsernameNotValidException(userToRegister.username)
    }

    const trimmedPassword = userToRegister.passwordRaw.trim()
    if (trimmedPassword.length === 0) {
      throw new PasswordEmptyException()
    }

    if (trimmedPassword.length < minimalPasswordLength) {
      throw new PasswordShortException()
    }

    const registeredUser = await userRepository.createUser(userToRegister)
    if (!registeredUser) {
      throw new UserNotExistsException()
    }

    try {
      return registeredUser
    } catch (e) {
      throw new Error('Error registering user in service:', e);
    }
  }

  async loginUser(user: UserForAuth): Promise<UserRegistered> {
    const foundUser = await userRepository.getUserByUsername(user.username)
    if (!foundUser) {
      throw new UserNotExistsException()
    }

    const passwordCorrect = await comparePasswords(user.passwordRaw, foundUser.password_hash)
    if (!passwordCorrect) {
      throw new CredentialsWrongException()
    }

    try {
      return foundUser
    } catch (e) {
      throw new Error('Error login user in service:', e);
    }
  }

  async getUserByJwt(token: string | undefined): Promise<UserRegistered> {
    if (!token) {
      throw new JwtTokenNotExistException()
    }

    const decodedToken = jwt.verify(token, envVars.JWT_SECRET) as { id: number, username: string }
    const foundUser = await userRepository.getUserById(decodedToken.id)

    if (!foundUser) {
      throw new UserNotExistsException()
    }

    try {
      return foundUser
    } catch (e) {
      throw new Error('Error getting user by jwt in service:', e);
    }
  }
}

export const userService = new service()
