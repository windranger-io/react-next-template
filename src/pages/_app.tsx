import type { AppProps } from 'next/app'
import Head from 'next/head'
import Script from 'next/script'
import 'tailwindcss/tailwind.css'
import { GlobalStyles } from 'twin.macro'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Site Name</title>
        <meta name="description" content="DESCRIPTION" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/favicon-16x16.png"
        />
        <link href="/favicon.ico" rel="shortcut icon" type="image/x-icon" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="SITE_NAME" />
        <meta property="og:title" content="SITE_TITLE" />
        <meta property="og:image" content="ABSOLUTE_URL_TO_PREVIEW_IMAGE" />
        <meta property="og:description" content="DESCRIPTION" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@TWITTER_HANDLE" />
        <meta name="twitter:creator" content="@TWITTER_HANDLE" />
        <meta name="twitter:title" content="SITE_TITLE" />
        <meta name="twitter:description" content="DESCRIPTION" />
        <meta
          name="twitter:image:src"
          content="ABSOLUTE_URL_TO_PREVIEW_IMAGE"
        />
      </Head>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GTM_CODE}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${process.env.NEXT_PUBLIC_GTM_CODE}');
        `}
      </Script>

      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
