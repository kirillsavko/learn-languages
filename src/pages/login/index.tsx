import { Form } from '@/components/Form/Form'
import { Input } from '@/components/Input/Input'
import { Button } from '@/components/Button/Button'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { loginThunk, setLoginFormPassword, setLoginFormUsername, userSelector } from '@/store/slices/user'
import { FormEvent } from 'react'
import { useRouter } from 'next/navigation'
import NonAuthRoute from '@/components/NonAuthRoute/NonAuthRoute'
import Link from 'next/link'
import { routes } from '@/constants/routes'
import styles from './Login.module.scss'

export default function Index() {
  const router = useRouter()
  const dispatch = useAppDispatch()
  const { loginFormData, loggingIn, loginError } = useAppSelector(userSelector)

  const loginUser = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(loginThunk(router))
  }

  const currentlyLoggingIn = loggingIn === 'pending'
  const noDataEntered = !loginFormData.username && !loginFormData.passwordRaw

  return (
    <NonAuthRoute>
      <div className='container'>
        <Form onSubmit={loginUser}>
          <h2>Login</h2>
          <Input
            placeholder='Username'
            value={loginFormData.username}
            onChange={e => dispatch(setLoginFormUsername(e.target.value))}
            disabled={currentlyLoggingIn}
          />
          <Input
            placeholder='Password'
            type='password'
            value={loginFormData.passwordRaw}
            onChange={e => dispatch(setLoginFormPassword(e.target.value))}
            disabled={currentlyLoggingIn}
            error={loginError || undefined}
          />
          <Button type='submit' disabled={currentlyLoggingIn || noDataEntered}>Login</Button>
        </Form>
        <div className={styles.login__link}>
          <Link href={routes.register}>Registration</Link>
        </div>
      </div>
    </NonAuthRoute>
  )
}
