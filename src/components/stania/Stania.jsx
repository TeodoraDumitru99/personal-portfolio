import "./stania.css";
import StarPointImg from "../assets/profileImages/star point.png";
import StaniaLaptopMockup from "../assets/staniaImages/Stania Laptop Mockup.png";
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
        </div>
      </div>
    </section>
  );
};

export default Stania;
