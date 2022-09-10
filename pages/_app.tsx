import '../styles/globals.css'
import type { AppProps } from 'next/app'
import MetamaskProvider from 'components/metamask/MetamaskProvider'
import NoSsr from 'components/NoSsr'
// import dynamic from 'next/dynamic'
// const MetamaskProvider = dynamic(() => import('components/MetamaskProvider'), { ssr: false })

function MyApp({ Component, pageProps }: AppProps) {
  return <NoSsr><MetamaskProvider><Component {...pageProps} /></MetamaskProvider></NoSsr>;
}

export default MyApp
