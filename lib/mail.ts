import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendVerificationEmail = async (email: string, token: string) => {
  const confirmLink = `http://localhost:3000/auth/new-verification?token=${token}`;

  await resend.emails.send({
    from: 'onboarding@resend.dev',
    to: email,
    subject: 'Please confirm your email address',
    html: `
      <p>Hi there!</p>
      <p>Thanks for signing up for our service. To complete the registration process, please click the link below:</p>
      <p><a href="${confirmLink}">Confirm email address</a></p>
    `,
  });
};
