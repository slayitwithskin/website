import nodemailer from 'nodemailer'

const email = process.env.EMAIL
const pass = process.env.EMAIL_PASSWORD

export const transporter = nodemailer.createTransport({
    // host: 'smtp.zoho.com',
    // port: 465,
    // secure: true,
    service: 'gmail',
    auth: {
        user: email,
        pass,
    }
})

export const mailOptions = {
    from: email,
    to: "dezynationindia@gmail.com",
}