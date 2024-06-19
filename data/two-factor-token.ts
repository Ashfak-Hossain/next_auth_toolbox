import { db } from '@/lib/db';

/**
 *
 * @param token  The token to search for
 * @returns The two factor token if found, otherwise null
 * @description Get a two factor token by token
 */
export const getTwoFactorTokenByToken = async (token: string) => {
  try {
    const twoFactorToken = await db.twoFactorToken.findUnique({
      where: { token },
    });

    return twoFactorToken;
  } catch {
    return null;
  }
};

/**
 *
 * @param email  The email to search for
 * @returns The two factor token if found, otherwise null
 * @description Get a two factor token by email
 */
export const getTwoFactorTokenByEmail = async (email: string) => {
  try {
    const twoFactorToken = await db.twoFactorToken.findFirst({
      where: { email },
    });

    return twoFactorToken;
  } catch {
    return null;
  }
};
