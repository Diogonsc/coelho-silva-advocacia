import { useState, useEffect } from 'react';
import { Menu, Phone, ChevronRight, Clock, Mail } from 'lucide-react';
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
    { id: 'sobre', label: 'Sobre', description: 'Conheça nossa história e valores' },
    { id: 'areas', label: 'Áreas de Atuação', description: 'Especialidades jurídicas' },
    { id: 'diferenciais', label: 'Diferenciais', description: 'O que nos torna únicos' },
    { id: 'equipe', label: 'Equipe', description: 'Advogados especializados' },
    { id: 'faq', label: 'FAQ', description: 'Tire suas dúvidas' },
    { id: 'contato', label: 'Contato', description: 'Entre em contato conosco' },
  ];

  const openWhatsApp = () => {
    window.open('https://wa.me/5521998055549?text=Olá, gostaria de agendar uma consulta gratuita.', '_blank');
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
              (21) 99805-5549
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
                  className="text-foreground hover:text-primary hover:bg-primary/10 transition-all duration-200"
                  aria-label="Abrir menu de navegação"
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent 
                side="right" 
                className="w-full sm:w-[400px] p-0 mobile-menu-backdrop border-l border-border/30"
              >
                <div className="flex flex-col h-full">
                  {/* Header do menu mobile */}
                  <div className="flex items-center p-6 border-b border-border/20 mobile-menu-header">
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <ImageWithFallback 
                          src={logotipo} 
                          alt="Coelho & Silva Advocacia" 
                          className="h-10 w-10 object-cover rounded-full ring-2 ring-primary/20"
                        />
                        <div className="absolute -bottom-1 -right-1 h-4 w-4 bg-primary rounded-full border-2 border-background"></div>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-lg font-bold text-foreground">Coelho & Silva</span>
                        <span className="text-xs font-medium text-primary">
                          Advocacia Criminal
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Menu items com scroll */}
                  <div className="flex-1 overflow-y-auto mobile-menu-scroll">
                    <div className="p-6 space-y-2">
                      {menuItems.map((item) => (
                        <button
                          key={item.id}
                          onClick={() => scrollToSection(item.id)}
                          className="mobile-menu-item group w-full text-left p-4 rounded-xl transition-all duration-300 hover:bg-primary/5 hover:shadow-md border border-transparent hover:border-primary/20"
                          aria-label={`Ir para seção ${item.label}`}
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex-1">
                              <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                                {item.label}
                              </h3>
                              <p className="text-sm text-muted-foreground mt-1">
                                {item.description}
                              </p>
                            </div>
                            <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-300" />
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Informações de contato e CTA */}
                  <div className="p-6 border-t border-border/20 mobile-menu-footer space-y-4">
                    {/* Informações de contato */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 p-3 rounded-lg bg-primary/10 border border-primary/20">
                        <div className="flex-shrink-0">
                          <Phone className="h-5 w-5 text-primary" />
                        </div>
                        <div className="flex-1">
                          <p className="font-semibold text-foreground">(21) 99805-5549</p>
                          <p className="text-sm text-muted-foreground">Atendimento 24h</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3 p-3 rounded-lg bg-secondary/10 border border-secondary/20">
                        <div className="flex-shrink-0">
                          <Clock className="h-5 w-5 text-secondary-foreground" />
                        </div>
                        <div className="flex-1">
                          <p className="font-semibold text-foreground">Horário de Atendimento</p>
                          <p className="text-sm text-muted-foreground">Segunda a Sexta: 8h às 18h</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Botões de ação */}
                    <div className="space-y-3">
                      <Button
                        onClick={() => {
                          scrollToSection('contato');
                          openWhatsApp();
                        }}
                        className="btn-whatsapp w-full font-medium py-6 text-base"
                        aria-label="Abrir WhatsApp para agendar consulta"
                      >
                        <Phone className="h-5 w-5 mr-2" />
                        Consulta Gratuita via WhatsApp
                      </Button>
                      
                      <Button
                        onClick={() => scrollToSection('contato')}
                        variant="outline"
                        className="w-full font-medium py-6 text-base border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground"
                        aria-label="Ir para seção de contato"
                      >
                        <Mail className="h-5 w-5 mr-2" />
                        Enviar Mensagem
                      </Button>
                    </div>
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