import axios from 'axios'
import { createContext, useEffect, useReducer } from 'react'
import { dentistsReducer, favReducer } from './reducers'

export const initialState = { theme: '', data: [] }

export const ContextGlobal = createContext(undefined)

const initDentistsState = { dentistsList: [], dentist: {} }

const initFavState = JSON.parse(localStorage.getItem('favs')) || []

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context
  const [dentistsState, dentistsDispatch] = useReducer(
    dentistsReducer,
    initDentistsState
  )

  const fecthDentistsData = () => {
    axios('https://jsonplaceholder.typicode.com/users')
      .then(res =>
        dentistsDispatch({ type: 'GET_DENTISTS', payload: res.data })
      )
      .catch(err => console.log(err))
  }

  useEffect(() => {
    fecthDentistsData()
  }, [])

  // console.log(dentistsState)

  const [favState, favDispatch] = useReducer(favReducer, initFavState)

  useEffect(() => {
    // console.log(favState)
    localStorage.setItem('favs', JSON.stringify(favState))
  }, [favState])

  return (
    <ContextGlobal.Provider
      value={{
        dentistsState,
        dentistsDispatch,
        favState,
        favDispatch
      }}
    >
      {children}
    </ContextGlobal.Provider>
  )
}
