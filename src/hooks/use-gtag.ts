// Hook personalizado para Google Ads gtag
export const useGtag = () => {
  const trackConversion = (
    conversionId: string,
    value?: number,
    currency: string = 'BRL',
    customParams?: Record<string, any>
  ) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'conversion', {
        'send_to': `AW-17481696146/${conversionId}`,
        'value': value || 1.0,
        'currency': currency,
        ...customParams
      });
    }
  };

  const trackEvent = (
    action: string,
    category: string,
    label?: string,
    value?: number
  ) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value
      });
    }
  };

  const trackPageView = (pageTitle: string, pageLocation: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', 'AW-17481696146', {
        page_title: pageTitle,
        page_location: pageLocation
      });
    }
  };

  return {
    trackConversion,
    trackEvent,
    trackPageView
  };
};

// Declaração global do gtag
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}
