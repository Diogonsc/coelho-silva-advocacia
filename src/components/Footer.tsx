import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import cityFooter from '@/assets/city-footer.webp';
import logo from '@/assets/logotipo.jpg';
import ImageWithFallback from '@/components/ui/image-with-fallback';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative text-primary-foreground overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${cityFooter})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-primary/90"></div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4 md:mb-6">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-primary-foreground/10 rounded-full flex items-center justify-center">
              <ImageWithFallback src={logo} alt="Coelho & Silva" className="w-12 h-12 rounded-full" /> 
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-serif font-bold">Coelho & Silva</h3>
                <p className="text-primary-foreground/80 text-sm md:text-base">Advocacia Criminal</p>
              </div>
            </div>
            
            <p className="text-primary-foreground/90 text-base md:text-lg mb-4 md:mb-6 leading-relaxed max-w-md">
              Defendendo seus direitos com seriedade, comprometimento e estratégia jurídica 
              de alto nível há mais de 15 anos.
            </p>
            
            <div className="text-primary-foreground/80">
              <p className="font-semibold mb-1 md:mb-2 text-sm md:text-base">OAB/RJ - Registro Profissional</p>
              <p className="text-sm md:text-base">Dr. Felipe Santos - OAB/RJ 98.765</p>
              <p className="text-sm md:text-base">Dr. Celio Pereira - OAB/RJ 87.432</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base md:text-lg font-serif font-bold mb-4 md:mb-6">Navegação</h4>
            <ul className="space-y-2 md:space-y-3">
              {[
                { id: 'sobre', label: 'Sobre Nós' },
                { id: 'areas', label: 'Áreas de Atuação' },
                { id: 'diferenciais', label: 'Diferenciais' },
                { id: 'equipe', label: 'Equipe' },
                { id: 'contato', label: 'Contato' },
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm md:text-base"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-base md:text-lg font-serif font-bold mb-4 md:mb-6">Contato</h4>
            <div className="space-y-3 md:space-y-4">
              <div className="flex items-start gap-2 md:gap-3">
                <MapPin className="h-4 w-4 md:h-5 md:w-5 text-primary-foreground/60 mt-0.5 flex-shrink-0" />
                <div className="text-primary-foreground/80 text-sm md:text-base">
                  <p>Rua Auristela, 450-B</p>
                  <p>Santa Cruz - Rio de Janeiro - RJ</p>
                </div>
              </div>
              
              <div className="flex items-center gap-2 md:gap-3">
                <Phone className="h-4 w-4 md:h-5 md:w-5 text-primary-foreground/60 flex-shrink-0" />
                <div className="text-primary-foreground/80 text-sm md:text-base">
                  <p>(21) 99999-9999</p>
                </div>
              </div>
              
              <div className="flex items-center gap-2 md:gap-3">
                <Mail className="h-4 w-4 md:h-5 md:w-5 text-primary-foreground/60 flex-shrink-0" />
                <div className="text-primary-foreground/80 text-sm md:text-base">
                  <p>contato@coelhosilva.adv.br</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-primary-foreground/60 mt-0.5 flex-shrink-0" />
                <div className="text-primary-foreground/80 text-sm md:text-base">
                  <p>Seg a Sex: 8h às 18h</p>
                  <p>Emergências: 24h</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/20 my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-primary-foreground/80 text-center md:text-left">
            <p className="text-sm md:text-base">&copy; {currentYear} Coelho & Silva Advocacia Criminal. Todos os direitos reservados.</p>
            <p className="text-sm md:text-base mt-1">
              Desenvolvido com comprometimento e dedicação para defender seus direitos.
            </p>
          </div>
          
          <div className="text-primary-foreground/60 text-sm md:text-base text-center md:text-right">
            <p>Sigilo profissional garantido</p>
            <p>Atendimento ético e transparente</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;