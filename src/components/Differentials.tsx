import { Heart, Shield, Users, Clock, FileCheck, Lightbulb } from 'lucide-react';
import { Card } from '@/components/ui/card';

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
    <section id="diferenciais" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 md:mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 md:mb-6">
              Nossos Diferenciais
            </h2>
            <div className="w-20 md:w-24 h-1 bg-primary mx-auto mb-4 md:mb-6 rounded-full"></div>
            <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto text-balance leading-relaxed px-4 md:px-0">
              O que nos torna únicos na defesa dos seus direitos e na condução do seu processo criminal
            </p>
          </div>

          {/* Differentials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {differentials.map((differential, index) => (
              <Card
                key={differential.title}
                className="group p-6 md:p-8 rounded-xl border border-border/90 bg-gradient-to-br from-card to-accent/30 hover:shadow-xl hover:border-primary/20 transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon */}
                <div className="w-12 h-12 md:w-16 md:h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 md:mb-6 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <differential.icon className="h-6 w-6 md:h-8 md:w-8 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-lg md:text-xl font-bold text-foreground mb-3 md:mb-4 group-hover:text-primary transition-colors">
                  {differential.title}
                </h3>
                
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  {differential.description}
                </p>

                {/* Decorative Element */}
                <div className="mt-4 md:mt-6 w-10 md:w-12 h-0.5 bg-gradient-to-r from-primary/50 to-transparent group-hover:from-primary group-hover:to-primary/50 transition-all duration-300"></div>
              </Card>
            ))}
          </div>

          {/* Trust Statement */}
          <div className="mt-16 md:mt-20">
            <div className="bg-gradient-to-r from-primary/5 via-trust/5 to-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8 lg:p-12 text-center">
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground mb-4 md:mb-6">
                Compromisso com a Excelência
              </h3>
              <p className="text-base md:text-lg text-muted-foreground max-w-4xl mx-auto mb-6 md:mb-8 leading-relaxed">
                Nossa reputação foi construída ao longo de anos de dedicação, ética profissional 
                e resultados efetivos. Cada cliente é tratado com o respeito e a atenção que merece, 
                porque entendemos que por trás de cada processo existe uma pessoa e uma história.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4 md:gap-8 text-foreground/80">
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 md:h-5 md:w-5 text-primary" />
                  <span className="font-medium text-sm md:text-base">Ética Profissional</span>
                </div>
                <div className="hidden sm:block w-px h-6 bg-primary/30"></div>
                <div className="flex items-center gap-2">
                  <Heart className="h-4 w-4 md:h-5 md:w-5 text-primary" />
                  <span className="font-medium text-sm md:text-base">Atendimento Humano</span>
                </div>
                <div className="hidden sm:block w-px h-6 bg-primary/30"></div>
                <div className="flex items-center gap-2">
                  <FileCheck className="h-4 w-4 md:h-5 md:w-5 text-primary" />
                  <span className="font-medium text-sm md:text-base">Resultados Comprovados</span>
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