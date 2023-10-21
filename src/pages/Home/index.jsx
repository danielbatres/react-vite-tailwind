import { useContext, useEffect, useState } from 'react'
import { Card } from "../../components/Card"
import { apiUrl } from '../../api';
import { ProductDetail } from '../../components/ProductDetail';
import { ShoppingCartContext } from '../../Context';

function Home() {
  const [items, setItems] = useState([]);

  const {
    isProductDetailOpen
  } = useContext(ShoppingCartContext);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(apiUrl);

        if (response.status !== 200) return;

        const data = await response.json();

        setItems(data); 
      } catch (error) {
        console.log("An error has ocurred");
      }
    })()
  }, []);

  return (
    <>
      <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
        {items?.map((item) => (
          <Card key={item.id} data={item} />
        ))}
      </div>
      {isProductDetailOpen && <ProductDetail />}
    </>
  );
}

export { Home }
