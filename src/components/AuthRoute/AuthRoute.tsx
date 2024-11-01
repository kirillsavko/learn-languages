import { FC, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useSelector } from 'react-redux'
import { userSelector } from '@/store/slices/user'
import { routes } from '@/constants/routes'
import { UserRegistered } from '@/types/user'

type AuthRouteProps = {
  children: (user: UserRegistered) => React.ReactNode
}

const AuthRoute: FC<AuthRouteProps> = props => {
  const router = useRouter()
  const userStore = useSelector(userSelector)

  useEffect(() => {
    if (!userStore.user) {
      router.push(routes.login)
    }
  }, [userStore.user, router])

  if (!userStore.user) {
    return null
  }

  return <>{props.children(userStore.user)}</>
}

export default AuthRoute
