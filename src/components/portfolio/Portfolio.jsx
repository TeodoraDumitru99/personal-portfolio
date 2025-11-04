import "./portfolio.css";
import Blur1Img from "../assets/heroImages/Blur Large.png";
import { contentInfo } from "../../constants/constants";
import SectionCard from "../../components/ui/SectionCard";

const Portfolio = () => {
  return (
    <section>
      <div className="wrapper">
        <div className="portfolio_content route_content">
          <h2 className="heading1 route_heading">Portfolio</h2>
          <div className="container_column">
            <img className="nexio_blur_large" src={Blur1Img} alt="" />
            {contentInfo.map((section, index) => (
              <SectionCard
                key={section.id}
                alignment={index % 2 === 0 ? "left" : "right"}
                header={section.header}
                section={section.section}
                text={section.text}
                imgSrc={section.imgSrc}
                imgAlt={section.imgAlt}
                contentHasSectionTitle={section.contentHasSectionTitle}
                contentHasHeader={section.contentHasHeader}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
