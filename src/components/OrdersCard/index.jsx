import { ChevronRightIcon } from "@heroicons/react/24/solid";

const OrdersCard = (props) => {
  const { 
    totalPrice, 
    totalProducts 
  } = props;

  return (
    <div className="flex justify-between items-center mb-4 border border-black w-80 p-4 rounded-lg">
      <div className="flex justify-between w-full items-center">
        <p className="flex flex-col">
          <span className="font-light">date</span>
          <span className="font-light">{totalProducts} articles</span>
        </p>
        <p className="flex justify-center items-center gap-2">
          <span className="font-medium text-2xl">${totalPrice}</span>
          <ChevronRightIcon className="h-6 w-6 text-black cursor-pointer"/>
        </p>
      </div>
    </div>
  )
}

export { OrdersCard }