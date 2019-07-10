import React from "react";
import Navbar from "./../../NavbarPayment/Navbar";
import {withRouter} from "react-router-dom";
import Delivery from "./../../../../assets/images/icon_1.png";
import Store from "./../../../../assets/images/store.png"
import "./_FormOrderMethod.scss";
const Step1 = props => {
  const getNext = e => {
    e.preventDefault();
    
    props.nextStep();
  };
  const getNext2 = e => {
    e.preventDefault();
    props.history.push('/payment-store')
  }
  return (
    <div>
      <Navbar active1={true} active2={false} active3={false} />
      <div className="bodyDelivery">
        <div className="row">
          <div className="col">
            <div className="page-title">
              <h2 className="page-title">Order Method</h2>
              <p>Please select your order method</p>
            </div>
            <div className="page-content">
              <a
                className="method method-1 stepdelivery"
                href="/"
                onClick={getNext}
              >
                <div className="image">
                  <img src={Delivery} alt="Delivery" />
                </div>
                <div className="content">
                  <h4>Delivery</h4>
                </div>
              </a>
              <a
                className="method method-2 stepdelivery"
                href="/"
                onClick={getNext2}
              >
                <div className="image">
                  <img src={Store} alt="Store" />
                </div>
                <div className="content">
                  <h4>Store</h4>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Step1);
