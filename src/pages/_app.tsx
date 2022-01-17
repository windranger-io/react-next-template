import type { AppProps } from 'next/app'
import { ChakraProvider, GlobalStyle } from '@chakra-ui/react'
import { theme } from 'theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
