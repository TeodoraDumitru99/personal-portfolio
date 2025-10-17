import "./portfolio.css";
import StarPointImg from "../assets/profileImages/star point.png";
import Blur1Img from "../assets/heroImages/Blur Large.png";
// import Blur2Img from "../assets/heroImages/Blur Small.png";
import OverviewMockup from "../assets/portfolioImages/Overview Phone Mockup.png";

const Portfolio = () => {
  const overviewContent = [
    {
      id: 0,
      question: "Why redesign?",
      answer:
        "I decided to redesign my portfolio in order to communicate better my role as a designer and developer, improve readability, and align the visuals with my design philosophy.",
    },
    {
      id: 1,
      question: "What is the problem that is being solved?",
      answer: (
        <>
          <p>
            During interviews and feedback sessions, I noticed a few recurring
            issues:
          </p>
          <ul>
            <li>
              Readability - the dark background and saturated colors made text
              harder to scan.
            </li>
            <li>
              Focus - users were more drawn to visuals than the actual content
              and process.
            </li>
            <li>
              Perceived tone - the old design felt more like a “developer
              portfolio” and less like a balanced designer-dev identity.
            </li>
            <li>
              Navigation - some users didn't scroll far enough or missed
              sections due to unclear visual hierarchy.
            </li>
          </ul>
        </>
      ),
    },
  ];

  return (
    <section>
      <div className="wrapper">
        <div className="portfolio_content route_content">
          <h2 className="heading1 route_heading">Portfolio</h2>
          <div className="container_column">
            <img
              className="nexio_blur_large"
              src={Blur1Img}
              loading="lazy"
              alt="Blur"
            />
            {/* <img
              className="nexio_blur_small"
              src={Blur2Img}
              loading="lazy"
              alt="Blur"
            /> */}
            <div className="container_row_start">
              <div className="container_column">
                <h3 className="container_heading heading2">Overview</h3>
                {overviewContent.map(({ id, question, answer }) => (
                  <div key={id} className="point_start">
                    <img
                      className="star_dark"
                      loading="lazy"
                      src={StarPointImg}
                      alt="Star Point Icon"
                    />
                    <div className="point_text">
                      <p className="heading3 point_question">{question}</p>

                      <div className="point_answer body_text">{answer}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="portfolio_ov_img_div">
                <img
                  className="portfolio_ov_img"
                  src={OverviewMockup}
                  loading="lazy"
                  alt="Blur"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
