const nodemailer = require("nodemailer");


const sendEmail = (toEmail, id)=>{
    
// 1. Create transporter
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "devtestemail0502@gmail.com",
      pass: "ddcn lcpt rjau ctbf", // NOT your Gmail password!
    },
  });
  
  // 2. Email options
  const mailOptions = {
    from: '"MyApp" <devtestemail0502@gmail.com>',
    to: toEmail,
    subject: "Welcome to MyApp!",
    text: "Thanks for signing up!",
    html: `<h1>Welcome!</h1>
           <p>Glad to have you here 😊</p>
           <p>Click the link below to verify your account and complete your registration:</p>
           <a href="http://localhost:3000/verify/${id}">Verify</a>`,
  };
  
  // 3. Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log("Error sending mail:", error);
    }
    console.log("Email sent:", info.response);
  });
}

module.exports = sendEmail;