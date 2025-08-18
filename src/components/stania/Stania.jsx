import "./stania.css";
import StarPointImg from "../assets/profileImages/star point.png";
import StaniaLaptopMockup from "../assets/staniaImages/Stania Laptop Mockup.png";
import StaniaGoalImg from "../assets/staniaImages/Goal Images.png";
import Blur1Img from "../assets/heroImages/Blur Large.png";
import Blur2Img from "../assets/heroImages/Blur Small.png";

const Stania = () => {
  const overviewContent = [
    {
      id: 0,
      question: "What is Stania?",
      answer:
        "Stania is a client commission (collaboration with team) for a North Macedonian booking site.",
    },
    {
      id: 1,
      question: "Who is it for?",
      answer: (
        <>
          <b>Owners</b> who want to market their properties and <b>tourists</b>{" "}
          who would love to explore the natural beauty of North Macedonia.
        </>
      ),
    },
    {
      id: 2,
      question: "What is the problem that is being solved?",
      answer: (
        <>
          Currently, most bookings happen through Facebook posts or booking
          websites, but:
          <ul>
            <li>Information is scattered and inconsistent.</li>
            <li>There is no standardized structure for property details.</li>
            <li>Many users don't read long property descriptions.</li>
          </ul>
        </>
      ),
    },
  ];

  const goalResearchContent = [
    {
      section: "Goal",
      imgsrc: StaniaGoalImg,
      alt: "Stania Ui Elements",

      text: [
        {
          id: 0,
          text1:
            "Create a booking platform that highlights the beauty of North Macedonia while also:",
          text2: (
            <ul>
              <li>Offering a familiar but fresh design.</li>
              <li>Reduce cognitive overload.</li>
              <li>Improving transparency.</li>
              <li>Maintaining local relevance.</li>
              <li>Integrate existing booking behaviors.</li>
            </ul>
          ),
        },
      ],
    },
    {
      section: "Research",
      imgsrc: 0,
      alt: "",

      text: [
        {
          id: 1,
          text1: (
            <>
              We analized:
              <ul>
                <li>Global booking sites (Booking.com, Airbnb).</li>
                <li>Patterns users are already familiar with.</li>
                <li>
                  Local booking behaviors (interviews with owners & travelers).
                </li>
              </ul>
            </>
          ),
          text2: (
            <>
              Pain points:
              <ul>
                <li>Too much repetitive text.</li>
                <li>Lack of visual hierarchy → important info is buried.</li>
                <li>Booking process felt informal and inconsistent.</li>
              </ul>
            </>
          ),
        },
      ],
    },
  ];
  return (
    <section className="stania">
      <div className="wrapper">
        <div className="stania_content route_content container_column">
          <h2 className="heading1 route_heading">Stania</h2>
          <div className="stania_overview container_row_center">
            <img
              className="stania_blur_large"
              src={Blur1Img}
              loading="lazy"
              alt="Blur"
            />
            <img
              className="stania_blur_small"
              src={Blur2Img}
              loading="lazy"
              alt="Blur"
            />
            <div className="stania_overview_content">
              <h3 className="heading2 container_heading">Overview</h3>
              {overviewContent.map(({ id, question, answer }) => (
                <div key={id} className="container_row_start">
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
            <img
              className="stania_overview_img"
              loading="lazy"
              src={StaniaLaptopMockup}
              alt="Stania Laptop Mockup"
            />
          </div>

          {goalResearchContent.map(({ section, imgsrc, alt, text }) => (
            <div key={section}>
              {section === "Goal" && (
                <div className="container_row_center">
                  <img
                    className="stania_goal_img"
                    loading="lazy"
                    src={imgsrc}
                    alt={alt}
                  />
                  <div className="container_column">
                    <h3 className="heading2">{section}</h3>
                    {text.map(({ id, text1, text2 }) => (
                      <div key={id} className="container_column point_text">
                        <div className="body_text">{text1}</div>
                        <div className="body_text">{text2}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {section === "Research" && (
                <div className="container_row_start stania_research">
                  <div className="container_column">
                    <h3 className="heading2">{section}</h3>
                    {text.map(({ id, text1 }) => (
                      <div key={id} className="body_text point_text">
                        {text1}
                      </div>
                    ))}
                  </div>
                  <img
                    className="stania_blur_research"
                    src={Blur2Img}
                    loading="lazy"
                    alt="Blur"
                  />
                  <div className="container_column point_text stania_research_column">
                    {text.map(({ id, text2 }) => (
                      <div key={id} className="body_text">
                        {text2}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stania;
