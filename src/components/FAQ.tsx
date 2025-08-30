import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { MessageCircle, MessageSquare } from "lucide-react";

const FAQ: React.FC = () => {
  const faqData = [
    {
      question: "Como posso agendar uma consulta com vocês?",
      answer: "Você pode agendar uma consulta através do nosso WhatsApp, telefone ou preenchendo o formulário de contato em nosso site. Nossa equipe entrará em contato em até 24 horas para confirmar o horário e local da consulta."
    },
    {
      question: "Quais são os horários de atendimento?",
      answer: "Atendemos de segunda a sexta-feira, das 8h às 18h. Para casos urgentes, oferecemos atendimento emergencial 24 horas através do nosso WhatsApp."
    },
    {
      question: "Vocês atendem casos de todas as áreas do direito?",
      answer: "Sim, nossa equipe é especializada em diversas áreas do direito, incluindo direito civil, trabalhista, previdenciário, tributário, empresarial e imobiliário. Cada caso é analisado por advogados especializados na área específica."
    },
    {
      question: "Como funciona o pagamento dos honorários?",
      answer: "Oferecemos diferentes modalidades de pagamento: honorários por hora, percentual sobre o valor da causa, ou valores fixos para serviços específicos. Na primeira consulta, apresentamos as opções disponíveis para seu caso."
    },
    {
      question: "Vocês fazem atendimento online?",
      answer: "Sim, realizamos consultas online através de videoconferência para maior comodidade dos nossos clientes. Também oferecemos atendimento presencial em nosso escritório."
    },
    {
      question: "Quanto tempo leva para resolver um processo judicial?",
      answer: "O tempo varia conforme a complexidade do caso e a área do direito. Processos trabalhistas geralmente levam de 1 a 3 anos, enquanto processos cíveis podem levar de 2 a 5 anos. Na primeira consulta, fornecemos uma estimativa mais precisa para seu caso específico."
    },
    {
      question: "Vocês oferecem primeira consulta gratuita?",
      answer: "Sim, oferecemos uma primeira consulta gratuita para avaliar seu caso e explicar as possíveis soluções jurídicas. Esta consulta tem duração de até 30 minutos."
    },
    {
      question: "Como posso acompanhar o andamento do meu processo?",
      answer: "Mantemos nossos clientes informados através de relatórios mensais, WhatsApp e e-mail. Também disponibilizamos acesso ao sistema de acompanhamento online para maior transparência."
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contato');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="faq" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 md:mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 md:mb-6">
              Perguntas Frequentes
            </h2>
            <div className="w-20 md:w-24 h-1 bg-primary mx-auto mb-4 md:mb-6 rounded-full"></div>
            <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto text-balance leading-relaxed px-4 md:px-0">
              Tire suas dúvidas sobre nossos serviços e como podemos ajudá-lo
            </p>
          </div>

          {/* FAQ Accordion */}
          <div className="mb-12 md:mb-16 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <Accordion type="single" collapsible className="w-full space-y-3 md:space-y-4">
              {faqData.map((item, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="card-elegant rounded-xl border border-border/50 overflow-hidden"
                >
                  <AccordionTrigger className="text-left text-base md:text-lg font-semibold text-foreground hover:text-primary transition-colors px-4 md:px-6 py-3 md:py-4 hover:bg-accent/5">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm md:text-base text-muted-foreground leading-relaxed px-4 md:px-6 pb-3 md:pb-4">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* CTA Section */}
          <div className="text-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="bg-gradient-to-r from-primary/5 via-trust/5 to-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8 lg:p-12">
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground mb-3 md:mb-4">
                Não encontrou a resposta que procurava?
              </h3>
              <p className="text-base md:text-lg text-muted-foreground mb-6 md:mb-8 max-w-2xl mx-auto">
                Nossa equipe está pronta para esclarecer todas as suas dúvidas. Entre em contato conosco.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
                <Button
                  onClick={scrollToContact}
                  className="btn-hero py-6"
                >
                  <MessageSquare className="mr-2 h-5 w-5" />
                  Entre em Contato
                </Button>
                <Button
                  onClick={() => window.open('https://wa.me/5521998055549?text=Olá, tenho uma dúvida sobre os serviços.', '_blank')}
                  variant="outline"
                  className="btn-outline-elegant py-6"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  WhatsApp
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
