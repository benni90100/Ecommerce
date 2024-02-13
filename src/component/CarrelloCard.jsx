import "./style/CatalogContainer.css"
import React from "react";
import { useCart } from "./CartProvider";

export function CarrelloCard({product}) {
  const {removeFromCart, addToCart}=useCart()
  return (
    <>
    <div className="card-carrello">
      <div className="radio">
        <input type="checkbox" name="scegli" id="scegli" />
      </div>
      <div className="image-carrello">
        <img src={product.image} alt="" className="image-carr"/>
      </div>
      <div className="central-carrello">
        <h2 className="title">{product.title}</h2>
        <h5 className="h5">disponibilita' immediata</h5>
        <div className="footer-carrello">
          <button className="quantity-button" onClick={()=>addToCart(product)}>Q.ta {product.quantity}</button>
          <button className="des" onClick={()=>removeFromCart(product)}>Rimuovi</button>
          <button className="des">salva per dopo</button>
          <button className="des">visualizza articoli simili</button>
        </div>
      </div>
      <div className="sx-carrello">
        <h5>prezzo € {product.price*product.quantity}
        </h5>
        <h5>prezzo unitario  €{product.price}</h5>
      </div>
      
    </div>
    
    </>
  )
}


