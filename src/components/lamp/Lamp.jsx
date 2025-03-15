import "./lamp.css";
import SmartLampSImg from "../assets/Smart_Control_Lamp_short.png";
import LampAxoImg from "../assets/Lamp_axo.png";
import LampPoster from "../assets/lampImages/lamp_poster.png";
import LampRender from "../assets/lampImages/lamp_render.png";
import LampDesign from "../assets/lampImages/lamp_design.png";
import LampProt1 from "../assets/lampImages/lamp_prototype_1.png";
import LampProt2 from "../assets/lampImages/lamp_prototype_2.png";

const Lamp = () => {
  const lampSliderContent = [
    { id: 0, alt: "Lamp Poster", imgsrc: LampPoster },
    { id: 1, alt: "Lamp Render", imgsrc: LampRender },
    { id: 2, alt: "Lamp Design", imgsrc: LampDesign },
    { id: 3, alt: "Lamp Prototype 1", imgsrc: LampProt1 },
    { id: 4, alt: "Lamp Poster", imgsrc: LampProt2 },
  ];

  return (
    <section className="projects_lamp">
      <div className="wrapper">
        <h2 className="projects_lamp_title">Smart Control Lamp</h2>
        <div className="projects_lamp_content">
          <div className="projects_lamp_hero">
            <div className="lamp_img_div">
              <img
                className="lamp_img"
                loading="lazy"
                alt="Smart Lamp Img"
                src={SmartLampSImg}
              />
              <img
                className="lamp_axo_img"
                loading="lazy"
                alt="Smart Lamp Axonometry Img"
                src={LampAxoImg}
              />
            </div>
            <div className="lamp_main_text">
              <p>
                BloomLight is a lighting fixture with a dedicated smart control
                system designed for individuals with locomotor disabilities. The
                lamp features an organic theme, consisting of three biomorphic
                modules. These modules light up when the user is in close
                proximity and the light level is low, and they turn off
                otherwise.
              </p>
              <p>
                The activation and deactivation are accompanied by the rotation
                of the petals, mimicking an opening/closing movement. It
                operates in automatic mode based on sensors, and in manual mode
                using the application through which the modules can be operated
                independently. The prototype is made from PLA via 3D printing.
                BloomLight represents an ideal solution for individuals with
                disabilities, providing them with an added level of
                independence.
              </p>
            </div>
          </div>
          <div className="lamp_slider">
            {lampSliderContent.map(({ id, alt, imgsrc }) => (
              <div key={id}>
                <img
                  loading="lazy"
                  src={imgsrc}
                  alt={alt}
                  className="lamp_slider_image"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Lamp;
