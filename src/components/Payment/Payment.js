import React from "react";
import "./_Payment.scss";
import FormPayment from "./FormPayment/FormPayment";
import { EMPTY_STRING } from "../../constants/helper";

const payment = props => {
  let cart = [];
  if (props.cart) {
    props.cart.map((item, index) => {
      cart.push({
        product: item._id,
        unitPrice: item.prices[0]._id,
        quantity: item.quantity,
        options: item.category.name === "Pizzas" ? item.options : undefined,
        wrapper: item.category.name === "Pizzas" ? item.wrapper : undefined
      });
      return cart;
    });
  }
  const {email,name,note,shippingAddress,phone} = props.orders ? props.orders : EMPTY_STRING
  return (
    <div className="payment">
      <FormPayment
        form={{
          houseNumber: shippingAddress ?shippingAddress.houseNumber : EMPTY_STRING ,
          district: shippingAddress ? shippingAddress.district : EMPTY_STRING ,
          province: shippingAddress? shippingAddress.province : EMPTY_STRING,
          fullname: name ? name : EMPTY_STRING,
          shippingAddress: shippingAddress? shippingAddress.street : EMPTY_STRING,
          orderLines: cart,
          idAddress: localStorage.getItem("idShipDelievery")
            ? localStorage.getItem("idShipDelievery")
            : EMPTY_STRING,
          phone: phone ? phone : EMPTY_STRING,
          email: email ? email : EMPTY_STRING,
          note: note ? note: EMPTY_STRING,
          orderMethod: "DELIVERY",
          informationGuide: EMPTY_STRING,
          paymentMethod: {
            type: "COD"
          }
        }}
      />
    </div>
  );
};

export default payment;
