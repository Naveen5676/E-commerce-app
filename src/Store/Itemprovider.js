import React, { useState } from "react";
import Itemstore from "./Itemstore";


const Itemprovider = (props) => {
  const [cartElements, setCartElements] = useState([]);
  const initialtoken = localStorage.getItem('idToken')
  const [token , setToken]=useState(initialtoken);
  
  const userIsLoggedIn = !!token;


  const LoginHandler=(token)=>{
    setToken(token);
    localStorage.setItem('idToken', token);
  }

  const logoutHandler = () => {
    setToken(null);
    localStorage.removeItem("idToken");
  };
  
  const productsArr = [
    {
      id: "m1",
      title: "Colors",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },
    {
      id: "m2",
      title: "Black and white Colors",
      price: 50,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },
    {
      id: "m3",
      title: "Yellow and Black Colors",
      price: 70,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },
    {
      id: "m4",
      title: "Blue Color",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
  ];


  const addtocartHandler = (item) => {
    const existingCartItem = cartElements.find(
      (cartitem) => cartitem.id === item.id
    );

    if (existingCartItem) {
      alert('item alredy exists')
    } else {
      setCartElements((prevItems) => [...prevItems, {...item, quantity:1 }]);
    }
  };

  const itemstore = {
    cart: cartElements,
    product:productsArr,
    addToCart: addtocartHandler,
    token:token,
    isLoggedIn:userIsLoggedIn,
    login: LoginHandler,
    logout: logoutHandler,
    
  };

  return (
    <Itemstore.Provider value={itemstore}>{props.children}</Itemstore.Provider>
  );
};
export default Itemprovider;
