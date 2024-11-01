import { NextApiRequest, NextApiResponse } from 'next'
import { UserForAuth, UserRegistered } from '@/types/user'
import {
  PasswordEmptyException, PasswordShortException,
  UserAlreadyExistsException,
  UsernameNotValidException,
  userService,
} from '@/pages/api/user/userService'
import { setJwtTokenToCookie } from '@/utils/cookie'

type ReturnedData = { message: string, user?: UserRegistered }

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ReturnedData>,
) {
  try {
    if (req.method === 'POST') {
      const parsedUserData: UserForAuth = JSON.parse(req.body)
      const registeredUser = await userService.registerUser(parsedUserData)

      setJwtTokenToCookie(registeredUser, res)
      res.status(201).json({ message: 'Ok', user: registeredUser })
    }
  } catch (e) {
    switch (e.constructor) {
      case UserAlreadyExistsException:
        res.status(409).json({ message: 'User already exists' })
        return
      case UsernameNotValidException:
        res.status(400).json({ message: 'Invalid username' })
        return
      case PasswordEmptyException:
        res.status(400).json({ message: 'Empty password' })
        return
      case PasswordShortException:
        res.status(400).json({ message: 'Short password' })
        return
      default:
        res.status(500).json({ message: 'Unexpected error' })
        return
    }
  }
}
