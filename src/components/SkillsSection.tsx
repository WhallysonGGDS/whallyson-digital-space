import { useEffect, useRef, useState } from 'react';

const skills = [
  { name: 'Python', level: 85, category: 'Linguagens & Análise' },
  { name: 'SQL', level: 80, category: 'Linguagens & Análise' },
  { name: 'Pandas', level: 85, category: 'Linguagens & Análise' },
  { name: 'Power BI', level: 80, category: 'Ferramentas' },
  { name: 'Excel', level: 90, category: 'Ferramentas' },
  { name: 'Matplotlib/Seaborn', level: 75, category: 'Linguagens & Análise' },
  { name: 'Streamlit', level: 70, category: 'Ferramentas' },
  { name: 'Scikit-Learn', level: 65, category: 'Linguagens & Análise' },
];

const categories = {
  'Linguagens & Análise': ['Python', 'SQL', 'Pandas', 'Numpy', 'Matplotlib', 'Seaborn', 'Scikit-Learn'],
  'Ferramentas': ['Power BI', 'Excel', 'Dashboards', 'Tabelas Dinâmicas', 'Streamlit'],
  'Banco de Dados': ['SQLite', 'MySQL'],
  'Conceitos': ['EDA', 'Estatística', 'Correlação', 'Regressão', 'Limpeza de Dados'],
};

const courses = [
  { name: 'Análise de Dados e Negócios com Microsoft Excel', status: 'Concluído', platform: 'Udemy' },
  { name: 'Dados do Zero: Excel, SQL, Python e AWS', status: 'Concluído', platform: 'Udemy' },
  { name: 'Curso Power BI - Formação Analista de BI', status: 'Concluído', platform: 'Udemy' },
  { name: 'Formação Cientista de Dados', status: 'Em andamento', platform: 'Udemy' },
  { name: 'Machine Learning & Data Science com Python A–Z', status: 'Em andamento', platform: 'Udemy' },
  { name: 'Formação Plena em Análise e Ciência de Dados (2026–2027)', status: 'Em andamento', platform: 'Udemy' },
];

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-24 relative bg-card/30" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-sm mb-4">{'// Competências Técnicas'}</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Habilidades Técnicas
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Skills Bars */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold mb-6">Principais Tecnologias</h3>
            {skills.map((skill, index) => (
              <div key={skill.name} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-foreground">{skill.name}</span>
                  <span className="text-primary font-mono text-sm">{skill.level}%</span>
                </div>
                <div className="h-3 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-1000 ease-out"
                    style={{
                      width: isVisible ? `${skill.level}%` : '0%',
                      transitionDelay: `${index * 100}ms`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Tech Categories */}
          <div className="space-y-8">
            {Object.entries(categories).map(([category, techs], catIndex) => (
              <div key={category}>
                <h4 className="text-lg font-semibold mb-4 text-secondary">{category}</h4>
                <div className="flex flex-wrap gap-2">
                  {techs.map((tech, index) => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-card border border-border rounded-full text-sm text-muted-foreground hover:border-primary hover:text-primary transition-colors duration-300"
                      style={{
                        opacity: isVisible ? 1 : 0,
                        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                        transition: `all 0.5s ease-out ${(catIndex * 100) + (index * 50)}ms`,
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Courses */}
        <div className="mt-16">
          <h3 className="text-xl font-semibold mb-8 text-center">Cursos e Estudos</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {courses.map((course, index) => (
              <div
                key={course.name}
                className="flex items-center justify-between p-4 bg-card rounded-xl border border-border hover:border-primary/50 transition-colors"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                  transition: `all 0.5s ease-out ${index * 100}ms`,
                }}
              >
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-foreground text-sm truncate">{course.name}</p>
                  <p className="text-xs text-muted-foreground">{course.platform}</p>
                </div>
                <span
                  className={`ml-3 px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap ${
                    course.status === 'Concluído'
                      ? 'bg-accent/20 text-accent'
                      : 'bg-secondary/20 text-secondary'
                  }`}
                >
                  {course.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
