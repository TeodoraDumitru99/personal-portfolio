import "./multifunctional.css";
import Multifunctional3D from "../assets/multifunctionalImages/multifunctional_3d.png";
import MultifunctionalRender from "../assets/multifunctionalImages/Multifunctional_render.png";
import MultifunctionalPoster from "../assets/multifunctionalImages/multifunctional_poster.png";
import MultifunctionalProt1 from "../assets/multifunctionalImages/multifunctional_prototype_1.png";
import MultifunctionalProt2 from "../assets/multifunctionalImages/multifunctional_prototype_2.png";
import Slider from "../slider/Slider";

const Multifunctional = () => {
  const multifunctionalSliderContent = [
    {
      id: 0,
      alt: "Multifunctional Storage Poster",
      imgsrc: MultifunctionalPoster,
    },
    {
      id: 1,
      alt: "Multifunctional Storage 3D Model",
      imgsrc: Multifunctional3D,
    },
    {
      id: 2,
      alt: "Multifunctional Storage Prototype - Sealed",
      imgsrc: MultifunctionalProt1,
    },
    {
      id: 3,
      alt: "Multifunctional Storage Prototype - Wrapped",
      imgsrc: MultifunctionalProt2,
    },
  ];
  return (
    <section className="project">
      <div className="wrapper">
        <h2 className="title">Smart Control Lamp</h2>
        <div className="body_text multi_content">
          <div className="project_hero multi_hero">
            <div className="multi_img_div">
              <img
                className="multi_img"
                loading="lazy"
                alt="Multifunctional Storage Render"
                src={MultifunctionalRender}
              />
            </div>
            <div className="project_text multi_text">
              <p>
                Kanteen is a versatile container designed for both potable water
                storage and general use, making it an essential tool for hiking
                and outdoor enthusiasts. With a 2.5L interior capacity, it
                remains compact enough to fit easily in a backpack while
                providing ample storage.
              </p>
              <p>
                Crafted from waterproof waxed hemp fabric, Kanteen offers both
                durability and sustainability. The material, coated in natural
                beeswax, enhances water resistance while promoting an
                eco-friendly approach. The container features a secure, airtight
                closure at the top, a screw-on lid, and a bottom spout for
                controlled water dispensing. To ensure convenience and
                reliability in outdoor settings, the top attachment was designed
                to minimize leakage while maintaining a secure seal.
              </p>
              <p>
                Beyond its primary function, Kanteen integrates a photovoltaic
                cell panel on its side, continuously charging the built-in LED
                strip at the bottom. This feature allows the container to double
                as a lantern, offering additional utility in low-light
                conditions. To refine the concept, a full-scale 1:1 prototype
                was developed, demonstrating its functionality, secure
                fastening, and user-friendly design. The project also includes a
                detailed presentation with a product description, rendered
                images highlighting key features, and technical sketches
                showcasing the design process.
              </p>
            </div>
          </div>
          <div className="slider">
            <Slider>
              {multifunctionalSliderContent.map(({ id, alt, imgsrc }) => (
                <div key={id} className="slider_item">
                  <img
                    src={imgsrc}
                    alt={alt}
                    loading="lazy"
                    className="slider_image"
                  />
                  <span className="slider_desc">{alt}</span>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Multifunctional;
