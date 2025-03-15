import "./projects.css";
import ZummpathImg from "../assets/Zummpath.png";
import MiniArcadeImg from "../assets/Mini_Arcade.png";
import BiasZeroImg from "../assets/Bias_Zero.png";
import SmartLampImg from "../assets/Smart_Control_Lamp.png";
import MultifunctionalImg from "../assets/Multifunctional_Storage.png";
import ModularImg from "../assets/Modular_Bean_Bag.png";
import { Link } from "react-router-dom";

const Projects = () => {
  const cardsContent = [
    {
      category: "Web Applications",
      projects: [
        {
          id: 0,
          title: "Mini Arcade",
          desc: "UI/UX Design and Frontend Implementation for personal Mini-Arcade web app with classic games, using React.js and CSS.",
          alt: "Mini Arcade Website Image",
          imgsrc: MiniArcadeImg,
          ahref: "https://arcademini.netlify.app/",
        },
        {
          id: 1,
          title: "Zummpath",
          desc: "UI/UX Design and Frontend Implementation for Quantumzyme's Industrial Training Program, using React.js and Tailwind.",
          alt: "Zummpath Website Image",
          imgsrc: ZummpathImg,
          ahref: "https://zummpathbioinformatics.zummitlabs.com/",
        },
        {
          id: 2,
          title: "Bias Zero",
          desc: "UI/UX Design and User Flow Mapping for Zummmit Infolabs' AI Project - Bias Zero, using Figma and Adobe Photoshop.",
          alt: "Bias Zero Website Image",
          imgsrc: BiasZeroImg,
          ahref: "https://biaszero.zummitlabs.com/",
        },
      ],
    },
    {
      category: "Product Design",
      projects: [
        {
          id: 0,
          title: "Smart Control Lamp",
          desc: "Design and Prototype for a smart lamp with remote control, operable via a mobile app or automatically through integrated sensors.",
          alt: "Smart Control Lamp Image",
          imgsrc: SmartLampImg,
          ahref: "/projects/smart-lamp",
        },
        {
          id: 1,
          title: "Multifunctional Storage",
          desc: "Design and Prototype for a multi-functional drinking water and storage container, suitable for hiking enthusiasts.",
          alt: "Multifunctional Storage Image",
          imgsrc: MultifunctionalImg,
          ahref: "/",
        },
        {
          id: 2,
          title: "Modular Bean Bag",
          desc: "Design and Prototype for a modular bean bag family, as part of the Askia Young Designers Award 2022 competition.",
          alt: "Modular Bean Bag Image",
          imgsrc: ModularImg,
          ahref: "/",
        },
      ],
    },
  ];
  return (
    <section className="projects">
      <div className="wrapper">
        <div className="projects_content">
          {cardsContent.map(({ category, projects }) => (
            <div key={category}>
              <h2 className="projects_title">{category}</h2>
              <div className="projects_cards">
                {projects.map(({ id, title, desc, alt, imgsrc, ahref }) => (
                  <div className="projects_card" key={id}>
                    <img
                      loading="lazy"
                      src={imgsrc}
                      alt={alt}
                      className="project_image"
                    />
                    <h3 className="project_title">{title}</h3>
                    <p className="project_desc">{desc}</p>
                    <Link to={ahref} className="project_button">
                      View More
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
