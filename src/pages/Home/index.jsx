import { useEffect, useState } from 'react'
import { Card } from "../../components/Card"
import { apiUrl } from '../../api';

function Home() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(apiUrl);

        if (response.status !== 200) return;

        const data = await response.json();

        console.log(data);

        setItems(data); 
      } catch (error) {
        console.log("An error has ocurred");
      }
    })()
  }, []);

  return (
    <>
      {items?.map(item => (
        <Card key={item.id} data={item} />
      ))}
    </>
  )
}

export { Home }
