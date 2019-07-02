import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "./../../../store/actions/index";
import Spinner from "./../../../components/UI/Spinner/Spinner";
import Sides from "./../../../components/Products/Sides/Sides";
import Navbar from "./../../../components/Products/Navbar/Navbar";
import Banner from "./../../../components/Products/Banner/Banner";
import SideCart from "./../../../components/Products/SideCart/SideCart";
class SidesPage extends Component {
  componentDidMount() {
    this.props.onFetchSides();
  }
  render() {
    let sides = <Spinner />;
    if (!this.props.loading) {
      sides = this.props.sides.map(side => (
        <Sides key={side._id} side={side} />
      ));
    }
    return (
      <div>
        <Banner />
        <Navbar />
        <section className="Pyco-menu">
          <article>
            <div className="container">
              <div className="row no-gutters">
                <div className="col-lg-8 col-xl-9 pb-4 pb-lg-0 Module Module-303">
                  <div className="menu-row">
                    <div className="menu-header">
                      <h2>Side-dish</h2>
                    </div>
                    <div className="menu-content">
                      <div className="row no-gutters">{sides}</div>
                    </div>
                  </div>
                </div>
                <SideCart />
              </div>
            </div>
          </article>
        </section>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    sides: state.products.sides,
    loading: state.products.loading
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onFetchSides: () => dispatch(actions.fetchSides())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SidesPage);
