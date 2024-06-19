import React from 'react';

import { UserInfo } from '@/components/user-info';
import { CurrentUser } from '@/lib/auth';

const ServerPage = async () => {
  const user = await CurrentUser();

  return <UserInfo user={user} label="🖥️ Server component" />;
};

export default ServerPage;
