import { sendEmail } from "../../utils/sendMailServices.js";

export async function POST(request) {
    const { name, email, subject, message } = await request.json();
    
    if (!name || !email || !subject || !message) {
        return new Response(JSON.stringify({ error: "All fields are required" }), { status: 400 });
    }

    try {
        // Email to user (thank you)
        await sendEmail(email, name, subject, message, "thankYou");

        // Email to yourself (notify)
        await sendEmail("kushalpadhiyar@example.com", name, subject, message, "notifyMeTemplate");

        return new Response(JSON.stringify({ message: "Email sent successfully" }), { status: 200 });
    } catch (error) {
        console.error("Error sending email:", error);
        return new Response(JSON.stringify({ error: "Failed to send email" }), { status: 500 });
    }
}
