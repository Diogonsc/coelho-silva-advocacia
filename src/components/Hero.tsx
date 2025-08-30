import { Button } from '@/components/ui/button';
import { Phone, MessageCircle, Calendar, Shield, Award, Clock } from 'lucide-react';
import heroImage from '@/assets/hero-law-office.jpg';
import ImageWithFallback from '@/components/ui/image-with-fallback';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/5521999999999?text=Olá, gostaria de agendar uma consulta.', '_blank');
  };

  const trustIndicators = [
    { icon: Shield, text: 'Atendimento 24h', delay: '0.1s' },
    { icon: Award, text: 'Primeira Consulta Gratuita', delay: '0.2s' },
    { icon: Clock, text: 'Rio de Janeiro - RJ', delay: '0.3s' },
  ];

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Enhanced Overlay */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src={heroImage}
          alt="Escritório de Advocacia Criminal"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 gradient-hero"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-5xl mx-auto">
          {/* Logo/Brand */}
          <div className="mb-8 md:mb-12 animate-fade-in">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold mb-4 md:mb-6 text-balance leading-tight text-shadow">
              Coelho & Silva
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl font-sans font-light text-white/90 mb-3 md:mb-4">
              Advocacia Criminal
            </p>
            <div className="w-24 md:w-32 h-1 bg-white mx-auto opacity-90 rounded-full"></div>
          </div>

          {/* Main Headline */}
          <div className="mb-8 md:mb-12 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-4 md:mb-8 text-balance leading-tight text-shadow">
              Defesa Criminal com
              <span className="block text-white/90 mt-1 md:mt-2">Experiência e Comprometimento</span>
            </h2>

            {/* Subtitle */}
            <p className="text-base sm:text-lg md:text-xl font-sans text-white/90 max-w-3xl mx-auto text-balance leading-relaxed px-2 md:px-0">
              Protegendo seus direitos com seriedade, dedicação e estratégia jurídica de alto nível. 
              Atendimento personalizado e humanizado para cada caso.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center mb-12 md:mb-16 px-4 md:px-0" style={{ animationDelay: '0.4s' }}>
            <Button
              onClick={openWhatsApp}
              className="btn-whatsapp px-6 md:px-10 py-4 md:py-5 text-base md:text-lg font-semibold w-full sm:w-auto min-w-64 md:min-w-72"
            >
              <MessageCircle className="mr-2 md:mr-3 h-5 w-5 md:h-6 md:w-6 group-hover:scale-110 transition-transform" />
              Fale Agora via WhatsApp
            </Button>
            
            <Button
              onClick={() => scrollToSection('contato')}
              variant="outline"
              className="btn-outline-elegant px-6 md:px-10 py-4 md:py-5 text-base md:text-lg font-semibold w-full sm:w-auto min-w-64 md:min-w-72 border-white text-primary hover:bg-white hover:text-primary"
            >
              <Calendar className="mr-2 md:mr-3 h-5 w-5 md:h-6 md:w-6 group-hover:scale-110 transition-transform" />
              Agende uma Consulta
            </Button>
          </div>

          {/* Enhanced Trust Indicators */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto animate-slide-up px-4 md:px-0" style={{ animationDelay: '0.6s' }}>
            {trustIndicators.map((indicator, index) => (
              <div 
                key={index}
                className="card-glass p-4 md:p-6 rounded-xl group"
                style={{ animationDelay: indicator.delay }}
              >
                <div className="w-10 h-10 md:w-12 md:h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4 group-hover:bg-white/30 transition-colors">
                  <indicator.icon className="h-5 w-5 md:h-6 md:w-6 text-white" />
                </div>
                <p className="font-semibold text-white text-sm md:text-base">
                  {indicator.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;