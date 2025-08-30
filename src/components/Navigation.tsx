import { useState, useEffect } from 'react';
import { Menu, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import logotipo from '@/assets/logotipo.jpg';
import ImageWithFallback from '@/components/ui/image-with-fallback';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    // Close mobile menu after navigation
    setIsMobileMenuOpen(false);
  };

  const menuItems = [
    { id: 'sobre', label: 'Sobre' },
    { id: 'areas', label: 'Áreas de Atuação' },
    { id: 'diferenciais', label: 'Diferenciais' },
    { id: 'equipe', label: 'Equipe' },
    { id: 'faq', label: 'FAQ' },
    { id: 'contato', label: 'Contato' },
  ];

  const openWhatsApp = () => {
    window.open('https://wa.me/5521999999999?text=Olá, gostaria de agendar uma consulta gratuita.', '_blank');
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/95 backdrop-blur-md shadow-lg border-b border-border/50'
          : 'bg-background/90 backdrop-blur-sm shadow-sm'
      }`}
      role="navigation"
      aria-label="Navegação principal"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection('hero')}
              className="flex items-center gap-3 text-xl font-bold text-foreground hover:text-primary transition-colors group"
              aria-label="Ir para o topo da página"
            >
              <ImageWithFallback 
                src={logotipo} 
                alt="Coelho & Silva Advocacia" 
                className="h-10 w-10 lg:h-12 lg:w-12 object-cover rounded-full group-hover:scale-105 transition-transform"
              />
              <div className="flex flex-col">
                <span className="text-lg lg:text-xl">Coelho & Silva</span>
                <span className="text-xs font-normal text-muted-foreground">
                  Advocacia Criminal
                </span>
              </div>
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-foreground hover:text-primary px-3 py-2 text-sm font-medium transition-colors relative group"
                  aria-label={`Ir para seção ${item.label}`}
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </button>
              ))}
            </div>
          </div>

          {/* CTA Buttons - Desktop */}
          <div className="hidden lg:flex items-center gap-4">
            <Button
              onClick={openWhatsApp}
              variant="ghost"
              size="sm"
              className="text-foreground hover:text-primary hover:bg-primary/10"
              aria-label="Abrir WhatsApp"
            >
              <Phone className="h-4 w-4 mr-2" />
              (21) 99999-9999
            </Button>
            <Button
              onClick={() => scrollToSection('contato')}
              className="btn-hero font-medium"
              aria-label="Agendar consulta gratuita"
            >
              Consulta Gratuita
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-foreground"
                  aria-label="Abrir menu de navegação"
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full sm:w-[400px] p-0 bg-background/95 backdrop-blur-md">
                <div className="flex flex-col h-full">
                  {/* Header do menu mobile */}
                  <div className="flex items-center p-6 border-b border-border/50">
                    <div className="flex items-center gap-3">
                      <img 
                        src={logotipo} 
                        alt="Coelho & Silva Advocacia" 
                        className="h-8 w-8 object-cover rounded-full"
                      />
                      <div className="flex flex-col">
                        <span className="text-lg font-bold text-foreground">Coelho & Silva</span>
                        <span className="text-xs font-normal text-muted-foreground">
                          Advocacia Criminal
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Menu items */}
                  <div className="flex-1 p-6">
                    <div className="space-y-2">
                      {menuItems.map((item) => (
                        <button
                          key={item.id}
                          onClick={() => scrollToSection(item.id)}
                          className="text-foreground hover:text-primary block w-full text-left py-4 px-4 text-lg font-medium transition-colors rounded-lg hover:bg-primary/5"
                          aria-label={`Ir para seção ${item.label}`}
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Contact Info */}
                  <div className="p-6 border-t border-border/50 space-y-4">
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-primary/5">
                      <Phone className="h-5 w-5 text-primary" />
                      <div>
                        <p className="font-semibold text-foreground">(21) 99999-9999</p>
                        <p className="text-sm text-muted-foreground">Atendimento 24h</p>
                      </div>
                    </div>
                    
                    <Button
                      onClick={() => {
                        scrollToSection('contato');
                        openWhatsApp();
                      }}
                      className="btn-whatsapp w-full font-medium"
                      aria-label="Abrir WhatsApp para agendar consulta"
                    >
                      Consulta Gratuita via WhatsApp
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;