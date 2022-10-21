import type { AppProps } from 'next/app'
import Head from 'next/head'
import packageJson from '../../package.json'

import '../styles/App.scss'
import '../styles/var.scss'
import '../styles/normalize.css'

function App({ Component, pageProps }: AppProps) {
  const versionLayout = () => {
    if (process.env.NEXT_PUBLIC_ISDIST !== 'true') {
      return (
        <div
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.3)',
            color: '#fff',
            left: '1%',
            padding: '3px',
            position: 'fixed',
            top: '1%',
            zIndex: '99',
          }}
        >
          {packageJson.version}
        </div>
      )
    }
  }

  return (
    <>
      <Head>
        <meta charSet='Unicode/UTF-8' />
        <meta name='theme-color' content='#000000' />
        <meta name='viewport' content='width=device-width, initial-scale=1, maximum-scale=1 viewport-fit=cover' />
        <meta name='google' content='nositelinkssearchbox' />
        <meta name='google-site-verification' content='XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX' />

        <link rel='icon' href='/favicon.ico' />
      </Head>

      {versionLayout()}

      <Component {...pageProps} />
    </>
  )
}

export default App
