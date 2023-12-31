import React, { Fragment, useContext } from "react";
import Itemprovider from "../../Store/Itemprovider";
import Itemstore from "../../Store/Itemstore";
import Modal from "../UI/Modal";
import { Card, Col, Container, Row, Button } from "react-bootstrap";

const Cart = (props) => {
  const cartctx = useContext(Itemstore);

  const removeHandler = (id) => {
    cartctx.removefromCart(id);
  };
  let totalamt=0;
  cartctx.cart.map((cartitem) => {
    totalamt = totalamt + Number(cartitem.price)
  })
  return (
    <Modal>
      <div className="d-flex justify-content-end">
      <button onClick={props.onClose} style={{ border: '1px solid #6c757d', padding: '5px 10px' }}>X</button>
      </div>
      {/* <Container>
        <Row className="justify-content-center">
          <Col xs lg="12" xl="8">
            <h2>Item</h2>
          </Col>
          <Col>
            <h2>Price</h2>
          </Col>
          <Col>
            <h2>Quantity</h2>
          </Col>
          
        </Row>
      </Container> */}

      <Container style={{ maxHeight: '90vh', overflowY: 'auto' }}>
        <Card className="shadow-lg mb-3">
          <Row>
            <Col md={6}>
              <h3 className="text-center">Item</h3>
              <hr style={{ color: "black" }} />
            </Col>
            <Col md={2}>
              <h3 className="text-center">Price</h3>
              <hr style={{ color: "black" }} />
            </Col>
            <Col md={4}>
              <h3 className="text-center">Quantity</h3>
              <hr style={{ color: "black" }} />
            </Col>
          </Row>
          {cartctx.cart.map((cartitem) => (
            <Row key={cartitem.id} className="align-items-center mb-3">
              <Col>
                <Card.Img
                  variant="top"
                  src={cartitem.imageUrl}
                  style={{ width: "100px" }}
                  className="mx-auto d-block"
                />
              </Col>
              <Col className="text-center">
                <Card.Title>{cartitem.title}</Card.Title>
              </Col>
              <Col className="text-center">
                <Card.Text>${cartitem.price}</Card.Text>
              </Col>
              <Col className="text-center d-flex justify-content-between">
                <Card.Text className="border border-primary p-2">
                  {cartitem.quantity}
                </Card.Text>
                <Button
                  variant="danger"
                  onClick={() => {
                    removeHandler(cartitem.deleteid);
                  }}
                >
                  Remove
                </Button>
              </Col>
              <hr style={{ color: "black" }} />
            </Row>
          ))}
            <h1>Total Amount :${totalamt}</h1>
        </Card>
      </Container>
    </Modal>
  );
};

export default Cart;
