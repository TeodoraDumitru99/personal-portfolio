import "./projectspreview.css";
import NexioThumbnailImg from "../assets/projectspreviewImages/Nexio Thumbnail.png";
import DuemarkBlogThumbnailImg from "../assets/projectspreviewImages/DuemarkBlog Thumbnail.png";
import LampThumbnailImg from "../assets/projectspreviewImages/Lamp Thumbnail.png";

const ProjectsPreview = () => {
  return (
    <section className="projectpreview section">
      <div className="wrapper">
        <div className="projectpreview_content">
          <h2 className="heading2 projectspreview_header">
            Projects
            <a className="route" href="/projects">
              SEE MORE
            </a>
          </h2>

          <div className="projectspreview_images">
            <img
              className="projectspreview_image_primary"
              loading="lazy"
              src={NexioThumbnailImg}
              alt="Nexio Thumbnail"
            />
            <div className="projectspreview_image_row">
              <img
                className="projectspreview_image_secondary"
                loading="lazy"
                src={DuemarkBlogThumbnailImg}
                alt="Duemark Blog Thumbnail"
              />
              <img
                className="projectspreview_image_secondary"
                loading="lazy"
                src={LampThumbnailImg}
                alt="Lamp Thumbnail"
              />
            </div>
          </div>
          <a className="route projects_preview_button" href="/projects">
            SEE MORE
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsPreview;
