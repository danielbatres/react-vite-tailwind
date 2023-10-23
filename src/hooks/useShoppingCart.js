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
    setProductDetail,
    order,
    setOrder
  } = useContext(ShoppingCartContext);

  const handleDelete = id => {
    const filteredProducts = cartProducts.filter(product => product.id !== id);

    setCartProducts(filteredProducts);
    setCounter(prev => prev -= 1);
  }
  
  const handleCheckout = () => {
    const date = new Date();

    const orderToAdd = {
      date: `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`,
      products: cartProducts,
      totalProducts: cartProducts.length,
      totalPrice: getTotalPrice(cartProducts)
    }

    setOrder([...order, orderToAdd]);
    setCartProducts([]);
    setCounter(0);
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
    handleCheckout,
    showProduct,
    addProductToCart,
    cartProducts,
    getTotalPrice
  }  
}

export { useShoppingCart }