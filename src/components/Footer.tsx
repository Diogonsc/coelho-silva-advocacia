import { Scale, MapPin, Phone, Mail, Clock } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-primary-foreground/10 rounded-full flex items-center justify-center">
                <Scale className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-2xl font-serif font-bold">Coelho & Silva</h3>
                <p className="text-primary-foreground/80 text-sm">Advocacia Criminal</p>
              </div>
            </div>
            
            <p className="text-primary-foreground/90 text-lg mb-6 leading-relaxed max-w-md">
              Defendendo seus direitos com seriedade, comprometimento e estratégia jurídica 
              de alto nível há mais de 15 anos.
            </p>
            
            <div className="text-primary-foreground/80">
              <p className="font-semibold mb-2">OAB/RJ - Registro Profissional</p>
              <p className="text-sm">Dr. Ricardo Coelho - OAB/RJ 98.765</p>
              <p className="text-sm">Dra. Fernanda Silva - OAB/RJ 87.432</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-serif font-bold mb-6">Navegação</h4>
            <ul className="space-y-3">
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
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-serif font-bold mb-6">Contato</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary-foreground/60 mt-0.5 flex-shrink-0" />
                <div className="text-primary-foreground/80">
                  <p>Rua Auristela, 450-B</p>
                  <p>Santa Cruz - Rio de Janeiro - RJ</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary-foreground/60 flex-shrink-0" />
                <div className="text-primary-foreground/80">
                  <p>(21) 99999-9999</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary-foreground/60 flex-shrink-0" />
                <div className="text-primary-foreground/80">
                  <p>contato@coelhosilva.adv.br</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-primary-foreground/60 mt-0.5 flex-shrink-0" />
                <div className="text-primary-foreground/80">
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
            <p>&copy; {currentYear} Coelho & Silva Advocacia Criminal. Todos os direitos reservados.</p>
            <p className="text-sm mt-1">
              Desenvolvido com comprometimento e dedicação para defender seus direitos.
            </p>
          </div>
          
          <div className="text-primary-foreground/60 text-sm text-center md:text-right">
            <p>Sigilo profissional garantido</p>
            <p>Atendimento ético e transparente</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;