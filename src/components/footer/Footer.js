import React from "react";
import logo from "../../assets/logo.png";
import "./Footer.scss";
import { AiOutlineInstagram, AiFillFacebook } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";

function Footer() {
  return (
    <div className="Footer">
      <div className="footer-container">
        <div className="logo-container">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
        </div>
        <div className="contact-us">
          <h3>Contact Us</h3>
          <ul className="contact">
            <li>
              Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near YTM
              Market, XYZ-343434
            </li>
            <li>example2020@gmail.com</li>
            <li>(904) 443-0343</li>
          </ul>
        </div>
        <div className="more">
          <h3 className="title">More</h3>
          <ul className="company">
            <li className="hover-link">About Us</li>
            <li className="hover-link">Products</li>
            <li className="hover-link">Careers</li>
            <li className="hover-link">Contact Us</li>
          </ul>
        </div>
        <div className="social-links">
          <div className="social-top">
            <h3>Social Links</h3>
            <ul className="follow">
              <li className="hover-link" id="fb">
                <AiFillFacebook />
              </li>
              <li className="hover-link">
                <AiOutlineInstagram />
              </li>
              <li className="hover-link">
                <BsTwitter />
              </li>
            </ul>
          </div>
          <div className="social-bottom">
            <p className="copyright">
              Copyright {new Date().getFullYear()} ©{" "}
              <strong>Food Truck Example</strong>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
