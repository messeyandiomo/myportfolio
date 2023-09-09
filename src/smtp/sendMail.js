import { createTransport } from "nodemailer";
import { appendFile } from "../fs";

const logToFile = (message) => {
  const logMessage = `[${new Date().toISOString()}] ${message}\n`;
  appendFile("sendMail.log", logMessage, (err) => {
    if (err) {
      console.error("Error writing to log file:", err);
    }
  });
};

const sendMail = async (name, to, from, subject, message) => {
  logToFile("Sending email..., in the sendMail.js file");
  try {
    let transporter = createTransport({
      service: "gmail",
      host: "smtp.google.com",
      secure: false,
      port: 25,
      auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
      tls: { rejectUnauthorized: false },
    });
    const mailOptions = {
      from: from,
      to: to,
      subject: subject,
      text: `${name} has sent a message: ${message}`,
    };
    await transporter.sendMail(mailOptions);
    logToFile("Email sent!");
    return true;
  } catch (error) {
    logToFile(`Error sending email: ${error}`);
    return false;
  }
};

module.exports = sendMail;
