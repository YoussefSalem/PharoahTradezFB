import React, { useContext } from "react";
import ReactDOM from "react-dom";
import algoliasearch from "algoliasearch/lite";
import {
  InstantSearch,
  SearchBox,
  Hits,
  Pagination,
  PoweredBy,
  SortBy,
  RefinementList,
} from "react-instantsearch-dom";
import { Card, Button, Col, Row } from "react-bootstrap";
import { CartContext } from "../global/CartContext";
import "../css/index.css";
import "../css/Home.css";

// import { productContext } from '../global/ProductsContext'
import useProducts from "../hooks/useProducts";
const Products = () => {
  const products = useProducts();

  const searchClient = algoliasearch(
    "LBL1U34Y59",
    "2a23d62073fe4f7f483664852f65bdd5"
  );

  const { dispatch } = useContext(CartContext);

  return (
    <>
      <br></br>
      <InstantSearch searchClient={searchClient} indexName="dev_pharoah_tradez">
        <div className="container">
          <div
            className="row w-100"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
              flexWrap: "wrap",
            }}
          >
            <div className="col-md-11 col-12">
              <SearchBox
                autoFocus
                showLoadingIndicator
                // defaultRefinement={props.value}
              />
            </div>
          </div>
          <h3 className=" d-flex justify-content-start mt-3" id="gold">
            Products
          </h3>{" "}
          <RefinementList attribute={"departments.dep_name"} operator="and" />
          <div className="mt-3">
            <div className="col-12">
              <div className="">
                <Row>
                  <Hits
                    hitComponent={(data) => {
                      let product = data.hit;
                      return (
                        <Col
                          className="m-1"
                          // xs={12}
                          // sm={6}
                          // md={4}
                          // lg={3}
                          sm
                          key={data.hit.objectID}
                        >
                          <Card style={{ width: "18rem" }}>
                            <Card.Img
                              variant="top"
                              src={data.hit.ProductImage}
                            />
                            <Card.Body>
                              <Card.Title>{data.hit.ProductName}</Card.Title>

                              <Card.Text className="">
                                {" "}
                                Price :
                                <span className="OldPrice">
                                  {data.hit.ProductPrice * 1.3} EGP{" "}
                                </span>
                              </Card.Text>
                              <Card.Text className="text-danger bold">
                                {" "}
                                <span className="font-weight-bolder">
                                  {" "}
                                  30% of Price: {data.hit.ProductPrice} EGP.
                                </span>
                              </Card.Text>
                              <Card.Text className="text-danger bold">
                                {" "}
                              </Card.Text>

                              <Button
                                variant="info"
                                onClick={() => {
                                  dispatch({
                                    type: "ADD_TO_CART",
                                    id: data.hit.ArticleNumber,
                                    product,
                                  });
                                }}
                              >
                                Add to Cart
                              </Button>
                            </Card.Body>
                          </Card>
                        </Col>
                      );
                    }}
                  />
                </Row>
              </div>
            </div>
          </div>
          <div className="row mt-3 mb-3">
            <Pagination defaultRefinement={1} />
          </div>
        </div>
      </InstantSearch>

      {/* {products.length !== 0 && <h3 className="text-center">Products</h3>}
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
      </div> */}
    </>
  );
};

export default Products;
