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
        "My journey into Frontend Development and UI/UX design began with a deep appreciation for crafting meaningful Product Design.",
      text2:
        "Whether I'm coding a responsive interface, refining microinteractions, or designing a seamless user flow, my goal is to bridge the gap between functionality and design.",
    },
    {
      id: 1,
      header: "Design Meets Development",
      text1:
        "I believe that great digital experiences are built at the intersection of creativity and technical precision. A well-designed product isn't just visually appealing—it's structured for clarity, accessibility, and scalability.",
      text2:
        "Every project I take on is an opportunity to bring designs to life through clean, efficient code while following principles of usability and aesthetics.",
    },
    {
      id: 2,
      header: "Always Growing",
      text1:
        "Staying curious and constantly refining my skills is central to my approach as a developer and designer,I am looking to push my creative boundaries.",
      text2:
        "Recently, I've been expanding my expertise in 3D modeling, drawing from my background in CAM/CAD software. I'm currently deepening my skills in Blender and Autodesk Maya, exploring how 3D elements can enhance web experiences and interactive interfaces.",
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
        </div>
      </div>
    </section>
  );
};

export default Approach;

// {accordionContent.map(({ id, title, text, shorttext, imgsrc }) => ())}
