export function thankYouEmailTemplate(name) {
    return `
    <div style="font-family: Arial, sans-serif; background-color: #f9f9f9; padding: 20px;">
      <table width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 0 10px rgba(0,0,0,0.05);">
        <tr>
          <td style="padding: 30px 20px; text-align: center;">
            <h2 style="margin-bottom: 10px; color: #333;">Thank You, ${name}!</h2>
            <p style="margin: 0; font-size: 16px; color: #555;">
              I really appreciate you for connecting with me through my portfolio website.
              <br/><br/>
              I’ll try to get back to you as soon as possible!
            </p>
          </td>
        </tr>
        <tr>
          <td style="padding: 20px; text-align: center;">
            <a href="https://yourportfolio.com" target="_blank"
              style="display: inline-block; padding: 12px 24px; background-color: #4f46e5; color: #fff; text-decoration: none; border-radius: 4px; font-weight: bold;">
              Visit My Portfolio Again
            </a>
          </td>
        </tr>
        <tr>
          <td style="padding: 20px; font-size: 12px; text-align: center; color: #aaa;">
            © ${new Date().getFullYear()} Kushal Padhiyar | All rights reserved.
          </td>
        </tr>
      </table>
    </div>
    `;
}


export function notifyMeTemplate({ name, email, message }) {
    return `
    <div style="font-family: Arial, sans-serif; background-color: #f3f4f6; padding: 20px;">
      <table width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px; margin: auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);">
        <tr>
          <td style="padding: 30px 20px; text-align: left;">
            <h2 style="margin: 0 0 10px; color: #1f2937;">New Contact Form Submission 🚀</h2>
            <p style="margin: 0 0 10px; font-size: 16px; color: #4b5563;">Hey Kushal! Someone just connected with you through your portfolio website. Here's the info:</p>
          </td>
        </tr>
        <tr>
          <td style="padding: 0 20px;">
            <p style="font-size: 15px; color: #111;"><strong>Name:</strong> ${name}</p>
            <p style="font-size: 15px; color: #111;"><strong>Email:</strong> ${email}</p>
            <p style="font-size: 15px; color: #111;"><strong>Message:</strong></p>
            <p style="padding: 10px; background-color: #f9fafb; border-left: 4px solid #4f46e5; font-style: italic; color: #374151;">${message}</p>
          </td>
        </tr>
        <tr>
          <td style="padding: 20px; text-align: center;">
            <a href="mailto:${email}" style="display: inline-block; padding: 10px 20px; background-color: #4f46e5; color: white; text-decoration: none; border-radius: 5px; font-weight: bold;">
              Reply Now
            </a>
          </td>
        </tr>
        <tr>
          <td style="padding: 15px; text-align: center; font-size: 12px; color: #9ca3af;">
            ${new Date().toLocaleString()} — Portfolio Contact Notification
          </td>
        </tr>
      </table>
    </div>
    `;
}
