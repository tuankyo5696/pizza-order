import React from "react";
import NavigationItem from "./NavigationItem/NavigationItem";
import "./_NavigationItems.scss";
import {EMPTY_STRING} from './../../../constants/helper';
import {connect} from 'react-redux';
const navigationItems = props => {
  return (
    <ul className="NavigationItems">
      <NavigationItem link="/" exact>
        Home
      </NavigationItem>
      <NavigationItem link="/category">Category</NavigationItem>
      <NavigationItem link="/about">About</NavigationItem>
      <NavigationItem link="/contact">Contact</NavigationItem>
      <NavigationItem link="/promotion">Promotion</NavigationItem>
      {props.isAuthenticated ? <NavigationItem link="/logout">Sign Out</NavigationItem> : EMPTY_STRING }
    </ul>
  );
};
const mapStateToProps = state =>{
  return{
    isAuthenticated : state.auth.token !== EMPTY_STRING
  }
}

export default connect(mapStateToProps)(navigationItems);
