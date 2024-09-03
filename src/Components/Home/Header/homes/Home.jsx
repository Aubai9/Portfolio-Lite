import React from "react";
import img from "../../../../assets/home.png";
import icons from "../../../../assets/fontawesome-free-6.2.0-web/css/all.min.css"
const Home = () => {
  return (
    <div className="home">
      <div className="container flex">
        <div className="left">
          <div className="img">
            <img src={img} alt="" />
          </div>
        </div>
        <div className="right toMargin">
          <h1>
            I AM A <br />
            WEB DESIGNER
          </h1>
          <div className="social-icon">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-youtube"></i>
            <i className="fab fa-pinterest"></i>
            <i className="fab fa-dribbble"></i>
          </div>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel et asperiores aliquam alias provident? Quisquam tempora harum sequi accusamus laborum. Quidem molestias voluptate similique impedit doloremque, doloribus reprehenderit quibusdam magni?</p>
         <button className="primary-btn">Contact Us</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
