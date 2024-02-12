import useSWR from "swr";
import { CardCategory } from "./CardCategory";

const fetcher = (url) => fetch(url).then((res) => res.json());

export function FetchCatalogue() {
  const { data, error } = useSWR(`https://api.escuelajs.co/api/v1/categories`, fetcher);


  return (
    <>
      {data &&
        data.map((product) => {
          return <CardCategory key={product.id} product={product} />;
        })}
    </>
  );
}
