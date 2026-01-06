import { Mail, Phone, MapPin, Github, Linkedin, Send } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contato" className="py-24 relative bg-card/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-sm mb-4">{'// Contato'}</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Vamos Conversar?
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold mb-6">Informações de Contato</h3>
              
              <a
                href="mailto:whallysongab@gmail.com"
                className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border hover:border-primary transition-colors group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">E-mail</p>
                  <p className="text-foreground font-medium">whallysongab@gmail.com</p>
                </div>
              </a>

              <a
                href="tel:+5562998717902"
                className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border hover:border-primary transition-colors group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Telefone</p>
                  <p className="text-foreground font-medium">(62) 9 9871-7902</p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Localização</p>
                  <p className="text-foreground font-medium">Goiânia - GO, Brasil</p>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-6">
                <h4 className="text-sm text-muted-foreground mb-4">Redes Sociais</h4>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/WhallysonGGDS"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-lg bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/whallyson-gabriel-garcia-da-silva-914765235/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-lg bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300"
                  >
                    <Linkedin size={20} />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Message */}
            <div className="bg-card rounded-2xl border border-border p-8">
              <h3 className="text-xl font-semibold mb-4">Envie uma Mensagem</h3>
              <p className="text-muted-foreground mb-6">
                Estou sempre aberto a novas oportunidades e conversas sobre dados, 
                análises e projetos interessantes.
              </p>
              
              <a
                href="mailto:whallysongab@gmail.com?subject=Contato via Portfólio"
                className="inline-flex items-center gap-2 w-full justify-center px-8 py-4 rounded-xl bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold hover:opacity-90 transition-opacity glow"
              >
                <Send size={18} />
                Enviar E-mail
              </a>

              <div className="mt-8 pt-8 border-t border-border">
                <p className="text-sm text-muted-foreground text-center">
                  Ou me encontre no LinkedIn para uma conexão profissional
                </p>
                <a
                  href="https://www.linkedin.com/in/whallyson-gabriel-garcia-da-silva-914765235/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 w-full justify-center px-6 py-3 rounded-xl bg-card border border-border text-foreground font-medium hover:border-primary hover:text-primary transition-all duration-300"
                >
                  <Linkedin size={18} />
                  Conectar no LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
