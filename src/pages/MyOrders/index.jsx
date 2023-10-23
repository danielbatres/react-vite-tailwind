import { useContext } from "react"
import { OrdersCard } from "../../components/OrdersCard"
import { ShoppingCartContext } from "../../Context"
import { Link } from "react-router-dom";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";

function MyOrders() {
  const { order } = useContext(ShoppingCartContext);

  return (
    <>
      {order.map((order, index) => (
        <Link 
          key={index}
          to={`/my-orders/${index}`}
        >
          <OrdersCard
            totalPrice={order.totalPrice}
            totalProducts={order.totalProducts}
          />
        </Link>
      ))}
    </>
  )
}

export { MyOrders }