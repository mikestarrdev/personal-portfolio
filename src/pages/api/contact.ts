const nodemailer = require("nodemailer");
import { NextApiRequest, NextApiResponse } from "next";
import { Errors, Info } from "../../../types/RestApi";

const contact = (req: NextApiRequest, res: NextApiResponse) => {
  const data = req.body;
  console.log(data);

  const transporter = nodemailer.createTransport({
    service: "gmail",
    port: 465,
    host: "smtp.gmail.com",
    secure: true,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });

  const mailData = {
    from: process.env.EMAIL,
    to: process.env.PERSONAL_EMAIL,
    subject: `${data.subject} - ${data.email}`,
    text: `From: ${data.name}. Email: ${data.email}. Subject: ${data.subject}. Message: ${data.message}`,
    html: `<div>
            <p>From: ${data.name}</p>
            <p>Email: ${data.email}</p>
            <p>Subject: ${data.subject}</p>
            <p>Message: ${data.message}</p>
          </div>`,
  };

  transporter.sendMail(mailData, function (err: Errors, info: Info) {
    if (err) {
      console.log(err);
      return res.status(400).json({ message: "Bad request" });
    } else {
      console.log("Email sent: " + info.response);
    }
  });

  return res.status(200).json({ success: true });
};

export default contact;
