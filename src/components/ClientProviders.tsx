'use client';

import { FormspreeProvider } from '@formspree/react';

export default function ClientProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return <FormspreeProvider>{children}</FormspreeProvider>;
}
