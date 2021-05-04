import React, { useEffect } from 'react';
import { AppProps } from 'next/app';

import { DefaultSeo } from 'next-seo';

import '@src/tailwind.css';
import { appWithTranslation } from 'next-i18next';
import { useRouter } from 'next/router';

import OverlayScrollbarsModule from 'overlayscrollbars';
import 'overlayscrollbars/css/OverlayScrollbars.css';
import useTheme from '@src/hooks/useTheme';

function App({ Component, pageProps }: AppProps): JSX.Element {
  const { locale } = useRouter();
  const theme = useTheme();

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  useEffect(() => {
    // Scrollbar
    OverlayScrollbarsModule(document.body, {
      nativeScrollbarsOverlaid: {
        initialize: false,
      },
    });
  }, []);

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
