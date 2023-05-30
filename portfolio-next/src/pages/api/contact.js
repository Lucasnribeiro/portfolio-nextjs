import nodemailer from 'nodemailer';
import useragent from 'useragent';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    // Get client IP address
    const clientIp = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    // Get client browser details
    const agent = useragent.parse(req.headers['user-agent']);
    const browser = agent.toAgent();

    // Create a transporter for sending emails
    const transporter = nodemailer.createTransport({
      // Configure your email provider settings here
      host: "smtp.zoho.com",
      secure: true,
      port: 465,
      auth: {
        user: process.env.EMAIL_LOGIN,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Prepare the email message
    const mailOptions = {
      from: 'contact@lucasnribeiro.com',
      to: 'contact@lucasnribeiro.com', // Replace with your email address
      cc: 'lucasmnribeiro@gmail.com',
      subject: 'New Contact Form Submission - lucasnribeiro.com',
      text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}

        IP Address: ${clientIp}
        Location: ${req.headers.get('x-vercel-ip-city')}, ${req.headers.get('x-vercel-ip-country-region')} - ${req.headers.get('x-vercel-ip-country')}
        Browser: ${browser}
      `,
    };

    try {
      // Send the email
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ message: 'Error sending email' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
