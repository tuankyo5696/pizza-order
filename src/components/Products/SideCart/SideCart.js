import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import CartItem from "./../../../components/Cart/CartItem";
import "./_SideCart.scss";
const sidecart = props => (
  <div className="col-lg-4 col-xl-3 Module Module-310">
    <div className="ModuleContent">
      <div className="Side-cart">
        <div className="Side-cart-title" />
        <div className="Side-cart-list">
          <div className="Booking-details">
            <h4>Order Detail</h4>
            <div className="Booking-table">
              {props.cartItemCount
                ? props.cartItems.map(cart => (
                    <CartItem {...cart} key={cart._id} />
                  ))
                : ""}
            </div>
          </div>
        </div>
        <div className="cart-checkout-mobile">
          <div className="cart-icon">
            <span className="fas fa-shopping-bag" />
          </div>
          <div className="total-text">
            <p>Total:</p>
          </div>
          <div className="total">
            <strong>{props.totalPrice} ₫</strong>
          </div>
          <div className="button-checkout">
            <NavLink to={`/cart`} className="btn btn-checkout">
              Checkout
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  </div>
);
const mapStateToProps = state => {
  return {
    cartItems: state.shop.cart,
    cartItemCount: state.shop.cart.reduce((count, curItem) => {
      return count + curItem.quantity;
    }, 0),
    totalPrice: state.shop.cart.reduce((count, curItem) => {
      let total = count;
      if (curItem.category.name === "Pizzas") {
        total =
          total +
          curItem.prices[0].price * curItem.quantity +
          curItem.subName.price;
      } else {
        total = total + curItem.prices[0].price * curItem.quantity;
      }
      return total;
    }, 0)
  };
};
export default connect(mapStateToProps)(sidecart);
