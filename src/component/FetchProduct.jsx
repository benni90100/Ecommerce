import useSWR from "swr";
import { CardProduct } from "./CardProduct";

const fetcher = (url) => fetch(url).then((res) => res.json());

export function FetchProduct() {
  const { data, error } = useSWR(`https://api.escuelajs.co/api/v1/products`, fetcher);
  


  return (
    <>
      {data &&
        data.map((product) => {
          return <CardProduct key={product.id} product={product} />;
        })}
    </>
  );
}
