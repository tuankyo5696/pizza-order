import React, { Component } from "react";
import PropTypes from "prop-types";
import Toolbar from "./../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "./../../components/Navigation/SideDrawer/SideDrawer";
import Footer from "./../../components/Footer/Footer";
class Layout extends Component {
  state = {
    showSideDrawer: false,
    toggleClass: ""
  };
  SideDrawerClosedHandler = () => {
    this.setState({
      showSideDrawer: false,
      toggleClass: ""
    });
  };
  sideDrawerToggleHandler = () => {
    this.setState(prevState => {
      return {
        showSideDrawer: !prevState.showSideDrawer,
        toggleClass: this.state.toggleClass === "change" ? "" : "change"
      };
    });
  };
  render() {
    return (
      <>
        <Toolbar
          drawerToggleClicked={this.sideDrawerToggleHandler}
          toggleClass={this.state.toggleClass}
        />
        <SideDrawer
          closed={this.SideDrawerClosedHandler}
          open={this.state.showSideDrawer}
        />
        <main className="Content">{this.props.children}</main>
        <Footer />
      </>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.element.isRequired
};

export default Layout;
