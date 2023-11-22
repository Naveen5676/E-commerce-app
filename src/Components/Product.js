import React, { Fragment } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const Product = () => {
  const productsArr = [
    {
      title: "Colors",
      price: 100,
      imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },
    {
      title: "Black and white Colors",
      price: 50,
      imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },
    {
      title: "Yellow and Black Colors",
      price: 70,
      imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },
    {
      title: "Blue Color",
      price: 100,
      imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
  ];

  return (
    <Fragment>
      <Container className="mt-3">
        <Row>
          {productsArr.map((product, index) => (
            <Col key={index} xs={4}>
              <Card className="shadow-lg">
                <Card.Img variant="top" src={product.imageUrl} />
                <Card.Body>
                  <Card.Title>{product.title}</Card.Title>
                  <Card.Text>Price: ${product.price}</Card.Text>
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
