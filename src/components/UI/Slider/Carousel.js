import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Slide1 from "./../../../assets/images/slide1.jpg";
import Slide2 from "./../../../assets/images/slide2.jpg";
import Slide3 from "./../../../assets/images/slider3.jpg";
import Slide4 from "./../../../assets/images/slider4.jpg";
const carousel = props => (
  <div className="carousel">
    <Carousel autoPlay showThumbs={false} infiniteLoop={true}>
      <div>
        <img src={Slide1} alt="" />
      </div>
      <div>
        <img src={Slide2} alt="" />
      </div>
      <div>
        <img src={Slide3} alt="" />
      </div>
      <div>
        <img src={Slide4} alt="" />
      </div>
    </Carousel>
  </div>
);
export default carousel;
