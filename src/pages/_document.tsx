import Document, { Html, Head, Main, NextScript } from 'next/document'
import { chakra } from '@chakra-ui/react'

const ChakraHtml = chakra(Html)
const Body = chakra('body')

class MyDocument extends Document {
  /* eslint-disable  @typescript-eslint/no-explicit-any */
  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <ChakraHtml>
        <Head />
        <Body>
          <Main />
          <NextScript />
        </Body>
      </ChakraHtml>
    )
  }
}

export default MyDocument
