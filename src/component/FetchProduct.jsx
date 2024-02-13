import useSWR from "swr";
import { CardProduct } from "./CardProduct";


const fetcher = (url) => fetch(url).then((res) => res.json());

export function FetchProduct() {
  const { data, error } = useSWR(`https://fakestoreapi.com/products`, fetcher);
  return (
    <>
    {error && <p>errore caricamento dati {error}</p>}
      {data &&
        data.map((product) => {
          return <CardProduct key={product.id} product={product} event={()=>handlechart(product)} />;
        })}
    </>
  );
}
