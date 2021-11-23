import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  /* eslint-disable  @typescript-eslint/no-explicit-any */
  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html className="h-full font-sans">
        <Head />
        <script
          dangerouslySetInnerHTML={{
            __html: `if (localStorage.darkMode === 'true' || (!('darkMode' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches))
        {document.documentElement.classList.add('dark')} else
        {document.documentElement.classList.remove('dark')}`,
          }}
        ></script>
        <body className="h-full bg-gray-100 dark:bg-gray-850">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
