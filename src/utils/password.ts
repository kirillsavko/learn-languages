import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { UserRegistered } from '@/types/user'

export async function hashPassword(passwordRaw: string): Promise<string> {
  const salt = await bcrypt.genSalt(10)
  return await bcrypt.hash(passwordRaw, salt)
}

export async function comparePasswords(enteredPassword: string, storedHash: string): Promise<boolean> {
  return await bcrypt.compare(enteredPassword, storedHash)
}

export function generateJwtToken(user: UserRegistered): string {
  return jwt.sign({ id: user.id, username: user.username }, process.env.JWT_SECRET, {
    expiresIn: '1h',
  })
}
