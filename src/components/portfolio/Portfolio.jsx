import "./portfolio.css";
import StarPointImg from "../assets/profileImages/star point.png";
import Blur1Img from "../assets/heroImages/Blur Large.png";
// import Blur2Img from "../assets/heroImages/Blur Small.png";
import OverviewMockup from "../assets/portfolioImages/Overview Phone Mockup.png";
import GoalPreview from "../assets/portfolioImages/Goal Projects Preview.png";
import ResearchOldDesign from "../assets/portfolioImages/Research Old Design.png";

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

  const goalResContent = [
    {
      section: "Goal",
      content: [
        {
          image_src: GoalPreview,
          image_alt: "Projects Preview",
          text1: (
            <ul>
              <li>Make the site lighter, cleaner, and easier to scan.</li>
              <li>Improve visual hierarchy and section separation.</li>
              <li>Keep consistency across project pages.</li>
              <li>Reflect both design sensibility and technical skill.</li>
              <li>Ensure responsive behavior and accessibility.</li>
            </ul>
          ),
        },
      ],
    },
    {
      section: "Research",
      content: [
        {
          image_src: ResearchOldDesign,
          image_alt: "Old Portfolio Design",
          text1: (
            <>
              <p>
                I reviewed modern portfolio patterns and analyzed other
                designers' sites on Behance and Dribbble for structure,
                typography, and information flow. I also conducted quick
                interviews and usability testing with peers and mentors
              </p>
            </>
          ),
          text2: (
            <>
              <p>Feedback highlights:</p>
              <ul>
                <li>“It looks impressive but heavy.”</li>
                <li>
                  “I'd like to see more about your process, not just visuals.”
                </li>
                <li>“I don't see any case studies”.</li>
              </ul>
            </>
          ),
        },
      ],
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
              <div className="portfolio_img_div">
                <img
                  className="portfolio_img"
                  src={OverviewMockup}
                  alt="Portfolio Mockup"
                />
              </div>
            </div>

            {goalResContent.map(({ section, content }) => (
              <div key={section} className="portfolio_goal_res">
                {content.map(({ image_src, image_alt, text1, text2 }) => (
                  <div
                    className={`container_row_center ${
                      section === "Research"
                        ? "portfolio_container_reverse"
                        : ""
                    }`}
                  >
                    <div className="portfolio_img_div">
                      <img
                        className="portfolio_img"
                        src={image_src}
                        loading="lazy"
                        alt={image_alt}
                      />
                    </div>

                    <div className="portfolio_goal_res container_column">
                      <h3 className="container_heading heading2">{section}</h3>
                      <p className="body_text point_answer">{text1}</p>
                      <p className="body_text point_answer">{text2}</p>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
