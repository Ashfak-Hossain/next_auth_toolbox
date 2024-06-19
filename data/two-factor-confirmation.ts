import { db } from '@/lib/db';

/**
 *
 * @param userId  The user ID to search for
 * @returns The two factor confirmation if found, otherwise null
 * @description Get a two factor confirmation by user ID
 */
export const getTwoFactorConfirmationByUserId = async (userId: string) => {
  try {
    const twoFactorConfirmation = await db.twoFactorConfirmation.findUnique({
      where: { userId },
    });

    return twoFactorConfirmation;
  } catch {
    return null;
  }
};
