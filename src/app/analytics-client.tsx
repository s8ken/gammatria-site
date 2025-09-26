'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { track } from '@/lib/analytics';

export default function AnalyticsClient() {
  const pathname = usePathname();

  useEffect(() => {
    track('page_view', { path: pathname, title: document?.title });
  }, [pathname]);

  return null;
}
