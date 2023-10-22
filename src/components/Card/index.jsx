import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import { CheckIcon, PlusIcon } from "@heroicons/react/24/solid";

const Card = ({ data }) => {
  const {
    setCounter,
    openProductDetail,
    closeProductDetail,
    setProductDetail,
    cartProducts,
    setCartProducts,
    openCheckoutSideMenu,
    closeCheckoutSideMenu
  } = useContext(ShoppingCartContext);

  const showProduct = () => {
    setProductDetail(data);
    openProductDetail();
    closeCheckoutSideMenu();
  }

  const addProductToCart = event => {
    event.stopPropagation();
    setCounter((prev) => prev + 1);

    const newProducts = [...cartProducts];
    newProducts.push(data);

    setCartProducts(newProducts);
    console.log(cartProducts);
    closeProductDetail();
    openCheckoutSideMenu();
  }

  const renderIcon = () => {
    const isInCart = cartProducts.filter(product => product.id === data.id).length > 0;

    const commonClasses = "absolute top-0 right-0 flex justify-center items-center w-6 h-6 rounded-full m-2 p-1";

    if (isInCart) {
      return (
        <div
          className={`${commonClasses} bg-black`}
        >
          <CheckIcon className="h-6 w-6 text-white" />
        </div>
      )
    } else {
      return (
        <div
        className={`${commonClasses} bg-white`}
        onClick={(e) => addProductToCart(e)}
      >
        <PlusIcon className="h-6 w-6 text-black"/>
      </div>
      )
    }
  }

  return (
    <div 
      className="bg-white cursor-pointer w-56 h-60 rounded-lg"
      onClick={() => showProduct()}
    >
      <figure className="relative mb-2 w-full h-4/5">
        <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">
          {data.category.name}
        </span>
        <img
          className="w-full h-full object-cover rounded-lg"
          src={data.images[0]}
          alt={data.title}
        />
        {renderIcon()}
      </figure>
      <p className="flex justify-between">
        <span className="text-sm font-light">{data.title}</span>
        <span className="text-lg font-medium">${data.price}</span>
      </p>
    </div>
  );
}

export { Card }