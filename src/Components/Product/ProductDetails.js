import React, {  useContext } from "react";
import { useParams } from "react-router-dom";
import Itemstore from "../../Store/Itemstore";
import { Card, Row, Col, Container, Button } from "react-bootstrap";

const ProductDetails = () => {
  const params = useParams();
  let product = {};

  const context = useContext(Itemstore);

  context.product.map((item) => {
    if (item.id === params.productID) {
      product = item;
    }
    return item;
  });

  return (
    <Container className="mt-5 mb-5 ">
      <Card className="border-dark rounded">
        <Row>
          <Col className="p-4">
            <Card.Title className="d-flex fs-2 justify-content-center text-muted">
              <h1>{product.title}</h1>
            </Card.Title>

            <Card.Img src={product.imageUrl} height="300px" />
          </Col>
          <Col className="p-5">
            <Card.Body>
              <h2>Description</h2>
              <p>
                React-Bootstrap replaces the Bootstrap JavaScript. Each
                component has been built from scratch as a true React component,
                without unneeded dependencies like jQuery. As one of the oldest
                React libraries, React-Bootstrap has evolved and grown alongside
                React, making it an excellent choice as your UI foundation.
              </p>
              <h2>Price$:{product.price}</h2>
              <Button onClick={() => context.addToCart(product)}>
                Add To Cart
              </Button>
              <p>Review(23)</p>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};
export default ProductDetails;
