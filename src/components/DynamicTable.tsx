import Image from 'next/image'
import { useState } from 'react'
import Modal from './Modal'

interface DTableProps {
  foo?: string
}

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

const DynamicTable: React.FC<DTableProps> = (): JSX.Element => {
  const [open, setOpen] = useState<boolean>(false)

  return (
    <>
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
          {people.map((person, i) => (
            <tr key={person.email + i}>
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
                <div className="text-sm text-gray-500">{person.department}</div>
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
                  onClick={() => setOpen(true)}
                  href="#"
                  className="text-pink-600 hover:text-pink-900"
                >
                  Edit
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Modal open={open} setOpen={setOpen} />
    </>
  )
}

export default DynamicTable
