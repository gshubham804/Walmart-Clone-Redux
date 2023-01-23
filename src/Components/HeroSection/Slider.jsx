import React, { Component } from "react";
import Slider from "react-slick";
import "./Slider.css"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 2000,
    };
    return (
        <div className="hero-slider">
        <Slider {...settings}>
            <div className="img1">
            <img src="https://images.unsplash.com/photo-1608755728617-aefab37d2edd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            style={{width:1100,height:430}} alt="" />
            </div>
            <div className="img1">
            <img src="https://images.unsplash.com/photo-1607083681678-52733140f93a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            style={{width:1100,height:430}} alt="" />
            </div>
            <div className="img1">
            <img src="https://images.unsplash.com/photo-1607469256872-48074e807b0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            style={{width:1100,height:430}} alt="" />
            </div>
        </Slider>
      </div>
    );
  }
}