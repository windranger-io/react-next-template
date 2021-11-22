import 'styles/globals.css'
import type { AppProps } from 'next/app'
import { Web3ReactProvider } from '@web3-react/core'
import { ethers } from 'ethers'

function MyApp({ Component, pageProps }: AppProps) {
  /* eslint-disable  @typescript-eslint/no-explicit-any */
  function getLibrary(provider: any) {
    return new ethers.providers.Web3Provider(provider) // this will vary according to whether you use e.g. ethers or web3.js
  }

  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Component {...pageProps} />
    </Web3ReactProvider>
  )
}

export default MyApp
