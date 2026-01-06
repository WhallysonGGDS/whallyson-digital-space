import { Zap, Users, Brain, Target, MessageSquare, Shield } from 'lucide-react';

const softSkills = [
  { icon: Zap, title: 'Rápido Aprendizado', desc: 'Capacidade de assimilar novos conceitos e ferramentas de forma ágil' },
  { icon: Brain, title: 'Curiosidade e Iniciativa', desc: 'Interesse em explorar problemas reais e buscar soluções práticas' },
  { icon: Target, title: 'Disciplina e Organização', desc: 'Rotina constante de estudos e gerenciamento eficiente do tempo' },
  { icon: Users, title: 'Trabalho em Equipe', desc: 'Facilidade para colaborar e aceitar feedbacks construtivos' },
  { icon: MessageSquare, title: 'Comunicação Clara', desc: 'Habilidade para documentar e apresentar resultados objetivamente' },
  { icon: Shield, title: 'Resiliência', desc: 'Perseverança diante dos desafios no aprendizado' },
];

const perfil = [
  'Rápido aprendizado e curiosidade constante.',
  'Disciplina forte com rotina diária de estudos.',
  'Facilidade em trabalhar em equipe e receber feedback.',
];

const AboutSection = () => {
  return (
    <section id="sobre" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-sm mb-4">{'// Sobre mim'}</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Conheça um pouco mais
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* About Text */}
          <div className="space-y-6">
            {/* Objetivo */}
            <div className="bg-card rounded-2xl p-8 border border-border">
              <h3 className="text-xl font-semibold mb-4 text-primary">Objetivo</h3>
              <p className="text-muted-foreground leading-relaxed">
                Atuar como Analista de Dados Júnior, aplicando Python, SQL, Excel e Power BI para gerar insights estratégicos e apoiar decisões do negócio.
              </p>
            </div>

            {/* Resumo Profissional */}
            <div className="bg-card rounded-2xl p-8 border border-border">
              <h3 className="text-xl font-semibold mb-4 text-accent">Resumo Profissional</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Formado em <span className="text-foreground font-medium">Análise e Desenvolvimento de Sistemas</span>, com foco em análise de dados, estatística e projetos práticos que conectam tecnologia e negócio.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Vivência prática em Python, SQL, Power BI e Excel, desenvolvendo análises, dashboards e automações para suporte à tomada de decisão.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Busco oportunidade para aplicar meus conhecimentos, evoluir na área e contribuir com soluções baseadas em dados.
              </p>
            </div>

            {/* Formação e Idiomas */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-card rounded-2xl p-6 border border-border">
                <h3 className="text-lg font-semibold mb-4 text-secondary">Formação Acadêmica</h3>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2" />
                  <div>
                    <p className="font-medium text-foreground text-sm">Análise e Desenvolvimento de Sistemas</p>
                    <p className="text-muted-foreground text-sm">Estácio de Sá — Goiânia/GO</p>
                    <p className="text-xs text-primary font-mono mt-1">Conclusão: 2024</p>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-2xl p-6 border border-border">
                <h3 className="text-lg font-semibold mb-4 text-secondary">Idiomas</h3>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-foreground">Português</span>
                    <span className="text-primary">Nativo</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-foreground">Inglês</span>
                    <span className="text-muted-foreground">Básico — leitura técnica</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Perfil */}
            <div className="bg-card rounded-2xl p-6 border border-border">
              <h3 className="text-lg font-semibold mb-4 text-primary">Perfil</h3>
              <ul className="space-y-2">
                {perfil.map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-muted-foreground text-sm">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Soft Skills Grid */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-center lg:text-left">Soft Skills</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {softSkills.map((skill, index) => (
                <div
                  key={skill.title}
                  className="bg-card rounded-xl p-5 border border-border hover:border-primary transition-colors duration-300 group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <skill.icon className="w-8 h-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
                  <h4 className="font-medium text-foreground mb-1">{skill.title}</h4>
                  <p className="text-sm text-muted-foreground">{skill.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
