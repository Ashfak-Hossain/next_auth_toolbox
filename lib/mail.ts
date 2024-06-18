import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

/**
 *
 * @param email  The email address to send the password reset email to.
 * @param token  The password reset token to include in the email.
 * @returns     A promise that resolves when the email has been sent.
 */
export const sendPasswordResetEmail = async (email: string, token: string) => {
  const resetLink = `http://localhost:3000/auth/new-password?token=${token}`;

  console.log('Sending password reset email to:', resetLink);

  await resend.emails.send({
    from: 'onboarding@resend.dev',
    to: email,
    subject: 'Reset your password',
    html: `
      <p>Hi there!</p>
      <p>Click the link below to reset your password:</p>
      <p><a href="${resetLink}">Reset password</a></p>
    `,
  });
};

/**
 *
 * @param email  The email address to send the verification email to.
 * @param token  The verification token to include in the email.
 * @returns     A promise that resolves when the email has been sent.
 */
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
