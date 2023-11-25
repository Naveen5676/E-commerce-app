import React from "react";

const Itemstore= React.createContext({
    cart:[],
    product:[],
    addToCart: (item) => {},
    

})
export default Itemstore