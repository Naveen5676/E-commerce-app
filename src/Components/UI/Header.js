import React, { Fragment } from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";

const Header = (props) => {
  return (
    <Fragment>
      <Navbar bg="dark" expand="sm" variant="dark">
        <Container>
          <Nav className="justify-content-center">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Store</Nav.Link>
            <Nav.Link href="#pricing">About</Nav.Link>
          </Nav>
        </Container>
        <Button variant="light" onClick={props.onOpen} >Cart</Button>
      </Navbar>
    </Fragment>
  );
};

export default Header;
