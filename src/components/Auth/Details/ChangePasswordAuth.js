import React from "react";
import { connect } from 'react-redux';
import { NavLink } from "react-router-dom";
import "./_DetailsAuth.scss";
import ChangePassword from './../Details/ChangePassword/ChangePassword';

const ChangePasswordAuth = props => (
    <div className="container">
        <div className="row flex flex-wrap" style= {{display: 'flex'}}>
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
                        {props.user.firstname ? props.user.firstname + " " + props.user.lastname: ""}{" "}
                        </div>
                </figcaption>
            </div>
        </section>

        <nav className="user-sidelink clearfix">
            <ul>

                <li className="hvr-sweep-to-right active"><NavLink to = {`/auth-details`}>Account Information</NavLink></li>
                <li className="hvr-sweep-to-right"><NavLink to = {`/change-pass`}>Change Password</NavLink></li>
            </ul>
        </nav>
        </div>
        <div className="col-12 col-lg-9">
        <ChangePassword />
        </div>
      </div>
    </div>
);
const mapStateToProps = state => {
    return {
        user: state.auth.userData,
    }
}
export default connect(mapStateToProps)(ChangePasswordAuth);
