import "./profile.css";
import StarPointImg from "../assets/profileImages/star point.png";

const Profile = () => {
  return (
    <section className="profile">
      <div className="wrapper">
        <div className="profile_content">
          <div className="profile_primary">
            <h1 className="heading2 profile_heading">
              <p>
                <span>I'm </span>Teodora Dumitru<span>,</span>
              </p>
              <p>
                UI/UX Designer<span> with a</span>
              </p>
              <p>
                <span>strong</span> Frontend<span> foundation</span>
              </p>
            </h1>
          </div>
          <div className="profile_secondary">
            <span>ABOUT</span>
            <div className="profile_point">
              <img
                className="profile_star"
                loading="lazy"
                src={StarPointImg}
                alt="Star Point Icon"
              />
              <p>
                I create accessible, thoughtful interfaces with an eye for
                systems and interaction.
              </p>
            </div>
            <div className="profile_point">
              <img
                className="profile_star"
                loading="lazy"
                src={StarPointImg}
                alt="Star Point Icon"
              />
              <p>
                From Figma to production-ready code. I bridge design and
                development to bring digital ideas to life.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
