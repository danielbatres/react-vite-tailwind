import { useContext } from "react"
import { ShoppingCartContext } from "../../Context"
import { OrderCard } from "../../components/OrderCard";

function MyOrder() {
  const { order } = useContext(ShoppingCartContext);

  return (
    <div className="flex flex-col w-80">
      {order?.slice(-1)[0].products.map(product => (
        <OrderCard
          key={product.id}
          id={product.id}
          title={product.title}
          image={product.images}
          price={product.price}
        />
      ))}
    </div>
  )
}

export { MyOrder }