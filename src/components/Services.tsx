import { User, Home, Gavel, FileSearch, FileText, Scale, Calendar, Phone, Eye, Clock, Shield, Check, X, MessageSquare } from 'lucide-react';
import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Services = () => {
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);

  const services = [
    {
      icon: User,
      title: 'Crimes contra a Pessoa',
      description: 'Defesa em casos de homicídio, lesão corporal, ameaça, injúria, calúnia e difamação.',
      details: ['Homicídio', 'Lesão corporal', 'Ameaça', 'Crimes contra a honra'],
      overview: 'Nossa equipe especializada atua na defesa de crimes contra a pessoa, oferecendo suporte jurídico completo desde a fase investigativa até o julgamento. Com vasta experiência em casos complexos, garantimos uma defesa estratégica e personalizada para cada situação.',
             mainServices: [
         {
           title: 'Análise detalhada do caso e evidências',
           description: 'Realizamos uma análise completa e minuciosa de todo o material probatório, incluindo documentos, depoimentos, perícias e demais evidências. Nossa equipe identifica pontos favoráveis à defesa e possíveis vícios processuais que podem ser utilizados estrategicamente.'
         },
         {
           title: 'Elaboração de defesa prévia e memoriais',
           description: 'Desenvolvemos defesas prévias e memoriais técnicos fundamentados na legislação atual e jurisprudência dos tribunais superiores. Cada documento é personalizado para o caso específico, maximizando as chances de sucesso.'
         },
         {
           title: 'Acompanhamento em audiências e julgamentos',
           description: 'Oferecemos acompanhamento completo em todas as audiências e julgamentos, garantindo que seus direitos sejam respeitados em cada etapa do processo. Nossa presença assegura que nenhum detalhe importante seja negligenciado.'
         },
         {
           title: 'Recursos e medidas cautelares',
           description: 'Preparamos e apresentamos recursos e medidas cautelares quando necessário para proteger seus interesses. Nossa expertise em recursos garante que todas as possibilidades legais sejam exploradas.'
         },
         {
           title: 'Negociação com o Ministério Público',
           description: 'Mantemos diálogo direto com o Ministério Público buscando as melhores condições para seu caso. Nossa experiência em negociações permite alcançar acordos favoráveis quando possível.'
         }
       ],
      howItWorks: [
        'Realizamos análise completa do caso, examinando todas as evidências e circunstâncias para construir a melhor estratégia de defesa.',
        'Elaboramos defesa prévia detalhada e memoriais técnicos fundamentados na legislação e jurisprudência atual.',
        'Acompanhamos todas as audiências e julgamentos, garantindo que seus direitos sejam respeitados em cada etapa.',
        'Preparamos e apresentamos recursos e medidas cautelares quando necessário para proteger seus interesses.',
        'Negociamos diretamente com o Ministério Público buscando as melhores condições para seu caso.'
      ],
      benefits: [
        'Experiência comprovada em casos similares',
        'Atendimento personalizado e humanizado',
        'Transparência total no processo',
        'Suporte 24/7 para emergências'
      ]
    },
    {
      icon: Home,
      title: 'Crimes contra o Patrimônio',
      description: 'Atuação em furto, roubo, estelionato, extorsão e demais crimes patrimoniais.',
      details: ['Furto e roubo', 'Estelionato', 'Extorsão', 'Receptação'],
      overview: 'Especialistas em crimes contra o patrimônio, oferecemos defesa estratégica para casos de furto, roubo, estelionato e outros delitos patrimoniais. Nossa abordagem inclui análise forense, perícias e estratégias de defesa avançadas.',
             mainServices: [
         {
           title: 'Análise de evidências e perícias',
           description: 'Analisamos todas as evidências e perícias técnicas para identificar possíveis vícios ou inconsistências. Nossa expertise em análise forense permite identificar pontos favoráveis à defesa.'
         },
         {
           title: 'Defesa em processos criminais',
           description: 'Construímos defesa sólida baseada na legislação e jurisprudência específica para crimes patrimoniais. Nossa estratégia é personalizada para cada tipo de crime.'
         },
         {
           title: 'Recursos e medidas cautelares',
           description: 'Apresentamos recursos e medidas cautelares quando necessário para proteger seus direitos. Nossa experiência garante que todas as possibilidades legais sejam exploradas.'
         },
         {
           title: 'Negociação de acordos e transações',
           description: 'Negociamos acordos e transações penais quando for do interesse do cliente. Buscamos sempre as melhores condições possíveis.'
         },
         {
           title: 'Assessoria em inquéritos policiais',
           description: 'Oferecemos assessoria completa durante inquéritos policiais, garantindo seus direitos desde o início. Nossa presença previne abusos e ilegalidades.'
         }
       ],
      howItWorks: [
        'Analisamos todas as evidências e perícias técnicas para identificar possíveis vícios ou inconsistências.',
        'Construímos defesa sólida baseada na legislação e jurisprudência específica para crimes patrimoniais.',
        'Apresentamos recursos e medidas cautelares quando necessário para proteger seus direitos.',
        'Negociamos acordos e transações penais quando for do interesse do cliente.',
        'Oferecemos assessoria completa durante inquéritos policiais, garantindo seus direitos desde o início.'
      ],
      benefits: [
        'Conhecimento profundo da legislação',
        'Rede de peritos e especialistas',
        'Resultados comprovados',
        'Atendimento ágil e eficiente'
      ]
    },
    {
      icon: Gavel,
      title: 'Tribunal do Júri',
      description: 'Especialização em defesa perante o Tribunal do Júri com estratégia e técnica apuradas.',
      details: ['Plenário do Júri', 'Estratégia de defesa', 'Sustentação oral', 'Quesitação'],
      overview: 'Especialização exclusiva em Tribunal do Júri, com técnicas avançadas de oratória, psicologia do júri e estratégias de defesa. Nossa equipe possui histórico de sucesso em casos complexos perante o plenário.',
             mainServices: [
         {
           title: 'Preparação completa para o plenário',
           description: 'Preparamos o cliente e a defesa de forma completa, incluindo simulações e ensaios do plenário. Nossa preparação abrange aspectos técnicos e psicológicos.'
         },
         {
           title: 'Estratégias de convencimento do júri',
           description: 'Desenvolvemos estratégias específicas para convencer o júri, baseadas em psicologia e técnicas de persuasão. Cada estratégia é adaptada ao perfil dos jurados.'
         },
         {
           title: 'Elaboração de quesitos favoráveis',
           description: 'Elaboramos quesitos favoráveis que podem influenciar decisivamente o resultado do julgamento. Nossa expertise em quesitação é fundamental para o sucesso.'
         },
         {
           title: 'Sustentação oral impactante',
           description: 'Realizamos sustentação oral impactante, utilizando técnicas avançadas de oratória e argumentação. Nossa comunicação é clara, persuasiva e eficaz.'
         },
         {
           title: 'Análise psicológica dos jurados',
           description: 'Analisamos o perfil psicológico dos jurados para adaptar nossa estratégia de defesa. Esta análise é crucial para o convencimento do júri.'
         }
       ],
      howItWorks: [
        'Preparamos o cliente e a defesa de forma completa, incluindo simulações e ensaios do plenário.',
        'Desenvolvemos estratégias específicas para convencer o júri, baseadas em psicologia e técnicas de persuasão.',
        'Elaboramos quesitos favoráveis que podem influenciar decisivamente o resultado do julgamento.',
        'Realizamos sustentação oral impactante, utilizando técnicas avançadas de oratória e argumentação.',
        'Analisamos o perfil psicológico dos jurados para adaptar nossa estratégia de defesa.'
      ],
      benefits: [
        'Taxa de absolvição acima da média',
        'Técnicas comprovadas de persuasão',
        'Preparação psicológica do cliente',
        'Suporte completo durante todo o processo'
      ]
    },
    {
      icon: FileSearch,
      title: 'Defesa em Inquéritos Policiais',
      description: 'Acompanhamento desde a fase investigativa para garantir direitos do investigado.',
      details: ['Acompanhamento investigativo', 'Habeas corpus preventivo', 'Diligências', 'Arquivamento'],
      overview: 'Acompanhamento especializado desde a fase investigativa, garantindo que todos os direitos do investigado sejam respeitados. Atuamos preventivamente para evitar prisões desnecessárias e garantir o devido processo legal.',
             mainServices: [
         {
           title: 'Acompanhamento em diligências',
           description: 'Acompanhamos todas as diligências policiais, garantindo que seus direitos sejam respeitados. Nossa presença previne abusos e ilegalidades.'
         },
         {
           title: 'Habeas corpus preventivo',
           description: 'Ingressamos com habeas corpus preventivo quando há risco de prisão ilegal ou abusiva. Nossa ação preventiva protege seus direitos constitucionais.'
         },
         {
           title: 'Pedidos de arquivamento',
           description: 'Solicitamos arquivamento do inquérito quando não há elementos suficientes para acusação. Nossa argumentação técnica busca o arquivamento quando justificado.'
         },
         {
           title: 'Defesa em interrogatórios',
           description: 'Preparamos e acompanhamos interrogatórios, orientando o investigado sobre seus direitos. Nossa presença garante que o interrogatório seja conduzido legalmente.'
         },
         {
           title: 'Análise de provas e evidências',
           description: 'Analisamos todas as provas e evidências coletadas, identificando possíveis vícios ou ilegalidades. Nossa análise técnica é fundamental para a defesa.'
         }
       ],
      howItWorks: [
        'Acompanhamos todas as diligências policiais, garantindo que seus direitos sejam respeitados.',
        'Ingressamos com habeas corpus preventivo quando há risco de prisão ilegal ou abusiva.',
        'Solicitamos arquivamento do inquérito quando não há elementos suficientes para acusação.',
        'Preparamos e acompanhamos interrogatórios, orientando o investigado sobre seus direitos.',
        'Analisamos todas as provas e evidências coletadas, identificando possíveis vícios ou ilegalidades.'
      ],
      benefits: [
        'Prevenção de prisões desnecessárias',
        'Garantia de direitos constitucionais',
        'Acompanhamento 24/7',
        'Resultados rápidos e eficazes'
      ]
    },
    {
      icon: FileText,
      title: 'Recursos Criminais',
      description: 'Elaboração e acompanhamento de recursos em todas as instâncias do Poder Judiciário.',
      details: ['Apelações', 'Recursos especiais', 'Recursos extraordinários', 'Habeas corpus'],
      overview: 'Especialização em recursos criminais em todas as instâncias, desde apelações até recursos extraordinários. Nossa equipe possui expertise técnica para identificar vícios processuais e fundamentar recursos com alta probabilidade de sucesso.',
             mainServices: [
         {
           title: 'Análise detalhada de sentenças',
           description: 'Analisamos detalhadamente a sentença para identificar vícios processuais e materiais. Nossa análise técnica identifica pontos favoráveis para recursos.'
         },
         {
           title: 'Elaboração de recursos técnicos',
           description: 'Elaboramos recursos técnicos fundamentados na legislação e jurisprudência atual. Nossa expertise garante recursos bem fundamentados.'
         },
         {
           title: 'Sustentação oral em tribunais',
           description: 'Realizamos sustentação oral perante os tribunais superiores quando necessário. Nossa oratória e argumentação são fundamentais para o sucesso.'
         },
         {
           title: 'Recursos especiais e extraordinários',
           description: 'Preparamos recursos especiais e extraordinários para casos que atendam aos requisitos legais. Nossa experiência maximiza as chances de admissibilidade.'
         },
         {
           title: 'Habeas corpus em todas as instâncias',
           description: 'Ingressamos com habeas corpus em todas as instâncias quando há ilegalidade ou abuso de poder. Nossa ação é rápida e eficaz.'
         }
       ],
      howItWorks: [
        'Analisamos detalhadamente a sentença para identificar vícios processuais e materiais.',
        'Elaboramos recursos técnicos fundamentados na legislação e jurisprudência atual.',
        'Realizamos sustentação oral perante os tribunais superiores quando necessário.',
        'Preparamos recursos especiais e extraordinários para casos que atendam aos requisitos legais.',
        'Ingressamos com habeas corpus em todas as instâncias quando há ilegalidade ou abuso de poder.'
      ],
      benefits: [
        'Taxa de sucesso superior à média',
        'Conhecimento profundo da jurisprudência',
        'Rede de contatos nos tribunais',
        'Atendimento personalizado'
      ]
    },
    {
      icon: Scale,
      title: 'Crimes Federais',
      description: 'Defesa em crimes de competência da Justiça Federal com expertise especializada.',
      details: ['Crimes tributários', 'Lavagem de dinheiro', 'Tráfico internacional', 'Crimes eleitorais'],
      overview: 'Especialização em crimes federais, incluindo crimes tributários, lavagem de dinheiro, tráfico internacional e crimes eleitorais. Nossa equipe possui conhecimento específico da legislação federal e experiência em casos complexos.',
             mainServices: [
         {
           title: 'Defesa em crimes tributários',
           description: 'Oferecemos defesa especializada em crimes tributários, com conhecimento profundo da legislação federal. Nossa expertise abrange todos os tipos de crimes fiscais.'
         },
         {
           title: 'Lavagem de dinheiro',
           description: 'Atuamos em casos de lavagem de dinheiro, utilizando estratégias específicas para este tipo de crime. Nossa experiência é fundamental para casos complexos.'
         },
         {
           title: 'Tráfico internacional',
           description: 'Defendemos casos de tráfico internacional, com expertise em legislação internacional e cooperação jurídica. Nossa atuação abrange aspectos internacionais.'
         },
         {
           title: 'Crimes eleitorais',
           description: 'Especialização em crimes eleitorais, garantindo que seus direitos políticos sejam preservados. Nossa defesa protege sua participação política.'
         },
         {
           title: 'Crimes contra a ordem econômica',
           description: 'Atuamos em crimes contra a ordem econômica, incluindo crimes financeiros e econômicos. Nossa expertise abrange crimes econômicos complexos.'
         }
       ],
      howItWorks: [
        'Oferecemos defesa especializada em crimes tributários, com conhecimento profundo da legislação federal.',
        'Atuamos em casos de lavagem de dinheiro, utilizando estratégias específicas para este tipo de crime.',
        'Defendemos casos de tráfico internacional, com expertise em legislação internacional e cooperação jurídica.',
        'Especialização em crimes eleitorais, garantindo que seus direitos políticos sejam preservados.',
        'Atuamos em crimes contra a ordem econômica, incluindo crimes financeiros e econômicos.'
      ],
      benefits: [
        'Especialização em legislação federal',
        'Experiência em casos complexos',
        'Rede de especialistas federais',
        'Resultados comprovados'
      ]
    }
  ];

  const handleAgendarConsulta = () => {
    // Fechar o dialog
    setSelectedService(null);
    // Scroll para a seção de contato
    const element = document.getElementById('contato');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  const handleEnviarMensagem = () => {
    // Fechar o dialog
    setSelectedService(null);
    // Scroll para a seção de contato
    const element = document.getElementById('contato');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="areas" className="py-16 md:py-24 gradient-section">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 md:mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 md:mb-6">
              Áreas de Atuação
            </h2>
            <div className="w-20 md:w-24 h-1 bg-primary mx-auto mb-4 md:mb-6 rounded-full"></div>
            <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto text-balance leading-relaxed px-4 md:px-0">
              Especialistas em direito penal com vasta experiência em diferentes tipos de crimes
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => (
              <Card
                key={service.title}
                className="card-service p-6 border border-border/90 md:p-8 rounded-xl hover:scale-105 transition-all duration-300 animate-scale-in relative group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon */}
                <div className="w-12 h-12 md:w-16 md:h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 md:mb-6 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-6 w-6 md:h-8 md:w-8 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-lg md:text-xl font-serif font-bold text-foreground mb-3 md:mb-4 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-sm md:text-base text-muted-foreground mb-4 md:mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Details */}
                <div className="space-y-2 mb-4 md:mb-6">
                  {service.details.map((detail, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs md:text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>

                {/* Saiba Mais Button */}
                <Dialog>
                  <DialogTrigger asChild>
                    <Button 
                      variant="outline" 
                      className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 text-sm md:text-base py-6 md:py-6"
                      onClick={() => setSelectedService(service)}
                    >
                      Saiba Mais
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl max-h-[90vh] overflow-hidden p-0 flex flex-col">
                    {/* Header Fixo */}
                    <DialogHeader className="flex-shrink-0 bg-background z-20 p-4 md:p-6 border-b">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start gap-3 md:gap-4">
                          <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                            <service.icon className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                          </div>
                          <div>
                            <DialogTitle className="text-xl md:text-2xl font-bold text-foreground mb-1 md:mb-2">
                              {service.title}
                            </DialogTitle>
                            <DialogDescription className="text-sm md:text-base text-muted-foreground">
                              {service.description}
                            </DialogDescription>
                          </div>
                        </div>
                        <DialogClose className="w-8 h-8 rounded-md border border-border bg-background hover:bg-accent flex items-center justify-center">
                          <X className="h-4 w-4" />
                        </DialogClose>
                      </div>
                    </DialogHeader>
                    
                    {/* Conteúdo Scrollável */}
                    <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-6 md:space-y-8">
                      {/* Visão Geral */}
                      <div>
                        <div className="flex items-center gap-3 mb-3 md:mb-4">
                          <Eye className="h-4 w-4 md:h-5 md:w-5 text-primary" />
                          <h3 className="text-base md:text-lg font-semibold text-foreground">Visão Geral</h3>
                        </div>
                        <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                          {service.overview}
                        </p>
                      </div>

                      {/* Principais Serviços */}
                      <div>
                        <div className="flex items-center gap-3 mb-3 md:mb-4">
                          <Clock className="h-4 w-4 md:h-5 md:w-5 text-primary" />
                          <h3 className="text-base md:text-lg font-semibold text-foreground">Principais Serviços</h3>
                        </div>
                        <Accordion type="single" collapsible className="w-full">
                          {service.mainServices.map((item, idx) => (
                            <AccordionItem key={idx} value={`item-${idx}`} className="border border-border rounded-lg mb-2">
                              <AccordionTrigger className="px-3 md:px-4 py-2 md:py-3 hover:no-underline">
                                <div className="flex items-center gap-2 md:gap-3 text-left">
                                  <Check className="h-3 w-3 md:h-4 md:w-4 text-primary flex-shrink-0" />
                                  <span className="font-medium text-foreground text-sm md:text-base">{item.title}</span>
                                </div>
                              </AccordionTrigger>
                              <AccordionContent className="px-3 md:px-4 pb-3 md:pb-4">
                                <p className="text-sm md:text-base text-muted-foreground leading-relaxed pl-5 md:pl-7">
                                  {item.description}
                                </p>
                              </AccordionContent>
                            </AccordionItem>
                          ))}
                        </Accordion>
                      </div>

                      {/* Como Funciona */}
                      <div>
                        <div className="flex items-center gap-3 mb-3 md:mb-4">
                          <Clock className="h-4 w-4 md:h-5 md:w-5 text-primary" />
                          <h3 className="text-base md:text-lg font-semibold text-foreground">Como Funciona</h3>
                        </div>
                        <div className="space-y-3 md:space-y-4">
                          {service.howItWorks.map((step, idx) => (
                            <div key={idx} className="flex gap-3 md:gap-4">
                              <div className="w-5 h-5 md:w-6 md:h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs md:text-sm font-semibold flex-shrink-0">
                                {idx + 1}
                              </div>
                              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                                {step}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Benefícios */}
                      <div>
                        <div className="flex items-center gap-3 mb-3 md:mb-4">
                          <Shield className="h-4 w-4 md:h-5 md:w-5 text-primary" />
                          <h3 className="text-base md:text-lg font-semibold text-foreground">Benefícios</h3>
                        </div>
                        <div className="grid gap-2 md:gap-3">
                          {service.benefits.map((benefit, idx) => (
                            <div key={idx} className="p-3 md:p-4 bg-muted/50 rounded-lg border border-border">
                              <div className="flex items-start gap-2 md:gap-3">
                                <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-primary rounded-full mt-1.5 md:mt-2 flex-shrink-0"></div>
                                <span className="text-foreground font-medium text-sm md:text-base">{benefit}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Footer Fixo */}
                    <DialogFooter className="flex-shrink-0 bg-primary p-4 md:p-6">
                      <div className="w-full text-center">
                        <h4 className="text-white font-semibold mb-2 text-base md:text-lg">Precisa de Ajuda?</h4>
                        <p className="text-primary-foreground/80 mb-3 md:mb-4 text-sm md:text-base">
                          Entre em contato conosco e agende uma consulta personalizada para o seu caso.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-2 md:gap-3 justify-center">
                          <Button 
                            onClick={handleAgendarConsulta}
                            variant="secondary"
                            size="lg"
                            className="flex-1 sm:flex-none text-sm md:text-base"
                          >
                            <Calendar className="w-4 h-4 mr-2" />
                            Agendar Consulta
                          </Button>
                          <Button 
                            onClick={handleEnviarMensagem}
                            variant="secondary"
                            size="lg"
                            className="flex-1 sm:flex-none border-white text-primary hover:bg-white hover:text-primary text-sm md:text-base"
                          >
                            <MessageSquare className="w-4 h-4 mr-2" />
                            Enviar Mensagem
                          </Button>
                        </div>
                      </div>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-trust/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-12 md:mt-16 text-center">
            <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8 max-w-2xl mx-auto">
              <h3 className="text-xl md:text-2xl font-serif font-bold text-foreground mb-3 md:mb-4">
                Não encontrou sua situação?
              </h3>
              <p className="text-base md:text-lg text-muted-foreground mb-4 md:mb-6">
                Entre em contato conosco. Analisamos cada caso de forma personalizada 
                e oferecemos a melhor estratégia jurídica.
              </p>
              <Button
                onClick={() => {
                  const element = document.getElementById('contato');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn-hero px-6 md:px-8 py-6 md:py-6 font-semibold transition-all duration-300 text-sm md:text-base"
              >
                <MessageSquare />
                Consulte Nossos Especialistas
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;