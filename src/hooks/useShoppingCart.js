import { useContext } from "react"
import { ShoppingCartContext } from "../Context";

const useShoppingCart = () => {
  const {
    cartProducts,
    setCartProducts,
    openCheckoutSideMenu,
    closeCheckoutSideMenu,
    setCounter,
    openProductDetail,
    closeProductDetail,
    setProductDetail
  } = useContext(ShoppingCartContext);

  const handleDelete = id => {
    const filteredProducts = cartProducts.filter(product => product.id !== id);

    setCartProducts(filteredProducts);
    setCounter(prev => prev -= 1);
  }

  const showProduct = data => {
    setProductDetail(data);
    openProductDetail();
    closeCheckoutSideMenu();
  };

  const addProductToCart = (event, data) => {
    event.stopPropagation();
    setCounter((prev) => prev + 1);

    const newProducts = [...cartProducts];
    newProducts.push(data);

    setCartProducts(newProducts);
    closeProductDetail();
    openCheckoutSideMenu();
  };

  const getTotalPrice = (products) => {
    return products.reduce((sum, product) => sum + product.price, 0);
  };
  
  return {
    handleDelete,
    showProduct,
    addProductToCart,
    cartProducts,
    getTotalPrice
  }  
}

export { useShoppingCart }