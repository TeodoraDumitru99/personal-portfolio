import "./contact.css";
import emailjs from "emailjs-com";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const apiKey = process.env.REACT_APP_API_KEY;

  const validateForm = () => {
    let newErrors = {};

    //Name Validation: Only letters, min 2 characters, max 150//

    if (!/^[A-Za-z\s]{2,150}$/.test(formData.user_name)) {
      newErrors.user_name =
        "Name should be between 2-150 characters and contain only letters.";
    }

    // Email Validation: Must contain @ and domain

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.user_email)) {
      newErrors.user_email = "Please enter a valid email address.";
    }

    // Message Validation: Minimum 10 characters, max 500

    if (formData.message.length < 10 || formData.message.length > 500) {
      newErrors.message = "Message should be between 10 and 500 characters.";
    }

    setErrors(newErrors); //update with validation error
    return Object.keys(newErrors).length === 0; //return true if no errors
  };

  const handleSubmit = (e) => {
    e.preventDefault(); //prevent page relaod on submit

    if (!validateForm()) {
      return; //stop submission if validation fails
    }

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
          <h3 className="contact_title heading1">Contact</h3>
          <div className="contact_container body_text">
            <p className="contact_text ">
              You can contact me using my social media links or simply write a
              message using the form below. Whether it is a project, feedback or
              recommendation, feel free to reach out. I am sure we can achieve
              wonderful things together!
            </p>
            <form className="contact_form" onSubmit={handleSubmit} noValidate>
              <div className="contact_form_inputs">
                <input
                  className="contact_form_input body_text"
                  type="text"
                  name="user_name"
                  placeholder="Your Name"
                  value={formData.user_name}
                  onChange={handleChange}
                  aria-label="Your Name"
                  required
                />
                {errors.user_name && (
                  <p className="contact_error_text">{errors.user_name}</p>
                )}

                <input
                  className="contact_form_input body_text"
                  type="email"
                  name="user_email"
                  placeholder="Your Email"
                  value={formData.user_email}
                  onChange={handleChange}
                  aria-label="Your Email"
                  required
                />
                {errors.user_email && (
                  <p className="contact_error_text">{errors.user_email}</p>
                )}
                <textarea
                  className="contact_form_input contact_form_input--text body_text"
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  aria-label="Your Message"
                  rows={7}
                  required
                ></textarea>
                {errors.message && (
                  <p className="contact_error_text">{errors.message}</p>
                )}
              </div>

              <button className="form_button heading3" type="submit">
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
