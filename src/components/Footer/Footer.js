import React from "react";
import "./_Footer.scss";
import Visa from "../../assets/images/visa.png";
import Tel from "../../assets/images/tel.png";

const Footer = props => (
  <footer className="footer-1">
    <article>
      <div className="container">
        <div className="row">
          <div className="left-footer merge2">
            <div className="ModuleFooter">
              <ul className="copyright">
                <li className="iconCopy">
                  <span>© 2019 PYCO'S PIZZA VIETNAM </span>
                </li>
                <li className="iconCopy">
                  <a href="#/">PRIVACY POLICY</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="right-footer merge2">
            <div className="hotline">
              <p>
                Hotline<span>Đặt hàng</span>
              </p>
            </div>
            <div className="tel">
              <img src={Tel} alt="telephone" />
            </div>
            <div className="visa">
              <img src={Visa} alt="visa" />
            </div>
          </div>
          <a className="hotline-fixed" href="tel: 02838123367">
            <span>
              <i className="fas fa-phone" />
            </span>
          </a>
        </div>
      </div>
    </article>
  </footer>
);

export default Footer;
