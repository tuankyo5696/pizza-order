import React from "react";
import "./_NavigationUser.scss";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import User from "./../../../assets/images/user.png";
import { EMPTY_STRING } from "./../../../constants/helper";

const navigationUser = props => (
  <div className="user">
    <img src={User} alt="user" />
    {props.isAuthenticated ? (
      <div className="account">
        {" "}

        
        {props.user.firstname ? props.user.firstname + " " + props.user.lastname: EMPTY_STRING}{" "}
      </div>
    ) : (
      <ul className="sign-in">
        <li>
          <NavLink to={`/register`} className="link" activeClassName="active">
            Sign up
          </NavLink>
        </li>
        <li>
          <NavLink to={`/signin`} className="link" activeClassName="active">
            Sign in
          </NavLink>
        </li>
      </ul>
    )}
  </div>
);
const mapStateToProps = state => {
  return {
    user: state.auth.userData,
    isAuthenticated: state.auth.token !== EMPTY_STRING
  };
};
export default connect(mapStateToProps)(navigationUser);
