import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import React from "react";
import { useCart } from "./CartProvider";

export function CardProduct({product}) {
  const {addToCart} = useCart();
  return (
    <>
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={product.image} />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>
        </Card.Text>
        <Button variant="primary" onClick={()=>addToCart(product)}>Aggiungi al carrello</Button>
      </Card.Body>
    </Card>
    </>
    
    
  )
}


