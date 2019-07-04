import React from "react";
import {EMPTY_STRING} from './../../../constants/helper'
import "./_Backdrop.scss";
const backDrop = props =>
  props.show ? <div className="Backdrop" onClick={props.clicked} /> : EMPTY_STRING;

export default backDrop;
