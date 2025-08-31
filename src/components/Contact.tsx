import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Card } from "@/components/ui/card";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validação básica
    if (!formData.name.trim() || !formData.phone.trim() || !formData.message.trim()) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos obrigatórios.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      // WhatsApp message
      const whatsappMessage = `Olá! Meu nome é ${formData.name}.%0A%0ATelefone: ${formData.phone}%0AEmail: ${formData.email}%0A%0AMensagem: ${formData.message}`;
      
      window.open(`https://wa.me/5521998055549?text=${whatsappMessage}`, '_blank');
      
      toast({
        title: "Mensagem enviada!",
        description: "Você será redirecionado para o WhatsApp para finalizar o contato.",
      });

      // Reset form
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch {
      toast({
        title: "Erro ao enviar",
        description: "Ocorreu um erro ao enviar sua mensagem. Tente novamente.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const openWhatsApp = () => {
  window.open('https://wa.me/5521998055549?text=Olá, gostaria de agendar uma consulta gratuita.', '_blank');
};

  return (
    <section id="contato" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 md:mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 md:mb-6">
              Entre em Contato
            </h2>
            <div className="w-20 md:w-24 h-1 bg-primary mx-auto mb-4 md:mb-6 rounded-full"></div>
            <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto text-balance leading-relaxed px-4 md:px-0">
              Estamos prontos para defender seus direitos. Entre em contato agora mesmo 
              e agende sua consulta gratuita.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <Card className="space-y-8 animate-slide-in-left p-6 md:p-8 hover-lift group border border-border/90">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4 md:mb-6">
                  Fale Conosco
                </h3>
                <p className="text-base md:text-lg text-muted-foreground mb-6 md:mb-8 leading-relaxed">
                  Nossa equipe está pronta para atendê-lo. A primeira consulta é gratuita 
                  e sem compromisso. Vamos analisar seu caso e orientar sobre a melhor estratégia.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 rounded-xl border border-border/50 hover:border-primary/30">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-base md:text-lg">Endereço</h4>
                    <p className="text-muted-foreground text-sm md:text-base">
                      Rua Auristela, 450-B, Santa Cruz - Rio de Janeiro - RJ
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 rounded-xl border border-border/50 hover:border-primary/30">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-base md:text-lg">Telefone</h4>
                    <p className="text-muted-foreground text-sm md:text-base">
                      (21) 99805-5549 • Atendimento 24 horas
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 rounded-xl border border-border/50 hover:border-primary/30">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-base md:text-lg">Email</h4>
                    <p className="text-muted-foreground text-sm md:text-base">
                      contato@coelhosilva.adv.br
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 rounded-xl border border-border/50 hover:border-primary/30">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-base md:text-lg">Horário de Atendimento</h4>
                    <p className="text-muted-foreground text-sm md:text-base">
                      Segunda a Sexta: 8h às 18h<br />
                      Emergências: 24 horas
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Contact Form */}
            <Card className="animate-slide-in-right p-6 md:p-8  hover-lift group border border-border/90">
              <div className="">
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4 md:mb-6">
                  Envie sua Mensagem
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm md:text-base font-medium text-foreground mb-2">
                      Nome Completo *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Seu nome completo"
                      required
                      className="w-full text-base"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm md:text-base font-medium text-foreground mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="seu@email.com"
                      className="w-full text-base"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm md:text-base font-medium text-foreground mb-2">
                      Telefone *
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(21) 99805-5549"
                      required
                      className="w-full text-base"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm md:text-base font-medium text-foreground mb-2">
                      Mensagem *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Descreva brevemente seu caso ou dúvida..."
                      required
                      className="w-full min-h-[120px] resize-none text-base"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-whatsapp flex-1 py-4"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                          Enviando...
                        </>
                      ) : (
                        <>
                          <MessageCircle className="mr-2 h-5 w-5" />
                          Enviar via WhatsApp
                        </>
                      )}
                    </Button>
                    
                    <Button
                      type="button"
                      onClick={openWhatsApp}
                      variant="outline"
                      className="btn-outline-elegant flex-1 py-4"
                    >
                      <Phone className="mr-2 h-5 w-5" />
                      Ligar Agora
                    </Button>
                  </div>
                </form>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;