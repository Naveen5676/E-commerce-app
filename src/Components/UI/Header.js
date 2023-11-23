import React, { Fragment, useContext } from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import Itemstore from "../../Store/Itemstore";
import classes from './Header.module.css'

const Header = (props) => {
  const cartctx = useContext(Itemstore);

  let totalcount = 0;
  cartctx.cart.forEach((cartitem) => {
    totalcount = totalcount + cartitem.quantity;
  });

  return (
    <Fragment>
      <Navbar bg="dark" expand="sm" variant="dark">
        <Container>
          <Nav >
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/store">Store</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
          </Nav>
          <Nav>
            <Navbar.Text>{totalcount}</Navbar.Text>
            <Button variant="light" onClick={props.onOpen}>
              Cart
            </Button>
          </Nav>
        </Container>
      </Navbar>
      <header className={classes.header}>
        <h1 className={classes.h1}>The Generics</h1>
      </header>

    </Fragment>
  );
};

export default Header;
