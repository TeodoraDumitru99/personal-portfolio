import "./technologies.css";
import HTMLImg from "../assets/technologiesImages/html.svg";
import CSSImg from "../assets/technologiesImages/CSS.svg";
import JSImg from "../assets/technologiesImages/JS.svg";
import ReactImg from "../assets/technologiesImages/React.svg";
import BootstrapImg from "../assets/technologiesImages/Bootstrap.svg";
import TailwindImg from "../assets/technologiesImages/Tailwind.svg";
import FigmaImg from "../assets/technologiesImages/Figma.svg";
import PSImg from "../assets/technologiesImages/PS.svg";

const Technologies = () => {
  const iconsList = [
    { id: 0, title: "React.js", alt: "React Icon", imgsrc: ReactImg },
    { id: 1, title: "HTML5", alt: "HTML5 Icon", imgsrc: HTMLImg },
    { id: 2, title: "CSS3", alt: "CSS3 Icon", imgsrc: CSSImg },
    { id: 3, title: "JavaScript", alt: "JavaScript Icon", imgsrc: JSImg },

    {
      id: 4,
      title: "Bootstrap",
      alt: "Bootstrap Icon",
      imgsrc: BootstrapImg,
    },
    { id: 5, title: "Tailwind CSS", alt: "Tailwind Icon", imgsrc: TailwindImg },
    { id: 6, title: "Figma", alt: "Figma Icon", imgsrc: FigmaImg },
    { id: 7, title: "Adobe Photoshop", alt: "Photoshop Icon", imgsrc: PSImg },
  ];
  return (
    <section className="technologies">
      <div className="technologies_element">
        {iconsList.map(({ id, title, alt, imgsrc }) => (
          <div className="technologies_box" key={id}>
            <img
              loading="lazy"
              src={imgsrc}
              alt={alt}
              className="technologies_icons"
            />
            <h5 className="technologies_name body_text">{title}</h5>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Technologies;

// {accordionContent.map(({ id, title, text, shorttext, imgsrc }) => ())}
