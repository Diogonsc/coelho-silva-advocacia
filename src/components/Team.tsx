import lawyer1 from "@/assets/lawyer-portrait-1.jpg";
import lawyer2 from "@/assets/lawyer-portrait-2.jpg";
import lawyer3 from "@/assets/lawyer-portrait-3.jpg";
import lawyer4 from "@/assets/lawyer-portrait-4.jpg";
import lawyer5 from "@/assets/lawyer-portrait-5.jpg";
import {
  Scale,
  GraduationCap,
  Award,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  Star,
  MessageSquare,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import ImageWithFallback from "@/components/ui/image-with-fallback";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { useState, useEffect } from "react";

const Team = () => {
  const [carouselApi, setCarouselApi] = useState<CarouselApi | null>(null);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!carouselApi) return;

    setCurrentSlide(carouselApi.selectedScrollSnap());

    carouselApi.on("select", () => {
      setCurrentSlide(carouselApi.selectedScrollSnap());
    });

    // Garantir que o autoplay seja iniciado quando o carousel estiver pronto
    if (isAutoPlaying) {
      setIsAutoPlaying(true);
    }
  }, [carouselApi, isAutoPlaying]);

  // Autoplay effect
  useEffect(() => {
    if (!carouselApi) return;

    const interval = setInterval(() => {
      if (isAutoPlaying) {
        carouselApi.scrollNext();
      }
    }, 4000); // 4 segundos para melhor experiência

    return () => clearInterval(interval);
  }, [carouselApi, isAutoPlaying]);

  // Pausar autoplay quando o usuário interage
  const handleUserInteraction = () => {
    setIsAutoPlaying(false);
    // Retomar autoplay após 5 segundos de inatividade
    setTimeout(() => {
      setIsAutoPlaying(true);
    }, 5000);
  };

  // Pausar autoplay em dispositivos móveis durante scroll (simplificado)
  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;
    
    const handleScroll = () => {
      setIsAutoPlaying(false);
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        setIsAutoPlaying(true);
      }, 3000);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  const team = [
    {
      id: 1,
      name: "Dr. Felipe Santos",
      role: "Advogado Criminalista",
      image: lawyer1,
      description: "Especialista em direito penal com mais de 10 anos de experiência em casos complexos de crimes contra a pessoa e patrimônio.",
      education: "Universidade Federal do Rio de Janeiro",
      experience: "10+ anos",
      specializations: ["Crimes contra a Pessoa", "Crimes contra o Patrimônio", "Direito Penal"],
      achievements: ["500+ casos defendidos", "98% de sucesso", "Especialista em recursos"],
      contact: {
        phone: "(21) 99999-9999",
        email: "felipe@coelhosilva.adv.br",
        linkedin: "https://linkedin.com/in/felipe-santos",
        instagram: "https://instagram.com/felipe.santos.adv"
      }
    },
    {
      id: 2,
      name: "Dr. Fernando Tassinari",
      role: "Advogado Criminalista",
      image: lawyer3,
      description: "Advogado especializado em direito penal e processo penal, com vasta experiência em defesa de clientes em casos de alta complexidade.",
      education: "Universidade do Estado do Rio de Janeiro",
      experience: "8+ anos",
      specializations: ["Processo Penal", "Crimes contra a Administração", "Direito Penal Econômico"],
      achievements: ["300+ casos defendidos", "95% de sucesso", "Especialista em medidas cautelares"],
      contact: {
        phone: "(21) 99999-9998",
        email: "fernando@coelhosilva.adv.br",
        linkedin: "https://linkedin.com/in/fernando-tassinari",
        instagram: "https://instagram.com/fernando.tassinari.adv"
      }
    },
    {
      id: 3,
      name: "Dr. Rafael Azevedo",
      role: "Advogado Criminalista Sênior",
      image: lawyer4,
      description: "Advogado criminalista com mais de 15 anos de experiência, especializado em casos de alta complexidade e recursos para tribunais superiores.",
      education: "Universidade de São Paulo",
      experience: "15+ anos",
      specializations: ["Recursos Criminais", "Crimes Organizados", "Direito Penal Internacional"],
      achievements: ["1000+ casos defendidos", "99% de sucesso", "Especialista em STJ e STF"],
      contact: {
        phone: "(21) 99999-9997",
        email: "rafael@coelhosilva.adv.br",
        linkedin: "https://linkedin.com/in/rafael-azevedo",
        instagram: "https://instagram.com/rafael.azevedo.adv"
      }
    },
    {
      id: 4,
      name: "Dr. Guilherme Fernandes",
      role: "Advogado Criminalista",
      image: lawyer5,
      description: "Advogado criminalista com mais de 10 anos de experiência, especializado em casos de alta complexidade e recursos para tribunais superiores.",
      education: "Universidade de São Paulo",
      experience: "10+ anos",
      specializations: ["Recursos Criminais", "Crimes Organizados", "Direito Penal Internacional"],
      achievements: ["500+ casos defendidos", "98% de sucesso", "Especialista em STJ e STF"],
      contact: {
        phone: "(21) 99999-9996",
        email: "guilherme@coelhosilva.adv.br",
        linkedin: "https://linkedin.com/in/guilherme-fernandes",
        instagram: "https://instagram.com/guilherme.fernandes.adv"
      }
    },
    {
      id: 5,
      name: "Dr. Gabriel Ferreira",
      role: "Advogado Criminalista",
      image: lawyer2,
      description: "Advogado criminalista com mais de 10 anos de experiência, especializado em casos de alta complexidade e recursos para tribunais superiores.",
      education: "Universidade de São Paulo",
      experience: "10+ anos",
      specializations: ["Recursos Criminais", "Crimes Organizados", "Direito Penal Internacional"],
      achievements: ["500+ casos defendidos", "98% de sucesso", "Especialista em STJ e STF"],
      contact: {
        phone: "(21) 99999-9996",
        email: "gabriel@coelhosilva.adv.br",
        linkedin: "https://linkedin.com/in/gabriel-ferreira",
        instagram: "https://instagram.com/gabriel.ferreira.adv"
      }
    }
  ];

  return (
    <section id="equipe" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 md:mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 md:mb-6">
              Nossa Equipe
            </h2>
            <div className="w-20 md:w-24 h-1 bg-primary mx-auto mb-4 md:mb-6 rounded-full"></div>
            <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto text-balance leading-relaxed px-4 md:px-0">
              Conheça os advogados especialistas que formam nossa equipe e estão prontos para defender seus direitos
            </p>
          </div>

          {/* Team Carousel */}
          <div className="carousel-with-nav">
            <Carousel
              setApi={setCarouselApi}
              className="w-full"
              onMouseEnter={handleUserInteraction}
              onTouchStart={handleUserInteraction}
              opts={{
                align: "start",
                loop: true,
                slidesToScroll: 1,
                containScroll: "trimSnaps",
                dragFree: false,
                skipSnaps: false,
                inViewThreshold: 0.7,
                duration: 15,
              }}
            >
              <CarouselContent className="-ml-1 md:-ml-4">
                {team.map((member, index) => (
                  <CarouselItem key={member.id} className="pl-1 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3" aria-label={`Slide ${index + 1}`}>
                                         <div className="card-elegant p-2 md:p-6 h-full hover-lift group">
                       {/* Member Image */}
                       <div className="relative mb-3 md:mb-6 overflow-hidden rounded-xl">
                         <ImageWithFallback
                           src={member.image}
                           alt={member.name}
                           className="w-full h-64 md:h-56 object-cover"
                           loading="lazy"
                         />
                         <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                       </div>

                       {/* Member Info */}
                       <div className="text-center mb-3 md:mb-6">
                         <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">
                           {member.name}
                         </h3>
                         <p className="text-primary font-semibold mb-2 md:mb-3 text-base md:text-lg">
                           {member.role}
                         </p>
                         <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-2 md:mb-4">
                           {member.description}
                         </p>
                       </div>

                       {/* Education & Experience */}
                       <div className="space-y-1 md:space-y-3 mb-3 md:mb-6">
                         <div className="flex items-center gap-2 text-sm md:text-base">
                           <GraduationCap className="h-3 w-3 md:h-4 md:w-4 text-primary flex-shrink-0" />
                           <span className="text-muted-foreground truncate">{member.education}</span>
                         </div>
                         <div className="flex items-center gap-2 text-sm md:text-base">
                           <Scale className="h-3 w-3 md:h-4 md:w-4 text-primary flex-shrink-0" />
                           <span className="text-muted-foreground">{member.experience} de experiência</span>
                         </div>
                       </div>

                       {/* Specializations */}
                       <div className="mb-3 md:mb-6">
                         <h4 className="font-semibold text-foreground mb-2 md:mb-3 flex items-center gap-2 text-base md:text-lg">
                           <Award className="h-3 w-3 md:h-4 md:w-4 text-primary flex-shrink-0" />
                           Especializações
                         </h4>
                         <div className="flex flex-wrap gap-1 md:gap-2">
                           {member.specializations.slice(0, 2).map((spec, idx) => (
                             <span
                               key={idx}
                               className="px-2 py-1 bg-primary/10 text-primary text-sm md:text-base rounded-full font-medium"
                             >
                               {spec}
                             </span>
                           ))}
                           {member.specializations.length > 2 && (
                             <span className="px-2 py-1 bg-primary/10 text-primary text-sm md:text-base rounded-full font-medium">
                               +{member.specializations.length - 2}
                             </span>
                           )}
                         </div>
                       </div>

                       {/* Achievements */}
                       <div className="mb-3 md:mb-6">
                         <h4 className="font-semibold text-foreground mb-2 md:mb-3 flex items-center gap-2 text-base md:text-lg">
                           <Star className="h-3 w-3 md:h-4 md:w-4 text-primary flex-shrink-0" />
                           Conquistas
                         </h4>
                         <div className="space-y-1 md:space-y-2">
                           {member.achievements.slice(0, 2).map((achievement, idx) => (
                             <div key={idx} className="flex items-center gap-2 text-sm md:text-base">
                               <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-primary rounded-full flex-shrink-0"></div>
                               <span className="text-muted-foreground truncate">{achievement}</span>
                             </div>
                           ))}
                           {member.achievements.length > 2 && (
                             <div className="flex items-center gap-2 text-sm md:text-base">
                               <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-primary rounded-full flex-shrink-0"></div>
                               <span className="text-muted-foreground">+{member.achievements.length - 2} mais</span>
                             </div>
                           )}
                         </div>
                       </div>

                      {/* Contact */}
                      <div className="border-t border-border/50 pt-1 md:pt-4">
                        <div className="flex justify-center gap-1 md:gap-3">
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-muted-foreground hover:text-primary h-6 w-6 md:h-10 md:w-10 p-0"
                            onClick={() => window.open(`tel:${member.contact.phone}`)}
                            aria-label={`Ligar para ${member.name}`}
                          >
                            <Phone className="h-3 w-3 md:h-4 md:w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-muted-foreground hover:text-primary h-6 w-6 md:h-10 md:w-10 p-0"
                            onClick={() => window.open(`mailto:${member.contact.email}`)}
                            aria-label={`Enviar email para ${member.name}`}
                          >
                            <Mail className="h-3 w-3 md:h-4 md:w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-muted-foreground hover:text-primary h-6 w-6 md:h-10 md:w-10 p-0"
                            onClick={() => window.open(member.contact.linkedin, '_blank')}
                            aria-label={`Ver perfil do LinkedIn de ${member.name}`}
                          >
                            <Linkedin className="h-3 w-3 md:h-4 md:w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-muted-foreground hover:text-primary h-6 w-6 md:h-10 md:w-10 p-0"
                            onClick={() => window.open(member.contact.instagram, '_blank')}
                            aria-label={`Ver perfil do Instagram de ${member.name}`}
                          >
                            <Instagram className="h-3 w-3 md:h-4 md:w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>

              {/* Navigation Controls - Desktop (laterais) */}
              <div className="hidden md:block">
                <CarouselPrevious className="carousel-nav-button" />
                <CarouselNext className="carousel-nav-button" />
              </div>

              {/* Navigation Controls - Mobile (embaixo) */}
              <div className="flex justify-center mt-6 md:hidden gap-2">
                <CarouselPrevious className="relative translate-y-0 left-0 right-auto h-10 w-10 bg-white/90 hover:bg-white shadow-lg border-0" />
                <CarouselNext className="relative translate-y-0 left-0 right-auto h-10 w-10 bg-white/90 hover:bg-white shadow-lg border-0" />
              </div>

              {/* Dots Indicator */}
              <div className="flex justify-center mt-4 md:mt-6 gap-2">
                {team.map((_, index) => (
                  <button
                    key={index}
                    className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-colors ${
                      index === currentSlide ? 'bg-primary' : 'bg-muted-foreground/30'
                    } ${index === currentSlide && isAutoPlaying ? 'animate-pulse' : ''}`}
                    onClick={() => carouselApi?.scrollTo(index)}
                    aria-label={`Ir para slide ${index + 1}`}
                  />
                ))}
              </div>
            </Carousel>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-12 md:mt-16 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="bg-gradient-to-r from-primary/5 via-trust/5 to-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8 lg:p-12 max-w-4xl mx-auto">
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground mb-4">
                Pronto para Defender Seus Direitos?
              </h3>
              <p className="text-base md:text-lg text-muted-foreground mb-6 md:mb-8 max-w-2xl mx-auto">
                Nossa equipe está pronta para atender você. Agende sua consulta gratuita e conheça como podemos ajudar.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={() => window.open('https://wa.me/5521999999999?text=Olá, gostaria de agendar uma consulta com a equipe.', '_blank')}
                  className="btn-whatsapp"
                >
                  <MessageSquare className="mr-2 h-5 w-5" />
                  Agendar Consulta
                </Button>
                <Button
                  onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
                  variant="outline"
                  className="btn-outline-elegant"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Falar Conosco
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
