import React, { useContext } from "react";
import CartIcon from "./CartIcon";
import classes from './Header-cart-button.module.css'
import Itemstore from "../../Store/Itemstore";


const HeaderCartButton =(props)=>{
const cartctx = useContext(Itemstore);
let totalcount = 0;
cartctx.cart.forEach((cartitem) => {
  totalcount = totalcount + cartitem.quantity;
});


return cartctx.isLoggedIn && (
  <button className={classes.button} onClick={props.onOpen}>
    <span className={classes.icon}>
      <CartIcon />
    </span>
    <span>Your Cart</span>
    <span className={classes.badge}>{totalcount}</span>
  </button>
);
}
export default HeaderCartButton