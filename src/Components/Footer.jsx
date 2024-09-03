import React from "react";
import logo1 from "../assets/logo1.png";
import icon from "../assets/fontawesome-free-6.2.0-web/css/all.min.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="container grid1">
        <div className="box">
          <img src={logo1} alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
            aliquid, voluptatibus nisi sequi provident eum ut reiciendis magnam
            voluptate vero voluptatem, blanditiis, consequatur quidem? Ullam
            culpa reprehenderit quibusdam in aspernatur!
          </p>
          <div className="socialIcon">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-youtube"></i>
            <i className="fab fa-pinterest"></i>
            <i className="fab fa-dribbble"></i>
          </div>
        </div>
        <div className="box">
          <h2>Quick link</h2>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Portfolio</li>
            <li>News</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="box">
          <h2>Recent Post</h2>
          <div className="text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br />
            <span>28 Feb 2024</span>
          </div>
        </div>
        <div className="box">
          <h2>Get In Touch</h2>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
          <div className="icon">
            <i className="fa fa-location-dot"></i>
            <i className="fa fa-phone"></i>
            <i className="fa fa-envelope"></i>
          </div>
        </div>
      </div>
      <div className="legal container">CopyRight @ 2024</div>
    </div>
  );
};

export default Footer;
