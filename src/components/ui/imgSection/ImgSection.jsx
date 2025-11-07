import "./imgSection.css";

const ImgSection = ({ section, text, content }) => {
  return (
    <div className="img_section container_column">
      <div className="img_section_header">
        {section && <h3 className="heading2">{section}</h3>}
        {text && <p className="body_text point_text">{text}</p>}
      </div>
      <div className="img_section_content">
        {content.map(({ imgId, imgSrc, imgAlt }) => (
          <img
            key={imgId}
            className="img_section_img"
            src={imgSrc}
            alt={imgAlt}
            loading="lazy"
          />
        ))}
      </div>
    </div>
  );
};

export default ImgSection;
