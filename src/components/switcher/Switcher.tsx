import { useEffect, useState } from 'react'
import { MoonIcon, LightBulbIcon } from '@heroicons/react/outline'

export const Switcher = () => {
  const [darkMode, setDarkMode] = useState(false)

  const toggle = () => {
    setDarkMode(!darkMode)

    if (JSON.stringify(!darkMode) === 'true') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }

    localStorage.setItem('darkMode', JSON.stringify(!darkMode))
  }

  useEffect(() => {
    const isDarkMode = localStorage.getItem('darkMode')

    if (isDarkMode && isDarkMode === 'true') {
      setDarkMode(true)
    }
  }, [])

  return (
    <button
      onClick={toggle}
      className="bg-white dark:bg-gray-850 dark:text-gray-300 inline-flex items-center justify-center p-2 mr-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
    >
      <span className="sr-only">Toggle dark mode</span>
      {darkMode ? (
        <LightBulbIcon className="block h-6 w-6" aria-hidden="true" />
      ) : (
        <MoonIcon className="block h-6 w-6" aria-hidden="true" />
      )}
    </button>
  )
}
