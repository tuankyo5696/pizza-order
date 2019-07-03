import React from 'react';
import './_Payment.scss';
import FormPayment from './FormPayment/FormPayment';

const payment = props => (
    <div className="payment">
        <section className="payment-step">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <ul className="bullets-wrapper">
                            <li className="bullet">
                                <span>01</span>
                                <span>Order Method</span>
                            </li>
                            <li className="bullet">
                                <span>02</span>
                                <span>Order Information</span>
                            </li>
                            <li className="bullet">
                                <span>03</span>
                                <span>Check Out Information</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    <FormPayment form ={{}} />
    </div>
)
export default payment;