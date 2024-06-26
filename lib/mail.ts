import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const domain = process.env.NEXT_PUBLIC_APP_URL;

export const sendTwoFactorTokenEmail = async (email: string, token: string) => {
  await resend.emails.send({
    from: 'onboarding@resend.dev',
    to: email,
    subject: 'Your two-factor authentication code',
    html: `
      <p>Hi there!</p>
      <p>Your two-factor authentication code is:</p>
      <p><strong>${token}</strong></p>
    `,
  });
};

/**
 *
 * @param email  The email address to send the password reset email to.
 * @param token  The password reset token to include in the email.
 * @returns     A promise that resolves when the email has been sent.
 */
export const sendPasswordResetEmail = async (email: string, token: string) => {
  const resetLink = `${domain}/auth/new-password?token=${token}`;

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
  const confirmLink = `${domain}/auth/new-verification?token=${token}`;

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
