import React from "react";

const Itemstore= React.createContext({
    cart:[],
    product:[],
    addToCart: (item) => {},
    token: "",
    isLoggedIn: false,
    login: (token) => {},
    logout: () => {},
    

})
export default Itemstore