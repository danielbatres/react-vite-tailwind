import { createContext, useState } from 'react'

export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({ children }) => {
  const [counter, setCounter] = useState(0);
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  const [productDetail, setProductDetail] = useState({
    title: "",
    price: "",
    description: "",
    images: []
  });
  const [cartProducts, setCartProducts] = useState([]);

  const openProductDetail = () => setIsProductDetailOpen(true);
  const closeProductDetail = () => setIsProductDetailOpen(false);

  return (
    <ShoppingCartContext.Provider value={{
      counter,
      setCounter,
      isProductDetailOpen,
      openProductDetail,
      closeProductDetail,
      productDetail,
      setProductDetail,
      cartProducts,
      setCartProducts
    }}>
      {children}
    </ShoppingCartContext.Provider>
  )
}
