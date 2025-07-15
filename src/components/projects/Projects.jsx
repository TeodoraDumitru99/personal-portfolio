import "./projects.css";
import ZummpathImg from "../assets/Zummpath.png";
import MiniArcadeImg from "../assets/Mini_Arcade.png";
import BiasZeroImg from "../assets/Bias_Zero.png";
import SmartLampImg from "../assets/Smart_Control_Lamp.png";
import MultifunctionalImg from "../assets/Multifunctional_Storage.png";
import ModularImg from "../assets/Modular_Bean_Bag.png";
import DueMarkBlogImg from "../assets/duemark.png";
import DueMarkImg from "../assets/DueMark_Hero.png";
import NexioPreview from "../assets/Nexio Preview.png";
import { Link } from "react-router-dom";

const Projects = () => {
  const cardsContent = [
    {
      category: "Web Applications",
      projects: [
        {
          id: 0,
          title: "Nexio App",
          desc: "UI/UX Design & Prototype for an online store mobile app, aimed to make your online shopping easy and fun, built with Figma.",
          alt: "Nexio App Image",
          imgsrc: NexioPreview,
          ahref: "/projects/nexio",
        },
        {
          id: 1,
          title: "DueMark Blog",
          desc: "UI/UX Design for a professional legal blog, aimed at legal practitioners that support community-driven discussions, built with Figma.",
          alt: "DueMark Blog Image",
          imgsrc: DueMarkBlogImg,
          ahref: "/projects/duemarkblog",
        },
        {
          id: 2,
          title: "DueMark",
          desc: "UI/UX Design for a global trademark services provider that specializes in renewals and IP management, built with Figma.",
          alt: "DueMark Image",
          imgsrc: DueMarkImg,
          ahref: "/projects/duemark",
        },
        {
          id: 3,
          title: "Mini Arcade",
          desc: "UI/UX Design and Frontend Implementation for personal Mini-Arcade web app with classic games, built with React.js and CSS.",
          alt: "Mini Arcade Website Image",
          imgsrc: MiniArcadeImg,
          ahref: "https://arcademini.netlify.app/",
        },
        {
          id: 4,
          title: "Zummpath",
          desc: "UI/UX Design and Frontend Implementation for Quantumzyme's Industrial Training Program, built with React.js and Tailwind.",
          alt: "Zummpath Website Image",
          imgsrc: ZummpathImg,
          ahref: "https://zummpath-bio-informatics.vercel.app/",
        },
        {
          id: 5,
          title: "Bias Zero",
          desc: "UI/UX Design and User Flow Mapping for Zummmit Infolabs' AI Project - Bias Zero, built with Figma and Adobe Photoshop.",
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
          ahref: "/projects/multifunctional-storage",
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
                      className="projects_element_image"
                    />
                    <h3 className="projects_element_title">{title}</h3>
                    <p className="projects_element_desc">{desc}</p>
                    <Link to={ahref} className="projects_element_button">
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
