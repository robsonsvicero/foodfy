const nodemailer = require("nodemailer");

module.exports = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "264dd54169b409",
    pass: "cf2aa9f58c739a",
  },
});
