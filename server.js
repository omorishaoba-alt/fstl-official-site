const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(express.static(__dirname)); // Serve static files (HTML, CSS, JS)

app.post("/submit-form", async (req, res) => {
  const { fullname, email, phone, service } = req.body;

  const transporter = nodemailer.createTransport({
    host: "smtp.your-email.com",
    port: 587,
    secure: false,
    auth: {
      user: "you@fstl.ng",
      pass: "YOUR_EMAIL_PASSWORD"
    }
  });

  const mailOptions = {
    from: `"FSTL Website" <you@fstl.ng>`,
    to: "you@fstl.ng",
    subject: `New FSTL Registration: ${service}`,
    text: `Full Name: ${fullname}\nEmail: ${email}\nPhone: ${phone}\nService: ${service}`
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send("Form submitted successfully");
  } catch (err) {
    console.error(err);
    res.status(500).send("Error sending email");
  }
});

const PORT = 3000;
app.listen(PORT, () => console.log(`FSTL server running on port ${PORT}`));