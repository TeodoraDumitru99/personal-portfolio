import "./services.css";
import { useState, useEffect } from "react";
import Card1Img from "../assets/card1.png";
import Card2Img from "../assets/card2.png";
import Card3Img from "../assets/card3.png";
import Card4Img from "../assets/card4.png";
const Services = () => {
  const [expanded, setExpanded] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1000);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 1000);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const section = document.querySelector(".services");
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          setExpanded(null);
        }
      },
      { threshold: 0.1 }
    );
    if (section) observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const handleMouseLeave = () => {
    if (!isMobile) {
      setExpanded(null);
    }
  };

  const handleInteraction = (id) => {
    setExpanded((prevId) => (prevId === id ? null : id));
  };

  const accordionContent = [
    {
      id: 0,
      title: "WEBSITE DEVELOPMENT",
      text: "Crafting responsive, visually stunning websites to elevate your brand, ensuring high performance and seamless user experiences.",
      shorttext: "Crafting responsive, visually stunning websites to",
      imgsrc: Card2Img,
    },
    {
      id: 1,
      title: "UI/UX DESIGN",
      text: "Designing intuitive interfaces that prioritize the user, blending creativity and functionality for captivating, user-friendly designs.",
      shorttext: "Designing intuitive interfaces that prioritize the user",
      imgsrc: Card3Img,
    },
    {
      id: 2,
      title: "SEAMLESS EXPERIENCES",
      text: "Building fluid, engaging products across all devices with consistency, interactivity, and adaptability for flawless user experiences.",
      shorttext: "Building fluid, engaging products across all devices with",
      imgsrc: Card4Img,
    },
  ];

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
                  expanded === id ? "expanded" : ""
                }`}
                onMouseEnter={() => !isMobile && handleInteraction(id)}
                onMouseLeave={handleMouseLeave}
                onClick={() => isMobile && handleInteraction(id)}
              >
                <div className="secondary_column">
                  <h3 className="secondary_title">{title}</h3>
                  <div className="secondary_full_text">
                    {expanded === id ? (
                      <span
                        key={`expanded-${id}`}
                        className={`secondary_text ${
                          expanded === id ? "fade-in" : "fade-out"
                        }`}
                      >
                        {text}
                      </span>
                    ) : (
                      <p
                        key={`short-${id}`}
                        className={`secondary_short_text ${
                          expanded === id ? "fade-out" : "fade-in"
                        }`}
                        // onClick={() => handleToggle(id)}
                      >
                        {shorttext}
                        <span className="secondary_read_more">
                          ... Read More
                        </span>
                      </p>
                    )}
                  </div>
                </div>
                <img
                  loading="lazy"
                  src={imgsrc}
                  alt="Star"
                  className={`services_secondary_img ${
                    expanded === id ? "fade-in" : "fade-out"
                  }`}
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
