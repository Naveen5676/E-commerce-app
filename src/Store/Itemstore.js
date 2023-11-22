import React from "react";

const Itemstore= React.createContext({
    cart:[],
    addToCart: (item) => {},
    

})
export default Itemstore