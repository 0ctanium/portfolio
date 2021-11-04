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
        titleTemplate={'%s - Benjamin Lepas'}
        defaultTitle={'Benjamin Lepas'}
        openGraph={{
          type: 'website',
          url: process.env.NEXT_PUBLIC_SITE_URL,
          site_name: 'Benjamin Lepas',
          locale,
          images: [
            {
              url: process.env.NEXT_PUBLIC_SITE_URL + '/icons/apple-touch-icon.png',
              alt: "Benjamin's logo",
            }
          ],
        }}
        twitter={{
          handle: '@0ctanium',
          site: '@0ctanium',
          cardType: 'summary_large_image',
        }}
        additionalMetaTags={[
          {name:'application-name', content:'Benjamin Lepas' },
          {name:'apple-mobile-web-app-capable', content:'yes' },
          {name:'apple-mobile-web-app-status-bar-style', content:'default' },
          {name:'apple-mobile-web-app-title', content:'Benjamin Lepas' },
          {name:'format-detection', content:'telephone=no' },
          {name:'mobile-web-app-capable', content:'yes' },
          {name:'msapplication-config', content:'/icons/browserconfig.xml' },
          {name:'msapplication-TileColor', content:'#fff' },
          {name:'msapplication-TileImage', content:'/icons/favicon-144.png' },
          {name:'theme-color', content:'#000000' },
        ]}
      />
      <Component {...pageProps} />
    </>
  );
}

export default appWithTranslation(App);
