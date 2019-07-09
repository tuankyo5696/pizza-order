import React from "react";

import { NavLink } from "react-router-dom";
import "./_DetailsAuth.scss";


const DetailsAuth = props => (
      <div className="col-xs-12 col-lg-3">
        <section className="user-sidebar clearfix">
            <div className="userinfo clearfix">
                <figure>
                    <img alt =""src="/Data/SiteImages/anonymous.png" className="avatar user-img"/>
                </figure>
                <figcaption>
                        <div className="title">
                            My Account</div>
                        <div className="user-name">
                            Tran Tuan
                        </div>
                </figcaption>
            </div>
        </section>

        <nav className="user-sidelink clearfix">
            <ul>

                <li className="hvr-sweep-to-right active"><NavLink to = {`/auth-details-info`}>Account Information</NavLink></li>
                <li className="hvr-sweep-to-right"><NavLink to = {`/change-pass`}>Change Password</NavLink></li>
            </ul>
        </nav>
    </div>
);

export default DetailsAuth;
