import "./nexio.css";
import StarPointImg from "../assets/profileImages/star point.png";
import NexioWelcomeImg from "../assets/nexioImages/Nexio_welcome_page.png";
import Blur1Img from "../assets/heroImages/Blur Large.png";
import Blur2Img from "../assets/heroImages/Blur Small.png";
import NexioGoalsP1 from "../assets/nexioImages/Goals_pd1.png";
import NexioGoalsP2 from "../assets/nexioImages/Goals_pd2.png";
import NexioInspo from "../assets/nexioImages/Inspiration_pinterest.png";
import LowFiWishlist from "../assets/nexioImages/LowFi_Wireframe_Wishlist.png";
import LowFiWelcome from "../assets/nexioImages/LowFi_Wireframe_Welcome.png";
import LowFiProduct from "../assets/nexioImages/LowFi_Wireframe_Product.png";
import LowFiInterests from "../assets/nexioImages/LowFi_Wireframe_Interests.png";
import YellowImg from "../assets/nexioImages/Yellow.png";
import YellowLightImg from "../assets/nexioImages/Yellow Light.png";
import BlueImg from "../assets/nexioImages/Blue.png";
import GreenImg from "../assets/nexioImages/Green.png";
import RedImg from "../assets/nexioImages/Red.png";
import PurpleImg from "../assets/nexioImages/Purple.png";
import HomeVEImg from "../assets/nexioImages/Home_VE.png";
import HomeVE2Img from "../assets/nexioImages/Home_VE2.png";
import ProductVEImg from "../assets/nexioImages/Product_VE.png";
import OnboardingVEImg from "../assets/nexioImages/Onboarding_VE.png";
import LargeCard from "../assets/nexioImages/Large.png";
import SmallCard from "../assets/nexioImages/Small.png";
import OrderCard from "../assets/nexioImages/Order Cards.png";
import CategoryCard from "../assets/nexioImages/Category Cards.png";
import TextCard from "../assets/nexioImages/Text Cards.png";
import LaptopImg from "../assets/nexioImages/Laptop.png";
import FinanceImg from "../assets/nexioImages/Finance.png";
import PaymentImg from "../assets/nexioImages/Payment.png";
import ClickImg from "../assets/nexioImages/Click.png";
import SearchImg from "../assets/nexioImages/Search.png";
import ShoppingImg from "../assets/nexioImages/Shopping.png";
import ButtonP from "../assets/nexioImages/Buttons Primary.png";
import ButtonS from "../assets/nexioImages/Buttons Secondary.png";
import ButtonT from "../assets/nexioImages/Buttons Tertiary.png";
import ButtonI from "../assets/nexioImages/Buttons Inverted.png";
import ArrowButtonP from "../assets/nexioImages/Arrow Button Primary.png";
import ArrowButtonS from "../assets/nexioImages/Arrow Button Secondary.png";
import ArrowButtonT from "../assets/nexioImages/Arrow Button Tertiary.png";
import ArrowButtonI from "../assets/nexioImages/Arrow Button Inverted.png";
import HeaderNavImg from "../assets/nexioImages/Header & Nav.png";
import CategoryChipImg from "../assets/nexioImages/Category Chips.png";
import SearchListImg from "../assets/nexioImages/Search and Lists.png";
import InterestScreen from "../assets/nexioImages/Interests Screen.png";
import HomeScreen from "../assets/nexioImages/Home Screen.png";
import FiltersScreen from "../assets/nexioImages/Search Filters.png";
import SearchScreen from "../assets/nexioImages/Search Successful.png";
import ProductScreen from "../assets/nexioImages/Product Page 1.png";
import OnboardingGoalsScreen from "../assets/nexioImages/Onboarding Goals.png";
import OnboardingInterestsScreen from "../assets/nexioImages/Onboarding Interests.png";
import ProfileScreen from "../assets/nexioImages/Profile.png";
import NoOrdersScreen from "../assets/nexioImages/No Orders Screen.png";
import OrdersScreen from "../assets/nexioImages/Orders Screen.png";
import AccountSettScreen from "../assets/nexioImages/Account Settings creen.png";
import NexioPattern from "../assets/nexioImages/Nexio Pattern.png";
import NexioPresentation from "../assets/nexioImages/Presentation.png";
import NexioMockup from "../assets/nexioImages/Mockup.png";
import NexioIsometric from "../assets/nexioImages/Iphone Isometric Mockup.png";
import NexioElements from "../assets/nexioImages/Nexio Elements Mockup.png";

const Nexio = () => {
  const overviewContent = [
    {
      id: 0,
      question: "What is Nexio?",
      answer:
        "Nexio is a mobile app concept that reimagines the online shopping experience with a fun, colorful, and intuitive design.",
    },
    {
      id: 1,
      question: "Who is it for?",
      answer:
        "The app is built for users who are tired of generic rankings and repetitive app suggestions.",
    },
    {
      id: 2,
      question: "What is the problem that is being solved?",
      answer: (
        <ul>
          <li>Overwhelming and unorganized browsing experience.</li>
          <li>Recommendations often feel irrelevant.</li>
          <li>Lack of visual engagement or inspiration.</li>
          <li>Feels more like a list than a discovery tool.</li>
        </ul>
      ),
    },
  ];

  const imageContent = [
    {
      section: "Low Fidelity Wireframes",
      images: [
        {
          id: 0,
          imgsrc: LowFiWishlist,
          alt: "Low Fidelity Wishlist Wireframe",
        },
        {
          id: 1,
          imgsrc: LowFiWelcome,
          alt: "Low Fidelity Welcome Wireframe",
        },
        {
          id: 3,
          imgsrc: LowFiProduct,
          alt: "Low Fidelity Product Wireframe",
        },
        {
          id: 4,
          imgsrc: LowFiInterests,
          alt: "Low Fidelity Interests Wireframe",
        },
      ],
    },
    {
      section: "Color Exploration",
      images: [
        {
          id: 0,
          imgsrc: YellowImg,
          alt: "Yellow Color",
        },
        {
          id: 1,
          imgsrc: YellowLightImg,
          alt: "Yellow Light Color",
        },
        {
          id: 2,
          imgsrc: BlueImg,
          alt: "Blue Color",
        },
        {
          id: 3,
          imgsrc: GreenImg,
          alt: "Green Color",
        },
        {
          id: 4,
          imgsrc: RedImg,
          alt: "Red Color",
        },
        {
          id: 5,
          imgsrc: PurpleImg,
          alt: "Purple Color",
        },
      ],
    },
    {
      section: "Visual Exploration",
      images: [
        {
          id: 0,
          imgsrc: HomeVEImg,
          alt: "Home Visual Exploration",
        },
        {
          id: 1,
          imgsrc: HomeVE2Img,
          alt: "Home Visual Exploration",
        },
        {
          id: 2,
          imgsrc: ProductVEImg,
          alt: "Product Visual Exploration",
        },
        {
          id: 3,
          imgsrc: OnboardingVEImg,
          alt: "Onboarding Visual Exploration",
        },
      ],
    },
  ];

  const elementsContent = [
    {
      section: "Cards",
      images: [
        {
          id: 0,
          imgsrc: LargeCard,
          alt: "Large Card",
        },
        {
          id: 1,
          imgsrc: SmallCard,
          alt: "Small Card",
        },
        {
          id: 2,
          imgsrc: OrderCard,
          alt: "Order Card",
        },
        {
          id: 3,
          imgsrc: CategoryCard,
          alt: "Category Card",
        },
        {
          id: 4,
          imgsrc: TextCard,
          alt: "Text Card",
        },
      ],
    },
    {
      section: "Illustrations",
      images: [
        {
          id: 0,
          imgsrc: LaptopImg,
          alt: "Laptop Illustration",
        },
        {
          id: 1,
          imgsrc: FinanceImg,
          alt: "Finance Illustration",
        },
        {
          id: 2,
          imgsrc: PaymentImg,
          alt: "Payment Illustration",
        },
        {
          id: 3,
          imgsrc: ClickImg,
          alt: "Click Illustration",
        },
        {
          id: 4,
          imgsrc: SearchImg,
          alt: "Search Illustration",
        },
        {
          id: 5,
          imgsrc: ShoppingImg,
          alt: "Shopping Illustration",
        },
      ],
    },
    {
      section: "Buttons",
      images: [
        {
          id: 0,
          imgsrc: ButtonP,
          alt: "Button Primary",
        },
        {
          id: 1,
          imgsrc: ButtonS,
          alt: "Button Secondary",
        },
        {
          id: 2,
          imgsrc: ButtonT,
          alt: "Button Tertiary",
        },
        {
          id: 3,
          imgsrc: ButtonI,
          alt: "Button invertedy",
        },

        {
          id: 4,
          imgsrc: ArrowButtonP,
          alt: "Arrow Button Primary",
        },
        {
          id: 5,
          imgsrc: ArrowButtonS,
          alt: "Arrow Button Secondary",
        },
        {
          id: 6,
          imgsrc: ArrowButtonT,
          alt: "Arrow Button Tertiary",
        },
        {
          id: 7,
          imgsrc: ArrowButtonI,
          alt: "Arrow Button Inverted",
        },
      ],
    },
    {
      section: "Ui Elements",
      images: [
        {
          id: 0,
          imgsrc: HeaderNavImg,
          alt: "No Orders Screen",
        },
        {
          id: 1,
          imgsrc: CategoryChipImg,
          alt: "Orders Screen",
        },
        {
          id: 2,
          imgsrc: SearchListImg,
          alt: "SAccount Settings Screen",
        },
      ],
    },
  ];

  const DesignContent = [
    {
      section: "Home & Interests",
      content: [
        {
          id: 0,
          text1:
            "Added a cohesive color scheme to product & category cards, so users feel more engaged into the browsing process.",
          text2:
            "Played with shapes and card positioning so the pages give a Controlled Asymmetry feel.",
        },
      ],
      images: [
        { idimg: 0, imgsrc: HomeScreen, alt: "Home Screen" },
        { idimg: 1, imgsrc: InterestScreen, alt: "Interests Screen" },
      ],
    },
    {
      section: "Search product",
      content: [
        {
          id: 0,
          text1:
            "Built with familiar search - product flows that have a bit more life to their design.",
          text2:
            "Filter searches by preferences and check out all the details and options for the product you are looking for.",
        },
      ],
      images: [
        { idimg: 0, imgsrc: FiltersScreen, alt: "Filters Screen" },
        { idimg: 1, imgsrc: SearchScreen, alt: "Search Screen" },
        { idimg: 2, imgsrc: ProductScreen, alt: "Product Screen" },
      ],
    },
    {
      section: "Profile",
      content: [
        {
          id: 0,
          text1:
            "Use as guest or create an account in just a couple of seconds. Mark your goals and your interest and you are ready to use the app.",
          text2: "Create themed wishlists for all your favourite products.",
        },
      ],
      images: [
        {
          idimg: 0,
          imgsrc: OnboardingGoalsScreen,
          alt: "Onboarding Goals Screen",
        },
        {
          idimg: 1,
          imgsrc: OnboardingInterestsScreen,
          alt: "Onboarding Interests Screen",
        },
        { idimg: 2, imgsrc: ProfileScreen, alt: "rofile Screen" },
      ],
    },
    {
      section: "Account",
      content: [
        {
          id: 0,
          text1: "Track all your orders from the profile section.",
          text2:
            "Find all your vouchers, pre-saved payment options or any account setting in your profile section.",
        },
      ],
      images: [
        { idimg: 0, imgsrc: AccountSettScreen, alt: "Account Settings Screen" },
        { idimg: 1, imgsrc: NoOrdersScreen, alt: "No Orders Screen" },
        { idimg: 2, imgsrc: OrdersScreen, alt: "Orders Screen" },
      ],
    },
  ];

  const mockupContent = [
    { id: 0, imgsrc: NexioPresentation, alt: "Nexio Presentation Mockup" },
    { id: 1, imgsrc: NexioMockup, alt: "Nexio Mobile Mockup;" },
    { id: 2, imgsrc: NexioElements, alt: "Nexio Elements Mockup" },
    { id: 3, imgsrc: NexioIsometric, alt: "Nexio Isometric Mockup" },
  ];

  return (
    <section className="nexio">
      <div className="wrapper">
        <div className="nexio_content route_content">
          <h2 className="heading1 route_heading">Nexio</h2>
          <div className="nexio_container_row_center">
            <div className="nexio_overview">
              <img
                className="nexio_blur_large"
                src={Blur1Img}
                loading="lazy"
                alt="Blur"
              />
              <img
                className="nexio_blur_small"
                src={Blur2Img}
                loading="lazy"
                alt="Blur"
              />
              <h3 className="nexio_container_heading heading2">Overview</h3>
              {overviewContent.map(({ id, question, answer }) => (
                <div key={id} className="nexio_container_row_start">
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
            <div className="nexio_img_div">
              <img
                className="nexio_welcome_img"
                src={NexioWelcomeImg}
                loading="lazy"
                alt="Nexio Welcome Page"
              />
            </div>
          </div>
          <div className="nexio_container_row_center">
            <div className="nexio_goals_imgs">
              <img
                className="nexio_welcome_img"
                src={NexioGoalsP1}
                loading="lazy"
                alt="Nexio Product Card"
              />
              <img
                className="nexio_welcome_img"
                src={NexioGoalsP2}
                loading="lazy"
                alt="Nexio Product Card"
              />
            </div>
            <div className="nexio_goals">
              <h3 className="nexio_container_heading heading2">Goals</h3>
              <div className="point_text body_text">
                <p>
                  Design a visually appealing, interest-driven app discovery
                  experience that's:
                </p>
                <ul>
                  <li>Aesthetically curated.</li>
                  <li>Personalized by interests.</li>
                  <li>Smooth and mobile-first.</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="nexio_container_column">
            <div className="nexio_inspiration">
              <h3 className="nexio_container_heading heading2">Inspiration</h3>
              <p className="point_text body_text">
                Your personalized Pinterest board. An organized assortment of
                pictures that follow the same pattern.
              </p>
            </div>
            <img src={NexioInspo} loading="lazy" alt="Pinterest board" />
          </div>
          <div className="nexio_container_column">
            <div className="nexio_process">
              <div className="nexio_process_text">
                <h3 className="nexio_container_heading heading2">Process</h3>
                <div className="point">
                  <img
                    className="star_dark"
                    loading="lazy"
                    src={StarPointImg}
                    alt="Star Point Icon"
                  />

                  <div className="point_text">
                    <p className="point_answer body_text">
                      I started by mapping out the general layout using low
                      fidelity components, then progressively built more
                      fidelity & started playing with color schemes.
                    </p>
                  </div>
                </div>
              </div>
              <div className="nexio_lowfi_colors nexio_container_row_start">
                {imageContent.map(({ section, images }) => (
                  <div className="nexio_container_column" key={section}>
                    <p className="body_text heading3">{section}</p>

                    {section === "Low Fidelity Wireframes" ? (
                      <div className="nexio_container_row_start nexio_lowfi">
                        {images.map(({ id, imgsrc, alt }) => (
                          <img
                            className="nexio_images"
                            key={id}
                            src={imgsrc}
                            alt={alt}
                            loading="lazy"
                          />
                        ))}
                      </div>
                    ) : section === "Color Exploration" ? (
                      <>
                        <div className="nexio_container_column">
                          {images.slice(0, 2).map(({ id, imgsrc, alt }) => (
                            <img
                              className="nexio_images"
                              key={id}
                              src={imgsrc}
                              alt={alt}
                              loading="lazy"
                            />
                          ))}
                        </div>
                        <div className="nexio_container_row_start_cl">
                          {images.slice(2, 4).map(({ id, imgsrc, alt }) => (
                            <img
                              className="nexio_images"
                              key={id}
                              src={imgsrc}
                              alt={alt}
                              loading="lazy"
                            />
                          ))}
                        </div>
                        <div className="nexio_container_row_start_cl">
                          {images.slice(4, 6).map(({ id, imgsrc, alt }) => (
                            <img
                              className="nexio_images"
                              key={id}
                              src={imgsrc}
                              alt={alt}
                              loading="lazy"
                            />
                          ))}
                        </div>
                      </>
                    ) : (
                      <div className="nexio_container_row_start nexio_wireframes">
                        {images.map(({ id, imgsrc, alt }) => (
                          <img
                            key={id}
                            src={imgsrc}
                            alt={alt}
                            loading="lazy"
                            className="nexio_images"
                          />
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {imageContent
                .filter(({ section }) => section === "Visual Exploration")
                .map(({ section, images }) => (
                  <div className="nexio_container_column" key={section}>
                    <p className="body_text heading3">{section}</p>
                    <div className="nexio_container_row_start nexio_wireframes">
                      {images.map(({ id, imgsrc, alt }) => (
                        <img
                          key={id}
                          src={imgsrc}
                          alt={alt}
                          loading="lazy"
                          className="nexio_images"
                        />
                      ))}
                    </div>
                  </div>
                ))}
              <div className="nexio_process_point point">
                <img
                  className="star_dark"
                  loading="lazy"
                  src={StarPointImg}
                  alt="Star Point Icon"
                />

                <div className="point_text">
                  <p className="point_answer body_text">
                    Once I was happy with the results, it was time to create
                    cohesive design system. Everything from color styles &
                    typograhy to product cards & text inputs.
                  </p>
                </div>
              </div>
              {elementsContent.map(({ section, images }) => (
                <div className="nexio_container_column" key={section}>
                  <p className="body_text heading3">{section}</p>
                  <div className="nexio_container_row_center">
                    {images.map(({ id, imgsrc, alt }) => (
                      <img
                        key={id}
                        src={imgsrc}
                        alt={alt}
                        loading="lazy"
                        className={`nexio_images ${
                          alt === "Order Card"
                            ? "order_card_img"
                            : alt === "Arrow Button Primary" ||
                              alt === "Arrow Button Secondary" ||
                              alt === "Arrow Button Tertiary" ||
                              alt === "Arrow Button Inverted"
                            ? "arrow_button_image"
                            : ""
                        }`}
                      />
                    ))}
                  </div>
                </div>
              ))}
              <div className="nexio_design nexio_container_column">
                <h3 className="nexio_container_heading heading2">Design</h3>
                <div className="point">
                  <img
                    className="star_dark"
                    loading="lazy"
                    src={StarPointImg}
                    alt="Star Point Icon"
                  />
                  <p className="body_text point_text">
                    Designed to be both visually appealing and highly
                    functional, the app creates an experience that feels more
                    like playful discovery than just browsing.
                  </p>
                </div>
                <div className="nexio_design_div">
                  <img
                    className="nexio_mockup_img"
                    loading="lazy"
                    src={NexioPattern}
                    alt="Nexio Pattern"
                  />
                </div>

                {DesignContent.map(({ section, content, images }) => (
                  <div
                    key={section}
                    className={`nexio_container_row_center ${
                      section === "Search product" || section === "Account"
                        ? "nexio_design_reverse"
                        : "nexio_design_content"
                    }`}
                  >
                    {content.map(({ id, text1, text2 }) => (
                      <div key={id} className="nexio_container_column">
                        <p className="heading3 body_text">{section}</p>
                        <div className="point nexio_container_row_center">
                          <img
                            className="star_dark"
                            loading="lazy"
                            src={StarPointImg}
                            alt="Star Point Icon"
                          />
                          <p className="body_text point_text">{text1}</p>
                        </div>
                        <div className="point nexio_container_row_center">
                          <img
                            className="star_dark"
                            loading="lazy"
                            src={StarPointImg}
                            alt="Star Point Icon"
                          />
                          <p className="body_text point_text">{text2}</p>
                        </div>
                      </div>
                    ))}

                    <div className="nexio_container_row_start nexio_design_images">
                      {images.map(({ idimg, imgsrc, alt }) => (
                        <img
                          key={idimg}
                          src={imgsrc}
                          alt={alt}
                          loading="lazy"
                          className="nexio_images"
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="nexio_container_column nexio_mockups">
            <h3 className="nexio_container_heading heading2 nexio_mockups_heading">
              Mockups
            </h3>
            {mockupContent.map(({ id, imgsrc, alt }) => (
              <div
                key={id}
                className={`nexio_mockup_div  ${
                  alt === "Nexio Isometric Mockup"
                    ? "nexio_mockup_fw-green"
                    : alt === "Nexio Elements Mockup"
                    ? "nexio_mockup_fw-blue"
                    : ""
                } `}
              >
                <img
                  src={imgsrc}
                  alt={alt}
                  loading="lazy"
                  className="nexio_mockup_img"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Nexio;
