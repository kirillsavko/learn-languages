import { NextApiRequest, NextApiResponse } from 'next'
import { UserForAuth, UserRegistered } from '@/types/user'
import { CredentialsWrongException, UserNotExistsException, userService } from '@/pages/api/user/userService'
import { setJwtTokenToCookie } from '@/utils/cookie'

type ReturnedData = {
  message: string
  user?: UserRegistered
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ReturnedData>
) {
  try {
    const user: UserForAuth = JSON.parse(req.body)
    if (req.method === 'POST') {
      const foundUser = await userService.loginUser(user)
      setJwtTokenToCookie(foundUser, res)
      res.status(201).json({ message: 'Ok', user: foundUser })
    }
  } catch (e) {
    switch (e.constructor) {
      case UserNotExistsException:
        res.status(404).json({ message: 'User does not exist' })
        return
      case CredentialsWrongException:
        res.status(401).json({ message: 'Invalid credentials' })
        return
      default:
        res.status(500).json({ message: 'Unexpected error' })
        return
    }
  }
}
