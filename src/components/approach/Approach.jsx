import "./approach.css";
import StarPointImg from "../assets/approachImages/star_light.png";

const Approach = () => {
  return (
    <section className="approach section">
      <div className="wrapper">
        <div className="approach_content">
          <h2 className="heading2 approach_heading">
            <p>
              <span>It all begins with </span>crafting
            </p>
            <p>
              <span>meaningful</span> product design.
            </p>
          </h2>
          <div className="approach_column">
            <div className="approach_point heading3">
              <img
                className="approach_star"
                loading="lazy"
                src={StarPointImg}
                alt="Star Point Icon"
              />
              <p className="body_text">
                Whether I am coding a <b>responsive interface</b> or designing a
                <b> seamless user flow</b>, my goal is to bridge the gap between
                <b> functionality and design</b>.
              </p>
            </div>
            <div className="approach_point heading3">
              <img
                className="approach_star"
                loading="lazy"
                src={StarPointImg}
                alt="Star Point Icon"
              />
              <p className="body_text">
                Great experiences happen where <b>creativity</b> meets
                <b> technical precision.</b> A well-designed product is not just
                beautiful - it's <b>clear, accessible, and scalable</b>.
              </p>
            </div>
            <div className="approach_point heading3">
              <img
                className="approach_star"
                loading="lazy"
                src={StarPointImg}
                alt="Star Point Icon"
              />
              <p className="body_text">
                Staying curious and constantly refining my skills is crucial.
                I'm currently learning
                <b> Blender, Autodesk Maya and Backend Tools.</b>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Approach;
