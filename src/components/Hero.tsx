import { Button } from '@/components/ui/button';
import { Phone, MessageCircle, Calendar } from 'lucide-react';
import heroImage from '@/assets/hero-law-office.jpg';

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

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Escritório de Advocacia Criminal"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 gradient-hero opacity-90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto animate-fade-in">
          {/* Logo/Brand */}
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-4 text-balance">
              Coelho & Silva
            </h1>
            <p className="text-xl md:text-2xl font-sans font-light text-white/90 mb-2">
              Advocacia Criminal
            </p>
            <div className="w-24 h-1 bg-white mx-auto opacity-80"></div>
          </div>

          {/* Main Headline */}
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 text-balance leading-tight">
            Defesa Criminal com
            <span className="block text-white/90">Experiência e Comprometimento</span>
          </h2>

          {/* Subtitle */}
          <p className="text-lg md:text-xl font-sans text-white/90 mb-12 max-w-2xl mx-auto text-balance">
            Protegendo seus direitos com seriedade, dedicação e estratégia jurídica de alto nível. 
            Atendimento personalizado e humanizado.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-scale-in">
            <Button
              onClick={openWhatsApp}
              className="btn-whatsapp px-8 py-4 text-lg font-semibold min-w-64 group"
            >
              <MessageCircle className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Fale Agora via WhatsApp
            </Button>
            
            <Button
              onClick={() => scrollToSection('contato')}
              variant="outline"
              className="btn-outline-elegant px-8 py-4 text-lg font-semibold min-w-64 border-white text-white hover:bg-white hover:text-primary"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Agende uma Consulta
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 flex flex-col sm:flex-row justify-center items-center gap-8 text-white/80">
            <div className="flex items-center gap-2">
              <Phone className="h-5 w-5" />
              <span className="font-medium">Atendimento 24h</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-white/40"></div>
            <div className="flex items-center gap-2">
              <MessageCircle className="h-5 w-5" />
              <span className="font-medium">Primeira Consulta Gratuita</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-white/40"></div>
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              <span className="font-medium">Rio de Janeiro - RJ</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button
          onClick={() => scrollToSection('sobre')}
          className="text-white/60 hover:text-white transition-colors"
        >
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2"></div>
          </div>
        </button>
      </div>
    </section>
  );
};

export default Hero;