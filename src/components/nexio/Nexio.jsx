import "./nexio.css";
import NexioImg from "../assets/nexio/Nexio.png";
import NexioW1 from "../assets/nexio/Nexio Wireframes_1.png";
import NexioW2 from "../assets/nexio/Nexio Wireframes_2.png";
import NexioIso from "../assets/nexio/Nexio Isometric.png";
import NexioPattern from "../assets/nexio/Nexio Pattern.png";

const Nexio = () => {
  return (
    <section className="project">
      <div className="wrapper">
        <h2 className="title">Nexio</h2>
        <div className="body_text multi_content">
          <div className="project_hero multi_hero">
            <div className="multi_img_div">
              <img
                className="multi_img"
                loading="lazy"
                alt="DueMark Blog Laptop Render"
                src={NexioImg}
              />
            </div>
            <div className="project_text multi_text">
              <p>DueMark - Trademark Services Website Redesign</p>
              <p>
                Nexio is mobile app prototype reimagines the online shopping
                experience with a fun, colorful, and intuitive design. Built
                with a strong focus on user-centered design principles, the app
                blends vibrant aesthetics with seamless functionality to make
                browsing, discovering, and wishlisting products enjoyable and
                effortless. From smooth navigation to a thoughtfully crafted
                wishlist feature, every screen is designed to keep users engaged
                while maintaining a clean and accessible interface. Whether
                you're casually exploring new finds or curating your perfect
                wishlist, this prototype offers a shopping journey that's as
                enjoyable as it is efficient.
              </p>
              <div>
                Design Goals & Features:
                <ul>
                  <li>
                    <b>Enhance user engagement</b>: The app has a lively and
                    colorful design without compromising usability.
                  </li>
                  <li>
                    <b>Simplify the shopping experience</b>: Intuitive
                    navigation as well as clean layouts were implemented to
                    ensure seamless browsing.
                  </li>
                  <li>
                    <b>Encourage product discovery</b>: Discovering new items is
                    made visually appealing and engaging.
                  </li>
                  <li>
                    <b>Service Highlights</b>: Dedicated sections detail
                    offerings like price transparency, customizable invoicing,
                    and jurisdiction coverage, reinforcing the company's
                    value-driven approach.
                  </li>
                  <li>
                    <b>Make wishlisting effortless</b>: Allows the user to
                    create personalized wishlists similar to mood boards.
                  </li>
                </ul>
              </div>
              <div>
                <p>Technical Touches:</p>
                Designed to be both visually appealing and highly functional,
                the app creates an experience that feels more like playful
                discovery than just browsing. Whether users are exploring
                products or building their dream wishlist, every interaction is
                smooth, intuitive, and satisfying.
                <ul>
                  <li>
                    <b>Vibrant, playful UI:</b> Eye-catching colors and dynamic
                    visuals designed to elevate the mood while shopping.
                  </li>
                  <li>
                    <b>Streamlined navigation:</b> Simple, intuitive menu
                    structure that helps users get where they want quickly.
                  </li>
                  <li>
                    <b>Product previews:</b> Engaging item cards with key
                    details that make comparison and discovery easy.
                  </li>
                  <li>
                    <b>Coherent design systems:</b> The Ui is based of a
                    cohesive and well structured design system that combines
                    both coherent shapes and eye-catching accents.
                  </li>
                </ul>
              </div>
            </div>
            <img
              className="multi_img"
              loading="lazy"
              alt="DueMark Wireframes Set 1"
              src={NexioPattern}
            />
            <img
              className="multi_img"
              loading="lazy"
              alt="DueMark Wireframes Set 1"
              src={NexioIso}
            />
            <img
              className="multi_img"
              loading="lazy"
              alt="DueMark Wireframes Set 1"
              src={NexioW1}
            />
            <img
              className="multi_img"
              loading="lazy"
              alt="DueMark Wireframe Pattern"
              src={NexioW2}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Nexio;
