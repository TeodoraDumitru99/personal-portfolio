import "./services.css";
import { useState } from "react";
import Card1Img from "../assets/card1.png";
import Card2Img from "../assets/card2.png";
import Card3Img from "../assets/card3.png";
import Card4Img from "../assets/card4.png";
const Services = () => {
  const [expanded, setExpanded] = useState({});
  // Just temporary usage for now

  const accordionContent = [
    {
      id: 0,
      title: "WEBSITE DEVELOPMENT",
      text: "Crafting responsive and visually stunning websites that elevate your brand's online presence, ensuring high performance and seamless user experiences across all devices.",
      shorttext: "Crafting responsive and visually stunning websites...",
      imgsrc: Card2Img,
    },
    {
      id: 1,
      title: "UI/UX DESIGN",
      text: "Designing intuitive interfaces that prioritize the User Experience, blending creativity with functionality to deliver user-friendly designs that captivate and engage audiences.",
      shorttext:
        "Designing intuitive interfaces that prioritize the User Experience...",
      imgsrc: Card3Img,
    },
    {
      id: 2,
      title: "SEAMLESS EXPERIENCES",
      shorttext: "Building fluid and engaging products across all devices...",
      text: "Building fluid and engaging products across all devices, focusing on consistency, interactivity, and adaptability to ensure flawless experiences everywhere your users go.",
      imgsrc: Card4Img,
    },
  ];
  const handleToggle = (id) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };
  return (
    <section className="services">
      <div className="wrapper">
        <h3 className="services_title">Services</h3>
        <div className="services_content">
          <figure className="primary_card">
            <figcaption className="primary_title">EXPLORE SERVICES</figcaption>
            <img src={Card1Img} alt="Star" className="services_main_img" />
          </figure>
          <div className="secondary">
            {accordionContent.map(({ id, title, text, shorttext, imgsrc }) => (
              <div
                key={id}
                className={`secondary_card ${
                  id === 1 ? "secondary_card--reverse" : ""
                }`}
              >
                {/* <p className="arrow" onClick={handleToggle}>
                  {expanded[id] === expanded[id] ? "AAA" : "BBB"}
                </p> */}
                <div
                  className={`secondary_column ${
                    id === 1 ? "secondary_column--reverse" : ""
                  } `}
                >
                  <h3 className="secondary_title">{title}</h3>
                  <p className="secondary_full_text">
                    <span
                      className={`secondary_text ${
                        expanded[id] ? "expanded" : ""
                      }`}
                    >
                      {text}
                    </span>
                    <span
                      className="secondary_short_text"
                      onClick={() => handleToggle(id)}
                    >
                      {shorttext}
                    </span>
                  </p>
                </div>
                <img
                  loading="lazy"
                  src={imgsrc}
                  alt="Star"
                  className="services__secondary_img"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Services;
