import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import React from "react";

export function CardProduct({product}) {
  return (
    <>
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={product.images[0]} />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>
        </Card.Text>
        <Button variant="primary" >Aggiungi al carrello</Button>
      </Card.Body>
    </Card>
    </>
    
    
  )
}


