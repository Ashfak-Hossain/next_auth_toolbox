import { db } from '@/lib/db';

/**
 * Retrieves a verification token by its token value.
 * @param token - The token value to search for.
 * @returns The verification token object if found, or null if not found or an error occurred.
 */
export const getVerificationTokenByToken = async (token: string) => {
  try {
    const verificationToken = await db.verificationToken.findUnique({
      where: { token },
    });

    return verificationToken;
  } catch (error) {
    return null;
  }
};

/**
 * Retrieves a verification token by email.
 * @param email - The email associated with the verification token.
 * @returns The verification token object if found, or null if not found or an error occurred.
 */
export const getVerificationTokenByEmail = async (email: string) => {
  try {
    const verificationToken = await db.verificationToken.findFirst({
      where: { email },
    });

    return verificationToken;
  } catch (error) {
    return null;
  }
};
