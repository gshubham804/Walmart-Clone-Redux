import React from "react";
import Card from "./Card";
import Slider from "./Slider";
import './HeroSection.css';
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <>
      <div className="herosection-cont">
        <div className="row">
          <div className="herosection-first-col col col-sm-6 col-md-6 col-lg-8">
            <Slider />
          </div>
          <div className="herosection-sec-col col col-sm-6 col-md-6 col-lg-4">
            <Card />
          </div>
        </div>
        <h3><Link to="/products">Products</Link></h3>
      </div>
    </>
  );
};

export default HeroSection;
