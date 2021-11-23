import { Fragment, useRef, useState } from 'react'
import { Disclosure, Dialog, Transition } from '@headlessui/react'
import {
  MenuIcon,
  XIcon,
  PaperClipIcon,
  CheckIcon,
} from '@heroicons/react/outline'
import Image from 'next/image'
import Link from 'next/link'
import { useWeb3React } from '@web3-react/core'
import { injected } from 'components/wallet/connectors'
import { shortenAddress } from 'utils/strings'
import logo from '../../public/logo.svg'
import { Switcher } from 'components/switcher/Switcher'

const navigation = [
  { name: 'Dashboard', href: '#', current: true },
  { name: 'Screen', href: '#', current: false },
  { name: 'Screen', href: '#', current: false },
]

const people = [
  {
    name: 'Jane Cooper',
    title: 'Regional Paradigm Technician',
    department: 'Optimization',
    role: 'Admin',
    email: 'jane.cooper@example.com',
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
  },
  {
    name: 'Jane Cooper',
    title: 'Regional Paradigm Technician',
    department: 'Optimization',
    role: 'Admin',
    email: 'jane.cooper@example.com',
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
  },
  {
    name: 'Jane Cooper',
    title: 'Regional Paradigm Technician',
    department: 'Optimization',
    role: 'Admin',
    email: 'jane.cooper@example.com',
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
  },
  {
    name: 'Jane Cooper',
    title: 'Regional Paradigm Technician',
    department: 'Optimization',
    role: 'Admin',
    email: 'jane.cooper@example.com',
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
  },
  {
    name: 'Jane Cooper',
    title: 'Regional Paradigm Technician',
    department: 'Optimization',
    role: 'Admin',
    email: 'jane.cooper@example.com',
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
  },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Dashboard() {
  const [open, setOpen] = useState<boolean>(false)
  const cancelButtonRef = useRef(null)
  const { activate, active, account, deactivate } = useWeb3React()

  const connectWallet = async () => {
    await activate(injected)
  }

  return (
    <>
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="fixed z-10 inset-0 overflow-y-auto"
          initialFocus={cancelButtonRef}
          onClose={setOpen}
        >
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-75 transition-opacity" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
                <div>
                  <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                    <CheckIcon
                      className="h-6 w-6 text-green-600"
                      aria-hidden="true"
                    />
                  </div>
                </div>
                <div className="">
                  <div className="px-4 py-4 sm:px-0">
                    <h3 className="text-lg leading-6 font-medium text-gray-950">
                      Applicant Information
                    </h3>
                    <p className="mt-1 max-w-2xl text-sm text-gray-500">
                      Personal details and application.
                    </p>
                  </div>
                  <div className="h-3 relative max-w-xl rounded-full overflow-hidden">
                    <div className="w-full h-full bg-gray-200 absolute"></div>
                    <div
                      className="h-full bg-pink-500 absolute"
                      style={{ width: '42%' }}
                    ></div>
                  </div>
                  <div className={'py-4'}>
                    <p className="mt-1 max-w-2xl text-md text-gray-500">
                      9,000,000 left
                    </p>
                  </div>
                  <div className="border-t border-gray-200 px-4 py-5 sm:px-0">
                    <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                      <div className="sm:col-span-1">
                        <dt className="text-sm font-medium text-gray-500">
                          Full name
                        </dt>
                        <dd className="mt-1 text-sm text-gray-950">
                          Margot Foster
                        </dd>
                      </div>
                      <div className="sm:col-span-1">
                        <dt className="text-sm font-medium text-gray-500">
                          Application for
                        </dt>
                        <dd className="mt-1 text-sm text-gray-950">
                          Backend Developer
                        </dd>
                      </div>
                      <div className="sm:col-span-1">
                        <dt className="text-sm font-medium text-gray-500">
                          Email address
                        </dt>
                        <dd className="mt-1 text-sm text-gray-950">
                          margotfoster@example.com
                        </dd>
                      </div>
                      <div className="sm:col-span-1">
                        <dt className="text-sm font-medium text-gray-500">
                          Compensation
                        </dt>
                        <dd className="mt-1 text-sm text-gray-950">
                          $1,200,000
                        </dd>
                      </div>
                      <div className="sm:col-span-2">
                        <dt className="text-sm font-medium text-gray-500">
                          About
                        </dt>
                        <dd className="mt-1 text-sm text-gray-950">
                          Fugiat ipsum ipsum deserunt culpa aute sint do nostrud
                          anim incididunt cillum culpa consequat. Excepteur qui
                          ipsum aliquip consequat sint. Sit id mollit nulla
                          mollit nostrud in ea officia proident. Irure nostrud
                          pariatur mollit ad adipisicing reprehenderit deserunt
                          qui eu.
                        </dd>
                      </div>
                      <div className="sm:col-span-2">
                        <dt className="text-sm font-medium text-gray-500">
                          Attachments
                        </dt>
                        <dd className="mt-1 text-sm text-gray-950">
                          <ul
                            role="list"
                            className="border border-gray-200 rounded-md divide-y divide-gray-200"
                          >
                            <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                              <div className="w-0 flex-1 flex items-center">
                                <PaperClipIcon
                                  className="flex-shrink-0 h-5 w-5 text-gray-400"
                                  aria-hidden="true"
                                />
                                <span className="ml-2 flex-1 w-0 truncate">
                                  resume_back_end_developer.pdf
                                </span>
                              </div>
                              <div className="ml-4 flex-shrink-0">
                                <a
                                  href="#"
                                  className="font-medium text-pink-600 hover:text-pink-500"
                                >
                                  Download
                                </a>
                              </div>
                            </li>
                            <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                              <div className="w-0 flex-1 flex items-center">
                                <PaperClipIcon
                                  className="flex-shrink-0 h-5 w-5 text-gray-400"
                                  aria-hidden="true"
                                />
                                <span className="ml-2 flex-1 w-0 truncate">
                                  coverletter_back_end_developer.pdf
                                </span>
                              </div>
                              <div className="ml-4 flex-shrink-0">
                                <a
                                  href="#"
                                  className="font-medium text-pink-600 hover:text-pink-500"
                                >
                                  Download
                                </a>
                              </div>
                            </li>
                          </ul>
                        </dd>
                      </div>
                    </dl>
                  </div>
                </div>
                <div className="mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense">
                  <button
                    type="button"
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-pink-600 text-base font-medium text-white hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 sm:col-start-2 sm:text-sm"
                    onClick={() => setOpen(false)}
                  >
                    Accept
                  </button>
                  <button
                    type="button"
                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 sm:mt-0 sm:col-start-1 sm:text-sm"
                    onClick={() => setOpen(false)}
                    ref={cancelButtonRef}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
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

        <div className="py-10">
          <header>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <p className="text-lg font-normal leading-tight text-gray-600 dark:text-gray-400">
                Dashboard overview
              </p>
            </div>
          </header>
          <main>
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
              {/* Replace with your content */}
              <div className="px-4 py-8 sm:px-0">
                <div className="flex flex-col">
                  <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                      <div className="bg-gray-50 overflow-hidden dark:bg-gray-950 sm:rounded-lg">
                        <table className="min-w-full divide-y divide-gray-100 dark:divide-gray-800">
                          <thead className="">
                            <tr>
                              <th
                                scope="col"
                                className="px-6 py-3 text-left text-medium font-medium text-gray-500 dark:text-gray-200 tracking-wider"
                              >
                                Name
                              </th>
                              <th
                                scope="col"
                                className="px-6 py-3 text-left text-medium font-medium text-gray-500  dark:text-gray-200 tracking-wider"
                              >
                                Title
                              </th>
                              <th
                                scope="col"
                                className="px-6 py-3 text-left text-medium font-medium text-gray-500 dark:text-gray-200  tracking-wider"
                              >
                                Status
                              </th>
                              <th
                                scope="col"
                                className="px-6 py-3 text-left text-medium font-medium text-gray-500 dark:text-gray-200  tracking-wider"
                              >
                                Role
                              </th>
                              <th scope="col" className="relative px-6 py-3">
                                <span className="sr-only">Edit</span>
                              </th>
                            </tr>
                          </thead>
                          <tbody className="bg-grey-50 divide-y divide-gray-100 dark:divide-gray-800">
                            {people.map((person) => (
                              <tr key={person.email}>
                                <td className="px-6 py-4 whitespace-nowrap">
                                  <div className="flex items-center">
                                    <div className="flex-shrink-0 h-10 w-10">
                                      <Image
                                        className="h-10 w-10 rounded-full"
                                        src={person.image}
                                        alt=""
                                        width="30"
                                        height="30"
                                      />
                                    </div>
                                    <div className="ml-4">
                                      <div className="text-sm font-medium text-gray-950 dark:text-gray-200">
                                        {person.name}
                                      </div>
                                      <div className="text-sm text-gray-500 dark:text-gray-500">
                                        {person.email}
                                      </div>
                                    </div>
                                  </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                  <div className="text-sm text-gray-950 dark:text-gray-200">
                                    {person.title}
                                  </div>
                                  <div className="text-sm text-gray-500">
                                    {person.department}
                                  </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                    Active
                                  </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 ">
                                  {person.role}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-normal">
                                  <a
                                    href="#"
                                    onClick={() => setOpen(true)}
                                    className="text-pink-600 hover:text-pink-900"
                                  >
                                    Edit
                                  </a>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* /End replace */}
            </div>
          </main>
        </div>
      </div>
    </>
  )
}
