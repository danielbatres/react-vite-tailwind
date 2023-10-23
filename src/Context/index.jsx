import { createContext, useEffect, useState } from 'react'
import { apiUrl } from '../api';

export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({ children }) => {
  const [counter, setCounter] = useState(0);
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  const [isCheckoutSideMenu, setIsCheckoutSideMenu] = useState(false);
  const [productDetail, setProductDetail] = useState({
    title: "",
    price: "",
    description: "",
    image: ""
  });
  const [cartProducts, setCartProducts] = useState([]);
  const [order, setOrder] = useState([]);

  const openProductDetail = () => setIsProductDetailOpen(true);
  const closeProductDetail = () => setIsProductDetailOpen(false);
  const openCheckoutSideMenu = () => setIsCheckoutSideMenu(true);
  const closeCheckoutSideMenu = () => setIsCheckoutSideMenu(false);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(apiUrl);

        if (response.status !== 200) return;

        const data = await response.json();

        setItems(data);
      } catch (error) {
        console.log("An error has ocurred");
      }
    })()
  }, []);

  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [searchCategory, setSearchCategory] = useState("");

  const filteredItemsByTitle = () => {
    let condition = item => item.title.toLowerCase().includes(searchValue.toLowerCase());
    let categoryCondition = item => item.category.toLowerCase().includes(searchCategory?.toLowerCase());
    
    return items?.filter(item => searchCategory === "" ? condition(item) : condition(item) && categoryCondition(item));
  }

  useEffect(() => {
    setFilteredItems(filteredItemsByTitle())
  }, [items, searchValue, searchCategory]);

  const updateCategoryPath = categoryPath => {
    const category = categoryPath.substring(1);

    setSearchCategory(category);
  }

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
      setCartProducts,
      isCheckoutSideMenu,
      openCheckoutSideMenu,
      closeCheckoutSideMenu,
      order,
      setOrder,
      items,
      setItems,
      searchValue,
      setSearchValue,
      filteredItems,
      setFilteredItems,
      filteredItemsByTitle,
      searchCategory,
      setSearchCategory,
      updateCategoryPath
    }}>
      {children}
    </ShoppingCartContext.Provider>
  )
}
