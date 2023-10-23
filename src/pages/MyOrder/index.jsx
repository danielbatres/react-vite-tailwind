import { useContext } from "react"
import { ShoppingCartContext } from "../../Context"
import { OrderCard } from "../../components/OrderCard";
import { Link } from "react-router-dom";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";

function MyOrder() {
  const { order } = useContext(ShoppingCartContext);

  return (
    <>
      <div className="flex justify-center items-center relative w-80 mb-6">
        <Link
          to="/my-orders"
          className="absolute left-0"
        >
          <ChevronLeftIcon className="h-6 w-6 text-black cursor-pointer" />
        </Link>
        <h1>My Orders</h1>
      </div>
      <div className="flex flex-col w-80">
        {order?.slice(-1)[0]?.products.map(product => (
          <OrderCard
            key={product.id}
            id={product.id}
            title={product.title}
            image={product.images}
            price={product.price}
          />
        ))}
      </div>
    </>
  )
}

export { MyOrder }