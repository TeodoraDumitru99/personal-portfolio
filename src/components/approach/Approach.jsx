import "./approach.css";
import { useState } from "react";
import BallImg from "../assets/ball_cut.jpg";

const Approach = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const textContent = [
    {
      id: 0,
      header: "From Passion to Precision",
      text1:
        " My journey into Frontend Development and UI/UX design started with a love for creating thoughtful, and visually engaging experience, as I have always been passioned about Product Design.",
      text2:
        "Whether it's coding a responsive interface or crafting a seamless user journey, my focus is on turning ideas into intuitive, functional designs that users enjoy interacting with.",
    },
    {
      id: 1,
      header: "Design Meets Development",
      text1: "I believe in blending creativity with technical precision.",
      text2:
        "Every project I take on is an opportunity to bring designs to life with clean, scalable code while ensuring the end product reflects the core values of usability and aesthetics.",
    },
    {
      id: 2,
      header: "Always Growing",
      text1: "Staying curious and constantly improving are key to my approach.",
      text2:
        "My goal is to expand my skills with 3D Modeling , as I have prior experience with CAM/CAD Modeling Softwares. I am currently refining my skills in Blender and Autodesk Maya.",
    },
  ];

  // const handleCircleClick = (id) => {
  //   setActiveIndex(id);
  // };

  return (
    <section className="approach">
      <div className="wrapper">
        <h3 className="approach_title">Approach</h3>
        <div className="approach_content">
          <div className="approach_text_div">
            {textContent.map((item, id) => (
              <div
                key={id}
                className={`approach_text_element ${
                  activeIndex === id ? "active" : ""
                }${activeIndex !== id ? "hidden" : ""}`}
              >
                <h4 className="approach_header">{item.header}</h4>
                <div className="approach_text">
                  {item.text1}
                  <br></br>
                  {item.text2}
                </div>
              </div>
            ))}
          </div>

          <div className="approach_timeline_div">
            {textContent.map((_, id) => (
              <div
                key={id}
                className={`approach_circle_div ${
                  activeIndex === id ? "active_circle" : ""
                }`}
                onClick={() => {
                  setActiveIndex(id);
                  // console.log("circle clicked:", id);
                }}
              >
                <img
                  loading="lazy"
                  src={BallImg}
                  alt="Img"
                  className="approach_circle"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Approach;

// {accordionContent.map(({ id, title, text, shorttext, imgsrc }) => ())}
