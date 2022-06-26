import React, { useContext } from "react";
import ReactDOM from "react-dom";
import algoliasearch from "algoliasearch/lite";
import { InstantSearch, SearchBox, Hits } from "react-instantsearch-dom";
import { Card, Button, Col } from "react-bootstrap";
import { CartContext } from "../global/CartContext";
import "../css/index.css";
import "../css/Home.css";

// import { productContext } from '../global/ProductsContext'
import useProducts from "../hooks/useProducts";
const Products = () => {
  const products = useProducts();
  const searchClient = algoliasearch(
    "latency",
    "69b3b54e7cedfefdbba0b9f026f7d006"
  );

  const { dispatch } = useContext(CartContext);

  return (
    <>
      <br></br>
      <InstantSearch indexName="PharoahTradez" searchClient={searchClient}>
        <SearchBox />
        <Hits />
      </InstantSearch>
      {products.length !== 0 && <h3 className="text-center">Products</h3>}
      <div className="products-container">
        {products.length < 0 && <div>check your internet connection!!</div>}
        {products &&
          products.map((product) => (
            <Col className="m-1" xs={12} sm={6} md={4} lg={3} key={product.id}>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={product.ProductImage} />
                <Card.Body>
                  <Card.Title>{product.ProductName}</Card.Title>

                  <Card.Text className="">
                    {" "}
                    Price :
                    <span className="OldPrice">
                      {product.ProductPrice * 1.3} EGP{" "}
                    </span>
                  </Card.Text>
                  <Card.Text className="text-danger bold">
                    {" "}
                    <span className="font-weight-bolder">
                      {" "}
                      30% of Price: {product.ProductPrice} EGP.
                    </span>
                  </Card.Text>
                  <Card.Text className="text-danger bold"> </Card.Text>

                  <Button
                    variant="info
              "
                    onClick={() => {
                      dispatch({
                        type: "ADD_TO_CART",
                        id: product.id,
                        product,
                      });
                    }}
                  >
                    Add to Cart
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
      </div>
    </>
  );
};

export default Products;
