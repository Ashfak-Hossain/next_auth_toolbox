'use client';

import { UserRole } from '@prisma/client';
import React from 'react';

import { FormError } from '@/components/form-error';
import { useCurrentRole } from '@/hooks/use-current-role';

interface RoleGateProps {
  children: React.ReactNode;
  allowedRole: UserRole;
}

export const RoleGate = ({ children, allowedRole }: RoleGateProps) => {
  const role = useCurrentRole();
  if (role !== allowedRole)
    return <FormError message="Do not have permission" />;
  return <> {children} </>;
};
