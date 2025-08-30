import { Scale, Shield, Users, Award, CheckCircle, Target, Heart } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Scale, number: '15+', label: 'Anos de Experiência', color: 'text-primary' },
    { icon: Shield, number: '500+', label: 'Casos Defendidos', color: 'text-success' },
    { icon: Users, number: '300+', label: 'Clientes Atendidos', color: 'text-warning' },
    { icon: Award, number: '98%', label: 'Taxa de Sucesso', color: 'text-primary' },
  ];

  const pillars = [
    {
      icon: Target,
      title: 'Experiência Comprovada',
      description: 'Mais de 15 anos atuando na área criminal com casos complexos e resultados comprovados.',
      color: 'bg-primary/10 text-primary'
    },
    {
      icon: Heart,
      title: 'Compromisso Total',
      description: 'Dedicação integral à defesa dos direitos dos clientes com atendimento personalizado.',
      color: 'bg-success/10 text-success'
    },
    {
      icon: CheckCircle,
      title: 'Estratégia Personalizada',
      description: 'Cada caso é único e merece atenção especial com estratégias jurídicas customizadas.',
      color: 'bg-warning/10 text-warning'
    },
  ];

  return (
    <section id="sobre" className="py-16 md:py-24 bg-gradient-section">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 md:mb-20 animate-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 md:mb-6">
              Sobre o Escritório
            </h2>
            <div className="w-20 md:w-24 h-1 bg-primary mx-auto mb-4 md:mb-6 rounded-full"></div>
            <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto text-balance leading-relaxed px-4 md:px-0">
              Excelência na defesa criminal com compromisso, ética e estratégia jurídica de alto nível
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center mb-12 md:mb-20">
            {/* Content */}
            <div className="space-y-6 md:space-y-8 animate-slide-in-left">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4 md:mb-6">
                  Advocacia Criminal Especializada
                </h3>
                <p className="text-base md:text-lg text-muted-foreground mb-6 md:mb-8 leading-relaxed">
                  O escritório <strong className="text-primary">Coelho & Silva Advocacia Criminal</strong> atua com excelência 
                  na defesa de clientes em processos criminais, oferecendo atendimento personalizado, 
                  ética profissional e estratégia jurídica de alto nível.
                </p>
              </div>

              {/* Pillars */}
              <div className="space-y-4 md:space-y-6">
                <h4 className="text-lg md:text-xl font-semibold text-foreground mb-4 md:mb-6">
                  Nossos Pilares
                </h4>
                <div className="space-y-3 md:space-y-4">
                  {pillars.map((pillar, index) => (
                    <div 
                      key={index}
                      className="flex items-start gap-3 md:gap-4 p-3 md:p-4 rounded-xl hover:bg-accent/5 transition-colors group"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform ${pillar.color}`}>
                        <pillar.icon className="h-5 w-5 md:h-6 md:w-6" />
                      </div>
                      <div>
                        <h5 className="font-semibold text-foreground mb-1 md:mb-2 text-base md:text-lg">
                          {pillar.title}
                        </h5>
                        <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                          {pillar.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 md:gap-6 animate-slide-in-right">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="card-elegant p-4 md:p-6 lg:p-8 text-center group hover-lift"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4 group-hover:bg-primary/20 transition-colors">
                    <stat.icon className={`h-6 w-6 md:h-8 md:w-8 ${stat.color}`} />
                  </div>
                  <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-1 md:mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm md:text-base text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mission Statement */}
          <div className="text-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="card-elegant p-6 md:p-8 lg:p-12 rounded-2xl max-w-5xl mx-auto hover-lift">
              <div className="mb-4 md:mb-6">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
                  <Award className="h-6 w-6 md:h-8 md:w-8 text-primary" />
                </div>
                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground mb-4 md:mb-6">
                  Nossa Missão
                </h3>
              </div>
              <blockquote className="text-base md:text-lg lg:text-xl text-muted-foreground mb-4 md:mb-6 leading-relaxed italic">
                "Nossa missão é defender com integridade, atuar com transparência e garantir 
                que cada cliente receba a melhor defesa possível em seu processo criminal."
              </blockquote>
              <div className="text-sm md:text-base font-semibold text-primary">
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