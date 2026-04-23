import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { firstName, name, email, subject, message } = await req.json();

     const data = await resend.emails.send({
     from: process.env.FROM_EMAIL as string,
     to: [process.env.FROM_EMAIL as string],
      subject: `Nouveau message - ${subject}`,
      reply_to: email,
      html: `
        <h2>Nouveau message reçu</h2>
        <p><strong>Prénom:</strong> ${firstName}</p>
        <p><strong>Nom:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>NUMIC:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });


    return Response.json({ success: true, data });

  } catch (error) {
    return Response.json({ error: 'Erreur envoi email' }, { status: 500 });
  }
}