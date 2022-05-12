import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentInitialProps,
  DocumentContext,
} from 'next/document'

const MyDocument = (/*props: DocumentInitialProps*/) => {
  return (
    <Html>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

MyDocument.getInitialProps = async (
  ctx: DocumentContext
): Promise<DocumentInitialProps> => {
  const initialProps = await Document.getInitialProps(ctx)
  return { ...initialProps }
}

export default MyDocument
