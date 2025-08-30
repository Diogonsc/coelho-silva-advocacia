import { MapPin } from 'lucide-react';
import waze from '@/assets/waze.webp';
import moovit from '@/assets/moovit.webp';
import googleMaps from '@/assets/googlemaps.webp';
import ImageWithFallback from '@/components/ui/image-with-fallback';

const MapSection = () => {
  const openMaps = (app: string) => {
    const address = "Rua Auristela, 450-B, Santa Cruz, Rio de Janeiro, RJ";
    const encodedAddress = encodeURIComponent(address);
    
    const urls = {
      google: `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`,
      waze: `https://waze.com/ul?q=${encodedAddress}`,
      moovit: `https://moovitapp.com/?from=${encodedAddress}&to=${encodedAddress}`
    };
    
    window.open(urls[app as keyof typeof urls], '_blank');
  };

  return (
    <section className="py-16 md:py-24 bg-primary">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 md:mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4 md:mb-6">
              Nossa Localização
            </h2>
            <div className="w-20 md:w-24 h-1 bg-primary-foreground mx-auto mb-4 md:mb-6 rounded-full"></div>
            <p className="text-base md:text-lg lg:text-xl text-primary-foreground/90 max-w-3xl mx-auto text-balance leading-relaxed px-4 md:px-0">
              Venha nos visitar em nosso escritório localizado no coração de Santa Cruz, 
              Rio de Janeiro. Estamos prontos para atendê-lo.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
            {/* Google Maps iframe */}
            <div className="animate-slide-in-left">
              <div className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d229.65102192442401!2d-43.68910553179798!3d-22.93488878645669!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bfa71a46b3ae1%3A0xd26bd51347009fde!2sCOELHO%20%26%20SILVA%20ADVOCACIA%20CRIMINAL!5e0!3m2!1spt-BR!2sbr!4v1756588025567!5m2!1spt-BR!2sbr" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização do Escritório Coelho & Silva Advocacia"
                  className="w-full h-full"
                />
              </div>
            </div>

            {/* Navigation Apps */}
            <div className="animate-slide-in-right">
              <div className="h-full flex flex-col justify-center">
                <div className="space-y-8">
                  {/* Address Info */}
                  <div className="text-center lg:text-left">
                    <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
                      <div className="w-12 h-12 bg-primary-foreground/20 rounded-full flex items-center justify-center">
                        <MapPin className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-primary-foreground">
                        Endereço
                      </h3>
                    </div>
                    <p className="text-base md:text-lg text-primary-foreground/90 leading-relaxed">
                      Rua Auristela, 450-B<br />
                      Santa Cruz - Rio de Janeiro - RJ<br />
                      CEP: 23550-000
                    </p>
                  </div>

                  {/* Navigation Apps */}
                  <div className="text-center lg:text-left">
                    <h4 className="text-lg md:text-xl font-semibold text-primary-foreground mb-6">
                      Como Chegar
                    </h4>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                      <button
                        onClick={() => openMaps('google')}
                        className="flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-primary-foreground/10 hover:bg-primary-foreground/20 border border-primary-foreground/20 hover:border-primary-foreground/40 transition-all duration-300 hover-lift group"
                        aria-label="Abrir no Google Maps"
                      >
                        <ImageWithFallback src={googleMaps} alt="Google Maps" className="w-8 h-8" />
                        <span className="text-primary-foreground font-medium group-hover:scale-105 transition-transform text-sm md:text-base">
                          Google Maps
                        </span>
                      </button>
                      
                      <button
                        onClick={() => openMaps('waze')}
                        className="flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-primary-foreground/10 hover:bg-primary-foreground/20 border border-primary-foreground/20 hover:border-primary-foreground/40 transition-all duration-300 hover-lift group"
                        aria-label="Abrir no Waze"
                      >
                        <ImageWithFallback src={waze} alt="Waze" className="w-8 h-8" />
                        <span className="text-primary-foreground font-medium group-hover:scale-105 transition-transform text-sm md:text-base">
                          Waze
                        </span>
                      </button>
                      
                      <button
                        onClick={() => openMaps('moovit')}
                        className="flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-primary-foreground/10 hover:bg-primary-foreground/20 border border-primary-foreground/20 hover:border-primary-foreground/40 transition-all duration-300 hover-lift group"
                        aria-label="Abrir no Moovit"
                      >
                        <ImageWithFallback src={moovit} alt="Moovit" className="w-8 h-8" />
                        <span className="text-primary-foreground font-medium group-hover:scale-105 transition-transform text-sm md:text-base">
                          Moovit
                        </span>
                      </button>
                    </div>
                  </div>

                  {/* Additional Info */}
                  <div className="text-center lg:text-left">
                    <div className="bg-primary-foreground/10 rounded-xl p-6 border border-primary-foreground/20">
                      <h5 className="text-base md:text-lg font-semibold text-primary-foreground mb-3">
                        Informações Adicionais
                      </h5>
                      <ul className="text-primary-foreground/90 space-y-2 text-sm md:text-base">
                        <li>• Estacionamento disponível na rua</li>
                        <li>• Acesso por transporte público</li>
                        <li>• Próximo ao centro comercial</li>
                        <li>• Fácil localização</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
