import React from 'react';
import { AppProps } from 'next/app';

import 'tailwindcss/tailwind.css';
import Head from 'next/head';
import { appWithTranslation } from 'next-i18next';

function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <title>Benjamin Lepas</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default appWithTranslation(App);
