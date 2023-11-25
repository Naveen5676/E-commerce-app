import React, { useState } from "react";
import Itemstore from "./Itemstore";


const Itemprovider = (props) => {
  const [cartElements, setCartElements] = useState([]);
  //   const cartElements = [
  //     {
  //       title: "Colors",
  //       price: 100,
  //       imageUrl:
  //         "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  //       quantity: 2,
  //     },

  //     {
  //       title: "Black and white Colors",
  //       price: 50,
  //       imageUrl:
  //         "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  //       quantity: 3,
  //     },

  //     {
  //       title: "Yellow and Black Colors",
  //       price: 70,
  //       imageUrl:
  //         "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  //       quantity: 1,
  //     },
  //   ];




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
  };

  return (
    <Itemstore.Provider value={itemstore}>{props.children}</Itemstore.Provider>
  );
};
export default Itemprovider;
