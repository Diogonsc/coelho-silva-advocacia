// Accessibility utilities and configurations

// Skip to main content link
export const createSkipLink = () => {
  const skipLink = document.createElement('a');
  skipLink.href = '#main-content';
  skipLink.textContent = 'Pular para o conteúdo principal';
  skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-primary-foreground px-4 py-2 rounded z-50';
  document.body.insertBefore(skipLink, document.body.firstChild);
};

// Focus management
export const trapFocus = (element: HTMLElement) => {
  const focusableElements = element.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
  
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Tab') {
      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        }
      } else {
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    }
  };

  element.addEventListener('keydown', handleKeyDown);
  
  return () => {
    element.removeEventListener('keydown', handleKeyDown);
  };
};

// Screen reader announcements
export const announceToScreenReader = (message: string, priority: 'polite' | 'assertive' = 'polite') => {
  const announcement = document.createElement('div');
  announcement.setAttribute('aria-live', priority);
  announcement.setAttribute('aria-atomic', 'true');
  announcement.className = 'sr-only';
  
  announcement.textContent = message;
  document.body.appendChild(announcement);
  
  setTimeout(() => {
    if (document.body.contains(announcement)) {
      document.body.removeChild(announcement);
    }
  }, 1000);
};

// Keyboard navigation helpers
export const handleKeyboardNavigation = (
  event: KeyboardEvent,
  onEnter?: () => void,
  onEscape?: () => void,
  onArrowUp?: () => void,
  onArrowDown?: () => void
) => {
  switch (event.key) {
    case 'Enter':
    case ' ':
      event.preventDefault();
      onEnter?.();
      break;
    case 'Escape':
      event.preventDefault();
      onEscape?.();
      break;
    case 'ArrowUp':
      event.preventDefault();
      onArrowUp?.();
      break;
    case 'ArrowDown':
      event.preventDefault();
      onArrowDown?.();
      break;
  }
};

// Color contrast utilities
export const getContrastRatio = (color1: string, color2: string): number => {
  const getLuminance = (color: string): number => {
    const hex = color.replace('#', '');
    const r = parseInt(hex.substr(0, 2), 16) / 255;
    const g = parseInt(hex.substr(2, 2), 16) / 255;
    const b = parseInt(hex.substr(4, 2), 16) / 255;
    
    const [rs, gs, bs] = [r, g, b].map(c => {
      if (c <= 0.03928) {
        return c / 12.92;
      }
      return Math.pow((c + 0.055) / 1.055, 2.4);
    });
    
    return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
  };
  
  const luminance1 = getLuminance(color1);
  const luminance2 = getLuminance(color2);
  
  const brightest = Math.max(luminance1, luminance2);
  const darkest = Math.min(luminance1, luminance2);
  
  return (brightest + 0.05) / (darkest + 0.05);
};

// ARIA helpers
export const getAriaLabel = (element: string, action?: string): string => {
  const labels: Record<string, string> = {
    'menu': 'Menu de navegação',
    'close': 'Fechar',
    'search': 'Pesquisar',
    'submit': 'Enviar',
    'phone': 'Telefone',
    'email': 'Email',
    'whatsapp': 'WhatsApp',
    'location': 'Localização',
    'back-to-top': 'Voltar ao topo',
  };
  
  const baseLabel = labels[element] || element;
  return action ? `${action} ${baseLabel}` : baseLabel;
};

// Focus visible polyfill for older browsers
export const setupFocusVisible = () => {
  if (typeof window !== 'undefined') {
    // Add focus-visible class to elements that receive focus via keyboard
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Tab') {
        document.body.classList.add('keyboard-navigation');
      }
    });
    
    document.addEventListener('mousedown', () => {
      document.body.classList.remove('keyboard-navigation');
    });
    
    // Add CSS for focus-visible
    const style = document.createElement('style');
    style.textContent = `
      .keyboard-navigation :focus:not(:focus-visible) {
        outline: none;
      }
      .keyboard-navigation :focus-visible {
        outline: 2px solid hsl(var(--primary));
        outline-offset: 2px;
      }
    `;
    document.head.appendChild(style);
  }
};

// High contrast mode detection
export const isHighContrastMode = (): boolean => {
  if (typeof window !== 'undefined') {
    const mediaQuery = window.matchMedia('(prefers-contrast: high)');
    return mediaQuery.matches;
  }
  return false;
};

// Reduced motion detection
export const prefersReducedMotion = (): boolean => {
  if (typeof window !== 'undefined') {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    return mediaQuery.matches;
  }
  return false;
};

// Initialize accessibility features
export const initializeAccessibility = () => {
  if (typeof window !== 'undefined') {
    createSkipLink();
    setupFocusVisible();
    
    // Add main content landmark
    const main = document.querySelector('main');
    if (main && !main.id) {
      main.id = 'main-content';
    }
  }
};
