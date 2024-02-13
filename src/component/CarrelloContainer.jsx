import { CarrelloCard } from "./CarrelloCard";
import { useCart } from "./CartProvider";
import "./style/CatalogContainer.css";

export function CarrelloContainer() {
  const { products , resetChart} = useCart();

  return (
    <div className="carrello-container">
      <div className="banner">
        <button className="iscriviti">iscriviti gratis</button>
        <h3>usa il tuo account per i tuoi acquisti in sicurezza</h3>
        <button className="iscriviti">scopri di piu</button>
      </div>
      <div className="carrello-cont">
        <div className="header">
          <h2>il tuo carrello</h2>
          <button className="des" onClick={()=>resetChart(products)}>Rimuovi tutti gli articoli</button>
        </div>
        <div className="carrello">
          {products.map((product) => {
            return <CarrelloCard product={product} key={product.id} />;
          })}
        </div>
        
      </div>
      <div className="totale">
          <h2>totale {products.reduce((a, item)=> a + (item.price*item.quantity), 0).toFixed(2)} €</h2>
        </div>
    </div>
  );
}
