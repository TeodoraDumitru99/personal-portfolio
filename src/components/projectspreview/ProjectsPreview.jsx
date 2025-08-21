import "./projectspreview.css";
import NexioThumbnailImg from "../assets/projectspreviewImages/Nexio Thumbnail.png";
import DuemarkThumbnailImg from "../assets/projectspreviewImages/Duemark Preview.png";
import StaniaThumbnailImg from "../assets/projectspreviewImages/Stania Preview.png";

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
            <a href="projects/nexio" className="projectspreview_thumbnail">
              <img
                className="projectspreview_image_primary"
                loading="lazy"
                src={NexioThumbnailImg}
                alt="Nexio Thumbnail"
              />
              <div className="projectspreview_overlay">NEXIO</div>
            </a>

            <div className="projectspreview_image_row">
              <a href="projects/stania" className="projectspreview_thumbnail">
                <img
                  className="projectspreview_image_secondary"
                  loading="lazy"
                  src={StaniaThumbnailImg}
                  alt="Lamp Thumbnail"
                />
                <div className="projectspreview_overlay">STANIA</div>
              </a>
              <a href="/projects/duemark" className="projectspreview_thumbnail">
                <img
                  className="projectspreview_image_secondary projectspreview_duemark"
                  loading="lazy"
                  src={DuemarkThumbnailImg}
                  alt="Duemark Blog Thumbnail"
                />
                <div className="projectspreview_overlay">DUEMARK</div>
              </a>
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
