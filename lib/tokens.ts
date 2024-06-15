import { v4 as uuidv4 } from 'uuid';

import { getVerificationTokenByEmail } from '@/data/verification-token';
import { db } from '@/lib/db';

/**
 * Generates a new verification token for the specified email.
 * @param email - The email address to generate a verification token for.
 * @returns The newly created verification token object.
 */
export const generateVerificationToken = async (email: string) => {
  const token = uuidv4();
  const expires = new Date(new Date().getTime() + 3600 * 1000);

  const existingToken = await getVerificationTokenByEmail(email);

  if (existingToken) {
    await db.verificationToken.delete({
      where: { id: existingToken.id },
    });
  }

  const verificationToken = await db.verificationToken.create({
    data: {
      email,
      token,
      expires,
    },
  });

  return verificationToken;
};
