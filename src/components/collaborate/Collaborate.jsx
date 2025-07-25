import "./collaborate.css";
import StarPointImg from "../assets/approachImages/star_light.png";

const Collaborate = () => {
  return (
    <section className="collaborate">
      <div className="wrapper">
        <div className="collaborate_content">
          <h2 className="collaborate_heading heading2">Collaborate</h2>
          <div className="collaborate_text">
            <div className="collaborate_secondary">
              <p className="collaborate_primary heading3">
                Have a project in mind?
              </p>
              <div className="collaborate_point">
                <img
                  className="collaborate_star"
                  loading="lazy"
                  src={StarPointImg}
                  alt="Star Point Icon"
                />
                <p className="body_text">
                  Whether it's a web page, an illustration, or a creative
                  discussion, feel free to send me a message.
                </p>
              </div>
              <div className="collaborate_point">
                <img
                  className="collaborate_star"
                  loading="lazy"
                  src={StarPointImg}
                  alt="Star Point Icon"
                />
                <p className="body_text">
                  If you are ready to build something impactful together, let's
                  collaborate!
                </p>
              </div>
              <a className="collaborate_button route" href="/contact">
                CONTACT
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collaborate;
