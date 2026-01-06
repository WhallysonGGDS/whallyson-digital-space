import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';
import profileImage from '@/assets/profile.jpg';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Profile Image */}
          <div className="relative animate-fade-in">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden gradient-border glow animate-pulse-glow">
              <img
                src={profileImage}
                alt="Whallyson Gabriel"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full animate-float" />
            <div className="absolute -bottom-2 -left-6 w-6 h-6 bg-accent rounded-full animate-float" style={{ animationDelay: '1s' }} />
            <div className="absolute top-1/2 -right-8 w-4 h-4 bg-secondary rounded-full animate-float" style={{ animationDelay: '2s' }} />
          </div>

          {/* Text Content */}
          <div className="text-center lg:text-left animate-slide-up">
            <p className="text-primary font-mono text-sm md:text-base mb-4">
              {'<'} Olá, eu sou {'>'}
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
              <span className="gradient-text">Whallyson</span>{' '}
              <span className="text-foreground">Gabriel</span>
            </h1>
            <h2 className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-6">
              Analista de Dados Júnior
            </h2>
            <p className="text-muted-foreground max-w-xl mb-8 leading-relaxed">
              Atuar como Analista de Dados Júnior, aplicando Python, SQL, Excel e Power BI para gerar insights estratégicos e apoiar decisões do negócio.
            </p>

            {/* Social Links */}
            <div className="flex items-center justify-center lg:justify-start gap-4 mb-8">
              <a
                href="https://github.com/WhallysonGGDS"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300 hover:glow"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/whallyson-gabriel-garcia-da-silva-914765235/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300 hover:glow"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:whallysongab@gmail.com"
                className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300 hover:glow"
              >
                <Mail size={20} />
              </a>
            </div>

            {/* CTA Button */}
            <a
              href="#projetos"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold hover:opacity-90 transition-opacity glow"
            >
              Ver Projetos
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-muted-foreground" size={32} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
