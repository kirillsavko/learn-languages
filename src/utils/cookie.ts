import { serialize } from 'cookie'
import { generateJwtToken } from '@/utils/password'
import { UserRegistered } from '@/types/user'
import { NextApiResponse } from 'next'

function serializeJwtToken(token: string): string {
  return serialize('token', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: 3600,
    path: '/',
  });
}

export function setJwtTokenToCookie(user: UserRegistered, res: NextApiResponse) {
  const jwtToken = generateJwtToken(user)
  const serialized = serializeJwtToken(jwtToken)
  res.setHeader('Set-Cookie', serialized)
}
