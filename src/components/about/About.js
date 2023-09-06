import React from "react";
import './About.scss'
import dummy from '../../assets/pizza.jpg'

function About() {
  return (
    <div className="about-container">
      <div className="about-left">
        <div className="image-container">
          <img src={dummy} alt="" />
        </div>
      </div>
      <div className="about-right">
        <div className="text">
          <h1>About Us</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. t has survived not
            only five centuries
          </p>
          <button className="btn-primary">Read More</button>
        </div>
      </div>
    </div>
  );
}

export default About;
