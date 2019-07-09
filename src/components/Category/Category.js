import React from "react";
import { NavLink } from "react-router-dom";
import "./_Category.scss";
import Pizza from "./../../assets/images/pizza-category.png";
import SideDish from "./../../assets/images/side-dish.png";
import Drinks from "./../../assets/images/drink.png";
import Dessert from "./../../assets/images/dessert.png";
const category = props => (
  <section className="menu">
    <article>
      <div className="row no-gutters">
        <NavLink to= {`/pizza`} className="col-lg-6 menu-item bg-img1" bg-img={Pizza} >
          <h2 >Pizza</h2>
          <div to={`/pizza`} className="btn-view">
            See more
          </div>
        </NavLink>
        
        <NavLink to= {`/side-dish`} className="col-lg-6 menu-item bg-img2" bg-img={SideDish}>
          <h2>Side dish</h2>
          <div to={`/side-dish`} className="btn-view">
            See more
          </div>
        </NavLink>
        <NavLink to= {`/drinks`}className="col-lg-6 menu-item bg-img3" bg-img={Drinks}>
          <h2>Drinks</h2>
          <div to={`/drinks`} className="btn-view">
            See more
          </div>
        </NavLink>
        <NavLink to= {`/dessert`} className="col-lg-6 menu-item bg-img4" bg-img={Dessert}>
          <h2>Dessert</h2>
          <div to={`/dessert`} className="btn-view">
            See more{" "}
          </div>
        </NavLink>
      </div>
    </article>
  </section>
);
export default category;
