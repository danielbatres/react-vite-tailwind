import { useContext } from "react"
import { ShoppingCartContext } from "../../Context"
import { Aside } from "../Aside";
import { OrderCard } from "../OrderCard";
import { useShoppingCart } from "../../hooks/useShoppingCart";

const CheckoutSideMenu = () => {
  const {
    isCheckoutSideMenu,
    closeCheckoutSideMenu,
    cartProducts
  } = useContext(ShoppingCartContext);

  const { 
    getTotalPrice,
    handleCheckout
  } = useShoppingCart();

  return (
    <Aside
      isOpen={isCheckoutSideMenu}
      title="My order"
      onClose={() => closeCheckoutSideMenu()}
    >
      <div className="flex flex-col gap-2 py-4 flex-1">
        {cartProducts.map((product) => (
          <OrderCard
            key={product.id}
            id={product.id}
            title={product.title}
            image={product.images}
            price={product.price}
          />
        ))}
      </div>
      <div className="mb-6">
        <p className="flex justify-between items-center mb-2">
          <span className="font-light">Total:</span>
          <span className="font-medium text-2xl">{getTotalPrice(cartProducts)}</span>
        </p>
        <button
          className="bg-black py-3 text-white w-full rounded-lg"
          onClick={() => handleCheckout()}
        >
          Checkout
        </button>
      </div>
    </Aside>
  );
}

export { CheckoutSideMenu }