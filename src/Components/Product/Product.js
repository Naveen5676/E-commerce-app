import React, { Fragment, useContext } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Itemstore from "../../Store/Itemstore";
import { Link } from "react-router-dom";

const Product = () => {
  const cartctx = useContext(Itemstore);

  return (
    <Fragment>
      <Container className="mt-3">
        <Row>
          {cartctx.product.map((product) => (
            <Col key={product.id} xs={4}>
              <Card className="shadow-lg , mt-3">
                <Link to={`/store/${product.id}`}>
                  <Card.Img variant="top" src={product.imageUrl} />
                </Link>
                <Card.Body>
                  <Card.Title>{product.title}</Card.Title>
                  <Card.Text>Price: ${product.price}</Card.Text>
                  <Button onClick={() => cartctx.addToCart(product)}>
                    Add To Cart
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </Fragment>
  );
};

export default Product;
