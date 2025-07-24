import "./expertise.css";
import UiImg from "../assets/expertiseImages/UI UX Image.png";
import WebImg from "../assets/expertiseImages/Web Development Image.png";
import ProdImg from "../assets/expertiseImages/Product Design Image.png";

const Expertise = () => {
  const cardContent = [
    {
      id: 0,
      title: "UI / UX Design",
      imgsrc: UiImg,
      alt: "UI/UX Image",
      text: "I create accessible, thoughtful interfaces and seamless user experiences.",
    },
    {
      id: 1,
      title: "Web Development",
      imgsrc: WebImg,
      alt: "Web Development Image",
      text: "Crafting responsive & visually stunning websites, I strive to elevate the image of brands.",
    },
    {
      id: 2,
      title: "Product Design",
      imgsrc: ProdImg,
      alt: "Product Design Image",
      text: "Human-centered products are my passion, this is where I can bringe design and engineering.",
    },
  ];
  return (
    <section className="expertise section">
      <div className="wrapper">
        <div className="expertise_content">
          <h2 className="heading2">Expertise</h2>
          <div className="expertise_cards">
            {cardContent.map(({ id, title, imgsrc, alt, text }) => (
              <div
                key={id}
                className={`expertise_card ${id % 2 === 1 ? "reverse" : ""}`}
              >
                <span>{title}</span>
                <div>
                  <img loading="lazy" src={imgsrc} alt={alt} />
                  <p>{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
