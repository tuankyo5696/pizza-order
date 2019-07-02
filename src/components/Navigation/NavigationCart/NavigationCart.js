import React from "react";
import "./_NavigationCart.scss";
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';

const navigationcart = props => (

  <div className="cart">
    <NavLink to = {`/cart`} >
    <span className="fas fa-shopping-bag" />
    <span className="count">{props.cartItemCount}</span>
    </NavLink>
    
  </div>
);
const mapStateToProps = state => {
  return{
    cartItems: state.shop.cart,
    cartItemCount: state.shop.cart.reduce((count, curItem) => {
      return count + curItem.quantity;
    }, 0),
  }
}
export default connect(mapStateToProps) (navigationcart);
