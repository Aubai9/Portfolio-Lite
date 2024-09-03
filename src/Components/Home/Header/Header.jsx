import React, { useState } from "react";
import "../../../App.css";
import logo from "../../../assets/logo.png";
import icons from "../../../assets/fontawesome-free-6.2.0-web/css/all.min.css";
import close from "../../../assets//icons8-close-50.png";
import list from "../../../assets//icons8-list-50.png";
import { Link } from "react-router-dom";
const Header = () => {
  window.addEventListener("scroll", function () {
    const header = this.document.querySelector(".header");
    header.classList.toggle("active", window.scrollY > 200);
  });
  const [sideBar, setSideBar] = useState(false);
  return (
    <div className="header">
      <div className="container flex">
        <div className="logo">
          <img src={logo}></img>
        </div>
        <div className="nav">
          <ul
            className={sideBar ? "nav-links-sideBar" : "nav-links"}
            onClick={() => setSideBar(false)}
          >
            <li>Home</li>
            <li>Pages</li>
            <li> Blogs</li>
            <li> Portfolio</li>
            <li> Shop</li>
            <li> Contact</li>

            <li>
              <i className="fa fa-shop header-icon"></i>
              <i className="fa fa-star header-icon"></i>
              <i className="fa fa-search header-icon"></i>
            </li>
          </ul>
        </div>
        <button
          id="btn"
          className={sideBar ? "fa fa-close" : "fa fa-list"}
          onClick={() => setSideBar(!sideBar)}
        ></button>
      </div>
    </div>
  );
};

export default Header;
