import "./contact.css";
import emailjs from "emailjs-com";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const apiKey = process.env.REACT_APP_API_KEY;

  const handleSubmit = (e) => {
    e.preventDefault(); //prevent page realod on submit

    emailjs.send("service_bober", "template_vntxzsc", formData, apiKey).then(
      (result) => {
        console.log("Email sent successfully:", result.text);
        alert("Message sent!");
        setFormData({
          user_name: "",
          user_email: "",
          message: "",
        }); //clear form after successful send
      },
      (error) => {
        console.error("Error sending email:", error.text);
        alert("Failed to send message, please try again.");
      }
    );
  };

  return (
    <section className="contact">
      <div className="wrapper">
        <div className="contact_content">
          <h3 className="contact_title">Contact</h3>
          <div className="contact_container">
            <p className="contact_text">
              You can contact me using my social media links or simply write a
              message using the form below. Whether it is a project, feedback or
              recommendation, feel free to reach out. I am sure we can achieve
              wonderful things together!
            </p>
            <form className="contact_form" onSubmit={handleSubmit}>
              <div className="contact_form_inputs">
                <input
                  className="contact_form_input"
                  type="text"
                  name="user_name"
                  placeholder="Your Name"
                  value={formData.user_name}
                  onChange={handleChange}
                  aria-label="Your Name"
                  required
                />

                <input
                  className="contact_form_input"
                  type="email"
                  name="user_email"
                  placeholder="Your Email"
                  value={formData.user_email}
                  onChange={handleChange}
                  aria-lavel="Your Email"
                  required
                />

                <textarea
                  className="contact_form_input contact_form_input--text"
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  aria-label="Your Message"
                  rows={7}
                  required
                ></textarea>
              </div>

              <button className="form_button" type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
