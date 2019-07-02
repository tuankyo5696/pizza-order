import React from "react";
import "./_Toolbar.scss";
import Logo from "./../../Logo/Logo";
// import NavigationItems from './../NavigationItems/NavigationItems';
import DrawerToggle from "./../SideDrawer/DrawerToggle/DrawerToggle";
import NavigationCart from "./../NavigationCart/NavigationCart";
import NavigationUser from "./../NavigationUser/NavigationUser";
import {NavLink} from 'react-router-dom';
const toolbar = props => (
  <header className="Toolbar">
    <div className="container">
      <div className="row">
        <div className="col-auto">
          <NavLink to ={`/`}>
          <div className="Logo">
            <Logo />
          </div>
          </NavLink>
        </div>
        <div className="col-auto ml-auto">
          <div className="menu-option-wrap">
            <div className="tbUser">
              <NavigationUser isAuthenticated = {props.isAuth} />
            </div>
            <NavigationCart />
            <DrawerToggle
              clicked={props.drawerToggleClicked}
              toggleClass={props.toggleClass}
            />
          </div>
        </div>
      </div>
    </div>
  </header>
);

export default toolbar;
