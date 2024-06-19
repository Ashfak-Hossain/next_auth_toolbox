import './globals.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { SessionProvider } from 'next-auth/react';

import { auth } from '@/auth';

const font = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Next Auth',
  description: 'Next.js authentication with NextAuth',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  return (
    <SessionProvider session={session}>
      <html lang="en">
        <body className={font.className}>{children}</body>
      </html>
    </SessionProvider>
  );
}
