import React, { Component } from "react";
import "./_Pizza.scss";
import Modal from "./../../UI/Modal/Modal";
import PizzaDetails from "./PizzaDetails/PizzaDetails";
import { EMPTY_STRING } from "../../../constants/helper";

class Pizza extends Component {
  state = {
    purchasing: false
  };
  purchaseCancelHandler = () => {
    this.setState({ purchasing: false });
  };
  purchaseHandler = e => {
    e.preventDefault();
    this.setState({ purchasing: true });
  };
  render() {
    const prices = this.props.pizza.prices
    let typePrices = EMPTY_STRING;
    for (let key = 0; key <= prices.length - 1;key++) {
      if (key === prices.length - 1) {
        typePrices = typePrices + prices[key].price.toFixed(0).replace(/(\d)(?=(\d{3})+$)/g, "$1,") + "₫";
      } else
      typePrices = typePrices + prices[key].price.toFixed(0).replace(/(\d)(?=(\d{3})+$)/g, "$1,") + "₫ - ";
      
    }
    return (
      <>
        <Modal
          show={this.state.purchasing}
          modalClosed={this.purchaseCancelHandler}
        >
          <PizzaDetails
            key={this.props.pizza._id}
            pizza={this.props.pizza}
            cancel={this.purchaseCancelHandler}
          />
        </Modal>
        <div className="col-6 col-md-4 col-lg-6 col-xl-4">
          <a className="item btn-buy" onClick={this.purchaseHandler} href="/">
            <figure>
              <div className="box-img">
                <img
                  src={this.props.pizza.picture}
                  alt={this.props.pizza.name}
                />
              </div>
              <figcaption>
                <h4>{this.props.pizza.name}</h4>
                <p> {this.props.pizza.description}</p>
                <p className="price">{typePrices}</p>
                <div className="btn-addcart">
                  Add To Cart
                  <span className="lnr lnr-arrow-right" />
                </div>
              </figcaption>
            </figure>
          </a>
        </div>
      </>
    );
  }
}
export default Pizza;
