import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { remove } from "../store/cartSlice";

const Cart = () => {
  const products = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const removeFromCart = (id) => {
    //dispatch a remove action
    dispatch(remove(id));
  };
  const cards = products.map((product) => (
    <div className="col-md-3 container px-5">
      <Card style={{ width: "18rem" }} className="h-100">
        <Card.Img
          className="align-self-center"
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
          <Button
            variant="danger"
            className="w-100"
            onClick={() => removeFromCart(product.id)}
          >
            Remove Item
          </Button>
        </Card.Footer>
      </Card>
    </div>
  ));

  return (
    <>
      <div className="h1 p-2">Cart</div>
      <div className="d-flex flex-wrap">{cards}</div>
    </>
  );
};

export default Cart;
