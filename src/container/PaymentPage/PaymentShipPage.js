import React, { Component } from "react";
import Payment from "./../../components/Payment/Payment";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import * as actions from "./../../store/actions/index";
class PaymentShipPage extends Component {
  componentDidMount() {
    this.props.onFetchOrder();
  }
  render() {
    let paymentShip = this.props.cartItemCount ? (
      <div style={{}}>
        <Payment
          cart={this.props.cartItems}
          totalPrice={this.props.totalPrice}
          orders = {this.props.orders[this.props.orders.length -1]}
        />
      </div>
    ) : (
      <Redirect to="/pizza" />
    );
    return (
      <>
      { paymentShip }
      </> 
      );
  }
}
const mapStateToProps = state => {
  return {
    orders: state.orders.orders,
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
    }, 0),
    loading: state.orders.loading
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onFetchOrder: () => dispatch(actions.fetchOrder()),
    onPurchaseOrder: () => dispatch(actions.purchaseOrderStart())
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PaymentShipPage);
