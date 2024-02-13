import { CarrelloCard } from "./CarrelloCard";
import { useCart } from "./CartProvider";
import  {SpedizioneForm}  from "./SpedizioneForm";
import "./style/CatalogContainer.css"

export function CarrelloContainer() {
    const {products} = useCart();
    
    return (
        <div className="catalog-container">
          <div className="form-containr">
          {products.map((product)=>{
            return(
                <CarrelloCard product={product} key={product.id} />
            )
          })}
          </div>
          <div className="carrello-cont">
          <SpedizioneForm/>
          </div>
        </div>
    )
}