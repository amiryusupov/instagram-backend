import nodemailer from "nodemailer"
import { emailConfig } from "../../config"
import Mail from "nodemailer/lib/mailer"

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: emailConfig.email,
    pass: emailConfig.password
  }
})

export const sendEmail = async (email: string, code: string) => {
    const mailOptions: Mail.Options = {
      from: `"Amir Yusupov" ${emailConfig.email}`,
      to: email,
      subject: "Verify code on Instagram clone",
      html: `<div style="text-align:center"><span>To complete the sign in, enter the verification code <span/><h3>Verification code: ${code}<h3/<div/>`
    }
    transporter.sendMail(mailOptions, (err, info) => {
      if(err) {
        console.log("Error:" + err)
      } else {
        console.log("Send mail:" + info.response)
      }
    })
}