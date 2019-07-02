import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "./../../../store/actions/index";
import Spinner from "./../../../components/UI/Spinner/Spinner";
import Dessert from "./../../../components/Products/Dessert/Dessert";
import Navbar from "./../../../components/Products/Navbar/Navbar";
import Banner from "./../../../components/Products/Banner/Banner";
import SideCart from "./../../../components/Products/SideCart/SideCart";
class DessertPage extends Component {
  componentDidMount() {
    this.props.onFetchDessert();
  }
  render() {
    let desserts = <Spinner />;
    if (!this.props.loading) {
      desserts = this.props.dessert.map(dessert => (
        <Dessert key={dessert._id} dessert={dessert} />
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
                      <h2>Dessert</h2>
                    </div>
                    <div className="menu-content">
                      <div className="row no-gutters">{desserts}</div>
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
    dessert: state.products.dessert,
    loading: state.products.loading
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onFetchDessert: () => dispatch(actions.fetchDessert())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DessertPage);
