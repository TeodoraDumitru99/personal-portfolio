import "./projects.css";
import MiniArcadeImg from "../assets/Mini_Arcade.png";
import SmartLampImg from "../assets/Smart_Control_Lamp.png";
import MultifunctionalImg from "../assets/Multifunctional_Storage.png";
import DueMarkBlogImg from "../assets/duemark.png";
import DueMarkImg from "../assets/DueMark_Hero.png";
import NexioPreview from "../assets/Nexio Preview.png";
import { Link } from "react-router-dom";

const Projects = () => {
  const cardsContent = [
    {
      category: "Applications",
      projects: [
        {
          id: 0,
          title: "Nexio App",
          desc: "UI/UX Design & Prototype for an online store mobile app, aimed to make your online shopping easy and fun.",
          alt: "Nexio App",
          imgsrc: NexioPreview,
          ahref: "/projects/nexio",
        },
        {
          id: 1,
          title: "DueMark Blog",
          desc: "UI/UX Design for a professional blog, aimed at legal practitioners that support community-driven discussions.",
          alt: "DueMark Blog",
          imgsrc: DueMarkBlogImg,
          ahref: "/projects/duemarkblog",
        },
        {
          id: 2,
          title: "DueMark",
          desc: "UI/UX Design for a global trademark services provider that specializes in renewals and IP management.",
          alt: "DueMark",
          imgsrc: DueMarkImg,
          ahref: "/projects/duemark",
        },
        {
          id: 3,
          title: "Mini Arcade",
          desc: "UI/UX Design and Frontend Implementation for personal Arcade Application with classic games.",
          alt: "Mini Arcade Website",
          imgsrc: MiniArcadeImg,
          ahref: "https://arcademini.netlify.app/",
        },
      ],
    },
    {
      category: "Product Design",
      projects: [
        {
          id: 0,
          title: "Smart Control Lamp",
          desc: "Prototype of a smart controlled lamp, operable via a mobile app or automatically through integrated sensors.",
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
        // {
        //   id: 2,
        //   title: "Modular Bean Bag",
        //   desc: "Design and Prototype for a modular bean bag family, as part of the Askia Young Designers Award 2022 competition.",
        //   alt: "Modular Bean Bag Image",
        //   imgsrc: ModularImg,
        //   ahref: "/",
        // },
      ],
    },
  ];
  return (
    <section className="projects">
      <div className="wrapper">
        <div className="project_content">
          {cardsContent.map(({ category, projects }) => (
            <div className="projects_content_container" key={category}>
              <h2 className="projects_title heading1">{category}</h2>
              <div className="projects_cards">
                {projects.map(({ id, title, desc, alt, imgsrc, ahref }) => (
                  <div className="projects_card" key={id}>
                    <img
                      loading="lazy"
                      src={imgsrc}
                      alt={alt}
                      className="projects_element_image"
                    />
                    <h3 className="projects_element_title heading3">{title}</h3>
                    <div className="projects_element_container">
                      <p className="projects_element_desc body_text">{desc}</p>
                      <Link
                        to={ahref}
                        className="projects_element_button route"
                      >
                        View more
                      </Link>
                    </div>
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
