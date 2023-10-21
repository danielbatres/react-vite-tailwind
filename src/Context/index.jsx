import { createContext } from 'react'

const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({ children }) => {
  return (
    <ShoppingCartContext.Provider value=''>
      {children}
    </ShoppingCartContext.Provider>
  );
}
