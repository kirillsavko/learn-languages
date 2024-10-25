import { FC, PropsWithChildren } from 'react'
import { useUser } from '@/store/userContext'

// TODO: Add logic
const ProtectedRoute: FC<PropsWithChildren> = props => {
  const user = useUser()

  return <>{props.children}</>
}

export default ProtectedRoute
