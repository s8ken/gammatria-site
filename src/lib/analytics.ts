export type AnalyticsEventName =
  | 'page_view'
  | 'cta_click'
  | 'rfc_opened'
  | 'rfc_submitted'
  | 'download_receipt'
  | 'mode_toggled';

export type AnalyticsPayloads = {
  page_view: { path: string; title?: string };
  cta_click: { id: string; label?: string; href?: string };
  rfc_opened: { id: string };
  rfc_submitted: { id: string; changes?: number };
  download_receipt: { sessionId: string };
  mode_toggled: { mode: 'SYMBI' | 'DIRECTIVE' };
};

type CommonMeta = { userId?: string; sessionId?: string; ts?: number };

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    plausible?: (event: string, opts?: { props?: Record<string, unknown> }) => void;
  }
}

export function track<E extends AnalyticsEventName>(
  event: E,
  payload: AnalyticsPayloads[E],
  meta: CommonMeta = {}
): void {
  const data = { ...payload, ...meta, ts: meta.ts ?? Date.now() };

  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', event, data as Record<string, unknown>);
  }

  if (typeof window !== 'undefined' && typeof window.plausible === 'function') {
    window.plausible(event, { props: data as Record<string, unknown> });
  }

  if (process.env.NODE_ENV !== 'production') {
    console.debug('[analytics]', event, data);
  }
}
