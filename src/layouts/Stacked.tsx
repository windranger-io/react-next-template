import { ReactNode } from 'react'
import { Disclosure } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import Image from 'next/image'
import Link from 'next/link'
import { useWeb3React } from '@web3-react/core'
import { injected } from 'web3/connectors'
import { shortenAddress } from 'utils/strings'
import logo from '../../public/logo.svg'
import { Switcher } from 'components/ThemeSwitcher'
import { classNames } from 'utils/strings'

const navigation = [
  { name: 'Dashboard', href: '#', current: true },
  { name: 'Screen1', href: '#', current: false },
  { name: 'Screen2', href: '#', current: false },
]

interface StackedProps {
  children: ReactNode
}

const Stacked: React.FC<StackedProps> = ({ children }) => {
  const { activate, active, account, deactivate } = useWeb3React()

  const connectWallet = async () => {
    await activate(injected)
  }

  return (
    <>
      <div className="min-h-full">
        <Disclosure as="nav" className="bg-white dark:bg-gray-950">
          {({ open }) => (
            <>
              <div className="mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20">
                  <div className="flex items-center">
                    <div className="-mr-2 flex items-center sm:hidden">
                      {/* Mobile menu button */}
                      <Disclosure.Button className="bg-white dark:bg-gray-850 dark:text-gray-300 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none">
                        <span className="sr-only">Open main menu</span>
                        {open ? (
                          <XIcon className="block h-6 w-6" aria-hidden="true" />
                        ) : (
                          <MenuIcon
                            className="block h-6 w-6"
                            aria-hidden="true"
                          />
                        )}
                      </Disclosure.Button>
                    </div>
                    <div className="flex-shrink-0 hidden sm:flex">
                      <Image
                        className="block lg:hidden h-8 w-auto"
                        src={logo}
                        alt="Workflow"
                        width="50"
                        height="50"
                      />
                    </div>
                    <div className="ml-10 flex items-baseline space-x-4">
                      {navigation.map((item) => (
                        <Link
                          key={item.name}
                          aria-current={item.current ? 'page' : undefined}
                          href={item.href}
                        >
                          <a
                            className={classNames(
                              item.current
                                ? 'bg-gray-200 text-grey-950 dark:bg-gray-750 dark:text-gray-100'
                                : 'text-gray-400 hover:text-gray-600',
                              'px-3 py-2 rounded-xl text-medium font-normal'
                            )}
                          >
                            {item.name}
                          </a>
                        </Link>
                      ))}
                    </div>
                  </div>

                  <div className="hidden sm:ml-6 sm:flex sm:items-center">
                    <Switcher />
                    <button
                      onClick={active ? deactivate : connectWallet}
                      type="button"
                      className="inline-flex items-center px-4 py-2 text-medium font-medium rounded-md text-pink-600 bg-pink-100 border-2 border-pink-100 hover:border-pink-400 focus:outline-none dark:bg-pink-900 dark:border-pink-900 dark:text-pink-300 dark:bg-opacity-50 dark:border-opacity-50 dark:hover:border-opacity-80"
                    >
                      {active ? shortenAddress(account) : 'Connect Wallet'}
                    </button>
                  </div>
                  {/* */}
                </div>
              </div>

              <Disclosure.Panel className="sm:hidden">
                <div className="pt-2 pb-3 space-y-1">
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={classNames(
                        item.current
                          ? 'bg-pink-50 border-pink-500 text-pink-700'
                          : 'border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800',
                        'block pl-3 pr-4 py-2 border-l-4 text-base font-medium'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
                <div className="pt-4 pb-4 border-t border-gray-200">
                  <div className="flex items-center px-4">
                    <button
                      onClick={active ? deactivate : connectWallet}
                      type="button"
                      className="inline-flex items-center px-4 py-2 text-medium font-medium rounded-md text-pink-600 bg-pink-100 border-2 border-pink-100 hover:border-pink-400 focus:outline-none dark:bg-pink-900 dark:border-pink-900 dark:text-pink-300 dark:bg-opacity-50 dark:border-opacity-50 dark:hover:border-opacity-80"
                    >
                      {active ? shortenAddress(account) : 'Connect Wallet'}
                    </button>
                  </div>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        {children}
      </div>
    </>
  )
}

export default Stacked
