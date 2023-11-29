import React, { Fragment, useContext } from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import Itemstore from "../../Store/Itemstore";
import classes from "./Header.module.css";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import HeaderCartButton from "./Header-cart-button";

const Header = (props) => {
  const cartctx = useContext(Itemstore);
  const history = useHistory();

  const logoutHandler = () => {
    cartctx.logout();
    history.replace("/login");
  };

  // let totalcount = 0;
  // cartctx.cart.forEach((cartitem) => {
  //   totalcount = totalcount + cartitem.quantity;
  // });

  return (
    <Fragment>
      <Navbar bg="dark" expand="sm" variant="dark">
        <Container>
          <Nav className="mx-auto">
            <ul className="nav-item">
              <NavLink
                className="nav-link text-white font-weight-bold"
                to="/home"
                activeClassName={classes.active}
              >
                Home
              </NavLink>
            </ul>
            {cartctx.isLoggedIn && (
              <ul className="nav-item">
                <NavLink
                  className="nav-link text-white font-weight-bold"
                  to="/store"
                  activeClassName={classes.active}
                >
                  Store
                </NavLink>
              </ul>
            )}
            <ul className="nav-item">
              <NavLink
                className="nav-link text-white font-weight-bold"
                to="/about"
                activeClassName={classes.active}
              >
                About
              </NavLink>
            </ul>
            {!cartctx.isLoggedIn && (
              <ul className="nav-item">
                <NavLink
                  className="nav-link text-white font-weight-bold"
                  to="/login"
                  activeClassName={classes.active}
                >
                  Login
                </NavLink>
              </ul>
            )}
            <ul className="nav-item">
              <NavLink
                className="nav-link text-white font-weight-bold"
                to="/contact"
                activeClassName={classes.active}
              >
                Contact Us
              </NavLink>
            </ul>
          </Nav>

          <Nav>
            {/* {cartctx.isLoggedIn && <Navbar.Text>{totalcount}</Navbar.Text>}
            {cartctx.isLoggedIn && (
              <Button variant="light" onClick={props.onOpen}>
                Cart
              </Button>
            )} */}
            <HeaderCartButton onOpen={props.onOpen} />

            {cartctx.isLoggedIn && (
              <Button
                variant="light"
                style={{
                  color: "white",
                  backgroundColor: "#6c757d", // Grey background color
                  border: "1px solid white",
                  borderRadius: "20px", // Rounded corners
                }}
                onClick={logoutHandler}
              >
                Logout
              </Button>
            )}
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
