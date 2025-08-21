import "./herosection.css";
import DuemarkBImg from "../assets/heroImages/Duemark Preview Blog.png";
import NexioImg from "../assets/heroImages/Nexio Preview.png";
import StaniaImg from "../assets/heroImages/Stania Preview.png";
import Blur1Img from "../assets/heroImages/Blur Large.png";
import Blur2Img from "../assets/heroImages/Blur Small.png";

const HeroSection = () => {
  const textContent = [
    {
      id: 0,
      imgsrc: NexioImg,
      alt: "Nexio",
      link: "/projects/nexio",
    },
    {
      id: 1,
      imgsrc: DuemarkBImg,
      alt: "Duemark Blog",
      link: "/projects/duemarkblog",
    },
    {
      id: 2,
      imgsrc: StaniaImg,
      alt: "Stania",
      link: "projects/stania",
    },
  ];

  return (
    <section className="herosection section">
      <img
        className="herosection_blur_primary"
        loading="lazy"
        src={Blur1Img}
        alt="Blur"
      />
      <img
        className="herosection_blur_secondary"
        loading="lazy"
        src={Blur2Img}
        alt="Blur"
      />
      <div className="wrapper">
        <div className="herosection_content">
          <div className="herosection_heading">
            <h1 className="heading1">
              <p>Achieve powerful</p>
              <p>results through</p>
              <p>digital ideas</p>
            </h1>
            <h3 className="heading3 herosection_heading3">
              changing the world pixel by pixel
            </h3>
          </div>
          <div className="herosection_portfolio">
            <a className="route herosection_route" href="/projects">
              SEE PORTFOLIO
            </a>
            <div className="herosection_thumbnails">
              {textContent.map(({ id, imgsrc, alt, link }) => (
                <div key={id} className="herosection_thumbnail">
                  <a key={id} href={link} className="herosection_link">
                    <img
                      className="herosection_image"
                      loading="lazy"
                      src={imgsrc}
                      alt={alt}
                    />
                    <div className="herosection_overlay">
                      <span className="herosection_overlay_text">{alt}</span>
                    </div>
                  </a>
                </div>
              ))}
            </div>
            <a className="route herosection_route" href="/about">
              VIEW PROFILE
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
