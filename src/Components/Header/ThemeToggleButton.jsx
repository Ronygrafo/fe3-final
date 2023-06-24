import { useState, useEffect } from 'react'
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs'

const themes = ['light', 'dark']

export default function ThemeToggleButton() {
  const [isMounted, setIsMounted] = useState(false)

  const [theme, setTheme] = useState(() => {
    if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
      return localStorage.getItem('theme')
    }
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark'
    }
    return 'light'
  })

  const toggleTheme = () => {
    const t = theme === 'light' ? 'dark' : 'light'
    localStorage.setItem('theme', t)
    setTheme(t)
  }

  useEffect(() => {
    const root = document.documentElement
    if (theme === 'light') {
      root.classList.remove('dark')
    } else {
      root.classList.add('dark')
    }
  }, [theme])

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return isMounted ? (
    <div className='theme-switch'>
      {themes.map(t => {
        const checked = t === theme
        return (
          <button
            key={t}
            className={`${checked ? 'bg-white' : ''}`}
            onClick={toggleTheme}
            aria-label='Toggle theme'
          >
            {t === 'light' ? <BsFillSunFill /> : <BsFillMoonFill />}
          </button>
        )
      })}
    </div>
  ) : (
    <div />
  )
}
