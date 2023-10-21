import { createContext, useState } from 'react'

export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({ children }) => {
  const [counter, setCounter] = useState(0);

  return (
    <ShoppingCartContext.Provider value={{
      counter,
      setCounter
    }}>
      {children}
    </ShoppingCartContext.Provider>
  )
}
