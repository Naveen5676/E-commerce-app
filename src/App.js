import React, { useContext, useState, Fragment, lazy, Suspense } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Header from "./Components/UI/Header";
import Footer from "./Components/UI/Footer";
import Login from "./Components/Login/Login";
import Itemstore from "./Store/Itemstore";

// Lazy-loaded components
const Product = lazy(() => import("./Components/Product/Product"));
const Cart = lazy(() => import("./Components/Cart/Cart"));
const About = lazy(() => import("./Components/About/About"));
const Home = lazy(() => import("./Components/Home/Home"));
const Contact = lazy(() => import("./Components/Contact/Contact"));
const ProductDetails = lazy(() => import("./Components/Product/ProductDetails"));

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
      {/* {console.log(isLoggedIn)} */}
      <Suspense fallback={<p>Loading....</p>}>
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
      </Suspense>
      <Footer />
    </Fragment>
  );
}

export default App;
