import { useState, useEffect } from 'react'

const useDarkMode = () => {
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

  return { darkMode, toggle }
}

export default useDarkMode
