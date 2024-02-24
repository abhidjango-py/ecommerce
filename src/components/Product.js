import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export const Product = () => {
  const [products, getProducts] = useState([]);

  useEffect(() => {
    //api
    fetch("https://fakestoreapi.com/products")
      .then((data) => data.json())
      .then((result) => getProducts(result));
  }, []);

  const cards = products.map((product) => (
    <div className="col-md-3 col-sm-6 p-5">
      <Card style={{ width: "18rem" }} className="h-100">
        <Card.Img
          className="p-5 align-self-center"
          variant="top"
          src={product.image}
          style={{
            height: "250px",
            width: "250px",
            objectFit: "contain",
          }}
        />
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
        </Card.Body>
        <Card.Footer style={{ backgroundColor: "white", border: "0px" }}>
          <Card.Text>
            <strong>$ {product.price}</strong>
          </Card.Text>
        </Card.Footer>
        <Card.Footer style={{ backgroundColor: "white", border: "0px" }}>
          <Button variant="success" className="w-100 ">
            Add to cart
          </Button>
        </Card.Footer>
      </Card>
    </div>
  ));

  return (
    <>
      <h1 className="text-center">Product Dashboard</h1>
      <div className="row">{cards}</div>
    </>
  );
};
