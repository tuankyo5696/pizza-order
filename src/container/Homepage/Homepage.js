import React, { Component } from "react";
import Home from "./../../components/Home/Home";
import axios from "axios";
import Slider from "react-slick";
import BestSellers from "./../../components/Products/Pizza/BestSellers/BestSellers";
import Spinner from "./../../components/UI/Spinner/Spinner";

class HomePage extends Component {
  _isMounted = false;
  state = {
    popular: [],
    error: false
  };
  componentDidMount() {
    this._isMounted = true;
    axios
      .get(
        "https://cors-anywhere.herokuapp.com/https://pizza-ordering-api.herokuapp.com/products/popular"
      )
      .then(response => {
        if (this._isMounted) {
          this.setState({ popular: response.data });
        }
      })
      .catch(error => {
        this.setState({ error: true });
      });
  }
  componentWillUnmount() {
    this._isMounted = false;
  }
  render() {
    const bestSellers = this.state.popular ? (
      this.state.popular.map(pizza => (
        <div key={pizza._id}>
          <BestSellers {...pizza} />
        </div>
      ))
    ) : (
      <Spinner />
    );
    const settings = {
      dots: true,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 2000,
      speed: 2000,
      slidesToShow: 3,
      slidesToScroll: 3
    };
    return (
      <div>
        <Home />
        <Slider {...settings}>{bestSellers}</Slider>
      </div>
    );
  }
}

export default HomePage;
