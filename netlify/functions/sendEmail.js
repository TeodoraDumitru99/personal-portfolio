const emailjs = require("emailjs-com");
require(".env").config();

exports.handler = async (event) => {
  try {
    const { user_name, user_email, message } = JSON.parse(event.body);

    // Replace these with your real values or use environment variables
    const serviceID = process.env.EMAILJS_SERVICE_ID;
    const templateID = process.env.EMAILJS_TEMPLATE_ID;
    const apiKey = process.env.EMAILJS_API_KEY;

    const result = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        origin: "http://localhost", // or your deployed domain
      },
      body: JSON.stringify({
        service_id: serviceID,
        template_id: templateID,
        user_id: apiKey,
        template_params: {
          user_name,
          user_email,
          message,
        },
      }),
    });

    if (!result.ok) {
      throw new Error("Failed to send email");
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Email sent successfully!" }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
