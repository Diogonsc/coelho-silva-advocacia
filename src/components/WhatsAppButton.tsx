import React, { useState, useEffect } from 'react';
import { FaWhatsapp, FaTimes } from 'react-icons/fa';
import { Card, CardContent } from '@/components/ui/card';
import { openWhatsApp } from '@/lib/utils';
import { useGtag } from '@/hooks/use-gtag';
import logo from '@/assets/logotipo.webp';
import ImageWithFallback from '@/components/ui/image-with-fallback';

const WhatsAppButton = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isOnline, setIsOnline] = useState(false);
  const { trackConversion } = useGtag();

  // Função para verificar se está no horário de atendimento
  const checkBusinessHours = () => {
    // Atendimento 24 horas - sempre online
    return true;
  };

  useEffect(() => {
    // Verificar status online ao carregar
    setIsOnline(checkBusinessHours());

    // Verificar status a cada minuto
    const interval = setInterval(() => {
      setIsOnline(checkBusinessHours());
    }, 60000); // 1 minuto

    // Show tooltip after 3 seconds
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 3000);

    // Auto-hide tooltip after 10 seconds
    const hideTimer = setTimeout(() => {
      setShowTooltip(false);
    }, 13000);

    return () => {
      clearTimeout(timer);
      clearTimeout(hideTimer);
      clearInterval(interval);
    };
  }, []);

  const handleWhatsAppClick = () => {
    // Rastrear conversão do Google Ads
    trackConversion('lead_whatsapp', 1.0, 'BRL', {
      'custom_parameters': {
        'source': 'whatsapp_button',
        'urgency': 'emergency'
      }
    });
    
    const message = 'Olá! Gostaria de agendar uma consulta com o escritório Coelho & Silva Advocacia Criminal. Pode me ajudar?';
    openWhatsApp(message);
    setShowTooltip(false);
  };

  const handleCloseTooltip = () => {
    setShowTooltip(false);
  };

  if (!isVisible) return null;

  return (
    <>
      {/* WhatsApp Button */}
      <div className="fixed bottom-10 right-6 z-50">
        <button
          onClick={handleWhatsAppClick}
          className="whatsapp-btn bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center relative animate-pulse-ring"
          aria-label="Falar no WhatsApp"
        >
          <FaWhatsapp className="w-8 h-8" />
        </button>
      </div>

      {/* Tooltip */}
      {showTooltip && (
        <div className="fixed bottom-28 right-6 z-40 animate-slide-in">
          <Card className="bg-white shadow-2xl border-0 max-w-sm">
            <CardContent className="p-4 relative">
              <button
                onClick={handleCloseTooltip}
                className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 transition-colors"
                aria-label="Fechar"
              >
                <FaTimes className="w-4 h-4" />
              </button>
              
              <div className="pr-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
                   <ImageWithFallback src={logo} alt="Coelho & Silva" className="w-10 h-10 rounded-full object-contain" />
                  </div>
                  <div>
                    <div className="font-semibold text-black">Coelho & Silva</div>
                    <div className="text-sm text-gray-600">
                      Online agora - Atendimento 24h
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-700 text-sm mb-3">
                  👋 Olá! Precisa de defesa criminal especializada? Atendimento personalizado e estratégia jurídica de alto nível!
                </p>
                
                <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>
                    Atendimento emergencial 24h
                  </span>
                </div>
                
                <button
                  onClick={handleWhatsAppClick}
                  className="w-full bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors"
                >
                   Atendimento Urgente
                </button>
              </div>
              
              {/* Tooltip Arrow */}
              <div className="absolute bottom-0 right-8 transform translate-y-full">
                <div className="w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-white"></div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
};

export default WhatsAppButton;
