import "./duemark.css";
import DueMarkLaptop from "../assets/duemark/DueMark_Laptop.png";
import DueMarkHome from "../assets/duemark/DueMark_HomePage.png";

const DueMark = () => {
  return (
    <section className="project">
      <div className="wrapper">
        <h2 className="heading1 route_heading">DueMark</h2>
        <div className="body_text multi_content">
          <div className="project_hero multi_hero">
            <div className="multi_img_div">
              <img
                className="multi_img"
                loading="lazy"
                alt="DueMark Blog Laptop Render"
                src={DueMarkLaptop}
              />
            </div>
            <div className="multi_text body_text">
              <p>DueMark - Trademark Services Website Redesign</p>
              <p>
                DueMark is a global trademark services provider that specializes
                in renewals and IP management across 200+ jurisdictions. The
                redesigned website focuses on simplifying the complex trademark
                renewal process for international businesses, making it
                accessible, fast, and transparent. The new UI/UX revamp aims to
                reflect the company's efficient, modern, and client-first
                approach.
              </p>
              <div>
                Design Goals & Features:
                <ul>
                  <li>
                    <b>Clear Value Proposition</b>: The hero section immediately
                    communicates the core service—expert trademark
                    renewals—paired with a strong call to action
                  </li>
                  <li>
                    <b>Streamlined Process Visualization</b>: A visual
                    step-by-step process flow was implemented to clearly explain
                    how the service works, from checking prices to receiving
                    final certificates.
                  </li>
                  <li>
                    <b>Credibility Through Testimonials</b>: Real client reviews
                    add trust and legitimacy, reinforcing the ease and
                    reliability of DueMark's services.
                  </li>
                  <li>
                    <b>Service Highlights</b>: Dedicated sections detail
                    offerings like price transparency, customizable invoicing,
                    and jurisdiction coverage, reinforcing the company's
                    value-driven approach.
                  </li>
                  <li>
                    <b>Professional & Accessible Aesthetic</b>: Clean
                    typography, accessible color contrasts, and a responsive
                    layout ensure usability across devices. The visual tone
                    balances professionalism with warmth, appealing to global
                    business clients.
                  </li>
                </ul>
              </div>
              <div>
                <p>Technical Touches:</p>
                This structure strikes a balance between controlled quality
                (through user verification and admin moderation tools) and
                organic engagement—key for building a respected and sustainable
                platform in the legal field.
                <ul>
                  <li>
                    The UI was built to ensure mobile responsiveness, with
                    touch-friendly components and fast load times.
                  </li>
                  <li>
                    Icons and illustrations guide the user visually, reducing
                    cognitive load while browsing services and processes.
                  </li>
                  <li>
                    The contact and call-to-action sections are strategically
                    placed for conversion optimization.
                  </li>
                </ul>
              </div>
            </div>
            <img
              className="multi_img"
              loading="lazy"
              alt="DueMark Home Page"
              src={DueMarkHome}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DueMark;
