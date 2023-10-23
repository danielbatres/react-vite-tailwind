import { useContext } from "react"
import { OrdersCard } from "../../components/OrdersCard"
import { ShoppingCartContext } from "../../Context"
import { Link } from "react-router-dom";

function MyOrders() {
  const { order } = useContext(ShoppingCartContext);

  return (
    <>
      <div className="mb-4">
        <h1 className="font-medium text-xl">My orders</h1>
      </div>
      {order.map((order, index) => (
        <Link 
          key={index}
          to={`/my-orders/${index}`}
        >
          <OrdersCard
            date={order.date}
            totalPrice={order.totalPrice}
            totalProducts={order.totalProducts}
          />
        </Link>
      ))}
    </>
  )
}

export { MyOrders }