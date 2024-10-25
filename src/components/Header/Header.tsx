import { FC } from 'react'
import styles from './Header.module.scss'
import Link from 'next/link'
import Logo from '../../assets/images/logo.svg'
import { routes } from '@/constants/routes'
import { useUser } from '@/store/userContext'
import { useRouter } from 'next/navigation'

export const Header: FC = () => {
  const userHook = useUser()

  return (
    <header className={styles.header}>
      <div className='container'>
        <nav className={styles.header__nav}>
          <div></div>
          <Link href={routes.home} className={styles.header__logo}>
            <Logo width={50} height={50} />
          </Link>
          <div className={styles['header__logout-container']}>
            {userHook.user && <button onClick={userHook.logoutUser}>Logout</button>}
          </div>
        </nav>
      </div>
    </header>
  )
}
