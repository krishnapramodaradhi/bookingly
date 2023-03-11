import Layout from '@/components/common/Layout';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Router } from 'next/router';
import { useEffect, useState } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    Router.events.on('routeChangeStart', setLoading.bind(null, true));
    Router.events.on('routeChangeComplete', setLoading.bind(null, false));
    Router.events.on('routeChangeError', setLoading.bind(null, false));

    return () => {
      Router.events.off('routeChangeStart', setLoading.bind(null, true));
      Router.events.off('routeChangeComplete', setLoading.bind(null, false));
      Router.events.off('routeChangeError', setLoading.bind(null, false));
    };
  });
  return (
    <Layout>
      <Head>
        <title>Bookingly</title>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta
          name='description'
          content='Find all the best places, events and happening around you'
        />
        <meta property='og:title' content='Bookingly' />
      </Head>
      {loading && <div className='loading'></div>}
      <Component {...pageProps} />
    </Layout>
  );
}
