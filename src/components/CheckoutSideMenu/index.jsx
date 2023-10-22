import { useContext } from "react"
import { ShoppingCartContext } from "../../Context"
import { Aside } from "../Aside";
import { OrderCard } from "../OrderCard";

const CheckoutSideMenu = () => {
  const {
    isCheckoutSideMenu,
    closeCheckoutSideMenu,
    cartProducts
  } = useContext(ShoppingCartContext);

  return (
    <Aside
      isOpen={isCheckoutSideMenu}
      title="My order"
      onClose={() => closeCheckoutSideMenu()}
    >
      <div className="flex flex-col gap-2 py-4">
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
    </Aside>
  );
}

export { CheckoutSideMenu }