import { XMarkIcon } from '@heroicons/react/24/solid';
import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context';

const ProductDetail = () => {
  const {
    closeProductDetail,
    productDetail
  } = useContext(ShoppingCartContext);

  return (
    <aside className="w-[360px] h-[calc(100vh-80px)] flex flex-col fixed right-0 border border-black rounded-lg bg-white p-6">
      <div className="flex justify-between items-center">
        <h2 className="font-medium text-xl">Detail</h2>
        <div>
          <XMarkIcon
            className="h-6 w-6 text-black cursor-pointer"
            onClick={() => closeProductDetail()}
          />
        </div>
      </div>
      <figure>
        <img
          className="w-full h-hull rounded-lg"
          src={productDetail.images}
          alt={productDetail.title}
        />
      </figure>
      <p className='flex flex-col'>
        <span className="font-medium text-2xl mb-2">{productDetail.price}</span>
        <span className="font-medium text-md">{productDetail.title}</span>
        <span className='font-light text-sm'>{productDetail.description}</span>
      </p>
    </aside>
  );
}

export { ProductDetail }