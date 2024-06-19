import { UserRole } from '@prisma/client';
import { NextResponse } from 'next/server';

import { CurrentRole } from '@/lib/auth';

export async function GET() {
  const role = await CurrentRole();

  if (role === UserRole.ADMIN) {
    return new NextResponse(null, { status: 200 });
  } else {
    return new NextResponse(null, { status: 403 });
  }
}
