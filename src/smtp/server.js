require("dotenv").config({ path: __dirname + "/.env", override: true });
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const sendMail = require("./sendMail");
const path = require("path");
const app = express();
const port = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cors({
    origin: process.env.ORIGIN,
    methods: ["GET", "POST"],
  })
);
app.use(express.static(path.join(__dirname, "../../build")));

app.post("/api/sendmail", async (req, res) => {
  const { name, from, subject, message } = req.body;
  try {
    await sendMail(name, from, "messey.bilal@gmail.com", subject, message);
    res.status(200).send({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).send({ message: "Error sending email" });
  }
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../../build/index.html"));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
