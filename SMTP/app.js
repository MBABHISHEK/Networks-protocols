const nodemailer = require("nodemailer");

async function sendEmail() {
  // Replace these values with your Gmail account information
  const yourEmail = "mba384420@gmail.com";
  const yourPassword = "your-gmail-password";

  // Create a transporter using Gmail SMTP
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: yourEmail,
      pass: yourPassword,
    },
  });

  // Define the email message
  let mailOptions = {
    from: `"ABHISHEK M B" <${yourEmail}>`,
    to: "recipient@example.com", // Replace with the recipient's email address
    subject: "Test Email",
    text: "This is a test email from Node.js using Nodemailer.",
  };

  // Send the email
  try {
    let info = await transporter.sendMail(mailOptions);
    console.log("Email sent: ", info.messageId);
  } catch (error) {
    console.error("Error sending email: ", error);
  }
}

// Call the function to send the email
sendEmail();
