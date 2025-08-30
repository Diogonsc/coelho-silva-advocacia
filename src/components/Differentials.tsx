import { Heart, Shield, Users, Clock, FileCheck, Lightbulb } from 'lucide-react';

const Differentials = () => {
  const differentials = [
    {
      icon: Heart,
      title: 'Atendimento Humanizado',
      description: 'Compreendemos que cada cliente passa por um momento delicado. Oferecemos suporte emocional e jurídico com empatia e respeito.'
    },
    {
      icon: Shield,
      title: 'Transparência e Sigilo Absoluto',
      description: 'Comunicação clara sobre o processo, custos e estratégias. Sigilo profissional rigorosamente preservado em todos os casos.'
    },
    {
      icon: Users,
      title: 'Estratégias Jurídicas Personalizadas',
      description: 'Cada caso é único. Desenvolvemos estratégias específicas baseadas na análise minuciosa dos fatos e das circunstâncias.'
    },
    {
      icon: Clock,
      title: 'Rapidez no Contato e Suporte',
      description: 'Atendimento ágil e comunicação constante. Estamos sempre disponíveis para esclarecer dúvidas e atualizações processuais.'
    },
    {
      icon: FileCheck,
      title: 'Acompanhamento Integral',
      description: 'Desde a fase investigativa até o trânsito em julgado, acompanhamos integralmente todos os atos processuais.'
    },
    {
      icon: Lightbulb,
      title: 'Expertise e Inovação',
      description: 'Combinamos experiência tradicional com técnicas modernas de defesa, sempre atualizados com a jurisprudência mais recente.'
    }
  ];

  return (
    <section id="diferenciais" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
              Nossos Diferenciais
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
              O que nos torna únicos na defesa dos seus direitos e na condução do seu processo criminal
            </p>
          </div>

          {/* Differentials Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {differentials.map((differential, index) => (
              <div
                key={differential.title}
                className="group p-8 rounded-xl border border-border/50 bg-gradient-to-br from-card to-accent/30 hover:shadow-xl hover:border-primary/20 transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon */}
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <differential.icon className="h-8 w-8 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-serif font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                  {differential.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {differential.description}
                </p>

                {/* Decorative Element */}
                <div className="mt-6 w-12 h-0.5 bg-gradient-to-r from-primary/50 to-transparent group-hover:from-primary group-hover:to-primary/50 transition-all duration-300"></div>
              </div>
            ))}
          </div>

          {/* Trust Statement */}
          <div className="mt-20">
            <div className="bg-gradient-to-r from-primary/5 via-trust/5 to-primary/5 border border-primary/20 rounded-2xl p-12 text-center">
              <h3 className="text-3xl font-serif font-bold text-foreground mb-6">
                Compromisso com a Excelência
              </h3>
              <p className="text-lg text-muted-foreground max-w-4xl mx-auto mb-8 leading-relaxed">
                Nossa reputação foi construída ao longo de anos de dedicação, ética profissional 
                e resultados efetivos. Cada cliente é tratado com o respeito e a atenção que merece, 
                porque entendemos que por trás de cada processo existe uma pessoa e uma história.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center items-center gap-8 text-foreground/80">
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-primary" />
                  <span className="font-medium">Ética Profissional</span>
                </div>
                <div className="hidden sm:block w-px h-6 bg-primary/30"></div>
                <div className="flex items-center gap-2">
                  <Heart className="h-5 w-5 text-primary" />
                  <span className="font-medium">Atendimento Humano</span>
                </div>
                <div className="hidden sm:block w-px h-6 bg-primary/30"></div>
                <div className="flex items-center gap-2">
                  <FileCheck className="h-5 w-5 text-primary" />
                  <span className="font-medium">Resultados Comprovados</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Differentials;