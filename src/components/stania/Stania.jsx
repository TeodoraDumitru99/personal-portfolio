import "./stania.css";
import StarPointImg from "../assets/profileImages/star point.png";
import StaniaLaptopMockup from "../assets/staniaImages/Stania Laptop Mockup.png";
import StaniaGoalImg from "../assets/staniaImages/Goal Images.png";
import Blur1Img from "../assets/heroImages/Blur Large.png";
import Blur2Img from "../assets/heroImages/Blur Small.png";
import UiImg from "../assets/staniaImages/UI Direction Image.png";
import PropertyPicsImg from "../assets/staniaImages/Property Images.png";
import InfoElements1Img from "../assets/staniaImages/Info UI 1.png";
import InfoElements2Img from "../assets/staniaImages/Info UI 2.png";
import PropertyImgBlock from "../assets/staniaImages/Property Image Block.png";
import OwnerImg from "../assets/staniaImages/Owner Image.png";
import FiltersImg1 from "../assets/staniaImages/Filters 1.png";
import FiltersImg2 from "../assets/staniaImages/Filters 2.png";
import FiltersImg3 from "../assets/staniaImages/Filters 3.png";
import LandingImg from "../assets/staniaImages/Landing Page.png";
import HouseImg from "../assets/staniaImages/House Page.png";
import LandingMockupImg from "../assets/staniaImages/Landing Mockup.png";
import FiltersMockupImg from "../assets/staniaImages/Filters mockup.png";
import PersonMockupImg from "../assets/staniaImages/Person Scrolling Mockup.png";
import PhoneMockupImg from "../assets/staniaImages/Table Phone Mockup.png";

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

  const solutionContent = [
    {
      section: "UI direction",
      images: [{ id: 0, imagesrc: UiImg, alt: "UI Direction Elements" }],
      text: (
        <ul>
          <li>
            Chose green + orange (energetic, warm, nature-inspired) instead of
            standard booking blues.
          </li>
          <li>Rounded borders, softer hues, clear visual hierarchy.</li>
          <li>Soft icons with using colors.</li>
        </ul>
      ),
    },
    {
      section: "Information arhitecture",
      images: [
        { id: 0, imagesrc: PropertyPicsImg, alt: "Property Pictures" },
        { id: 1, imagesrc: InfoElements1Img, alt: "Information UI Element 1" },
        { id: 2, imagesrc: InfoElements2Img, alt: "Information UI Element 2" },
      ],
      text: (
        <>
          Each property page follows a consistent structure:
          <ul>
            <li>Key details first (location, price, rating).</li>
            <li>No redundant text.</li>
            <li>Photos.</li>
            <li>Short, scannable description.</li>
            <li>Amenities.</li>
            <li>Reviews.</li>
          </ul>
        </>
      ),
    },
    {
      section: "DM booking system",
      images: [
        { id: 0, imagesrc: PropertyImgBlock, alt: "Property Image Block" },
        { id: 1, imagesrc: OwnerImg, alt: "Owner UI Element" },
      ],
      text: (
        <ul>
          <li>
            Users can start a conversation with the owner directly from the
            property page.
          </li>
          <li>
            Owner profile page shows all their listings for trust-building.
          </li>
        </ul>
      ),
    },
    {
      section: "Filters for all",
      images: [
        { id: 0, imagesrc: FiltersImg1, alt: "Filters 1" },
        { id: 1, imagesrc: FiltersImg2, alt: "Filters 2" },
        { id: 2, imagesrc: FiltersImg3, alt: "Filters 3" },
      ],
      text: (
        <ul>
          <li>
            Specific filters for every need, from amenities to surroundings.
          </li>
          <li>
            Extra attention was given to the Accessibility section: everyone
            needs to feel welcomed.
          </li>
        </ul>
      ),
    },
  ];

  const designMockupContent = [
    {
      section: "Design",
      text: "Familiar but fresh. Browse and explore freely.",
      images: [
        { id: 0, imgsrc: LandingImg, alt: "Landing Page" },
        { id: 1, imgsrc: HouseImg, alt: "House Page" },
      ],
    },
    {
      section: "Mockups",
      text: "See Stania's assets. Seamless experience on desktop or mobile.",
      images: [
        { id: 0, imgsrc: LandingMockupImg, alt: "Landing Mockup Page" },
        { id: 1, imgsrc: FiltersMockupImg, alt: "Filters Mockup Page" },
        { id: 2, imgsrc: PersonMockupImg, alt: "Person Mockup Page" },
        { id: 3, imgsrc: PhoneMockupImg, alt: "Phone Mockup Page" },
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
                <div key={`overview-${id}`} className="container_row_start">
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
            <div key={`goal-${section}`}>
              {section === "Goal" && (
                <div className="container_row_center">
                  <img
                    className="stania_goal_img"
                    loading="lazy"
                    src={imgsrc}
                    alt={alt}
                  />
                  <div className="container_column">
                    <h3 className="heading2 container_heading">{section}</h3>
                    {text.map(({ id, text1, text2 }) => (
                      <div
                        key={`${section}-text-${id}`}
                        className="container_column point_text"
                      >
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
                    <h3 className="heading2 container_heading">{section}</h3>
                    {text.map(({ id, text1 }) => (
                      <div
                        key={`research-t1-${id}`}
                        className="body_text point_text"
                      >
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
                      <div key={`research-t2-${id}`} className="body_text">
                        {text2}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}

          {solutionContent.map(({ section, images, text }) => {
            const SectionText = (
              <div className="container_row_start stania_section_text">
                <img
                  loading="lazy"
                  src={StarPointImg}
                  alt="Star Point Icon"
                  className="star_dark"
                />
                <div className="container_column point_text">
                  <p className="heading3 point_question">{section}</p>
                  <div className="point_answer body_text">{text}</div>
                </div>
              </div>
            );
            const ImageBlock = (
              <div className="container_row_center stania_image_block">
                {images.map(({ id, imagesrc, alt }) => (
                  <img
                    key={`${section}-image-${id}`}
                    loading="lazy"
                    src={imagesrc}
                    alt={alt}
                  />
                ))}
              </div>
            );

            if (section === "UI direction") {
              return (
                <div
                  key={`solution-${section}`}
                  className="container_row_start stania_ui"
                >
                  {ImageBlock}
                  <div className="container_column">
                    <h3 className="heading2 container_heading">Solutions</h3>
                    {SectionText}
                  </div>
                </div>
              );
            }
            if (section === "DM booking system") {
              return (
                <div
                  key={`solution-${section}`}
                  className="container_row_center stania_dm"
                >
                  {ImageBlock}
                  {SectionText}
                </div>
              );
            }

            if (section === "Information arhitecture") {
              return (
                <div className="container_column stania_info_arhi">
                  <div
                    key={`solution-${section}`}
                    className="container_row_center"
                  >
                    {SectionText}
                    {images[0] && (
                      <img
                        key={`${section}-image-${images[0].id}`}
                        loading="lazy"
                        src={images[0].imagesrc}
                        alt={images[0].alt}
                        className="stania_image_block stania_info_img"
                      />
                    )}
                  </div>
                  <div className="container_row_start stania_info_ui">
                    {images[1] && (
                      <img
                        key={`${section}-image-${images[1].id}`}
                        loading="lazy"
                        src={images[1].imagesrc}
                        alt={images[1].alt}
                      />
                    )}
                    {images[2] && (
                      <img
                        key={`${section}-image-${images[2].id}`}
                        loading="lazy"
                        src={images[2].imagesrc}
                        alt={images[2].alt}
                      />
                    )}
                  </div>
                </div>
              );
            }
            if (section === "Filters for all") {
              return (
                <div
                  key={`filters-${section}`}
                  className="container_column stania_filters"
                >
                  {SectionText}
                  {ImageBlock}
                </div>
              );
            }
            return null;
          })}
          {designMockupContent.map(({ section, text, images }) => (
            <div key={`design-${section}`} className="container_column">
              <h3 className="heading2 container_heading">{section}</h3>
              <div className="container_row_start">
                <img
                  loading="lazy"
                  src={StarPointImg}
                  alt="Star Point Icon"
                  className="star_dark"
                />
                <p className="point_answer body_text">{text}</p>
              </div>
              {images.map(({ id, imgsrc, alt }) => (
                <div
                  key={`${section}-design-${id}`}
                  className="container_column"
                >
                  <img
                    loading="lazy"
                    src={imgsrc}
                    alt={alt}
                    className="stania_design_img"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stania;
