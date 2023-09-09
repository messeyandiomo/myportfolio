require("dotenv").config({ path: __dirname + "./.env", override: true });
const express = require("express");
const bodyParser = require("body-parser");
const sendMail = require("smtp/sendMail.js");
const app = express();
const port = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/api/sendmail", async (req, res) => {
  const { name, from, subject, message } = req.body;
  try {
    await sendMail(name, "messey.bilal@gmail.com", from, subject, message);
    res.status(200).send({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).send({ message: "Error sending email" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
