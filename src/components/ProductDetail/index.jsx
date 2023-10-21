import { XMarkIcon } from '@heroicons/react/24/solid';
import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context';

const ProductDetail = () => {
  const {
    closeProductDetail
  } = useContext(ShoppingCartContext);

  return (
    <aside className="w-[360px] h-[calc(100vh-80px)] flex flex-col fixed right-0 border border-black rounded-lg bg-white">
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">Detail</h2>
        <div>
          <XMarkIcon
            className="h-6 w-6 text-black cursor-pointer"
            onClick={() => closeProductDetail()}
          />
        </div>
      </div>
    </aside>
  );
}

export { ProductDetail }