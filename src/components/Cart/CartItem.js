import React, { useState } from "react";
import * as actions from "./../../store/actions/index";
import { connect } from "react-redux";
import { EMPTY_STRING } from "../../constants/helper";
const CartItems = props => {
  let [itemQuantity, setItemQuantity] = useState(props.quantity);
  let subItem = props.category.name === "Pizzas" ? props.subName : EMPTY_STRING;
  const removeItem = e => {
    e.preventDefault();
    props.dispatch(actions.removeToCart());
  };
  const handleQuantityChange = e => {};
  const incrementQuantity = e => {
    e.preventDefault();
    const value = itemQuantity;
    console.log(value);
    if (value < 10) {
      setItemQuantity(itemQuantity + 1);
      props.dispatch(actions.incrementCartQuantity(props._id));
    }
  };
  const decrementQuantity = e => {
    e.preventDefault();
    const value = itemQuantity;
    console.log(value);
    if (value > 1) {
      setItemQuantity(itemQuantity - 1);
      props.dispatch(actions.decrementCartQuantity(props._id));
    }
  };
  return (
    <div className="product">
      <div className="product-info">
        <img src={props.picture} alt="" />
        <h4 className="product-name">{props.name}</h4>
      </div>

      <div className="quantity-select">
        <div className="number-count">
          <div className="product-price wrap">
            <div className="input-number">
              <div className="btn-spin btn-dec" onClick={decrementQuantity}>
                -
              </div>
              <input
                type="number"
                onChange={handleQuantityChange}
                min="1"
                max="10"
                step="1"
                value={itemQuantity}
                className="cartprice qty-input total"
              />
              <div className="btn-spin btn-inc" onClick={incrementQuantity}>
                +
              </div>
            </div>
          </div>

          <div className="price-count">
            <span>x</span>
            <span>{props.prices[0].price}</span>
          </div>
        </div>
      </div>

      <div className="option-group">
        <h4 className="product-name">{subItem.name}</h4>
        <div className="product-price">{subItem.price}</div>
      </div>
      <div className="btn-wrap">
        <a href="/" className="btn-remove" onClick={removeItem}>
          Remove
        </a>
      </div>
    </div>
  );
};

export default connect()(CartItems);
