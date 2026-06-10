const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});

exports.sendMail = async(receiverEmail,subject,body) => {
    console.log("-----------------------------------------");
    console.log(`MOCK EMAIL SENT TO: ${receiverEmail}`);
    console.log(`SUBJECT: ${subject}`);
    console.log(`BODY: ${body}`);
    console.log("-----------------------------------------");
};
