import React, { Fragment , useContext } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Itemstore from "../../Store/Itemstore";
import Header from "../UI/Header";

const Product = () => {

    const cartctx= useContext(Itemstore);

  const productsArr = [
    {
      id: "m1",
      title: "Colors",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },
    {
      id: "m2",
      title: "Black and white Colors",
      price: 50,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },
    {
      id: "m3",
      title: "Yellow and Black Colors",
      price: 70,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },
    {
      id: "m4",
      title: "Blue Color",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
  ];

  return (
    <Fragment>
      <Container className="mt-3">
        <Row>
          {productsArr.map((product) => (
            <Col key={product.id} xs={4}>
              <Card className="shadow-lg , mt-3" >
                <Card.Img variant="top" src={product.imageUrl} />
                <Card.Body>
                  <Card.Title>{product.title}</Card.Title>
                  <Card.Text>Price: ${product.price}</Card.Text>
                  <Button onClick={()=>cartctx.addToCart(product)}>Add To Cart</Button>
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
