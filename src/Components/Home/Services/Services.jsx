import React from "react";
import img1 from "../../../assets/services/services-1.png";
import img2 from "../../../assets/services/services-2.jpg";
import img3 from "../../../assets/services/services-3.jpg";
import img4 from "../../../assets/services/services-4.jpg";
import img5 from "../../../assets/services/services-5.jpg";
import img6 from "../../../assets/services/services-6.jpg";
const Services = () => {
  const ServicesData = [
    {
      id: 1,
      title: "Web Design",
      desc: "Lorem ipsum dolor sit amet, consecte tuer adipiscing elit enean.",
      cover: "../../../assets/services/services-1.png",
    },
    {
      id: 2,
      title: "Web Development",
      desc: "Lorem ipsum dolor sit amet, consecte tuer adipiscing elit enean.",
      cover: "../../../assets/services/services-2.jpg",
    },
    {
      id: 3,
      title: "Photography",
      desc: "Lorem ipsum dolor sit amet, consecte tuer adipiscing elit enean.",
      cover: "./assets/services/services-3.jpg",
    },
    {
      id: 4,
      title: "Live Support",
      desc: "Lorem ipsum dolor sit amet, consecte tuer adipiscing elit enean.",
      cover: "./assets/services/services-4.jpg",
    },
    {
      id: 5,
      title: "Content Writing",
      desc: "Lorem ipsum dolor sit amet, consecte tuer adipiscing elit enean.",
      cover: "./assets/services/services-5.jpg",
    },
    {
      id: 6,
      title: "Timely Deliverables",
      desc: "Lorem ipsum dolor sit amet, consecte tuer adipiscing elit enean.",
      cover: "./assets/services/services-6.jpg",
    },
  ];

  return (
    <div className="services toMargin">
      <div className="container">
        <div className="heading">
          <h3>MY SERVICES</h3>
          <h1>Interactive Services Offered By Me</h1>
        </div>
        <div className="contain grid toMargin">
          <div className="box">
            <div className="img">
              <img src={img1} alt="" />
            </div>
            <div className="text">
              <h2>Web Design</h2>
              <p>
                Lorem ipsum dolor sit amet, consecte tuer adipiscing elit enean.
              </p>
            </div>
          </div>
          <div className="box">
            <div className="img">
              <img src={img2} alt="" />
            </div>
            <div className="text">
              <h2>Web Development</h2>
              <p>
                Lorem ipsum dolor sit amet, consecte tuer adipiscing elit enean.
              </p>
            </div>
          </div>
          <div className="box">
            <div className="img">
              <img src={img3} alt="" />
            </div>
            <div className="text">
              <h2>Photography</h2>
              <p>
                Lorem ipsum dolor sit amet, consecte tuer adipiscing elit enean.
              </p>
            </div>
          </div>
          <div className="box">
            <div className="img">
              <img src={img4} alt="" />
            </div>
            <div className="text">
              <h2>Live Support</h2>
              <p>
                Lorem ipsum dolor sit amet, consecte tuer adipiscing elit enean.
              </p>
            </div>
          </div>
          <div className="box">
            <div className="img">
              <img src={img5} alt="" />
            </div>
            <div className="text">
              <h2>Content Writing</h2>
              <p>
                Lorem ipsum dolor sit amet, consecte tuer adipiscing elit enean.
              </p>
            </div>
          </div>
          <div className="box">
            <div className="img">
              <img src={img6} alt="" />
            </div>
            <div className="text">
              <h2>Timely Deliverablest</h2>
              <p>
                Lorem ipsum dolor sit amet, consecte tuer adipiscing elit enean.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
