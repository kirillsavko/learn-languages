import Link from 'next/link'
import { routes } from '@/constants/routes'

export default function Home() {
  return <div className='container'>
    <h1>home</h1>
    <Link href={routes.signUp}>Sign up</Link>
    <Link href={routes.login}>Login</Link>
  </div>
}
