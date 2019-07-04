import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Layout from "./hoc/Layout/Layout";
import HomePage from "./container/Homepage/Homepage";
import CategoryPage from "./container/Categorypage/Categorypage";
import SignUpPage from "./container/AuthPage/SignUpPage/SignUpPage";
import SignInPage from "./container/AuthPage/SignInPage/SignInPage";
import PizzaPage from "./container/ProductsPage/PizzaPage/PizzaPage";
import DrinksPage from "./container/ProductsPage/DrinksPage/DrinksPage";
import SidesPage from "./container/ProductsPage/SidesPage/SidesPage";
import DessertPage from "./container/ProductsPage/DessertPage/DessertPage";
import PromotionPage from "./container/PromotionPage/PromotionPage";
import Logout from "./container/AuthPage/Logout/Logout";
import CartPage from "./container/CartPage/CartPage";
import AboutPage from "./container/AboutPage/AboutPage";
import PaymentPage from "./container/PaymentPage/PaymentPage";
import ContactPage from "./container/ContactPage/Contactpage";
class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/category" component={CategoryPage} />
            <Route path="/register" component={SignUpPage} />
            <Route path="/signin" component={SignInPage} />
            <Route path="/pizza" component={PizzaPage} />
            <Route path="/drinks" component={DrinksPage} />
            <Route path="/side-dish" component={SidesPage} />
            <Route path="/dessert" component={DessertPage} />
            <Route path="/promotion" component={PromotionPage} />
            <Route path="/logout" component={Logout} />
            <Route path="/cart" component={CartPage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/payment" component={PaymentPage} />
            <Route path="/contact" component= {ContactPage} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
