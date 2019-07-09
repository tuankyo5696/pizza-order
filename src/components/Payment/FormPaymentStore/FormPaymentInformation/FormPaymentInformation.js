import React from "react";
import Navbar from "./../../NavbarPayment/Navbar";
import "./_FormPaymentInformation.scss";
import Pay1 from "./../../../../assets/images/pay1.png";
import Pay2 from "./../../../../assets/images/pay2.png";
import Pay3 from "./../../../../assets/images/pay3.png";
import Pay4 from "./../../../../assets/images/pay4.png";
import { Field } from "formik";
import { EMPTY_STRING } from "../../../../constants/helper";
const Step3 = props => {
  const getBack = e => {
    e.preventDefault();
    props.prevStep();
  };
  return (
    <div>
      <Navbar active1={false} active2={false} active3={true} />
      <div className="coverCheckout">
        <section className="checkout step-4">
          <div className="container">
            <div className="">
              <div className="page-title col-12 Module Module-322">
                <div className="ModuleContent">
                  <h2>Check out</h2>
                </div>
              </div>

              <div className="col-12 col-thanhtoan-left Module Module-260">
                <div className="ModuleContent">
                  <div className="page-content">
                    <div className="form row">
                      <div className="form-group col-12">
                        <label>Full name</label>
                        <Field
                          className="form-control"
                          type="text"
                          name="fullname"
                          value={props.values.fullname}
                          placeholder="Enter Fullname"
                        />
                        {props.errors.fullname && props.touched.fullname ? (
                          <div className="Invalid">{props.errors.fullname}</div>
                        ) : (
                          EMPTY_STRING
                        )}
                      </div>
                      <div className="EmailPhone">
                        <div className="form-group col-6">
                          <label>Email</label>
                          <Field
                            type="email"
                            className="form-control"
                            name="email"
                            value={props.values.email}
                            placeholder="Enter Email"
                          />
                          {props.errors.email && props.touched.email ? (
                            <div className="Invalid">{props.errors.email}</div>
                          ) : (
                            EMPTY_STRING
                          )}
                        </div>

                        <div className="form-group col-6">
                          <label>Phone</label>

                          <Field
                            className="form-control"
                            type="text"
                            name="phone"
                            value={props.values.phone}
                            placeholder="Enter PhoneNumber"
                          />
                          {props.errors.phone && props.touched.phone ? (
                            <div className="Invalid">{props.errors.phone}</div>
                          ) : (
                            EMPTY_STRING
                          )}
                        </div>
                      </div>

                      <div className="form-group col-12">
                        <label>Order Note</label>

                        <Field
                          component="textarea"
                          className="form-control"
                          name="note"
                          cols="30"
                          rows="2"
                          value={props.values.note}
                        />
                      </div>

                      <div className="form-group col-12">
                        <label>Payment Method</label>

                        <div className="pay-method">
                          <ul className="coverMethod">
                            <li htmlFor="1" className="active">
                              <div className="img">
                                <img alt="" src={Pay1} />
                              </div>

                              <div>
                                <input
                                  type="radio"
                                  name="PaymentMethod"
                                  id="1"
                                  value="1"
                                  defaultChecked
                                />
                              </div>

                              <span>Cash Payment</span>
                            </li>

                            <li htmlFor="2" className="">
                              <div className="img">
                                <img alt="" src={Pay2} />
                              </div>

                              <div>
                                <input
                                  type="radio"
                                  name="PaymentMethod"
                                  style={{ display: "none" }}
                                  id="2"
                                  value="2"
                                />
                              </div>

                              <span>ATM Payment</span>
                            </li>

                            <li htmlFor="3" className="">
                              <div className="img">
                                <img alt="" src={Pay3} />
                              </div>

                              <div>
                                <input
                                  type="radio"
                                  name="PaymentMethod"
                                  style={{ display: "none" }}
                                  id="3"
                                  value="3"
                                />
                              </div>

                              <span>Visa/Master Card Payment</span>
                            </li>

                            <li htmlFor="4">
                              <div className="img">
                                <img alt="" src={Pay4} />
                              </div>

                              <div>
                                <input
                                  type="radio"
                                  name="PaymentMethod"
                                  style={{ display: "none" }}
                                  id="4"
                                  value="4"
                                />
                              </div>

                              <span>Pay by ZaloPay</span>
                            </li>
                          </ul>
                        </div>

                        <div className="accept-license">
                          <input
                            id="PaymentAgree"
                            type="checkbox"
                            defaultChecked
                            name="PaymentAgree"
                          />

                          <label htmlFor="PaymentAgree" className="active">
                            I have read and agree to the above terms
                          </label>
                        </div>

                        <div className="desc">
                          <p>Thank you for ordering at Pyco's Pizza Vietnam.</p>
                        </div>
                        <div className="form-group col-12">
                          <a
                            className="btn btn-prev"
                            href="/"
                            onClick={getBack}
                          >
                            Go Back
                          </a>
                          <button
                            className="btn-book btn btn-next"
                            type="submit"
                          >
                            CheckOut Completed
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Step3;
