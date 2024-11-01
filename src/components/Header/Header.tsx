import { FC } from 'react'
import styles from './Header.module.scss'
import Link from 'next/link'
import Logo from '../../assets/images/logo.svg'
import { routes } from '@/constants/routes'
import { Button } from '@/components/Button/Button'
import { useSelector } from 'react-redux'
import { logoutThunk, userSelector } from '@/store/slices/user'
import { useAppDispatch } from '@/store/hooks'
import { useRouter } from 'next/navigation'

export const Header: FC = () => {
  const { logoutError, user } = useSelector(userSelector)
  const dispatch = useAppDispatch()
  const router = useRouter()

  const logout = () => dispatch(logoutThunk(router))

  return (
    <header className={styles.header}>
      <div className='container'>
        <nav className={styles.header__nav}>
          <div></div>
          <Link href={routes.home} className={styles.header__logo}>
            <Logo width={50} height={50} />
          </Link>
          <div className={styles['header__logout-container']}>
            {user && <Button onClick={logout}>Logout</Button>}
            {logoutError && <div className={styles['header__logout-error']}>{logoutError}</div>}
          </div>
        </nav>
      </div>
    </header>
  )
}
