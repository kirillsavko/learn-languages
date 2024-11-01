import { FC, PropsWithChildren, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { userSelector } from '@/store/slices/user'
import { useRouter } from 'next/navigation'
import { routes } from '@/constants/routes'

const NonAuthRoute: FC<PropsWithChildren> = props => {
  const router = useRouter()
  const userStore = useSelector(userSelector)

  useEffect(() => {
    if (userStore.user) {
      router.push(routes.home)
    }
  }, [userStore.user, router])

  return props.children
}

export default NonAuthRoute
