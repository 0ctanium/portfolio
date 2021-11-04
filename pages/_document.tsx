import Document, { Html, Head, Main, NextScript } from 'next/document';
import React from 'react';
import clsx from 'clsx';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700;800&display=swap"
            rel="stylesheet"
          />
          <link rel="stylesheet" href="https://use.typekit.net/cri2dli.css" />
        </Head>
        <body
          className={clsx(
            'bg-gray-50 dark:bg-gray-900',
            process.env.NODE_ENV === 'development' && 'debug-screens'
          )}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
