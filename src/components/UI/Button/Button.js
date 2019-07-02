import React from "react";

import classes from "./_Button.scss";
import PropTypes from "prop-types";
const button = props => (
  <button onClick={props.clicked} className={classes.Button}>
    {props.children}
  </button>
);

button.PropTypes = {
  children: PropTypes.element.isRequired
};

export default button;
