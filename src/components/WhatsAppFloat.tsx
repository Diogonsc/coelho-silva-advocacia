import { MessageCircle } from 'lucide-react';
import { useState, useEffect } from 'react';

const WhatsAppFloat = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const openWhatsApp = () => {
    window.open('https://wa.me/5521999999999?text=Olá! Gostaria de falar com um advogado sobre meu caso.', '_blank');
  };

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 transition-all duration-500 transform ${
        isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-20 opacity-0 scale-75'
      }`}
    >
      <button
        onClick={openWhatsApp}
        className="group relative bg-whatsapp hover:bg-whatsapp/90 text-whatsapp-foreground p-4 rounded-full shadow-2xl hover:shadow-whatsapp/25 transition-all duration-300 hover:scale-110 animate-pulse hover:animate-none"
        aria-label="Falar no WhatsApp"
      >
        {/* Ripple Effect */}
        <div className="absolute inset-0 rounded-full bg-whatsapp/30 animate-ping group-hover:animate-none"></div>
        
        {/* Icon */}
        <MessageCircle className="h-7 w-7 relative z-10" />
        
        {/* Tooltip */}
        <div className="absolute right-full top-1/2 transform -translate-y-1/2 mr-4 bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          Fale conosco agora!
          <div className="absolute left-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-l-primary"></div>
        </div>
      </button>

      {/* Floating notification */}
      <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold animate-bounce">
        !
      </div>
    </div>
  );
};

export default WhatsAppFloat;