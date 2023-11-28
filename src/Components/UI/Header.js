import React, { Fragment, useContext } from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import Itemstore from "../../Store/Itemstore";
import classes from "./Header.module.css";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Header = (props) => {
  const cartctx = useContext(Itemstore);
  const history = useHistory();

  const logoutHandler=()=>{
      cartctx.logout();
      history.replace("/login");
  }

  let totalcount = 0;
  cartctx.cart.forEach((cartitem) => {
    totalcount = totalcount + cartitem.quantity;
  });

  return (
    <Fragment>
      <Navbar bg="dark" expand="sm" variant="dark">
        <Container>
          <Nav>
            <ul>
              <NavLink to="/home">Home</NavLink>
            </ul>
            <ul>
              <NavLink to="/store">Store</NavLink>
            </ul>
            <ul>
              <NavLink to="/about">About</NavLink>
            </ul>
            <ul>
              <NavLink to="/login">Login</NavLink>
            </ul>
            <ul>
              <NavLink to="/contact">Countact Us</NavLink>
            </ul>
          </Nav>
          <Nav>
            <Navbar.Text>{totalcount}</Navbar.Text>
            <Button variant="light" onClick={props.onOpen}>
              Cart
            </Button>
            <Button variant="light" onClick={logoutHandler}>
              Logout
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
