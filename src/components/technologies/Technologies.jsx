import "./technologies.css";
import HTMLImg from "../assets/html.svg";
import CSSImg from "../assets/CSS.svg";
import JSImg from "../assets/JS.svg";
import ReactImg from "../assets/React.svg";
import BootstrapImg from "../assets/Bootstrap.svg";
import TailwindImg from "../assets/Tailwind.svg";
import FigmaImg from "../assets/Figma.svg";
import PSImg from "../assets/PS.svg";

const Technologies = () => {
  const iconsList = [
    { id: 0, title: "HTML5", alt: "HTML5 Icon", imgsrc: HTMLImg },
    { id: 1, title: "CSS3", alt: "CSS3 Icon", imgsrc: CSSImg },
    { id: 2, title: "JavaScript", alt: "JavaScript Icon", imgsrc: JSImg },
    { id: 3, title: "React.js", alt: "React Icon", imgsrc: ReactImg },
    {
      id: 4,
      title: "Bootstrap",
      alt: "Bootstrap Icon",
      imgsrc: BootstrapImg,
    },
    { id: 5, title: "Tailwind", alt: "Tailwind Icon", imgsrc: TailwindImg },
    { id: 6, title: "Figma", alt: "Figma Icon", imgsrc: FigmaImg },
    { id: 7, title: "Adobe Photoshop", alt: "Photoshop Icon", imgsrc: PSImg },
  ];
  return (
    <section className="technologies">
      <div className="wrapper">
        <div className="technologies_content">
          <h3 className="technologies_title">Technologies</h3>
          <div className="technologies_element">
            {iconsList.map(({ id, title, alt, imgsrc }) => (
              <div className="technologies_box" key={id}>
                <img
                  loading="lazy"
                  src={imgsrc}
                  alt={alt}
                  className="technologies_icons"
                />
                <h5 className="technologies_name">{title}</h5>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;

// {accordionContent.map(({ id, title, text, shorttext, imgsrc }) => ())}
