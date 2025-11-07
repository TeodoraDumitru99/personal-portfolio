import StarPointImg from "../../assets/profileImages/star point.png";
import "./sectionCard.css";

const SectionCard = ({
  alignment,
  header,
  text,
  imgSrc,
  imgAlt,
  section,
  contentHasHeader,
  contentHasSectionTitle,
}) => {
  const isOverview = Array.isArray(text);
  return (
    <div className={`container_row_center section_${alignment}`}>
      <div className="container_column container__column--alternative">
        {contentHasSectionTitle && (
          <h3 className="container_heading heading2">{section}</h3>
        )}
        {isOverview ? (
          <div className="container_column">
            {text.map((item, index) => (
              <div key={index} className="point_start">
                <img
                  loading="lazy"
                  src={StarPointImg}
                  alt="Star Point Icon"
                  className="star_dark"
                />
                <div className="point_text">
                  <h4 className="heading3 point_question">{item.question}</h4>
                  <div className="point_answer body_text">{item.answer}</div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="point_text body_text section_text">
            {contentHasHeader ? (
              <div className="point_start">
                <img
                  loading="lazy"
                  src={StarPointImg}
                  alt="Star Point Icon"
                  className="star_dark"
                />
                <div className="point_text">
                  <h3 className="heading3 point_question section_text">
                    {header}
                  </h3>
                  {text}
                </div>
              </div>
            ) : (
              <div>{text}</div>
            )}
          </div>
        )}
      </div>
      {imgSrc && (
        <div className="img_div">
          <img
            className={
              section === "Solutions" ? "section_img_l" : "section_img_s"
            }
            src={imgSrc}
            alt={imgAlt}
            loading="lazy"
          />
        </div>
      )}
    </div>
  );
};

export default SectionCard;
