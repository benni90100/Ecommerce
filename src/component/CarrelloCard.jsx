import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import React from "react";
import { useCart } from "./CartProvider";

export function CarrelloCard({product}) {
  const {removeFromCart}=useCart()
  return (
    <>
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={product.image} />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>{product.price*product.quantity} €
        </Card.Text>
        <Card.Text>X{product.quantity}
        </Card.Text>
        <Button variant="primary" onClick={()=>removeFromCart(product)}>Aggiungi al carrello</Button>
      </Card.Body>
    </Card>
    </>
    
    
  )
}


