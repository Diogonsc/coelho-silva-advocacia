import { Scale, Shield, Users, Award } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Scale, number: '15+', label: 'Anos de Experiência' },
    { icon: Shield, number: '500+', label: 'Casos Defendidos' },
    { icon: Users, number: '300+', label: 'Clientes Atendidos' },
    { icon: Award, number: '98%', label: 'Taxa de Sucesso' },
  ];

  return (
    <section id="sobre" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
              Sobre o Escritório
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
              Excelência na defesa criminal com compromisso, ética e estratégia jurídica de alto nível
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div className="space-y-8 animate-slide-up">
              <div>
                <h3 className="text-2xl font-serif font-bold text-foreground mb-4">
                  Advocacia Criminal Especializada
                </h3>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  O escritório <strong>Coelho & Silva Advocacia Criminal</strong> atua com excelência 
                  na defesa de clientes em processos criminais, oferecendo atendimento personalizado, 
                  ética profissional e estratégia jurídica de alto nível.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-serif font-semibold text-foreground mb-4">
                  Nossos Pilares
                </h4>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-3"></div>
                    <p className="text-muted-foreground">
                      <strong>Experiência Comprovada:</strong> Mais de 15 anos atuando na área criminal
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-3"></div>
                    <p className="text-muted-foreground">
                      <strong>Compromisso Total:</strong> Dedicação integral à defesa dos direitos dos clientes
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-3"></div>
                    <p className="text-muted-foreground">
                      <strong>Estratégia Personalizada:</strong> Cada caso é único e merece atenção especial
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="card-elegant p-8 text-center group hover:scale-105 transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <stat.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="text-3xl font-serif font-bold text-foreground mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mission Statement */}
          <div className="mt-20 text-center">
            <div className="max-w-4xl mx-auto bg-gradient-to-r from-accent/50 to-secondary/50 rounded-2xl p-12 border border-border/50">
              <blockquote className="text-2xl font-serif text-foreground italic mb-4">
                "Nossa missão é defender com integridade, atuar com transparência e garantir 
                que cada cliente receba a melhor defesa possível em seu processo criminal."
              </blockquote>
              <div className="text-lg font-sans text-muted-foreground">
                — Coelho & Silva Advocacia Criminal
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;