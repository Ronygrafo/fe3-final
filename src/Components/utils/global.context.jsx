import axios from 'axios'
import { createContext, useEffect, useReducer } from 'react'
import { dentistsReducer, favReducer, themeReducer } from './reducers'

export const ContextGlobal = createContext(undefined)

const initThemeState = () => {
  const storedTheme = localStorage.getItem('theme')
  const preferredTheme = window.matchMedia('(prefers-color-scheme: dark)')
    .matches
    ? 'dark'
    : 'light'
  const initialTheme = storedTheme || preferredTheme

  localStorage.setItem('theme', initialTheme)

  return { theme: initialTheme }
}

const initDentistsState = { dentistsList: [], dentist: {} }

const initFavState = JSON.parse(localStorage.getItem('favs')) || []

export const ContextProvider = ({ children }) => {
  // Theme Ruducer
  const [themeState, themeDispatch] = useReducer(
    themeReducer,
    {},
    initThemeState
  )

  useEffect(() => {
    const root = document.documentElement
    if (themeState.theme === 'light') {
      root.classList.remove('dark')
    } else {
      root.classList.add('dark')
    }
  }, [themeState.theme])

  // Dentists Reducer
  const [dentistsState, dentistsDispatch] = useReducer(
    dentistsReducer,
    initDentistsState
  )

  const fetchDentistsData = () => {
    axios('https://jsonplaceholder.typicode.com/users')
      .then(res =>
        dentistsDispatch({ type: 'GET_DENTISTS', payload: res.data })
      )
      .catch(err => console.log(err))
  }

  useEffect(() => {
    fetchDentistsData()
  }, [])

  // Favs Reducer
  const [favState, favDispatch] = useReducer(favReducer, initFavState)

  useEffect(() => {
    localStorage.setItem('favs', JSON.stringify(favState))
  }, [favState])

  return (
    <ContextGlobal.Provider
      value={{
        dentistsState,
        dentistsDispatch,
        favState,
        favDispatch,
        themeState,
        themeDispatch
      }}
    >
      {children}
    </ContextGlobal.Provider>
  )
}
