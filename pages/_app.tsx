import Layout from '@/components/common/Layout'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Router } from 'next/router'
import { useEffect, useState } from 'react'

export default function App({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    Router.events.on('routeChangeStart', setLoading.bind(null, true))
    Router.events.on('routeChangeComplete', setLoading.bind(null, false))
    Router.events.on('routeChangeError', setLoading.bind(null, false))

    return () => {
      Router.events.off('routeChangeStart', setLoading.bind(null, true))
      Router.events.off('routeChangeComplete', setLoading.bind(null, false))
      Router.events.off('routeChangeError', setLoading.bind(null, false))
    }
  })
  return (
    <Layout>
      {loading && <div className='loading'></div>}
      <Component {...pageProps} />
    </Layout>
  )
}
