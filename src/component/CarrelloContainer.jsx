import { CarrelloCard } from "./CarrelloCard";
import { useCart } from "./CartProvider";
import "./style/CatalogContainer.css"

export function CarrelloContainer() {
    const {products} = useCart();
    
    return (
        <div className="catalog-container">
          {products.map((product)=>{
            return(
                <CarrelloCard product={product} key={product.id} />
            )
          })}
        </div>
    )
}