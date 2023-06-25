import { createContext, useState, useEffect, useReducer } from 'react'

export const initialState = { theme: '', data: [] }

export const ContextGlobal = createContext(undefined)

const initFavState = JSON.parse(localStorage.getItem('favs')) || []

const favReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_FAV':
      return [...state, action.payload]
    case 'DELETE_FAV':
      return state.filter(fav => fav !== action.payload)
    default:
      throw new Error()
  }
}

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context
  const [dentists, setDentists] = useState([])

  useEffect(() => {
    const fetchDentists = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/users')
      const data = await response.json()
      setDentists(data)
    }

    fetchDentists()
  }, [])

  const [favState, favDispatch] = useReducer(favReducer, initFavState)

  useEffect(() => {
    console.log(favState)
    localStorage.setItem('favs', JSON.stringify(favState))
  }, [favState])

  return (
    <ContextGlobal.Provider value={{ dentists, favState, favDispatch }}>
      {children}
    </ContextGlobal.Provider>
  )
}
