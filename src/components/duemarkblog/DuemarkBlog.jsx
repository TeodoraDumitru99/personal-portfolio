import "./duemarkblog.css";
import DueMarkBlogLaptop from "../assets/duemarkblog/duemark_hero_Laptop.png";
import DueMarkBlogHome from "../assets/duemarkblog/DueMark_home.png";
import DueMarkBlogPres1 from "../assets/duemarkblog/DueMark_Presentation1.png";
import DueMarkBlogPres2 from "../assets/duemarkblog/DueMark_Presentation2.png";
import DueMarkBlogWireframes from "../assets/duemarkblog/DueMarkBlog_wireframes.png";

const DueMarkBlog = () => {
  return (
    <section className="project">
      <div className="wrapper">
        <h2 className="title">DueMark Blog</h2>
        <div className="body_text multi_content">
          <div className="project_hero multi_hero">
            <div className="multi_img_div">
              <img
                className="multi_img"
                loading="lazy"
                alt="DueMark Blog Laptop Render"
                src={DueMarkBlogLaptop}
              />
            </div>
            <div className="project_text multi_text">
              <p>
                This website is designed as a professional legal blog platform
                aimed at verified legal practitioners, researchers, and
                academics. The homepage immediately sets a tone of trust and
                credibility with a clean, structured layout and clear messaging:
                “Trusted Legal Insights, Simplified.” Visitors are introduced to
                the blog's purpose—offering expert commentary, real-world case
                studies, and practical insights—through a bold hero section and
                informative content blocks that emphasize transparency and
                community.
              </p>
              <p>
                The blog structure supports both curated content and
                community-driven discussions. The "About Us" section highlights
                real voices and experiences, reinforcing authenticity. The
                "Community" and "Blog" sections encourage engagement, showcasing
                how verified professionals can participate, contribute, or start
                their own threads. From a usability standpoint, the blog listing
                page includes filters by legal category (e.g., patents, criminal
                law), a clean card-based layout for posts, and clear metadata
                like author, topic, and publication date. These elements not
                only provide a seamless browsing experience but also uphold the
                professional tone required in a legal space.
              </p>
              <p>
                This structure strikes a balance between controlled quality
                (through user verification and admin moderation tools) and
                organic engagement—key for building a respected and sustainable
                platform in the legal field.
              </p>
            </div>
            <img
              className="multi_img"
              loading="lazy"
              alt="DueMark Blog Presentation 1"
              src={DueMarkBlogPres1}
            />
            <img
              className="multi_img"
              loading="lazy"
              alt="DueMark Blog Presentation 1"
              src={DueMarkBlogPres2}
            />
            <img
              className="multi_img"
              loading="lazy"
              alt="DueMark Blog Laptop Render"
              src={DueMarkBlogHome}
            />
            <img
              className="multi_img"
              loading="lazy"
              alt="DueMark Blog Wireframes"
              src={DueMarkBlogWireframes}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DueMarkBlog;
