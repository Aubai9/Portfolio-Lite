import React from "react";
import BlogData from "./Blogdata";
import img1 from "./blog1.jpg";
import img2 from "./blog2.jpg";
import img3 from "./blog3.jpg";
const Blog = () => {
  return (
    <div className="blog services">
      <div className="container toMargin">
        <div className="heading">
          <h3>Latest Blog</h3>
          <h1>Read Interesting Story Every Week</h1>
        </div>
        <div className="contain grid toMargin">
          <div className="box">
            <div className="img">
              <img src={img1} alt="" />
            </div>
            <div className="text">
              <span>"26 FEB, 2019",</span>
              <h2>The Most Popular New top Business Apps</h2>
              <p>Technology"</p>
            </div>
          </div>{" "}
          <div className="box">
            <div className="img">
              <img src={img2} alt="" />
            </div>
            <div className="text">
              <span>"27 FEB, 2019",</span>
              <h2>The Best Marketing top Management Tools</h2>
              <p>Agency"</p>
            </div>
          </div>{" "}
          <div className="box">
            <div className="img">
              <img src={img3} alt="" />
            </div>
            <div className="text">
              <span>"26 FEB, 2019",</span>
              <h2>3 WooCommerce Plugins to Boost Sales</h2>
              <p>IT</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
