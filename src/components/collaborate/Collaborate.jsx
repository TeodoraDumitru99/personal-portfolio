import "./collaborate.css";

const Collaborate = () => {
  return (
    <section className="collaborate">
      <div className="wrapper">
        <h3 className="collaborate_title">Collaborate</h3>
        <div className="collaborate_content">
          <div className="collaborate_text">
            Have a project in mind? I'm always excited to work on new challenges
            and ideas. Whether it's a web page, an illustration, or a creative
            discussion, feel free to send me a message. If you are ready to
            build something impactful together, let's collaborate!
          </div>
          <a className="collaborate_button" href="/contact">
            Contact
          </a>
        </div>
      </div>
    </section>
  );
};

export default Collaborate;
