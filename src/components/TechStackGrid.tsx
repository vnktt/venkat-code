import { useEffect, useRef, useState } from 'react';

const techStack = [
  { name: 'Java', category: 'Backend' },
  { name: 'Spring Boot', category: 'Framework' },
  { name: 'Spring Security', category: 'Security' },
  { name: 'MySQL', category: 'Database' },
  { name: 'Hibernate', category: 'ORM' },
  { name: 'JSP', category: 'View' },
  { name: 'HTML', category: 'Frontend' },
  { name: 'CSS', category: 'Styling' },
  { name: 'JavaScript', category: 'Frontend' },
  { name: 'jQuery', category: 'Library' },
  { name: 'Docker', category: 'DevOps' },
  { name: 'Jenkins', category: 'CI/CD' },
  { name: 'Kubernetes', category: 'Orchestration' },
  { name: 'Git', category: 'Version Control' },
  { name: 'AWS', category: 'Cloud' },
  { name: 'Ansible', category: 'Automation' },
  { name: 'Terraform', category: 'Infrastructure' },
  { name: 'Jira', category: 'Project Management' },
  { name: 'ChatGPT API', category: 'AI' },
  { name: 'LangChain', category: 'AI Framework' },
];

export function TechStackGrid() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="section-spacing bg-background">
      <div className="section-container">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'fade-in animate' : 'fade-in'}`}>
          <h2 className="text-4xl md:text-5xl font-light text-foreground mb-6">
            Tech I Work With
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Versatile with backend frameworks, DevOps tools, and modern AI APIs.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {techStack.map((tech, index) => (
            <div
              key={tech.name}
              className={`group p-6 bg-card rounded-lg border border-border hover:border-primary/30 
                         transition-all duration-300 hover:-translate-y-1 hover:shadow-lg
                         ${isVisible ? 'slide-up animate' : 'slide-up'}`}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3 
                               group-hover:bg-primary/20 transition-colors">
                  <div className="w-6 h-6 bg-primary rounded-sm"></div>
                </div>
                <h3 className="font-medium text-foreground mb-1">{tech.name}</h3>
                <p className="text-sm text-muted-foreground">{tech.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}