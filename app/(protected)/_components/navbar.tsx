'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import UserButton from '@/components/auth/user-button';
import { Button } from '@/components/ui/button';

export const NavBar = () => {
  const pathname = usePathname();
  return (
    <nav className="bg-secondary flex justify-between items-center p-4 rounded-xl w-[600px] shadow-sm">
      <div className="flex gap-x-2">
        {/* server */}
        <Button
          asChild
          variant={pathname === '/server' ? 'default' : 'outline'}
        >
          <Link href="/server">Server</Link>
        </Button>
        {/* client */}
        <Button
          asChild
          variant={pathname === '/client' ? 'default' : 'outline'}
        >
          <Link href="/client">Client</Link>
        </Button>
        {/* admin */}
        <Button asChild variant={pathname === '/admin' ? 'default' : 'outline'}>
          <Link href="/admin">Admin</Link>
        </Button>
        {/* settings */}
        <Button
          asChild
          variant={pathname === '/settings' ? 'default' : 'outline'}
        >
          <Link href="/settings">Settings</Link>
        </Button>
        {/* User */}
        <Button asChild variant={pathname === '/user' ? 'default' : 'outline'}>
          <Link href="/user">User Info</Link>
        </Button>
      </div>
      <UserButton />
    </nav>
  );
};
