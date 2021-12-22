import { ReactNode } from 'react'
import { Disclosure } from '@headlessui/react'
import NavBar from 'components/NavBar'

interface StackedProps {
  children: ReactNode
}

const Stacked: React.FC<StackedProps> = ({ children }) => {
  return (
    <>
      <div className="min-h-full">
        <Disclosure as="nav" className="bg-white dark:bg-gray-950">
          {({ open }) => <NavBar open={open} />}
        </Disclosure>

        {children}
      </div>
    </>
  )
}

export default Stacked
