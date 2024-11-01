import { NextApiRequest, NextApiResponse } from 'next'
import { UserRegistered } from '@/types/user'
import { JwtTokenNotExistException, UserNotExistsException, userService } from '@/pages/api/user/userService'

type ReturnedData = {
  message: string
  user?: UserRegistered
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ReturnedData>
) {
  const token = req.cookies.token;

  try {
    const user = await userService.getUserByJwt(token)
    res.status(201).json({ message: 'Ok', user: user })
  } catch (e) {
    switch (e.constructor) {
      case JwtTokenNotExistException:
        res.status(401).json({ message: 'No JWT token provided' })
        return
      case UserNotExistsException:
        res.status(404).json({ message: 'User does not exist' })
        return
      default:
        res.status(500).json({ message: 'Unexpected error' })
        return
    }
  }
}
