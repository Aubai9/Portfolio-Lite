import React from "react";

const Branding = () => {
  const Data = [
    {
      id: "01",
      title: "Digital Marketing",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
      cover: "./assets/work/work1.jpg",
    },
    {
      id: "02",
      title: "Team Mangament",
      desc: "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      cover: "./assets/work/work2.jpg",
    },
    {
      id: "03",
      title: "Web Designer",
      desc: "Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      cover: "./assets/work/work3.jpg",
    },
    {
      id: "04",
      title: "Web Developer",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      cover: "./assets/work/work4.jpg",
    },
    {
      id: "05",
      title: "UI/ UX Designer",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      cover: "./assets/work/work5.jpg",
    },
    {
      id: "06",
      title: "Syber Security",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod aliqua.",
      cover: "./assets/work/work6.jpg",
    },
  ];

  return (
    <div className="branding">
      <div className="container grid">
        {Data.map((value) => {
          return (
            <div className="box flex">
              <div className="text">
                <h1>{value.id}</h1>
              </div>
              <div className="para">
                <h2>{value.title}</h2>
                <p>{value.desc}</p>
                </div> 
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Branding;
