import React, { useContext, useState, Fragment } from "react";
import Product from "./Components/Product/Product";
import Header from "./Components/UI/Header";
import Cart from "./Components/Cart/Cart";
import { Route, Redirect, Switch } from "react-router-dom";
import About from "./Components/About/About";
import Footer from "./Components/UI/Footer";
import Home from "./Components/Home/Home";
import Contact from "./Components/Contact/Contact";
import ProductDetails from "./Components/Product/ProductDetails";
import Login from "./Components/Login/Login";
import Itemstore from "./Store/Itemstore";

function App(props) {
  const itemctx = useContext(Itemstore);
  const [Hidecart, setHidecart] = useState(false);

  const isLoggedIn = itemctx.isLoggedIn;

  const showcart = () => {
    setHidecart(true);
  };

  const hidecart = () => {
    setHidecart(false);
  };

  return (
    <Fragment>
      {console.log(isLoggedIn)}
      {Hidecart && <Cart onClose={hidecart} />}
      <Header onOpen={showcart} />
      <Switch>
        <Route path="/" exact>
          <Redirect to="/login" />
        </Route>
        <Route path="/store" exact>
          {isLoggedIn && <Product />}
          {!isLoggedIn && <Redirect to="/login" />}
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        {isLoggedIn && (
          <Route path="/store/:productID">
            <ProductDetails />
          </Route>
        )}
        <Route path="/login">
          <Login />
        </Route>
        <Route path="*">
          <Redirect to="/login" />
        </Route>
      </Switch>
      <Footer />
    </Fragment>
  );
}

export default App;
