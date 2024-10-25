import Link from 'next/link'
import { FormEvent, useState } from 'react'
import { UserForAuth } from '@/types/user'
import { routes } from '@/constants/routes'

export default function Index() {
  const [formData, setFormData] = useState<UserForAuth>({ username: '', passwordRaw: '' })

  async function signUp(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    fetch('/api/auth/register', { body: JSON.stringify(formData), method: 'POST' })
  }

  return <div className='container'>
    <div>
      <h1>sign up</h1>
    </div>
    <Link href={routes.home}>Home</Link>
    <Link href={routes.login}>Login</Link>
    <form onSubmit={signUp}>
      <input
        type='text' placeholder='username' value={formData.username}
        onChange={e => setFormData(prev => ({
          ...prev,
          username: e.target.value
        }))}
      />
      <input
        type='text' placeholder='password' value={formData.passwordRaw}
        onChange={e => setFormData(prev => ({
          ...prev,
          passwordRaw: e.target.value
        }))}
      />
      <button type='submit'>submit</button>
    </form>
  </div>
}
