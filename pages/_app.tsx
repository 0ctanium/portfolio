import React from 'react';
import { AppProps } from 'next/app';

import { DefaultSeo } from 'next-seo';

import '@src/tailwind.css';
import { appWithTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
function App({ Component, pageProps }: AppProps): JSX.Element {
  const { locale } = useRouter();

  return (
    <>
      <DefaultSeo
        openGraph={{
          type: 'website',
          locale: locale,
          url: 'https://benjaminlepas.fr/',
          site_name: 'Benjamin Lepas',
        }}
        twitter={{
          handle: '@0ctanium',
          site: '@0ctanium',
          cardType: 'summary_large_image',
        }}
      />
      <Component {...pageProps} />
    </>
  );
}

export default appWithTranslation(App);
