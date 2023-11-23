import React, { Fragment, useContext } from "react";
import Itemprovider from "../../Store/Itemprovider";
import Itemstore from "../../Store/Itemstore";
import Modal from "../UI/Modal";
import { Card, Container, Row } from "react-bootstrap";

const Cart = (props) => {
  const cartctx = useContext(Itemstore);



  return (
    <Modal>
      <button onClick={props.onClose}>Close</button>

      <Container>
        {cartctx.cart.map((cartitem) => (
          <Row>
            <Card className="shadow-lg">
              <Card.Img variant="top" src={cartitem.imageUrl} style={{ width: '100px' }} />
              <Card.Body>
                <Card.Title>{cartitem.title}</Card.Title>
                <Card.Text>Price: ${cartitem.price}</Card.Text>
                <Card.Text>Quantity: {cartitem.quantity}</Card.Text>
              </Card.Body>
            </Card>
          </Row>
        ))}
      </Container>
    </Modal>
  );
};

export default Cart;