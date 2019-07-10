import React from "react";
import { connect } from "react-redux";
import CartItem from "./../../../components/Cart/CartItem";
import "./_SideCart.scss";
const paymentCart = props => (
  <div className="col-lg-12 col-xl-12 Module Module-310" style ={{padding: '0'}}>
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
            <p style ={{paddingLeft : '20px'}}>Total:</p>
          </div>
          <div className="total">
            <strong>
              {props.totalPrice.toFixed(0).replace(/(\d)(?=(\d{3})+$)/g, "$1,")}{" "}
              ₫
            </strong>
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
        total = curItem.subName.price
          ? total +
            curItem.prices[0].price * curItem.quantity +
            curItem.subName.price
          : total + curItem.prices[0].price * curItem.quantity;
      } else {
        total = total + curItem.prices[0].price * curItem.quantity;
      }
      return total;
    }, 0)
  };
};
export default connect(mapStateToProps)(paymentCart);
