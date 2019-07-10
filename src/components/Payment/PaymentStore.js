import React from "react";
import FormPaymentStore from "./FormPaymentStore/FormPaymentStore";
import { EMPTY_STRING } from "./../../constants/helper";
const paymentStore = props => {
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
  const {email,name,note,phone} = props.orders ? props.orders :  EMPTY_STRING
  return (
    <div className="payment">
      <FormPaymentStore
        form={{
          fullname: name ? name : EMPTY_STRING,
          shippingAddress: localStorage.getItem("address"),
          idAddress: localStorage.getItem("idAddress"),
          orderLines: cart,
          phone: phone ? phone : EMPTY_STRING,
          email: email ? email : EMPTY_STRING,
          note: note ? note: EMPTY_STRING,
          orderMethod: "CARRYOUT",
          paymentMethod: {
            type: "CASH"
          }
        }}
      />
    </div>
  );
};

export default paymentStore;
