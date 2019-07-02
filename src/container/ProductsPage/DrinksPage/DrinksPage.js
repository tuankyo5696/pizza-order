import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "./../../../store/actions/index";
import Spinner from "./../../../components/UI/Spinner/Spinner";
import Drinks from "./../../../components/Products/Drinks/Drinks";
import Navbar from "./../../../components/Products/Navbar/Navbar";
import Banner from "./../../../components/Products/Banner/Banner";
import SideCart from "./../../../components/Products/SideCart/SideCart";
class DrinksPage extends Component {
  componentDidMount() {
    this.props.onFetchDrinks();
  }
  render() {
    let drinks = <Spinner />;
    if (!this.props.loading) {
      drinks = this.props.drinks.map(drink => (
        <Drinks key={drink._id} drink={drink} />
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
                      <h2>drinks</h2>
                    </div>
                    <div className="menu-content">
                      <div className="row no-gutters">{drinks}</div>
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
    drinks: state.products.drinks,
    loading: state.products.loading
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onFetchDrinks: () => dispatch(actions.fetchDrinks())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DrinksPage);
