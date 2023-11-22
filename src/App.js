import React ,{useState} from "react";
import Product from "./Components/Product";
import Header from "./Components/UI/Header";
import Itemprovider from "./Store/Itemprovider";
import Cart from "./Components/Cart/Cart";
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
      <Product />
   
    </Itemprovider>
  );
}

export default App;
