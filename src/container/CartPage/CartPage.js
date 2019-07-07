import React, { Component } from "react";
import CartItem from "./../../components/Cart/CartItem";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import "./_CartPage.scss";
import { EMPTY_STRING } from "../../constants/helper";
class CartPage extends Component {
  purchaseHandler = e => {
    e.preventDefault();
    if (this.props.isAuthenticated) {
      this.props.history.push('/payment')
    }
    else {
      if(this.props.cartItemCount){
        this.props.history.push('/signin')
      }
      else{
        alert('Your cart is empty!');
        this.props.history.push('/pizza')
      }
    }
  }
  render() {
    return (
      <div className="menu-cart">
        <section className="preview-cart">
          <div className="container">
            <div className="ModuleContent">
              <div className="Side-cart">
                <div className="Side-cart-title" />
                <div className="Side-cart-list">
                  <div className="Booking-details">
                    <h4>Order Detail</h4>
                    <div className="Booking-table">
                      {this.props.cartItemCount
                        ? this.props.cartItems.map(cart => (
                            <CartItem {...cart} key={cart._id} />
                          ))
                        : EMPTY_STRING}
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
                    <strong>{this.props.totalPrice} ₫</strong>
                  </div>
                  <div className="button-checkout">
                    <a className="btn btn-checkout" href="/" onClick={this.purchaseHandler}>
                      Checkout
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== EMPTY_STRING,
    cartItems: state.shop.cart,
    cartItemCount: state.shop.cart.reduce((count, curItem) => {
      return count + curItem.quantity;
    }, 0),
    totalPrice: state.shop.cart.reduce((count, curItem) => {
      return count + curItem.prices[0].price * curItem.quantity;
    }, 0)
  };
};
export default connect(mapStateToProps)(withRouter(CartPage));
