import React from "react";
import logo from "../../assets/logo.png";
import pizza from "../../assets/pizza.avif"
import "./Hero.scss";

function Hero() {
  return (
    <div className="Hero">
      <div className="hero-left">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="tag-line">
          <div className="text">
            <h1>Discover the <span className="absord">Best</span> Food and Drinks</h1>
            <p>
              Naturally made Healthcare Products for the better care & support
              of your body.
            </p>
            <button className="btn-primary">Explore Now!</button>
          </div>
        </div>
      </div>
      <div className="hero-right">
        <div className="pizza-container">
          <img src={pizza} alt="Pizza" />
        </div>
        <button className="btn-primary">Get In Touch</button>
      </div>
    </div>
  );
}

export default Hero;
