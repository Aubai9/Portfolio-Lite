import React from 'react';
import img from "../../../assets/about.jpg"
const About = () => {
    const data = [
        {
          title: "Who I Am And What I Do ?",
          desc1: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde possimus quaerat quam dolorum ipsa laboriosam, repudia illum amet inventore facilis, eius libero.",
          desc2: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
          desc3: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          cover: "./assets/about.jpg",
        },
      ]
    return (
        <div className='about toMargin'>
            <div className="container flex">
                {
                    data.map((item)=>{
                        return (
                        <>
                            <div className='left mtop'>
                                <div className="heading">
                                    <h3>About Me</h3>
                                    <h1>{item.title}</h1>
                                </div>
                                <p>{item.desc1}</p>
                                <p>{item.desc2}</p>
                                <p>{item.desc3}</p>
                                <button className='primary-btn'>Download Cv</button>
                            </div>
                            <div className="right">
                                <div className="img">
                                    <img src={img} alt="" />
                                </div>
                            </div>
                            </>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default About;