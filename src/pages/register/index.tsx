import { FormEvent } from 'react'
import { Form } from '@/components/Form/Form'
import {
  registerThunk,
  setRegisterFormPassword, setRegisterFormPasswordRepeated,
  setRegisterFormUsername,
  userSelector,
} from '@/store/slices/user'
import { Input } from '@/components/Input/Input'
import { useRouter } from 'next/navigation'
import { useAppDispatch } from '@/store/hooks'
import { useSelector } from 'react-redux'
import { Button } from '@/components/Button/Button'
import NonAuthRoute from '@/components/NonAuthRoute/NonAuthRoute'
import styles from './Register.module.scss'
import Link from 'next/link'
import { routes } from '@/constants/routes'

export default function Index() {
  const router = useRouter()
  const dispatch = useAppDispatch()
  const { registerFormData, registering, registerError } = useSelector(userSelector)

  const registerUser = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(registerThunk(router))
  }

  const currentlyRegistering = registering === 'pending'
  const noDataEntered = !registerFormData.username && !registerFormData.passwordRaw &&
    !registerFormData.passwordRawRepeated

  return (
    <NonAuthRoute>
      <div className='container'>
        <Form onSubmit={registerUser}>
          <h2>Registration</h2>
          <Input
            placeholder='Username'
            value={registerFormData.username}
            onChange={e => dispatch(setRegisterFormUsername(e.target.value))}
            disabled={currentlyRegistering}
          />
          <Input
            placeholder='Password'
            type='password'
            value={registerFormData.passwordRaw}
            onChange={e => dispatch(setRegisterFormPassword(e.target.value))}
            disabled={currentlyRegistering}
          />
          <Input
            placeholder='Repeat password'
            type='password'
            value={registerFormData.passwordRawRepeated}
            onChange={e => dispatch(setRegisterFormPasswordRepeated(e.target.value))}
            disabled={currentlyRegistering}
            error={registerError || undefined}
          />
          <Button type='submit' disabled={currentlyRegistering || noDataEntered}>Register</Button>
        </Form>
        <div className={styles.login__link}>
          <Link href={routes.login}>Login</Link>
        </div>
      </div>
    </NonAuthRoute>
  )
}
