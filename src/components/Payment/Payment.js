import React from "react";
import "./_Payment.scss";
import FormPayment from "./FormPayment/FormPayment";
import { EMPTY_STRING } from "../../constants/helper";

const payment = props => (
  <div className="payment">
    <FormPayment form={{
       houseNumber: EMPTY_STRING,
       district: EMPTY_STRING ,
       province: EMPTY_STRING,
       fullname: EMPTY_STRING,
       shippingAddress: EMPTY_STRING,
       phone: EMPTY_STRING,
       email: EMPTY_STRING
    }} />
  </div>
);
export default payment;
