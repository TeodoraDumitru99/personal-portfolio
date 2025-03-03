import "./projects.css";
import ZummpathImg from "../assets/Zummpath.png";
import MiniArcadeImg from "../assets/Mini_Arcade.png";
import BiasZeroImg from "../assets/Bias_Zero.png";

const Projects = () => {
  const cardsContent = [
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
  ];
  return (
    <section className="projects">
      <div className="wrapper">
        <h2 className="projects_title">Projects</h2>
        <div className="projects_content">
          {cardsContent.map(({ id, title, desc, alt, imgsrc, ahref }) => (
            <div className="projects_card" key={id}>
              <img
                loading="lazy"
                src={imgsrc}
                alt={alt}
                className="project_image"
              />
              <h3 className="project_title">{title}</h3>
              <p className="project_desc">{desc}</p>
              <a href={ahref} className="project_button">
                View More
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
