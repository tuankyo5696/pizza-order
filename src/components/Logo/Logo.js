import React from "react";
import PizzaLogo from "../../assets/images/pizza-logo.png";
import "./_Logo.scss";

const Logo = props => (
  <div className="LogoImg">
    <img src={PizzaLogo} alt="MyPizza" />
  </div>
);

export default Logo;
