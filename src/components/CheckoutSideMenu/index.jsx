import { useContext } from "react"
import { ShoppingCartContext } from "../../Context"
import { Aside } from "../Aside";

const CheckoutSideMenu = () => {
  const {
    isCheckoutSideMenu,
    closeCheckoutSideMenu
  } = useContext(ShoppingCartContext);

  return (
    <Aside isOpen={isCheckoutSideMenu} title="My order" onClose={() => closeCheckoutSideMenu()}>

    </Aside>
  )
}

export { CheckoutSideMenu }