import { createContext, FC, PropsWithChildren, useContext, useState } from 'react'
import { UserForAuth, UserRegistered } from '@/types/user'
import { login, logout } from '@/services/api/user'
import { useRouter } from 'next/navigation'
import { routes } from '@/constants/routes'

type ContextType = {
  user: UserRegistered | null
  setUser: (user: UserRegistered | null) => void
  loginUser: (user: UserForAuth) => void
  logoutUser: () => void
}

const Context = createContext<ContextType | undefined>(undefined)

export const UserProvider: FC<PropsWithChildren> = ({ children }) => {
  const router = useRouter()

  const [user, setUser] = useState<UserRegistered | null>(null);

  const [loginError, setLoginError] = useState<string | null>(null)
  const [loggingIn, setLoggingIn] = useState<boolean>(false)

  const [logoutError, setLogoutError] = useState<string | null>(null)
  const [loggingOut, setLoggingOut] = useState<boolean>(false)

  const loginUser = async (user: UserForAuth) => {
    setLoggingIn(true)
    setLoginError(null)
    login(user)
      .then(res => {
        setUser(res.user)
        router.push(routes.home)
      })
      .catch(e => setLoginError(e.message))
      .finally(() => setLoggingIn(false))
  }

  const logoutUser = async () => {
    setLoggingOut(true)
    setLogoutError(null)
    logout()
      .then(() => {
        setUser(null)
        router.push(routes.login)
      })
      .catch(e => setLoginError(e.message))
      .finally(() => setLoggingOut(false))
  }

  return (
    <Context.Provider value={{ user, setUser, loginUser, logoutUser }}>
      {children}
    </Context.Provider>
  )
}

export const useUser = () => {
  const context = useContext(Context);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
}

export const useAuthUser = (): UserRegistered => {
  const { user } = useUser()
  const router = useRouter()

  if (!user) {
    router.push(routes.login)
    throw new Error('User is not presented in useAuthUser')
  }

  return user
}
