import type { AppProps } from 'next/app'
import { UserProvider } from '@/store/userContext'
import './global.scss'
import { Header } from '@/components/Header/Header'
import { Footer } from '@/components/Footer/Footer'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <Header />
      <main><Component {...pageProps} /></main>
      <Footer />
    </UserProvider>
  )
}
