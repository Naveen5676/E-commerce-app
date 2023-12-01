import React, { useState, useEffect } from "react";
import Itemstore from "./Itemstore";

const Itemprovider = (props) => {
  const [cartElements, setCartElements] = useState([]);
  const initialtoken = localStorage.getItem("idToken");
  const [token, setToken] = useState(initialtoken);

  const userIsLoggedIn = !!token;
  const cartChanges = !!cartElements;

  const LoginHandler = (token) => {
    setToken(token);
    localStorage.setItem("idToken", token);
  };

  const logoutHandler = () => {
    setToken(null);
    localStorage.removeItem("idToken");
    localStorage.removeItem("email");
  };

  const getemailHandler = (email) => {
    localStorage.setItem("email", email);
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

  useEffect(() => {
    if (userIsLoggedIn) {
      const fetchCartData = async () => {
        try {
          let storedEmail = localStorage.getItem("email");
          const updatedEmail = storedEmail
            ? storedEmail.replace(/[@.]/g, "")
            : "";
          const response = await fetch(
            `https://crudcrud.com/api/9d059bd0edd142c69d401d532a6f9477/${updatedEmail}`
          );
          const data = await response.json();
          setCartElements(data.map((cartItem) => ({...cartItem.item, deleteid: cartItem._id})));
          console.log("Cart data fetched successfully:", data);
        } catch (error) {
          console.error("Error fetching cart data:", error);
        }
      };

      fetchCartData();
    }
  }, [userIsLoggedIn, cartChanges ]); // Empty dependency array ensures this effect runs only once when the component mounts

  const addtocartHandler = (item) => {
    const existingCartItem = cartElements.find(
      (cartItem) =>  cartItem.id === item.id
    );
  
  
    
    // const existingCartItem = cartElements.map.find(
    //   (cartitem) => cartitem.deleteid === item.deleteid
    // );

    if (existingCartItem) {
      alert("item already exists");
    } else {
      let storedemail = localStorage.getItem("email");
      // Remove "@" and "." from the email address
      const updatedEmail = storedemail.replace(/[@.]/g, "");
      //setCartElements((prevItems) => [...prevItems, { ...item, quantity: 1 }]);

      const requestData = {
        item: { ...item, quantity: 1 },
      };

      fetch(
        `https://crudcrud.com/api/9d059bd0edd142c69d401d532a6f9477/${updatedEmail}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestData),
        }
      )
        .then((response) => response.json())
        .then((data) => {
          // Update the state with the new data received from the API
          const newItem = { ...item, quantity: 1, deleteid: data._id }; // Use the _id from the response
          setCartElements((prevItems) => [...prevItems, newItem]);
          //console.log("Data sent successfully:", data);
        })
        .catch((error) => {
          console.error("Error sending data:", error);
        });
    }
  };

  const removeFromCartHandler = (deleteid) => {
    const existingCartItem = cartElements.find((cartItem) => cartItem.deleteid === deleteid);

    if (existingCartItem) {
        const updatedCart = cartElements.filter((cartItem) => cartItem.deleteid !== deleteid);
        setCartElements(updatedCart);

      let storedemail = localStorage.getItem("email");
      // Remove "@" and "." from the email address
      const updatedEmail = storedemail.replace(/[@.]/g, "");
      fetch(
        `https://crudcrud.com/api/9d059bd0edd142c69d401d532a6f9477/${updatedEmail}/${deleteid}`,
        {
          method: "DELETE", // Use PUT method to update the entire cart
          headers: {
            "Content-Type": "application/json",
          },
          //body: JSON.stringify(requestData),
        }
      )
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        //return response.json();
      })
        .then((data) => {
           // Check if the response is not empty before parsing JSON
          const jsonData = data ? JSON.parse(data) : null;
          //console.log("Item removed successfully:", jsonData);
        })
        .catch((error) => {
          console.error("Error removing item:",);
        });
    }
  };

  const itemstore = {
    cart: cartElements,
    product: productsArr,
    addToCart: addtocartHandler,
    removefromCart: removeFromCartHandler,
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: LoginHandler,
    getemail: getemailHandler,
    logout: logoutHandler,
  };

  return (
    <Itemstore.Provider value={itemstore}>{props.children}</Itemstore.Provider>
  );
};
export default Itemprovider;
