import { createContext, useState, useEffect } from 'react'

export const initialState = { theme: '', data: [] }

export const ContextGlobal = createContext(undefined)

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

  return (
    <ContextGlobal.Provider value={{ dentists }}>
      {children}
    </ContextGlobal.Provider>
  )
}
