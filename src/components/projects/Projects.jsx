import "./projects.css";
import MiniArcadeImg from "../assets/projectsImages/Mini_Arcade.png";
import SmartLampImg from "../assets/projectsImages/Smart_Control_Lamp.png";
import MultifunctionalImg from "../assets/projectsImages/Multifunctional_Storage.png";
import DueMarkBlogImg from "../assets/projectsImages/duemark.png";
import DueMarkImg from "../assets/projectsImages/DueMark_Hero.png";
import NexioPreview from "../assets/projectsImages/Nexio Preview.png";
import StaniaPreview from "../assets/projectsImages/Stania Preview.png";
import PortfolioPreview from "../assets/projectsImages/Portfolio Projects Preview.png";
import { Link } from "react-router-dom";

const Projects = () => {
  const cardsContent = [
    {
      category: "Applications",
      projects: [
        {
          id: 0,
          title: "Stania",
          desc: "UI/UX Design & Prototype commissioned for a booking page that displays the natural beauty of North Macedonia.",
          alt: "Stania Booking",
          imgsrc: StaniaPreview,
          ahref: "/projects/stania",
        },
        {
          id: 1,
          title: "Nexio App",
          desc: "UI/UX Design & Prototype for an online store mobile app, aimed to make your online shopping easy and fun.",
          alt: "Nexio App",
          imgsrc: NexioPreview,
          ahref: "/projects/nexio",
        },
        {
          id: 2,
          title: "Portfolio",
          desc: "UI/UX Design & Frontend Implementation for a portfolio showcasing personal projects and presenting my design philosophy.",
          alt: "Portfolio",
          imgsrc: PortfolioPreview,
          ahref: "/projects/portfolio",
        },
        {
          id: 3,
          title: "DueMark Blog",
          desc: "UI/UX Design for a professional blog, aimed at legal practitioners that support community-driven discussions.",
          alt: "DueMark Blog",
          imgsrc: DueMarkBlogImg,
          ahref: "/projects/duemarkblog",
        },
        {
          id: 4,
          title: "DueMark",
          desc: "UI/UX Design for a global trademark services provider that specializes in renewals and IP management.",
          alt: "DueMark",
          imgsrc: DueMarkImg,
          ahref: "/projects/duemark",
        },
        {
          id: 5,
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
