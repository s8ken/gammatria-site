'use client';

import { useEffect, useState } from 'react';

export default function Consent() {
  const [show, setShow] = useState(() => {
    if (typeof window === 'undefined') {
      return false;
    }

    return !localStorage.getItem('symbi-consent');
  });

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    if (!("gtag" in window)) {
      return;
    }

    window.gtag?.('consent', 'default', {
      ad_user_data: 'denied',
      ad_personalization: 'denied',
      ad_storage: 'denied',
      analytics_storage: 'denied',
    });
  }, []);

  if (!show) {
    return null;
  }

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/20 bg-white/90 p-3 text-sm text-black backdrop-blur">
      <div className="mx-auto flex max-w-4xl items-center gap-3">
        <span>We use privacy-respecting analytics to improve the site.</span>
        <button
          onClick={() => {
            localStorage.setItem('symbi-consent', 'granted');
            window.gtag?.('consent', 'update', { analytics_storage: 'granted' });
            setShow(false);
          }}
          className="ml-auto rounded border border-black/20 bg-black/5 px-3 py-1 text-sm font-medium"
        >
          Accept
        </button>
        <button
          onClick={() => setShow(false)}
          className="rounded border border-black/20 bg-black/5 px-3 py-1 text-sm"
        >
          Dismiss
        </button>
      </div>
    </div>
  );
}
