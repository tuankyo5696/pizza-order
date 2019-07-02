import React from "react";
import "./_Promotion.scss";
import { NavLink } from "react-router-dom";
import OneOne from "./../../assets/images/OneOne.png";
const promotion = props => (
  <div className="PromotionPage">
    <div className="titlePromotion">
      <h2>Promotion</h2>
    </div>
    <div className="coverPromotion">
      <div className="bodyPromotion">
        <div className="divOneOne">
          <img src={OneOne} alt="MyPizza" />
        </div>
        <div className="coverContentPromotion">
          <div>
            <p>Buy 1 Get 1 Online - Saturday and Sunday</p>
          </div>
          <div>
            <h1>
              Buy 1 Pizza 9" or 12" and Drink. You will get 1 free the same size
              Pizza (free delivery when the total bill from 100,000 VND) - Apply
              for every Saturday and Sunday{" "}
            </h1>
          </div>
          <div className="coverBtnPromotion">
            <NavLink to={`/pizza`}>
              <button>Order 9"</button>
            </NavLink>
            <div className="twelve">
              <NavLink to={`/pizza`}>
                <button>Order 12"</button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default promotion;
