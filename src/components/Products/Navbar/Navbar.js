import React from "react";
import "./_Navbar.scss";
import { NavLink } from "react-router-dom";
const navbar = props => (
  <>
    <section className="Pyco-nav">
      <article>
        <div className="about-nav-controls" />
        <div className="container">
          <div className="tns-outer">
            <div className="tns-ovh">
              <div className="tns-inner">
                <ul className="nav nav-slider" id="tns2">
                  <li className="nav-item tns-item" id="tns2-item0">
                    <NavLink to={`/pizza`} className="nav-link">
                      Pizza
                    </NavLink>
                  </li>
                  <li className="nav-item tns-item" id="tns2-item1">
                    <NavLink to={`/side-dish`} className="nav-link">
                      Sides
                    </NavLink>
                  </li>
                  <li className="nav-item tns-item" id="tns2-item2">
                    <NavLink to={`/drinks`} className="nav-link">
                      Drinks
                    </NavLink>
                  </li>
                  <li className="nav-item tns-item" id="tns2-item3">
                    <NavLink to={`/dessert`} className="nav-link">
                      Dessert
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </article>
    </section>
  </>
);
export default navbar;
