import React from "react";

const Itemstore= React.createContext({
    cart:[],
    product:[],
    addToCart: (item) => {},
    removefromCart:(id)=>{},
    token: "",
    isLoggedIn: false,
    login: (token) => {},
    getemail:(email)=>{},
    logout: () => {},
    

})
export default Itemstore