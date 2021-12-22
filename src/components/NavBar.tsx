import { Disclosure } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import Image from 'next/image'
import Link from 'next/link'
import { injected } from 'web3/connectors'
import logo from '../../public/logo.svg'
import { Switcher } from 'components/ThemeSwitcher'
import { classNames } from 'utils/strings'
import Web3Connect from 'components/Web3Connect'

const navigation = [{ name: 'Dashboard', href: '#', current: true }]

interface ComponentProps {
  open: boolean
}

const Component: React.FC<ComponentProps> = ({ open }): JSX.Element => {
  return (
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
                  <MenuIcon className="block h-6 w-6" aria-hidden="true" />
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
            <Web3Connect injected={injected} />
          </div>
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
            <Web3Connect injected={injected} />
          </div>
        </div>
      </Disclosure.Panel>
    </>
  )
}

export default Component
