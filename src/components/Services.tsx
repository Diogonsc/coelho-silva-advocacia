import { User, Home, Gavel, FileSearch, FileText, Scale } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: User,
      title: 'Crimes contra a Pessoa',
      description: 'Defesa em casos de homicídio, lesão corporal, ameaça, injúria, calúnia e difamação.',
      details: ['Homicídio', 'Lesão corporal', 'Ameaça', 'Crimes contra a honra']
    },
    {
      icon: Home,
      title: 'Crimes contra o Patrimônio',
      description: 'Atuação em furto, roubo, estelionato, extorsão e demais crimes patrimoniais.',
      details: ['Furto e roubo', 'Estelionato', 'Extorsão', 'Receptação']
    },
    {
      icon: Gavel,
      title: 'Tribunal do Júri',
      description: 'Especialização em defesa perante o Tribunal do Júri com estratégia e técnica apuradas.',
      details: ['Plenário do Júri', 'Estratégia de defesa', 'Sustentação oral', 'Quesitação']
    },
    {
      icon: FileSearch,
      title: 'Defesa em Inquéritos Policiais',
      description: 'Acompanhamento desde a fase investigativa para garantir direitos do investigado.',
      details: ['Acompanhamento investigativo', 'Habeas corpus preventivo', 'Diligências', 'Arquivamento']
    },
    {
      icon: FileText,
      title: 'Recursos Criminais',
      description: 'Elaboração e acompanhamento de recursos em todas as instâncias do Poder Judiciário.',
      details: ['Apelações', 'Recursos especiais', 'Recursos extraordinários', 'Habeas corpus']
    },
    {
      icon: Scale,
      title: 'Crimes Federais',
      description: 'Defesa em crimes de competência da Justiça Federal com expertise especializada.',
      details: ['Crimes tributários', 'Lavagem de dinheiro', 'Tráfico internacional', 'Crimes eleitorais']
    }
  ];

  return (
    <section id="areas" className="py-24 gradient-section">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
              Áreas de Atuação
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
              Ampla experiência em todas as esferas do Direito Criminal, 
              oferecendo defesa especializada e estratégica
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="card-service p-8 rounded-xl hover:scale-105 transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon */}
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-serif font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Details */}
                <div className="space-y-2">
                  {service.details.map((detail, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-trust/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-serif font-bold text-foreground mb-4">
                Não encontrou sua situação?
              </h3>
              <p className="text-muted-foreground mb-6">
                Entre em contato conosco. Analisamos cada caso de forma personalizada 
                e oferecemos a melhor estratégia jurídica.
              </p>
              <button
                onClick={() => {
                  const element = document.getElementById('contato');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn-hero px-8 py-3 font-semibold transition-all duration-300"
              >
                Consulte Nossos Especialistas
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;