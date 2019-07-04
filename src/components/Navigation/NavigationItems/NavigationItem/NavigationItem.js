import React from "react";
import { NavLink } from "react-router-dom";
import "./_NavigationItem.scss";
// import PropTypes from 'prop-types';

const navigationItem = props => (
  <li className="NavigationItem">
    <NavLink to={props.link} exact={props.exact} activeClassName="active">
      {props.children}
    </NavLink>
  </li>
);

// navigationItem.propTypes = {
//     children: PropTypes.element.isRequired
// }
export default navigationItem;
