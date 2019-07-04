import React from "react";

const navbarPayment = props => {
  let attachClasses1 = ["bullet", ""];
  if (props.active1) {
    attachClasses1 = ["bullet", "active"];
  }
  let attachClasses2 = ["bullet", ""];
  if (props.active2) {
    attachClasses2 = ["bullet", "active"];
  }
  let attachClasses3 = ["bullet", ""];
  if (props.active3) {
    attachClasses3 = ["bullet", "active"];
  }
  return (
    <section className="payment-step">
      <div className="container">
        <div className="row">
          <div className="col">
            <ul className="bullets-wrapper">
              <li className={attachClasses1.join(" ")}>
                <span>01.</span>
                <span>Order Method</span>
              </li>
              <li className={attachClasses2.join(" ")}>
                <span>02.</span>
                <span>Order Information</span>
              </li>
              <li className={attachClasses3.join(" ")}>
                <span>03.</span>
                <span>Check Out Information</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
export default navbarPayment;
