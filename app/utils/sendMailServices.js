import nodemailer from 'nodemailer';
import { thankYouEmailTemplate, notifyMeTemplate } from '../template/emailTemplates.js';
import { configDotenv } from 'dotenv';
configDotenv();



const Email = process.env.MAIL;
const Password = process.env.MAIL_PASSWORD;
if (!Email || !Password) {
    throw new Error("Email and Password must be set in the environment variables.");
}

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
        user: Email,
        pass: Password,
    },
})

export const sendEmail = async (email, name, subject, message, type) => {
    try {
        if (type === "thankYou") {
            await transporter.sendMail({
                from: Email, // sender address
                to: email, // list of receivers
                subject: `Hello ${name}`, // Subject line
                html: thankYouEmailTemplate(name), // html body
            });

        } else if (type === "notifyMeTemplate") {
            await transporter.sendMail({
                from: email, // sender address
                to: Email, // list of receivers
                subject: subject, // Subject line
                html: notifyMeTemplate({ name, email, message }), // html body
            });
        }
    } catch (error) {
        console.error("Error sending email:", error);
        throw new Error("Failed to send email");
    }
}