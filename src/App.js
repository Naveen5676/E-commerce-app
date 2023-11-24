import React ,{useState} from "react";
import Product from "./Components/Product/Product";
import Header from "./Components/UI/Header";
import Itemprovider from "./Store/Itemprovider";
import Cart from "./Components/Cart/Cart";
import {Route} from 'react-router-dom';
import About from "./Components/About/About";
import Footer from "./Components/UI/Footer";
import Home from "./Components/Home/Home";
import Contact from "./Components/Contact/Contact";



// const router = createBrowserRouter([
//   {path :'/', element: <Product/>},
//   {path :'/store', element: <Product/>},
//   {path :'/about', element: <About/>},
//   {path :'/home', element: <Home/>},
// ])


function App(props) {

  const [Hidecart, setHidecart]= useState(false)

  const showcart=()=>{
    setHidecart(true)
  }

  const hidecart=()=>{
    setHidecart(false)
  }

  return (
    <Itemprovider>
      {Hidecart && <Cart onClose={hidecart}/>}
      <Header onOpen={showcart} />
      <Route path='/store'>
        <Product/>
      </Route>
      <Route path='/about'>
        <About/>
      </Route>
      <Route path='/home'>
        <Home/>
      </Route>
      <Route path='/contact'>
        <Contact/>
      </Route>
      <Footer/>
   
    </Itemprovider>
  );
}

export default App;
