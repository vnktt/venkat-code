import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ExternalLink, Code, Brain, Database } from 'lucide-react';

const projects = [
  {
    title: 'Smart Resume Analyzer',
    description: 'AI-powered resume feedback tool built with Spring Boot and ChatGPT API',
    tags: ['Java', 'ChatGPT', 'Spring Boot'],
    icon: Brain,
  },
  {
    title: 'Task Tracker for Students',
    description: 'SaaS app to manage assignments, group work, and deadlines',
    tags: ['Spring Boot', 'MySQL', 'Full Stack'],
    icon: Database,
  },
  {
    title: 'Recipe Recommendation Bot',
    description: 'Conversational recipe bot using AI and natural language input',
    tags: ['JavaScript', 'AI APIs'],
    icon: Code,
  },
];

export function ProjectsSection() {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleItems(prev => [...prev, index]);
          }
        });
      },
      { threshold: 0.2 }
    );

    const items = sectionRef.current?.querySelectorAll('[data-index]');
    items?.forEach(item => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="projects" className="section-spacing bg-background">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-foreground mb-6">
            Projects I'm Proud Of
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              data-index={index}
              className={`group bg-card rounded-lg p-8 border border-border hover:border-primary/30 
                         transition-all duration-500 hover:-translate-y-2 hover:shadow-xl
                         ${visibleItems.includes(index) ? 'slide-up animate' : 'slide-up'}`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center 
                               group-hover:bg-primary/20 transition-colors">
                  <project.icon className="w-6 h-6 text-primary" />
                </div>
              </div>
              
              <h3 className="text-xl font-medium text-foreground mb-4">
                {project.title}
              </h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button 
            variant="outline"
            onClick={() => window.open('https://github.com', '_blank')}
            className="btn-outline group"
          >
            See more on GitHub
            <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
}