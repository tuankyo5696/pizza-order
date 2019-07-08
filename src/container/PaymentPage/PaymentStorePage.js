import React, { Component } from 'react'
import PaymentStore from './../../components/Payment/PaymentStore';
import { connect } from 'react-redux';
import * as actions from './../../store/actions/index';
class PaymentStorePage extends Component {
    render() {
        return (
            <div style={{ }}>
				<PaymentStore cart={this.props.cartItems} totalPrice={this.props.totalPrice}/>
			</div>
        )
    }
}
const mapStateToProps = state => {
    return {
    orders: state.order.orders,
    cartItems: state.shop.cart,
    cartItemCount: state.shop.cart.reduce((count, curItem) => {
      return count + curItem.quantity;
    }, 0),
    totalPrice: state.shop.cart.reduce((count, curItem) => {
      let total = count;
      if (curItem.category.name === "Pizzas") {
       total = curItem.subName.price ?
          total +
          curItem.prices[0].price * curItem.quantity +
          curItem.subName.price:   total +
          curItem.prices[0].price * curItem.quantity 
      } else {
        total = total + curItem.prices[0].price * curItem.quantity;
      }
      return total;
    }, 0),
      loading: state.order.loading
    };
  };
  const mapDispatchToProps = dispatch => {
    return {
      onFetchOrder: () => dispatch(actions.fetchOrder())
    };
  };
export default connect(mapStateToProps,mapDispatchToProps)(PaymentStorePage);