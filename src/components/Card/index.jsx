import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import { PlusIcon } from "@heroicons/react/24/solid";

const Card = ({ data }) => {
  const {
    setCounter,
    openProductDetail,
    setProductDetail,
    cartProducts,
    setCartProducts
  } = useContext(ShoppingCartContext);

  const showProduct = () => {
    setProductDetail(data);
    openProductDetail();
  }

  const addProductToCart = e => {
    e.stopPropagation();
    setCounter((prev) => prev + 1);

    const newProducts = [...cartProducts];
    newProducts.push(data);

    setCartProducts(newProducts);
    console.log(cartProducts);
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
        <div className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1" onClick={e => addProductToCart(e)}>
          <PlusIcon className="w-6 h-6 text-black" />
        </div>
      </figure>
      <p className="flex justify-between">
        <span className="text-sm font-light">{data.title}</span>
        <span className="text-lg font-medium">${data.price}</span>
      </p>
    </div>
  );
}

export { Card }