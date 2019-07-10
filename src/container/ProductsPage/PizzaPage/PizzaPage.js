import React, { Component } from "react";
import Pizza from "./../../../components/Products/Pizza/Pizza";
import { connect } from "react-redux";
import * as actions from "./../../../store/actions/index";
import Spinner from "./../../../components/UI/Spinner/Spinner";
import Navbar from "./../../../components/Products/Navbar/Navbar";
import Banner from "./../../../components/Products/Banner/Banner";
import SideCart from "./../../../components/Products/SideCart/SideCart";
import "./_PizzaPage.scss";
class PizzaPage extends Component {
  componentDidMount() {
    this.props.onFetchPizza();
  }
  render() {
    let pizzas = <Spinner />;
    if (!this.props.loading) {
      pizzas = this.props.pizza.map(pizza => (
        <Pizza key={pizza._id} pizza={pizza} />
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
                      <h2>Pizza</h2>
                    </div>
                    <div className="menu-content">
                      <div className="row no-gutters">{pizzas}</div>
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
    pizza: state.products.pizza,
    loading: state.products.loading
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onFetchPizza: () => dispatch(actions.fetchPizza())
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PizzaPage);
