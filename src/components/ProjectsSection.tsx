import { ExternalLink, BarChart3, Database, FileSpreadsheet, Brain, LineChart, Users } from 'lucide-react';

const projects = [
  {
    title: 'Análise de Vendas no Varejo',
    description: 'Análise completa do desempenho comercial de uma loja fictícia, identificando padrões de compra, sazonalidade, produtos mais rentáveis e comportamento dos clientes.',
    details: 'Utilizei Python (Pandas, Matplotlib e Seaborn) para calcular faturamento, ticket médio, top produtos e picos de vendas.',
    tech: ['Python', 'Pandas', 'Matplotlib', 'Seaborn'],
    icon: BarChart3,
    color: 'from-primary to-blue-400',
    github: 'https://github.com/WhallysonGGDS/Analise_de_Vendas.git',
  },
  {
    title: 'Limpeza e Exploração de Dados de RH',
    description: 'Tratamento e padronização de dados de funcionários, removendo inconsistências, nulos e duplicados.',
    details: 'Análises sobre cargos, salários, tempo de casa e turnover com visualizações estatísticas.',
    tech: ['Python', 'Pandas', 'Seaborn'],
    icon: Users,
    color: 'from-secondary to-pink-400',
    github: 'https://github.com/WhallysonGGDS/analise-rh.git',
  },
  {
    title: 'Relatório de Desempenho de Vendas',
    description: 'Consultas SQL avançadas (JOIN, GROUP BY, HAVING) para extrair KPIs de vendas por produto, região e vendedor.',
    details: '',
    tech: ['SQL', 'MySQL', 'KPIs'],
    icon: Database,
    color: 'from-accent to-teal-400',
    github: 'https://github.com/WhallysonGGDS/relatorio-desempenho-vendas-sql.git',
  },
  {
    title: 'Dashboard de Vendas',
    description: 'Dashboard com indicadores de faturamento, ticket médio, produtos mais vendidos e filtros por período.',
    details: '',
    tech: ['Excel', 'Power BI', 'DAX'],
    icon: FileSpreadsheet,
    color: 'from-green-500 to-emerald-400',
    github: 'https://github.com/WhallysonGGDS/Dashboard_de_Vendas_Excel.git',
  },
  {
    title: 'Análise Estatística de Dados Reais',
    description: 'Correlação, estatística descritiva e regressão linear usando datasets reais (ENEM, filmes, Airbnb etc.).',
    details: '',
    tech: ['Python', 'Estatística', 'Numpy', 'Regressão'],
    icon: LineChart,
    color: 'from-orange-500 to-amber-400',
    github: 'https://github.com/WhallysonGGDS/analise-estatistica.git',
  },
  {
    title: 'Sistema Integrado de Relatórios de RH',
    description: 'Integração completa entre SQLite, consultas Python e painel com KPIs de RH.',
    details: '',
    tech: ['Python', 'SQLite', 'Dashboard'],
    icon: Brain,
    color: 'from-red-500 to-rose-400',
    github: 'https://github.com/WhallysonGGDS/sistema-integrado-rh.git',
  },
];

const ProjectsSection = () => {
  return (
    <section id="projetos" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-sm mb-4">{'// Projetos em Dados'}</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Meus Projetos
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group bg-card rounded-2xl border border-border overflow-hidden hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 flex flex-col"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Gradient Header */}
              <div className={`h-2 bg-gradient-to-r ${project.color}`} />
              
              <div className="p-6 flex flex-col flex-1">
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <project.icon className="w-7 h-7 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed mb-2 flex-1">
                  {project.description}
                </p>
                
                {project.details && (
                  <p className="text-muted-foreground text-xs leading-relaxed mb-4 italic">
                    {project.details}
                  </p>
                )}

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-muted rounded-full text-xs font-medium text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary text-sm font-medium hover:underline mt-auto"
                >
                  Ver no GitHub
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/WhallysonGGDS"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-card border border-border text-foreground font-semibold hover:border-primary hover:text-primary transition-all duration-300"
          >
            Ver todos os projetos no GitHub
            <ExternalLink size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
