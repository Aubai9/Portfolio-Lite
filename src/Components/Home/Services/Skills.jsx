import React from "react";

const Skills = () => {
  const Progress = ({ done, title }) => {
    return (
      <div className="progress">
        <div
          className="progress-done "
          style={{ opacity: 1, width: `${done}%` }}
        >
          <h4>{title}</h4>
          <h4>{done} %</h4>
        </div>
      </div>
    );
  };
  const data = [
    {
      title: "Every Day is a New Challenge",
      para: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id autem veritatis nobis inventore consectetur omnis porro iusto excepturi, quo voluptate quos vel, quasi officia fugiat.",
      para1:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos illo qui quibusdam perspiciatis soluta cumque quia asperiores sapiente! Veniam odit veritatis mollitia eos similique impedit beatae iusto.",
    },
  ];
  return (
    <div className="skill">
      <div className="container">
        <div className="heading">
          <h3>Why Choose Us</h3>
          <h1>Some Of My Skills</h1>
        </div>
        <div className="content flex">
          <div className="left toMargin">
            <Progress done="70" title="HTML"></Progress>
            <Progress done="80" title="CSS"></Progress>
            <Progress done="90" title="JAVASCRIPT"></Progress>
            <Progress done="85" title="REACT"></Progress>
          </div>
          <div className="right mtop">
            {data.map((val) => {
              return (
                <>
                  <h1>{val.title}</h1>
                  <p>{val.para}</p>
                  <p>{val.para1}</p>
                  <button className="primary-btn">Hire Me</button>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
