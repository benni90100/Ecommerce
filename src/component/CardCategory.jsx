import Card from "react-bootstrap/Card";
import React from "react";
import { Link } from "react-router-dom";

export function CardCategory({ product }) {
  return (
    <>
      <Link to={`/products/${product.name}`}>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={product.image} />
          <Card.Body>
            <Card.Title>{product.name}</Card.Title>
          </Card.Body>
        </Card>
      </Link>
    </>
  );
}
