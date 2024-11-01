import type { AppProps } from 'next/app'
import './global.scss'
import { Header } from '@/components/Header/Header'
import { Footer } from '@/components/Footer/Footer'
import { Provider } from 'react-redux'
import { store } from '@/store/store'
import InitialLoading from '@/components/InitialLoading/InitialLoading'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <InitialLoading>
        <Header />
        <main><Component {...pageProps} /></main>
        <Footer />
      </InitialLoading>
    </Provider>
  )
}
