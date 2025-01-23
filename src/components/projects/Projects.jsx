import "./projects.css";
import ZummpathImg from "../assets/Zummpath.png";

const Projects = () => {
  const cardsContent = [
    {
      id: 0,
      title: "Zummpath Bioinformatics 1",
      desc: "Website for Quantumzyme's Industrial Training Program, using React.js and Tailwind",
      alt: "Website Image",
      imgsrc: ZummpathImg,
    },
    {
      id: 1,
      title: "Zummpath Bioinformatics 2",
      desc: "Website for Quantumzyme's Industrial Training Program, using React.js and Tailwind",
      alt: "Website Image",
      imgsrc: ZummpathImg,
    },
    {
      id: 2,
      title: "Zummpath Bioinformatics 3",
      desc: "Website for Quantumzyme's Industrial Training Program, using React.js and Tailwind",
      alt: "Website Image",
      imgsrc: ZummpathImg,
    },
  ];
  return (
    <section className="projects">
      <div className="wrapper">
        <h2 className="projects_title">Projects</h2>
        <div className="projects_content">
          {cardsContent.map(({ id, title, desc, alt, imgsrc }) => (
            <div className="projects_card" key={id}>
              <img
                loading="lazy"
                src={imgsrc}
                alt={alt}
                className="project_image"
              />
              <h3 className="project_title">{title}</h3>
              <p className="project_desc">{desc}</p>
              <a
                href="https://zummpathbioinformatics.zummitlabs.com/"
                className="project_button"
              >
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
