import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import { Inter } from 'next/font/google'
import '@/styles/main.css'

const inter = Inter({ subsets: ['latin'] })

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: React.ReactElement) => React.ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page)

  return getLayout(
    <main className={inter.className}>
      <Component {...pageProps} />
    </main>
  )
}

export default App
