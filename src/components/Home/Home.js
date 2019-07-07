import React from "react";
import Carousel from "./../UI/Slider/Carousel";
import "./_Home.scss";
import Promotion from "./../../assets/images/promotion.png";
import Category from "./../../assets/images/categoryHome.png";
import Voucher from "./../../assets/images/voucher.png";
import { NavLink } from "react-router-dom";
const Home = props => (
  <div className="menu">
    <article>
      <div className="container1">
        <div className="row no-gutters">
          <Carousel />
          <div className="col-md-6 col-lg-4">
            <div className="box">
              <div className="Image">
                <img src={Promotion} alt="Promotion" />
              </div>
              <div className="content">
                <h2>Promotion</h2>
                <NavLink to={`/promotion`} className="btn-view">
                  See more
                </NavLink>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="box">
              <div className="Image">
                <img src={Category} alt="Category" />
              </div>
              <div className="content">
                <h2>Category</h2>
                <NavLink to={`/category`} className="btn-view">
                  See more
                </NavLink>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="box">
              <div className="Image">
                <img src={Voucher} alt="voucher" />
              </div>
              <div className="content">
                <h2>Voucher</h2>
                <NavLink to={`/promotion`} className="btn-view">
                  See more
                </NavLink>
              </div>
            </div>
          </div>
          <div className="best-sellers">
            <h2>Top 5 Best Sellers</h2>
          </div>
        </div>
      </div>
    </article>
  </div>
);

export default Home;
