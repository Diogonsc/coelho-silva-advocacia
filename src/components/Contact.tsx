import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail, Clock, MessageCircle, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // WhatsApp message
    const whatsappMessage = `Olá! Meu nome é ${formData.name}.%0A%0ATelefone: ${formData.phone}%0AEmail: ${formData.email}%0A%0AMensagem: ${formData.message}`;
    
    window.open(`https://wa.me/5521999999999?text=${whatsappMessage}`, '_blank');
    
    toast({
      title: "Mensagem enviada!",
      description: "Você será redirecionado para o WhatsApp para finalizar o contato.",
    });

    // Reset form
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/5521999999999?text=Olá, gostaria de agendar uma consulta gratuita.', '_blank');
  };

  return (
    <section id="contato" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
              Entre em Contato
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
              Estamos prontos para defender seus direitos. Entre em contato agora mesmo 
              e agende sua consulta gratuita.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div className="space-y-8 animate-slide-up">
              <div>
                <h3 className="text-2xl font-serif font-bold text-foreground mb-6">
                  Fale Conosco
                </h3>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Nossa equipe está pronta para atendê-lo. A primeira consulta é gratuita 
                  e sem compromisso. Vamos analisar seu caso e orientar sobre a melhor estratégia.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 rounded-lg border border-border/50 hover:border-primary/30 transition-colors">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Endereço</h4>
                    <p className="text-muted-foreground">
                      Rua Auristela, 450-B<br />
                      Santa Cruz - Rio de Janeiro - RJ
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-lg border border-border/50 hover:border-primary/30 transition-colors">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Telefone</h4>
                    <p className="text-muted-foreground">
                      (21) 99999-9999<br />
                      Atendimento 24 horas
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-lg border border-border/50 hover:border-primary/30 transition-colors">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">E-mail</h4>
                    <p className="text-muted-foreground">
                      contato@coelhosilva.adv.br<br />
                      Resposta em até 2 horas
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-lg border border-border/50 hover:border-primary/30 transition-colors">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Horário de Atendimento</h4>
                    <p className="text-muted-foreground">
                      Segunda a Sexta: 8h às 18h<br />
                      Emergências: 24 horas
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Action */}
              <div className="bg-whatsapp/10 border border-whatsapp/30 rounded-xl p-6 text-center">
                <h4 className="text-xl font-serif font-bold text-foreground mb-3">
                  Atendimento Imediato
                </h4>
                <p className="text-muted-foreground mb-4">
                  Para casos urgentes, fale conosco agora pelo WhatsApp
                </p>
                <Button 
                  onClick={openWhatsApp}
                  className="btn-whatsapp w-full font-semibold group"
                >
                  <MessageCircle className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  Chamar no WhatsApp
                </Button>
              </div>
            </div>

            {/* Contact Form */}
            <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="card-elegant p-8">
                <h3 className="text-2xl font-serif font-bold text-foreground mb-6">
                  Solicite sua Consulta Gratuita
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Nome Completo *
                      </label>
                      <Input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full"
                        placeholder="Seu nome completo"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                        Telefone *
                      </label>
                      <Input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full"
                        placeholder="(21) 99999-9999"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      E-mail *
                    </label>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full"
                      placeholder="seu@email.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Descreva brevemente seu caso *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full"
                      placeholder="Conte-nos sobre sua situação para que possamos orientá-lo da melhor forma..."
                    />
                  </div>
                  
                  <Button 
                    type="submit"
                    className="btn-hero w-full font-semibold group"
                  >
                    <Send className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                    Enviar Mensagem
                  </Button>
                  
                  <p className="text-sm text-muted-foreground text-center">
                    Ao enviar, você será direcionado para o WhatsApp para finalizar o contato. 
                    Suas informações são tratadas com total sigilo profissional.
                  </p>
                </form>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="mt-16">
            <div className="card-elegant p-2 overflow-hidden">
              <div className="w-full h-96 bg-muted rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h4 className="text-xl font-serif font-bold text-foreground mb-2">
                    Nossa Localização
                  </h4>
                  <p className="text-muted-foreground">
                    Rua Auristela, 450-B - Santa Cruz<br />
                    Rio de Janeiro - RJ
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;