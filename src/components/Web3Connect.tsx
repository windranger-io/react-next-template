import { InjectedConnector } from '@web3-react/injected-connector'
import { useWeb3React } from '@web3-react/core'
import { shortenAddress } from 'utils/strings'

interface Web3ConnectProps {
  injected: InjectedConnector
}

const Web3Connect: React.FC<Web3ConnectProps> = ({ injected }): JSX.Element => {
  const { activate, active, account, deactivate } = useWeb3React()

  const connectWallet = async () => {
    await activate(injected)
  }

  return (
    <button
      onClick={active ? deactivate : connectWallet}
      type="button"
      className="inline-flex items-center px-4 py-2 text-medium font-medium rounded-md text-pink-600 bg-pink-100 border-2 border-pink-100 hover:border-pink-400 focus:outline-none dark:bg-pink-900 dark:border-pink-900 dark:text-pink-300 dark:bg-opacity-50 dark:border-opacity-50 dark:hover:border-opacity-80"
    >
      {active ? shortenAddress(account) : 'Connect Wallet'}
    </button>
  )
}

export default Web3Connect
