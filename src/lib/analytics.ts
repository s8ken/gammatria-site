import React from 'react';

// Analytics tracking for academic/research engagement
export interface AnalyticsEvent {
  action: string;
  category: string;
  label?: string;
  value?: number;
  properties?: Record<string, any>;
}

class Analytics {
  private isEnabled: boolean;

  constructor() {
    this.isEnabled = typeof window !== 'undefined' && process.env.NODE_ENV === 'production';
  }

  // Track general events
  track(event: AnalyticsEvent) {
    if (!this.isEnabled) {
      console.log('Analytics (dev):', event);
      return;
    }

    // In production, you would integrate with your analytics provider
    // For example: Google Analytics, Mixpanel, PostHog, etc.
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', event.action, {
        event_category: event.category,
        event_label: event.label,
        value: event.value,
        ...event.properties
      });
    }
  }

  // Track external link clicks
  trackExternalLink(url: string, context: string) {
    this.track({
      action: 'external_link_click',
      category: 'engagement',
      label: url,
      properties: {
        context,
        destination: this.getDomain(url)
      }
    });
  }

  // Track research engagement
  trackResearchEngagement(type: 'whitepaper' | 'case_study' | 'proof_toggle' | 'metrics_view', details?: string) {
    this.track({
      action: 'research_engagement',
      category: 'academic',
      label: type,
      properties: {
        details,
        timestamp: new Date().toISOString()
      }
    });
  }

  // Track ecosystem navigation
  trackEcosystemNavigation(from: string, to: string) {
    this.track({
      action: 'ecosystem_navigation',
      category: 'navigation',
      label: `${from} -> ${to}`,
      properties: {
        from_page: from,
        to_page: to
      }
    });
  }

  // Track YCQ Sonate interactions
  trackYCQInteraction(action: 'link_click' | 'proof_demo' | 'platform_visit', context: string) {
    this.track({
      action: 'ycq_interaction',
      category: 'commercial',
      label: action,
      properties: {
        context,
        platform: 'YCQ Sonate'
      }
    });
  }

  // Track SYMBI-SYNERGY interactions
  trackSYMBIInteraction(action: 'status_check' | 'deployment_view' | 'metrics_view', context: string) {
    this.track({
      action: 'symbi_interaction',
      category: 'infrastructure',
      label: action,
      properties: {
        context,
        platform: 'SYMBI-SYNERGY'
      }
    });
  }

  // Track ARC Discovery Project engagement
  trackARCEngagement(action: 'view_details' | 'funding_click' | 'research_click', context: string) {
    this.track({
      action: 'arc_engagement',
      category: 'academic',
      label: action,
      properties: {
        context,
        project: 'ARC Discovery 2026'
      }
    });
  }

  // Track page views
  trackPageView(path: string, title?: string) {
    this.track({
      action: 'page_view',
      category: 'navigation',
      label: path,
      properties: {
        page_title: title,
        page_path: path
      }
    });
  }

  private getDomain(url: string): string {
    try {
      return new URL(url).hostname;
    } catch {
      return 'unknown';
    }
  }
}

// Export singleton instance
export const analytics = new Analytics();

// Convenience hooks for React components
export function useAnalytics() {
  return analytics;
}

// Higher-order component for automatic page view tracking
export function withAnalytics<P extends object>(
  Component: React.ComponentType<P>,
  pageName?: string
): React.ComponentType<P> {
  return function AnalyticsWrapper(props: P) {
    React.useEffect(() => {
      if (typeof window !== 'undefined') {
        analytics.trackPageView(window.location.pathname, pageName);
      }
    }, []);

    return React.createElement(Component, props);
  };
}