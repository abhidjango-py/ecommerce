import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../store/cartSlice";
import { getProducts } from "../store/productSlice";
import StatusCode from "../utils/StatusCode";

const Product = () => {
  const dispatch = useDispatch();
  const { data: products, status } = useSelector((state) => state.products);

  // const [products, getProducts] = useState([]);

  useEffect(() => {
    //api
    // fetch("https://fakestoreapi.com/products")
    //   .then((data) => data.json())
    //   .then((result) => getProducts(result));
    //dispatch action for products
    dispatch(getProducts());
  }, []);

  if (status === StatusCode.LOADING) {
    return <p>Loading...</p>;
  }
  if (status === StatusCode.ERROR) {
    return <p>Something Went Wrong :/</p>;
  }

  const addToCart = (product) => {
    //dispatch an add action
    dispatch(add(product));
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
            variant="success"
            className="w-100"
            onClick={() => addToCart(product)}
          >
            Add to cart
          </Button>
        </Card.Footer>
      </Card>
    </div>
  ));

  return (
    <>
      <div className="h1 p-2">Products</div>
      <div className="d-flex flex-wrap">{cards}</div>
    </>
  );
};
export default Product;
