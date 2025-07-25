import "./herosection.css";
import DuemarkBImg from "../assets/heroImages/duemarkblog_preview.png";
import DuemarkImg from "../assets/heroImages/duemark_preview.png";
import NexioImg from "../assets/heroImages/nexio_preview.png";
import Blur1Img from "../assets/heroImages/Blur Large.png";
import Blur2Img from "../assets/heroImages/Blur Small.png";

const HeroSection = () => {
  const textContent = [
    {
      id: 0,
      imgsrc: DuemarkBImg,
      alt: "Duemark Blog Preview",
    },

    {
      id: 1,
      imgsrc: NexioImg,
      alt: "Nexio Preview",
    },
    {
      id: 2,
      imgsrc: DuemarkImg,
      alt: "Duemark Preview",
    },
  ];

  return (
    <section className="herosection section">
      <div className="wrapper">
        <div className="herosection_blurs">
          <img
            className="herosection_blur_primary"
            loading="lazy"
            src={Blur1Img}
            alt="Blur Image"
          />
          <img
            className="herosection_blur_secondary"
            loading="lazy"
            src={Blur2Img}
            alt="Blur Image"
          />
        </div>
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
              {textContent.map(({ id, imgsrc, alt }) => (
                <div key={id} className="herosection_thumbnail">
                  <img
                    className="herosection_image"
                    loading="lazy"
                    src={imgsrc}
                    alt={alt}
                  />
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
