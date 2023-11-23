import React ,{useState} from "react";
import Product from "./Components/Product/Product";
import Header from "./Components/UI/Header";
import Itemprovider from "./Store/Itemprovider";
import Cart from "./Components/Cart/Cart";
import {createBrowserRouter , RouterProvider} from 'react-router-dom'
import About from "./Components/About/About";
import Footer from "./Components/UI/Footer";


const router = createBrowserRouter([
  {path :'/', element: <Product/>},
  {path :'/store', element: <Product/>},
  {path :'/about', element: <About/>},
])


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
      <RouterProvider router={router}/>
      <Footer/>
   
    </Itemprovider>
  );
}

export default App;
