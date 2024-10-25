import Link from 'next/link'
import { FormEvent, useState } from 'react'
import { UserForAuth } from '@/types/user'
import { useUser } from '@/store/userContext'
import { routes } from '@/constants/routes'

export default function Index() {
  const userHook = useUser()
  const [formData, setFormData] = useState<UserForAuth>({ username: '', passwordRaw: '' })

  async function signUp(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    userHook.loginUser(formData)
  }

  return <div className='container'>
    <div>
      <h1>login</h1>
    </div>
    <Link href={routes.home}>Home</Link>
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
